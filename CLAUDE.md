# Plutto Landing

Landing page estática de [getplutto.com](https://getplutto.com). Deploy automático en Cloudflare Pages.

## Stack técnico

- HTML estático (sin framework, sin build)
- Tailwind CSS v3 (CDN con config inline para paleta plutto)
- Vanilla JavaScript
- Cloudflare Pages (hosting + CDN + auto-deploy desde `master`)
- Google Fonts (Inter)

## Estructura del proyecto

```
index.html              Página principal (hero, features, social proof, CTA)
assets/css/custom.css   Animaciones custom (fade-in)
assets/js/main.js       Menú móvil + IntersectionObserver para animaciones scroll
assets/img/             Imágenes (favicon, og-image, logos de clientes)
docs/EMPIEZA-AQUI.md    Guía de inicio para marketing (leer primero)
docs/plutto.md          Contexto del producto y palabras clave SEO
docs/marca.md           Design system completo (colores, componentes, schema, reglas)
docs/seo/               Auditoría, plan semanal, migración
docs/templates/         Template para briefear páginas nuevas
_headers                Headers de seguridad para Cloudflare Pages
_redirects              Reglas de redirección de Cloudflare Pages
robots.txt              Configuración para crawlers
sitemap.xml             Sitemap XML para SEO
```

## Setup local

```bash
git clone https://github.com/plutto-labs/landing.git && cd landing
npx serve .
```

Abrir http://localhost:3000.

## Deploy

Push a `master` → Cloudflare Pages despliega automáticamente.

```bash
git add <archivos>
git commit -m "descripción del cambio"
git push origin master
```

## Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `/auditoria-seo` | Auditoría completa de SEO (meta tags, headings, sitemap, keywords) |
| `/verificar-consistencia` | Verificar consistencia de marca (colores, fonts, spacing) |
| `/mejorar-copy` | Mejorar redacción y copy del landing |
| `/auditoria-accesibilidad` | Auditoría de accesibilidad WCAG 2.1 AA |
| `/nueva-pagina` | Crear una página nueva desde template |
| `/nueva-seccion` | Agregar una sección nueva a una página existente |
| `/crear-articulo` | Crear artículo para conceptos/ o blog/ |
| `/revisar-rendimiento` | Revisar rendimiento y optimizaciones del sitio |

## Reglas para el asistente

### Generales
- Responder siempre en español latinoamericano
- Leer `docs/marca.md` antes de generar contenido visual o componentes
- Leer `docs/plutto.md` para keywords y contexto de producto
- Nunca eliminar atributos `data-animate`
- Mantener meta tags OG y Twitter Card sincronizados
- Actualizar `sitemap.xml` al agregar nuevas páginas
- No modificar `_headers` sin autorización explícita

### Colores y diseño
- Color primario: `plutto-600` (#3d3bf3). **Nunca usar indigo-600**
- Nota: `index.html` actual todavía usa indigo-600 (pendiente migrar). Páginas nuevas deben usar plutto-600
- No usar dark mode (no agregar clases `dark:`)
- Font: Inter. No agregar otras fuentes
- Incluir Tailwind config inline en el `<head>` de cada página (ver `docs/marca.md` sección 1)

### SEO y AEO
- HTML semántico: `<article>`, `<section>`, `<table>` nativo, `<ul>`/`<ol>` nativo
- 1 `<h1>` por página, `<h2>` por sección, `<h3>` sub-items. Nunca saltar niveles
- Cada sección abre con 40-60 palabras de respuesta directa (optimización AEO)
- Schema JSON-LD obligatorio: `BreadcrumbList` + el que corresponda (ver templates en `docs/marca.md`)
- Meta tags completos: `<title>` (50-60 chars), `<meta description>` (120-158), `og:image`, Twitter Card, `canonical`
- Hero image con `fetchpriority="high"`. Resto con `loading="lazy"` + `width`/`height`
- Breadcrumbs (HTML + schema) en todas las páginas internas
- Mobile: CTA sticky, tap targets 48x48px min, font 16px min

### Usar palabras clave SEO de `docs/plutto.md`
