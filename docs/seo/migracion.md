# Plan de Migración — getplutto.com
## De Webflow a HTML estático (Cloudflare Pages)

**Fecha:** Marzo 2026
**Estado general:** 🔴 No iniciado — partir desde cero

---

## Contexto

Plutto necesita migrar su sitio de Webflow + blog en Fly.io a un único repositorio HTML estático en Cloudflare Pages (`plutto-labs/landing`). Objetivos:
1. Consolidar todo en `getplutto.com` (eliminar el subdomain `blog.getplutto.com`)
2. Construir el nuevo diseño desde cero (brand-guide en PDF + referentes + Webflow actual como referencia)
3. Posicionar mejor en Google y asistentes IA (score AEO actual: 2.3/10)

El diseño aún **no está definido**. Marketing tiene un brand-guide en PDF y referentes visuales que entregará en la Fase 0. Todas las decisiones de diseño las aprueba Marketing antes de construir.

---

## Estado de Migración

> Claude: actualizar esta sección a medida que se completan tareas.
> Estados: 🔴 Pendiente · 🟡 En progreso · 🟢 Completado

### Fase 0 — Definición Visual
| Tarea | Estado | Notas |
|-------|--------|-------|
| Marketing entrega brand-guide PDF | 🔴 Pendiente | **Pedir a Marketing al iniciar esta fase** |
| Marketing entrega referentes visuales | 🔴 Pendiente | URLs o imágenes de sitios de referencia |
| Revisión del Webflow actual | 🔴 Pendiente | Usar WebFetch en `https://getplutto.com` para leer el HTML actual |
| Definición de nueva paleta de colores | 🔴 Pendiente | Puede diferir de plutto-600 actual |
| Definición de tipografía y espaciado | 🔴 Pendiente | Inter u otra fuente |
| Definición de estructura de secciones | 🔴 Pendiente | Orden y tipo de secciones del homepage |
| Definición de componentes nuevos | 🔴 Pendiente | Componentes no existentes en templates actuales |
| Actualizar docs/marca.md | 🔴 Pendiente | Fuente de verdad del design system |

### Fase 1 — Sistema de Diseño (Templates + CSS)
| Tarea | Estado | Notas |
|-------|--------|-------|
| Actualizar `assets/css/custom.css` | 🔴 Pendiente | Nuevas animaciones y estilos custom |
| Actualizar `templates/base.html` | 🔴 Pendiente | Nuevo head, nav, footer |
| Actualizar `templates/landing.html` | 🔴 Pendiente | Nuevas secciones y componentes |
| Actualizar `templates/articulo.html` | 🔴 Pendiente | Nuevo layout de artículo |
| Validar index.html con nuevo diseño | 🔴 Pendiente | Homepage como prueba visual del sistema |

### Fase 2 — Páginas Base
| Tarea | Estado | Notas |
|-------|--------|-------|
| `index.html` — Homepage completa | 🔴 Pendiente | Contenido real, sin placeholders |
| `demo.html` — Formulario demo | 🔴 Pendiente | O redirect a Calendly/HubSpot |
| `mexico.html` — Landing México | 🔴 Pendiente | Con hreflang es-MX |
| `preguntas-frecuentes.html` | 🔴 Pendiente | FAQPage schema |
| `robots.txt` actualizado | 🔴 Pendiente | Permitir bots AI (GPTBot, Claude-Web, etc.) |
| `_redirects` iniciales | 🔴 Pendiente | /demo-form → /demo, /producto → / |
| `sitemap.xml` con todas las URLs | 🔴 Pendiente | Actualizar al agregar cada página |

