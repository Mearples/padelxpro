#!/usr/bin/env bash
#
# Full SQL backup of your Supabase Postgres database using pg_dump.
# Produces a single restorable .sql file (schema + data) under ./exports.
#
# Requires:
#   - SUPABASE_DB_URL  (same connection string as Mode A in EXPORT.md),
#     read from your shell or from a local .env file.
#   - pg_dump on your PATH (part of the PostgreSQL client tools).
#
# Usage:
#   npm run db:dump
#   # or directly:
#   ./scripts/dump-supabase.sh
#
# The resulting file contains your data — it's written under exports/,
# which is git-ignored. Don't commit it.

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

# Load .env if present (without clobbering vars already in the environment).
if [[ -f .env ]]; then
  while IFS= read -r line || [[ -n "$line" ]]; do
    line="${line#"${line%%[![:space:]]*}"}"   # ltrim
    [[ -z "$line" || "$line" == \#* ]] && continue
    key="${line%%=*}"
    val="${line#*=}"
    key="${key//[[:space:]]/}"
    # strip surrounding quotes
    val="${val%\"}"; val="${val#\"}"
    val="${val%\'}"; val="${val#\'}"
    if [[ -z "${!key:-}" ]]; then
      export "$key=$val"
    fi
  done < .env
fi

if [[ -z "${SUPABASE_DB_URL:-}" ]]; then
  echo "✗ SUPABASE_DB_URL is not set." >&2
  echo "  Set it in your shell or in a local .env file (see .env.example)." >&2
  echo '  Example: SUPABASE_DB_URL="postgresql://postgres:<password>@<host>:5432/postgres"' >&2
  exit 1
fi

if ! command -v pg_dump >/dev/null 2>&1; then
  echo "✗ pg_dump not found on PATH." >&2
  echo "  Install the PostgreSQL client tools, e.g.:" >&2
  echo "    macOS:         brew install libpq && brew link --force libpq" >&2
  echo "    Debian/Ubuntu: sudo apt-get install postgresql-client" >&2
  exit 1
fi

mkdir -p exports
STAMP="$(date -u +%Y-%m-%dT%H-%M-%SZ)"
OUT="exports/${STAMP}-padelxpro-backup.sql"

echo "Dumping database to ${OUT} ..."
pg_dump "$SUPABASE_DB_URL" \
  --no-owner \
  --no-privileges \
  --file "$OUT"

echo "✓ Done. Full SQL backup written to ${OUT}"
echo "  Restore with:  psql \"\$SUPABASE_DB_URL\" -f ${OUT}"
