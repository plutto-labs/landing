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
templates/base.html     Esqueleto HTML reutilizable (head, nav, footer, schemas)
templates/landing.html  Template completo para landing pages con todas las secciones
templates/articulo.html Template completo para artículos educativos (AEO optimizado)
assets/css/custom.css   Animaciones custom (fade-in)
assets/js/main.js       Menú móvil + IntersectionObserver para animaciones scroll
assets/img/             Imágenes (favicon, og-image, logos de clientes)
docs/EMPIEZA-AQUI.md    Guía de inicio para marketing (leer primero)
docs/plutto.md          Contexto del producto y palabras clave SEO
docs/marca.md           Design system completo (colores, componentes, schema, reglas)
docs/seo/               Auditoría, plan semanal, migración
docs/templates/         Template de brief para páginas nuevas (llenar antes de crear)
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

## Skills disponibles

| Skill | Descripción |
|-------|-------------|
| `/siguiente-tarea` | Te dice qué hacer a continuación según el plan SEO |
| `/crear-articulo` | Crear artículo educativo con optimización AEO |
| `/nueva-pagina` | Crear una página nueva desde template |
| `/nueva-seccion` | Agregar una sección nueva a una página existente |
| `/publicar` | Validar y publicar cambios (checklist + git push) |
| `/auditoria-seo` | Auditoría completa de SEO + AEO |
| `/verificar-consistencia` | Verificar consistencia de marca (colores, fonts, spacing) |
| `/mejorar-copy` | Mejorar redacción y copy del landing |
| `/auditoria-accesibilidad` | Auditoría de accesibilidad WCAG 2.1 AA |
| `/revisar-rendimiento` | Revisar rendimiento y optimizaciones del sitio |
| `/optimizar-imagenes` | Auditar y corregir atributos de imágenes |
| `/migrar-blog` | Migrar artículos del subdomain blog a /blog/ |
| `/plutto-blog` | Escribir artículos del blog con pipeline anti-IA y voz auténtica |
| `/plutto-design` | Diseño anti-IA adaptado a Plutto (paleta, Inter, Tailwind CDN) |
| `/frontend-design` | Diseño frontend distintivo (Impeccable — skill base) |
| `/audit` | Auditoría técnica de calidad visual (anti-patrones, accesibilidad) |
| `/critique` | Evaluación UX con scoring cuantitativo |
| `/animate` | Agregar animaciones y micro-interacciones |
| `/polish` | Pase final de calidad: alineación, spacing, detalles |
| `/bolder` | Amplificar diseños tímidos para más impacto visual |
| `/arrange` | Mejorar layout, spacing y ritmo visual |
| `/typeset` | Mejorar tipografía, jerarquía y legibilidad |
| `/colorize` | Agregar color estratégico a interfaces monótonas |

## Reglas para el asistente

### Generales
- Responder siempre en español latinoamericano
- Usar templates de `templates/` como base para páginas nuevas. Consultar `docs/marca.md` solo para componentes individuales no incluidos en los templates
- Leer `docs/plutto.md` para keywords y contexto de producto
- Nunca eliminar atributos `data-animate`
- Mantener meta tags OG y Twitter Card sincronizados
- Actualizar `sitemap.xml` al agregar nuevas páginas
- No modificar `_headers` sin autorización explícita

### Colores y diseño
- Color primario: `plutto-600` (#3d3bf3). **Nunca usar indigo-600**
- Tanto `index.html` como los templates ya usan plutto-600
- No usar dark mode (no agregar clases `dark:`)
- Font: Inter. No agregar otras fuentes
- Incluir Tailwind config inline en el `<head>` de cada página (ya incluido en los templates)

### Diseño anti-IA (Impeccable + plutto-design)
- Al crear o modificar páginas, consultar siempre el skill `/plutto-design` para guías anti-IA adaptadas a Plutto
- Cada sección debe tener un layout DIFERENTE a la anterior (no repetir grids simétricos)
- Variar spacing vertical entre secciones (`py-16`, `py-24`, `py-32`) — no usar `py-20` en todas
- Usar clases de `custom.css`: `.card-hover`, `.bg-mesh-light`, `.bg-mesh-dark`, `.grain`, `.animate-slide-left/right`, `.animate-scale-in`
- Ver anti-patrones completos en `docs/marca.md` sección 16
- Skills de Impeccable disponibles: `/audit`, `/critique`, `/bolder`, `/polish`, `/animate`, `/arrange`, `/typeset`, `/colorize`

### SEO y AEO
- HTML semántico: `<article>`, `<section>`, `<table>` nativo, `<ul>`/`<ol>` nativo
- 1 `<h1>` por página, `<h2>` por sección, `<h3>` sub-items. Nunca saltar niveles
- Cada sección abre con 40-60 palabras de respuesta directa (optimización AEO)
- Schema JSON-LD obligatorio: `BreadcrumbList` + el que corresponda (ya incluidos en `templates/`)
- Meta tags completos: `<title>` (50-60 chars), `<meta description>` (120-158), `og:image`, Twitter Card, `canonical`
- Hero image con `fetchpriority="high"`. Resto con `loading="lazy"` + `width`/`height`
- Breadcrumbs (HTML + schema) en todas las páginas internas
- Mobile: CTA sticky, tap targets 48x48px min, font 16px min

### Usar palabras clave SEO de `docs/plutto.md`
