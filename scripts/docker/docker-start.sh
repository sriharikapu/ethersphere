#!/usr/bin/env bash
set -e

# Change directory to be the app root, and save to var
ROOT_DIR=$(cd "$(dirname "$0")/../../"; pwd)

# Export env vars
. .env
export NODE_ENV="production"

echo "[+] Location '${ROOT_DIR}'"

# Build production bundle
npm run build

# Start up!
node dist/server.js

exec "$@"
