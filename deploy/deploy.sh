#!/usr/bin/env bash
set -euo pipefail

# Deploy script for farmacologiamapas
# Usage: sudo ./deploy/deploy.sh [REF]
# REF can be a commit hash or a branch name (default: main).

PROJ_DIR="/var/www/farmaco.click"
PORT=5000
REF_ARG="${1:-main}"

# If REF_ARG looks like a commit hash (7-40 hex chars), use it directly, else use origin/REF_ARG
if [[ "$REF_ARG" =~ ^[0-9a-fA-F]{7,40}$ ]]; then
  REF="$REF_ARG"
else
  REF="origin/$REF_ARG"
fi

echo ">> Deploy: $PROJ_DIR -> $REF"

if [ ! -d "$PROJ_DIR" ]; then
  echo "ERROR: project dir $PROJ_DIR not found"
  exit 1
fi

cd "$PROJ_DIR"

echo "-> Fetching remote and resetting to $REF"
git fetch --all --prune
# Ensure references are available
git fetch origin --tags

git reset --hard "$REF"

# Install dependencies if package.json exists
if [ -f package.json ]; then
  echo "-> Installing dependencies (npm ci)"
  npm ci --silent
else
  echo "-> No package.json, skipping npm install"
fi

# Build if script exists
if grep -q '"build"' package.json 2>/dev/null || (jq -e '.scripts.build' package.json >/dev/null 2>&1); then
  echo "-> Running build"
  npm run build --silent
else
  echo "-> No build script, skipping build"
fi

# Stop existing process on PORT only if it belongs to this project
PID=$(lsof -ti :${PORT} || true)
if [ -n "$PID" ]; then
  PROC_DIR=$(pwdx "$PID" 2>/dev/null | awk '{print $2}' || true)
  echo "-> Found PID $PID on port $PORT (dir: $PROC_DIR)"
  if [ "$PROC_DIR" = "$PROJ_DIR" ] || [ -z "$PROC_DIR" ]; then
    echo "   Stopping PID $PID"
    kill "$PID" || kill -9 "$PID" || true
    sleep 1
  else
    echo "   WARNING: process on port $PORT does not belong to $PROJ_DIR. Aborting to avoid affecting other apps."
    exit 1
  fi
else
  echo "-> No process listening on port $PORT"
fi

# Start app using the same method currently used on server (nohup npm run start)
echo "-> Starting app (nohup npm run start)"
nohup env NODE_ENV=production npm run start > app.log 2>&1 &

sleep 2
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "http://127.0.0.1:${PORT}/" || echo "000")
echo "-> Local HTTP status: $HTTP_STATUS"

echo ">> Deploy finished for $REF"
