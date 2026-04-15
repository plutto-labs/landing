import os
import http.server
import socketserver

DIRECTORY = "/Users/deboramarsalbarros/Desktop/Plutto/landing"
PORT = int(os.environ.get("PORT", 3000))

os.chdir(DIRECTORY)

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving {DIRECTORY} on port {PORT}")
    httpd.serve_forever()
