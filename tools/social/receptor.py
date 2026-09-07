"""Recibe los PNG que dibuja el generador y los escribe a disco.

El canvas del navegador no puede guardar archivos, así que la página manda
cada imagen aquí por POST como `nombre.png|data:image/png;base64,...`.
"""
import base64, http.server, socketserver, os, sys

DESTINO = os.path.expanduser(sys.argv[1] if len(sys.argv) > 1 else '~/Downloads/zulia-social')
PUERTO = 4322

os.makedirs(DESTINO, exist_ok=True)


class Manejador(http.server.BaseHTTPRequestHandler):
    def _cors(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Headers', '*')

    def do_OPTIONS(self):
        self.send_response(200); self._cors(); self.end_headers()

    def do_POST(self):
        cuerpo = self.rfile.read(int(self.headers['Content-Length'])).decode()
        nombre, _, datos = cuerpo.partition('|')
        ruta = os.path.join(DESTINO, os.path.basename(nombre))
        with open(ruta, 'wb') as f:
            f.write(base64.b64decode(datos.split(',', 1)[1]))
        print(ruta, flush=True)
        self.send_response(200); self._cors(); self.end_headers(); self.wfile.write(b'ok')

    def log_message(self, *a):
        pass


socketserver.TCPServer.allow_reuse_address = True
print(f'escribiendo en {DESTINO}', flush=True)
socketserver.TCPServer(('127.0.0.1', PUERTO), Manejador).serve_forever()
