# Plutto Landing

Landing page estática para [getplutto.com](https://getplutto.com). Deploy automático en Cloudflare Pages.

## Desarrollo local

No requiere instalación. Abre `index.html` directamente en el browser, o levanta un server local:

```bash
# Opción 1
npx serve .

# Opción 2
python3 -m http.server 8000
```

## Deploy

Push a `master` → Cloudflare Pages despliega automáticamente.

```bash
git add .
git commit -m "update: descripción del cambio"
git push
```

Dashboard de Cloudflare Pages: https://dash.cloudflare.com → Pages → plutto-landing

## Convenciones

- **Editar contenido**: modificar directamente los archivos `.html`. Cada sección está marcada con comentarios (`<!-- HERO -->`, `<!-- FEATURES -->`, etc.).
- **Imágenes**: guardar en `assets/img/` y referenciar con ruta relativa.
- **Nueva página**: copiar `index.html` como template, modificar contenido, y agregar link en el nav.
- **Estilos custom**: usar clases de Tailwind en el HTML. Solo agregar CSS custom en `assets/css/custom.css` si es estrictamente necesario.

## Stack

- HTML estático
- Tailwind CSS v3 (CDN, sin build)
- Cloudflare Pages (hosting + CDN + auto-deploy)