### Fase 3 — Landings de Solución + Conceptos
| Tarea | Estado | Notas |
|-------|--------|-------|
| `soluciones/due-diligence-proveedores.html` | 🔴 Pendiente | KW: "due diligence proveedores Chile" |
| `soluciones/compliance-proveedores.html` | 🔴 Pendiente | KW: "compliance proveedores Chile" |
| `conceptos/que-es-kyb.html` | 🔴 Pendiente | KW: "qué es KYB" |
| `conceptos/kyc-vs-kyb.html` | 🔴 Pendiente | KW: "KYC vs KYB" |
| `conceptos/regulaciones-proveedores-chile.html` | 🔴 Pendiente | |
| `conceptos/due-diligence-proveedores.html` | 🔴 Pendiente | |
| Nav y footer actualizados con nuevas páginas | 🔴 Pendiente | En todos los archivos existentes |
| sitemap.xml actualizado | 🔴 Pendiente | |

### Fase 4 — Blog (Migración desde blog.getplutto.com)
| Tarea | Estado | Notas |
|-------|--------|-------|
| Inventario de artículos actuales | 🔴 Pendiente | URLs, títulos, contenido, imágenes |
| `blog/index.html` — Índice del blog | 🔴 Pendiente | |
| Migrar artículo 1 | 🔴 Pendiente | Completar slug al inventariar |
| Migrar artículo 2 | 🔴 Pendiente | |
| Migrar artículo 3 | 🔴 Pendiente | |
| Migrar artículo 4 | 🔴 Pendiente | |
| Migrar artículo 5 | 🔴 Pendiente | |
| Migrar artículo 6 | 🔴 Pendiente | |
| Migrar artículo 7-8 (si existen) | 🔴 Pendiente | |
| sitemap.xml con todas las URLs del blog | 🔴 Pendiente | |

