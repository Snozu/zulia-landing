#!/usr/bin/env bash
# Builds and deploys the landing to the VPS over SSH (key auth only, no passwords).
# Target host and directory come from ~/.config/zulia/deploy.env, outside the repo.
set -euo pipefail

CONFIG="${ZULIA_DEPLOY_CONFIG:-$HOME/.config/zulia/deploy.env}"
if [[ -f "$CONFIG" ]]; then
  # shellcheck source=/dev/null
  source "$CONFIG"
fi
: "${DEPLOY_HOST:?Define DEPLOY_HOST (alias de ~/.ssh/config) en $CONFIG}"
REMOTE_DIR="${REMOTE_DIR:-/var/www/zulia-landing}"

cd "$(dirname "$0")"

# Las carpetas que pertenecen por completo al repo se borran antes de
# descomprimir. Sin esto, un archivo que se elimina aqui sobrevive en el
# servidor para siempre y vuelve a entrar en la imagen: asi seguian vivos el
# favicon anterior y una imagen para compartir que ya no existia.

echo "Deploying to $DEPLOY_HOST:$REMOTE_DIR ..."
tar -czf - \
  --exclude=node_modules \
  --exclude=.git \
  --exclude=dist \
  --exclude=.astro \
  --exclude=tmp \
  --exclude=.trae \
  --exclude=.claude \
  --exclude='*.exp' \
  --exclude='deploy_package.tar.gz' \
  . \
| ssh "$DEPLOY_HOST" "mkdir -p '$REMOTE_DIR' \
  && rm -rf '$REMOTE_DIR/public' '$REMOTE_DIR/src' '$REMOTE_DIR/tools' \
  && tar -xzf - -C '$REMOTE_DIR' \
  && cd '$REMOTE_DIR' \
  && docker compose up -d --build --force-recreate \
  && docker compose ps"

echo "Done."
