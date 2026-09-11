#!/usr/bin/env node
/**
 * Supabase data export
 * ---------------------
 * Dumps every table in your Supabase Postgres database to CSV *and* JSON,
 * one file per table, into a timestamped folder under ./exports.
 *
 * It works in two modes and picks whichever your environment provides:
 *
 *   Mode A — Direct Postgres (recommended, exports ALL tables automatically)
 *     Requires:  SUPABASE_DB_URL   (the "Connection string" from
 *                Supabase → Project Settings → Database → Connection string,
 *                URI tab. Use the "Session"/pooler string and put your DB
 *                password in it.)
 *     Needs the `pg` package:  npm install
 *
 *   Mode B — REST / PostgREST fallback (no DB password needed)
 *     Requires:  SUPABASE_URL                (https://<ref>.supabase.co)
 *                SUPABASE_SERVICE_ROLE_KEY   (Project Settings → API → service_role)
 *                SUPABASE_TABLES             (comma-separated list of tables,
 *                                             e.g. "players,matches,bookings")
 *     Uses built-in fetch (Node 18+). No extra packages required.
 *
 * Usage:
 *     node scripts/export-supabase.mjs
 *     npm run db:export
 *
 * Nothing is sent anywhere except your own Supabase project. Credentials are
 * read from the environment (or a local .env file) and never printed.
 */

import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// --- tiny .env loader (so you don't have to export vars by hand) ----------
function loadDotEnv() {
  const envPath = join(ROOT, '.env');
  if (!existsSync(envPath)) return;
  for (const rawLine of readFileSync(envPath, 'utf8').split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let val = line.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = val;
  }
}
loadDotEnv();

// --- helpers --------------------------------------------------------------
const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const OUT_DIR = join(ROOT, 'exports', stamp);

