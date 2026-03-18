# Plutto Landing

Landing page estática de [getplutto.com](https://getplutto.com). Deploy automático en Cloudflare Pages.

## Stack técnico

- HTML estático (sin framework, sin build)
- Tailwind CSS v3 (CDN)
- Vanilla JavaScript
- Cloudflare Pages (hosting + CDN + auto-deploy desde `master`)
- Google Fonts (Inter)

## Estructura del proyecto

```
index.html            Página principal (hero, features, social proof, CTA)
assets/css/custom.css Animaciones custom (fade-in)
assets/js/main.js     Menú móvil + IntersectionObserver para animaciones scroll
assets/img/           Imágenes (favicon, og-image, logos de clientes)
docs/plutto.md        Contexto del producto y palabras clave SEO
docs/marca.md         Manual de marca (colores, tipografía, tono, componentes)
_headers              Headers de seguridad para Cloudflare Pages
_redirects            Reglas de redirección de Cloudflare Pages
robots.txt            Configuración para crawlers
sitemap.xml           Sitemap XML para SEO
```

## Setup local

```bash
# Clonar el repositorio
git clone <repo-url> && cd landing

# Opción 1: serve con Node
npx serve .

# Opción 2: serve con Python
python3 -m http.server 8000
```

Abrir http://localhost:3000 (serve) o http://localhost:8000 (python).

## Deploy

Push a `master` → Cloudflare Pages despliega automáticamente.

```bash
git add <archivos>
git commit -m "descripción del cambio"
git push origin master
```

Dashboard: https://dash.cloudflare.com → Pages → plutto-landing

## Convenciones de edición

- **Contenido**: editar directamente los archivos `.html`. Cada sección está marcada con comentarios HTML (`<!-- HERO -->`, `<!-- FEATURES -->`, etc.)
- **Imágenes**: guardar en `assets/img/` con nombres descriptivos. Siempre incluir atributo `alt`
- **Nueva página**: copiar `index.html` como template, actualizar `<title>` y meta tags, agregar a `sitemap.xml`, actualizar nav en todas las páginas
- **Estilos**: usar clases de Tailwind en el HTML. Solo agregar CSS en `assets/css/custom.css` si es estrictamente necesario
- **Dark mode**: siempre emparejar clases light con su variante `dark:` (ej: `text-gray-900 dark:text-white`)
- **Animaciones**: agregar `data-animate` a elementos que deben hacer fade-in al aparecer en scroll

## Documentación de referencia

- **Producto y SEO**: Leer `docs/plutto.md` para contexto del producto, propuesta de valor, y palabras clave SEO
- **Marca y diseño**: Leer `docs/marca.md` para paleta de colores, tipografía, tono de voz y patrones de componentes Tailwind

## Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `/auditoria-seo` | Auditoría completa de SEO (meta tags, headings, sitemap, keywords) |
| `/verificar-consistencia` | Verificar consistencia de marca (colores, fonts, spacing, dark mode) |
| `/mejorar-copy` | Mejorar redacción y copy del landing |
| `/auditoria-accesibilidad` | Auditoría de accesibilidad WCAG 2.1 AA |
| `/nueva-pagina` | Crear una página nueva desde template |
| `/nueva-seccion` | Agregar una sección nueva a una página existente |
| `/revisar-rendimiento` | Revisar rendimiento y optimizaciones del sitio |

## Reglas para el asistente

- Responder siempre en español latinoamericano
- Leer `docs/plutto.md` y `docs/marca.md` antes de generar contenido o hacer cambios visuales
- Al editar contenido, preservar la estructura HTML y los patrones de clases Tailwind existentes
- Nunca eliminar atributos `data-animate`
- Siempre mantener paridad de dark mode (cada clase light debe tener su `dark:`)
- Mantener meta tags OG y Twitter Card sincronizados (mismos valores de title, description, image)
- Actualizar `sitemap.xml` al agregar nuevas páginas
- No modificar los headers de seguridad en `_headers` sin autorización explícita
- Usar las palabras clave SEO de `docs/plutto.md` cuando se genere contenido nuevo
