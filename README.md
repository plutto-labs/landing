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

## Comandos de Claude Code

Este repositorio incluye comandos personalizados para Claude Code que facilitan el mantenimiento del landing sin necesidad de conocimientos técnicos:

| Comando | Qué hace |
|---------|----------|
| `/auditoria-seo` | Revisa meta tags, headings, sitemap y keywords SEO |
| `/verificar-consistencia` | Verifica que colores, fonts y spacing sigan el manual de marca |
| `/mejorar-copy` | Sugiere mejoras de redacción y copy |
| `/auditoria-accesibilidad` | Audita accesibilidad WCAG 2.1 AA |
| `/nueva-pagina` | Crea una página nueva desde template |
| `/nueva-seccion` | Agrega una sección nueva a una página existente |
| `/revisar-rendimiento` | Revisa optimizaciones de rendimiento |

## Documentación

- **`CLAUDE.md`** — Guía operativa del repositorio (Claude Code lo lee automáticamente)
- **`docs/plutto.md`** — Contexto del producto y palabras clave SEO
- **`docs/marca.md`** — Manual de marca (colores, tipografía, tono de voz, componentes)

## Stack

- HTML estático
- Tailwind CSS v3 (CDN, sin build)
- Cloudflare Pages (hosting + CDN + auto-deploy)