function toCsvValue(value) {
  if (value === null || value === undefined) return '';
  let str;
  if (typeof value === 'object') {
    // Buffers, arrays, JSON columns, dates
    if (value instanceof Date) str = value.toISOString();
    else str = JSON.stringify(value);
  } else {
    str = String(value);
  }
  if (/[",\n\r]/.test(str)) {
    str = '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

function rowsToCsv(rows) {
  if (rows.length === 0) return '';
  const columns = Object.keys(rows[0]);
  const lines = [columns.map(toCsvValue).join(',')];
  for (const row of rows) {
    lines.push(columns.map((c) => toCsvValue(row[c])).join(','));
  }
  return lines.join('\n') + '\n';
}

async function writeTable(table, rows) {
  const safe = table.replace(/[^a-zA-Z0-9._-]/g, '_');
  await writeFile(join(OUT_DIR, `${safe}.json`), JSON.stringify(rows, null, 2));
  await writeFile(join(OUT_DIR, `${safe}.csv`), rowsToCsv(rows));
  console.log(`  ✓ ${table}: ${rows.length} row(s)`);
  return rows.length;
}

// --- Mode A: direct Postgres ---------------------------------------------
async function exportViaPostgres(connectionString) {
  let pg;
  try {
    pg = await import('pg');
  } catch {
    console.error(
      '\n✗ The "pg" package is not installed, which Mode A (direct Postgres) needs.\n' +
        '  Run:  npm install\n' +
        '  (or provide SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY + SUPABASE_TABLES to use Mode B instead)\n'
    );
    process.exit(1);
  }
  const { Client } = pg.default ?? pg;
  const client = new Client({
    connectionString,
    // Supabase requires SSL; the managed cert chain is trusted by the platform.
    ssl: { rejectUnauthorized: false },
  });

  await client.connect();
  console.log('Connected to Postgres. Discovering tables in schema "public"…');

  const { rows: tableRows } = await client.query(
    `SELECT table_name
       FROM information_schema.tables
      WHERE table_schema = 'public'
        AND table_type = 'BASE TABLE'
      ORDER BY table_name`
  );

  if (tableRows.length === 0) {
    console.log('No tables found in the "public" schema. Nothing to export.');
    await client.end();
    return { tables: 0, rows: 0 };
  }

  let totalRows = 0;
  for (const { table_name } of tableRows) {
    // Identifier is quoted to survive mixed-case / reserved names.
    const { rows } = await client.query(`SELECT * FROM "public"."${table_name}"`);
    totalRows += await writeTable(table_name, rows);
  }

  await client.end();
  return { tables: tableRows.length, rows: totalRows };
}

// --- Mode B: REST / PostgREST --------------------------------------------
async function exportViaRest(baseUrl, serviceKey, tables) {
  const rest = baseUrl.replace(/\/$/, '') + '/rest/v1';
  let totalRows = 0;

  for (const table of tables) {
    const all = [];
    const pageSize = 1000;
    let from = 0;
    // Page through with Range headers until fewer than pageSize come back.
    for (;;) {
      const res = await fetch(`${rest}/${encodeURIComponent(table)}?select=*`, {
        headers: {
          apikey: serviceKey,
          Authorization: `Bearer ${serviceKey}`,
          Range: `${from}-${from + pageSize - 1}`,
          'Range-Unit': 'items',
        },
      });
      if (!res.ok) {
        const body = await res.text();
        throw new Error(
          `REST export of "${table}" failed (HTTP ${res.status}): ${body}`
        );
      }
      const batch = await res.json();
      all.push(...batch);
      if (batch.length < pageSize) break;
      from += pageSize;
    }
    totalRows += await writeTable(table, all);
  }

  return { tables: tables.length, rows: totalRows };
}

// --- main -----------------------------------------------------------------
async function main() {
  const dbUrl = process.env.SUPABASE_DB_URL;
  const restUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const tableList = (process.env.SUPABASE_TABLES || '')
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean);

  const usePg = Boolean(dbUrl);
  const useRest = !usePg && restUrl && serviceKey;

  if (!usePg && !useRest) {
    console.error(
      'No Supabase credentials found.\n\n' +
        'Set ONE of the following (in your shell or a local .env file):\n\n' +
        '  Mode A (recommended, exports every table):\n' +
        '    SUPABASE_DB_URL="postgresql://postgres:<password>@<host>:5432/postgres"\n\n' +
        '  Mode B (no DB password; you list the tables):\n' +
        '    SUPABASE_URL="https://<ref>.supabase.co"\n' +
        '    SUPABASE_SERVICE_ROLE_KEY="<service_role key>"\n' +
        '    SUPABASE_TABLES="table1,table2,table3"\n\n' +
        'See .env.example for a template.'
    );
    process.exit(1);
  }

  if (useRest && tableList.length === 0) {
    console.error(
      'Mode B (REST) needs SUPABASE_TABLES set to a comma-separated list of\n' +
        'tables to export, because PostgREST does not expose the full table list.\n' +
        'Tip: use Mode A (SUPABASE_DB_URL) to export every table automatically.'
    );
    process.exit(1);
  }

  await mkdir(OUT_DIR, { recursive: true });
  console.log(`\nExporting to: ${OUT_DIR}\n`);

  const result = usePg
    ? await exportViaPostgres(dbUrl)
    : await exportViaRest(restUrl, serviceKey, tableList);

  // A small manifest for the record.
  await writeFile(
    join(OUT_DIR, '_manifest.json'),
    JSON.stringify(
      {
        exportedAt: new Date().toISOString(),
        mode: usePg ? 'postgres' : 'rest',
        tables: result.tables,
        totalRows: result.rows,
      },
      null,
      2
    )
  );

  console.log(
    `\n✓ Done. ${result.tables} table(s), ${result.rows} row(s) total.\n` +
      `  CSV + JSON written to ${OUT_DIR}\n`
  );
}

main().catch((err) => {
  console.error('\n✗ Export failed:', err.message);
  process.exit(1);
});