### Fase 5 — Corte de DNS y Validación
| Tarea | Estado | Notas |
|-------|--------|-------|
| Checklist pre-launch completo | 🔴 Pendiente | Ver sección abajo |
| Bajar TTL del DNS a 300s | 🔴 Pendiente | Hacerlo 24h antes del corte |
| Configurar Cloudflare Redirect Rules para blog | 🔴 Pendiente | blog.getplutto.com/* → getplutto.com/blog/* |
| Cambiar DNS: getplutto.com → Cloudflare Pages | 🔴 Pendiente | ⚠️ Acción irreversible a corto plazo |
| Agregar noindex a getplutto-blog.fly.dev | 🔴 Pendiente | Evitar contenido duplicado |
| Verificar carga del sitio post-DNS | 🔴 Pendiente | |
| Verificar todos los redirects | 🔴 Pendiente | |
| Solicitar indexación en Google Search Console | 🔴 Pendiente | |
| Monitorear 404s en Cloudflare Analytics | 🔴 Pendiente | 48h post-lanzamiento |

---

## Instrucciones por Fase

### Fase 0 — Definición Visual

**Objetivo:** Definir el nuevo diseño antes de escribir una sola línea de HTML.

**Protocolo para Claude al iniciar esta fase:**
1. Pedir a Marketing:
   - Brand-guide PDF (archivo adjunto en la conversación)
   - Lista de URLs o imágenes de sitios referentes
2. Usar WebFetch en `https://getplutto.com` para leer el HTML del sitio Webflow actual y analizar estructura, secciones y diseño
3. Hacer preguntas específicas a Marketing sobre cada decisión: colores, tipografía, secciones, componentes
4. No avanzar a Fase 1 hasta tener aprobación explícita de Marketing en cada punto

**Entregable:** `docs/marca.md` actualizado con el nuevo design system aprobado.

---

### Fase 1 — Sistema de Diseño

**Objetivo:** Actualizar todos los templates y CSS con el nuevo design system antes de crear páginas.

**Protocolo para Claude:**
1. Leer el nuevo `docs/marca.md` (entregable de Fase 0)
2. Actualizar en orden: `base.html` → `landing.html` → `articulo.html` → `custom.css`
3. Mostrar a Marketing el `index.html` actualizado como validación visual
4. No crear ninguna página nueva hasta aprobación de templates

**Reglas inamovibles:**
- Nunca usar `indigo-600` — usar el color primario definido en el nuevo brand
- Nunca usar clases `dark:`
- Mantener todos los atributos `data-animate`
- 1 `<h1>` por página, sin saltar niveles de heading
- Tailwind config inline en cada `<head>`

---

### Fase 2 — Páginas Base

**Objetivo:** Páginas mínimas necesarias para el corte de DNS.

**Protocolo para Claude:**
- Usar `templates/landing.html` como base
- Pedir brief a Marketing antes de cada página (ver `docs/templates/brief-pagina.md`)
- Actualizar `sitemap.xml` después de cada página nueva

---

### Fase 3 — Landings y Conceptos SEO

**Objetivo:** Páginas que capturan tráfico orgánico no-branded.

**Protocolo para Claude:**
- Cada página requiere brief aprobado por Marketing
- AEO: abrir cada sección con 40-60 palabras de respuesta directa
- Schema obligatorio: `BreadcrumbList` + `SoftwareApplication` (landings) o `Article`+`FAQPage` (conceptos)

---

### Fase 4 — Blog

**Objetivo:** Migrar todos los artículos de `blog.getplutto.com` a `getplutto.com/blog/`.

**Protocolo para Claude:**
1. Inventariar accediendo a `blog.getplutto.com` — pedir acceso a Marketing si necesario
2. Mantener exactamente los mismos slugs que tiene el blog actual
3. Usar `templates/articulo.html` como base
4. Actualizar la tabla de la Fase 4 en este documento con los slugs reales

---

### Fase 5 — Corte de DNS

**Checklist pre-launch** (todos deben estar ✅ antes del corte):

**Contenido:**
- [ ] Homepage con contenido real (sin placeholders)
- [ ] Formulario de demo funcional
- [ ] Landing México con hreflang
- [ ] Al menos 1 landing de solución publicada
- [ ] Todos los links internos funcionan

**SEO Técnico:**
- [ ] `robots.txt` permite bots (incluyendo GPTBot, Claude-Web)
- [ ] `sitemap.xml` con todas las URLs
- [ ] Schema JSON-LD en todas las páginas
- [ ] Meta tags completos (title, description, og, twitter) en todas las páginas
- [ ] `lang="es"` en `<html>` de todos los archivos
- [ ] Canonical URLs correctas
- [ ] `_redirects` cubre `/demo-form` → `/demo` y `/producto` → `/`

**Técnico:**
- [ ] `_headers` con security headers
- [ ] Imágenes con width/height explícitos
- [ ] Hero image sin lazy-load (`fetchpriority="high"`)
- [ ] PageSpeed Insights: LCP < 2.5s

**DNS:**
- [ ] TTL bajado a 300s al menos 1h antes
- [ ] Cloudflare Pages configurado con dominio custom `getplutto.com`
- [ ] Cloudflare Redirect Rule: `blog.getplutto.com/*` → `getplutto.com/blog/*`
- [ ] SSL/TLS configurado

**Rollback:** Si algo sale mal, cambiar DNS de vuelta a Webflow. Es inmediato si el TTL estaba bajo.

---

## Arquitectura target

```
getplutto.com (Cloudflare Pages ← plutto-labs/landing repo)
├── /                               ← Homepage
├── /demo                           ← Formulario demo
├── /mexico                         ← Landing México (hreflang es-MX)
├── /soluciones/
│   ├── due-diligence-proveedores
│   └── compliance-proveedores
├── /conceptos/
│   ├── que-es-kyb
│   ├── kyc-vs-kyb
│   ├── regulaciones-proveedores-chile
│   └── due-diligence-proveedores
├── /industrias/                    ← FUTURO (Mes 4+)
├── /blog/
│   ├── index
│   └── [slugs migrados de blog.getplutto.com]
├── /preguntas-frecuentes
├── sitemap.xml
└── robots.txt
```

## Redirects a configurar

### En `_redirects` (Cloudflare Pages):
```
/demo-form    /demo    301
/producto     /        301
```

### En Cloudflare Dashboard → Rules → Redirect Rules:
- When: Hostname equals `blog.getplutto.com`
- Then: Dynamic redirect to `https://getplutto.com/blog/${http.request.uri.path}` (301)
