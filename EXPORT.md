# Exporting data from Supabase

This repo includes a small, dependency-light script that connects to your
Supabase Postgres database and exports **every table to both CSV and JSON**,
one file per table, into a timestamped folder under `exports/`.

The script talks only to your own Supabase project. Credentials are read from
the environment (or a local `.env` file) and are never printed or committed
(`.env` and `exports/` are git-ignored).

## Quick start

1. Copy the env template and fill in **one** mode:

   ```bash
   cp .env.example .env
   ```

2. Install dependencies (only needed once, for Mode A's Postgres driver):

   ```bash
   npm install
   ```

3. Run the export:

   ```bash
   npm run db:export
   ```

Output lands in `exports/<timestamp>/`:

```
exports/2026-09-11T.../
  players.csv
  players.json
  matches.csv
  matches.json
  _manifest.json
```

## Which mode should I use?

### Mode A — Direct Postgres (recommended)

Exports **all tables automatically** — no need to name them.

1. In the Supabase Dashboard go to **Project Settings → Database → Connection
   string → URI**.
2. Copy the string and insert your database password.
3. Put it in `.env`:

   ```
   SUPABASE_DB_URL="postgresql://postgres:YOUR-PASSWORD@db.sxxvagbiqdisysvbonzw.supabase.co:5432/postgres"
   ```

> Tip: if your network blocks the direct `5432` connection, use the Supabase
> **connection pooler** string (shown on the same page, usually port `6543`) —
> it works the same way.

### Mode B — REST / service role (no DB password)

Use this if you'd rather not handle the database password. You must list the
tables yourself, because the REST API doesn't expose the full table list.

```
SUPABASE_URL="https://sxxvagbiqdisysvbonzw.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="your-service_role-key"
SUPABASE_TABLES="players,matches,bookings"
```

Find the service_role key under **Project Settings → API**. Keep it secret —
it bypasses Row Level Security.

## Notes

- JSON columns, arrays, and dates are preserved sensibly in both formats
  (CSV cells are properly quoted/escaped; JSON keeps native types).
- Mode B pages through large tables 1,000 rows at a time.
- Want a full SQL/`pg_dump` backup instead of per-table files? With the same
  connection string:

  ```bash
  pg_dump "$SUPABASE_DB_URL" --no-owner --no-privileges -f padelxpro-backup.sql
  ```
