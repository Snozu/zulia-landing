#!/usr/bin/env bash
# Publica el generador dentro de dist/ con las rutas de fuente del build
# actual, levanta el receptor y deja la URL lista para abrir en el navegador.
#
#   npm run build && ./tools/social/generar.sh
#   npx serve dist -l 4321      (o el servidor estático que uses)
#   abre http://localhost:4321/_social.html
set -euo pipefail
cd "$(dirname "$0")/../.."

[ -d dist/_astro ] || { echo "Falta dist/. Corre npm run build primero."; exit 1; }

onest=$(basename dist/_astro/onest-latin-wght-normal.*.woff2)
mono=$(basename dist/_astro/jetbrains-mono-latin-wght-normal.*.woff2)

sed -e "s|__ONEST__|/_astro/$onest|" -e "s|__MONO__|/_astro/$mono|" \
    tools/social/plantilla.html > dist/_social.html

pkill -f tools/social/receptor.py 2>/dev/null || true
python3 tools/social/receptor.py "${1:-$HOME/Downloads/zulia-social}" &
sleep 1

echo "Listo. Abre http://localhost:4321/_social.html y espera a que el título diga LISTO."
