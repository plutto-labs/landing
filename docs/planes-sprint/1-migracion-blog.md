# Plan 1 — Migración del Blog

## Contexto

El blog actual vive en `https://blog.getplutto.com/` (subdomain separado). El objetivo es migrarlo a `getplutto.com/blog/` para consolidar autoridad SEO en un solo dominio y que las páginas educativas conversen con el resto del sitio (interlinking hacia soluciones e industrias).

## Estado actual

| Item | Estado |
|---|---|
| `/blog/` | Existe, vacío (solo `.gitkeep`) |
| `templates/articulo.html` | Existe, 32.7 KB, listo (schema Article, BreadcrumbList, OG, Twitter) |
| Skill `/migrar-blog` | Disponible en `.claude/skills/migrar-blog/SKILL.md` |
| `sitemap.xml` | NO incluye `/blog/` ni `/faq/` |
| `_redirects` | VACÍO (0 bytes) — no hay redirect de blog.getplutto.com |
| Plan migración | Fase 4 100% pendiente (tracker histórico archivado con este plan) |
| Inventario artículos | No existe aún |

## Dinámica con Débora

Débora entrega los artículos en documentos ordenados. El flujo por artículo es:

1. **Ella** → pega el contenido en un doc con metadatos (título, slug, fecha, autor, descripción meta, keyword principal, imagen de portada)
2. **Claude** → propone diseño (layout variable, no todos iguales) y maqueta en HTML usando `templates/articulo.html`
3. **Ella** → revisa, pide ajustes, aprueba
4. **Commit** individual por artículo

## Tareas paso a paso

### Fase 1 — Inventario (bloquea todo lo demás)

1. **Débora navega `blog.getplutto.com`** y arma una planilla (Google Sheets) con todos los artículos. Columnas:
   - Título original
   - URL original completa (ej: `https://blog.getplutto.com/que-es-kyb`)
   - Slug propuesto para el nuevo sitio (ej: `que-es-kyb`)
   - Fecha publicación
   - Autor
   - Keyword principal
   - Estado (Migrar / Archivar / Fusionar con otro)
   - Prioridad (1=alto tráfico/conversión, 2=medio, 3=bajo)

2. **Felipe aprueba** la planilla y decide qué artículos se archivan (no todo merece migrar; contenido viejo sin tráfico puede morir con redirect 301 a `/blog/`).

3. **Débora crea `docs/estrategia/inventario-blog.md`** con la planilla exportada a markdown para tracking dentro del repo.

### Fase 2 — Infraestructura (una sola vez)

4. **Crear `blog/index.html`** (índice del blog) con listado de artículos agrupados por categoría. Usar `templates/landing.html` como base. Tarjetas con: imagen, título, descripción, fecha, link.

5. **Actualizar `sitemap.xml`**: agregar `<url>` para `/blog/` y `/faq/` (ambos faltan hoy). Por cada artículo migrado se agrega un `<url>` más en Fase 3.

6. **Configurar `_redirects`** con redirects 301 de todos los slugs antiguos → nuevos. Una línea por artículo:
   ```
   https://blog.getplutto.com/que-es-kyb  https://getplutto.com/blog/que-es-kyb  301!
   ```
   Nota: el redirect de subdomain completo (`blog.*` → `getplutto.com/blog/`) requiere configuración adicional en el dashboard de Cloudflare — Felipe debe hacerlo fuera del repo.

### Fase 3 — Migración artículo por artículo

Para cada artículo (ordenados por prioridad 1 → 3):

7. **Débora pega contenido** en nuevo doc compartido con estos campos obligatorios:
   - `title` (50-60 chars incluyendo `| Plutto`)
   - `meta_description` (120-158 chars)
   - `slug` (kebab-case, sin tildes, corto)
   - `date_published` (ISO 8601)
   - `author`
   - `keyword_principal` + 3-5 keywords secundarias
   - `og_image` (1200×630, path en `/assets/img/blog/`)
   - Cuerpo en markdown (H2, H3, tablas, listas)

8. **Claude propone layout**: cada artículo debe tener un layout ligeramente diferente (aplicar regla anti-IA de `docs/marca.md` sec. 16). Opciones para proponer: hero con imagen full-bleed, hero con TOC lateral, hero con stat destacada, hero con quote de apertura.

9. **Claude maqueta** usando `templates/articulo.html`, llenando:
   - Meta tags + OG + Twitter
   - Schema `Article` con `author`, `datePublished`, `image`, `speakable`
   - Schema `BreadcrumbList` (Home → Blog → Artículo)
   - Breadcrumbs HTML visibles
   - Contenido con jerarquía H1→H2→H3 (nunca saltar niveles)
   - Cada sección abre con 40-60 palabras de respuesta directa (AEO)
   - Interlinking a páginas de soluciones/industrias relevantes (min. 2-3 por artículo)
   - CTA al final hacia `/demo`

10. **Débora revisa en local** (`npx serve .`), verifica responsive, typos, tono.

11. **Agregar al sitemap** la URL del artículo con `<lastmod>` de hoy.

12. **Agregar redirect 301** del slug antiguo al nuevo en `_redirects`.

13. **Commit individual**: `feat: migrar artículo [título]`.

14. **Actualizar tracker** en `docs/estrategia/inventario-blog.md` marcando artículo como migrado.

### Fase 4 — Publicación y verificación

15. **Correr `/auditoria-seo`** sobre `/blog/` completo para detectar problemas antes de publicar.
16. **Felipe coordina** con Cloudflare el corte DNS de `blog.getplutto.com` → redirect 301 de subdomain a `getplutto.com/blog/`.
17. **Monitorear Search Console** 2-4 semanas: verificar que Google indexe nuevas URLs y deprecique las viejas.

## Decisiones que Felipe debe resolver

- [ ] ¿Cuántos artículos hay en total en `blog.getplutto.com`? (bloquea estimación de tiempo)
- [ ] ¿Quién aprueba qué artículos archivar vs. migrar?
- [ ] ¿Corte DNS lo hace Felipe o el DevOps de Plutto?

## Verificación

- `npx serve .` y navegar a `/blog/` → todos los artículos cargan
- Cada artículo tiene: schema válido (probar en https://validator.schema.org), canonical correcto, OG image de 1200×630
- `sitemap.xml` incluye todas las URLs nuevas
- `_redirects` tiene una línea 301 por cada slug viejo
- Lighthouse ≥ 90 en performance y accessibility en una muestra de 3 artículos
