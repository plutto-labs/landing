---
name: migrar-blog
description: Migra artículos del subdomain blog.getplutto.com a /blog/ del sitio principal. Crea redirects 301 y actualiza sitemap.
---

Migra artículos del blog en subdomain (blog.getplutto.com) al directorio `/blog/` del sitio principal para consolidar autoridad SEO.

## Contexto

Lee `docs/seo/migracion.md` para el plan completo de migración. El blog actual en subdomain diluye la autoridad del dominio principal — Google trata subdominios como sitios separados.

## Pasos

### 1. Leer el plan de migración
- Lee `docs/seo/migracion.md` para entender la estrategia
- Lee `docs/marca.md` para patrones de componentes
- Lee `docs/plutto.md` para keywords

### 2. Inventariar contenido actual
- Listar los archivos existentes en `blog/`
- Revisar `_redirects` para ver qué redirects ya existen
- Revisar `sitemap.xml` para ver qué URLs de blog están incluidas

### 3. Crear la página del artículo
Para cada artículo a migrar:
- Crear archivo en `blog/[slug].html` siguiendo los mismos patrones que `/crear-articulo`
- Incluir: TL;DR box, schema Article, breadcrumbs, FAQ si aplica
- Adaptar el contenido al formato y diseño del sitio principal
- Mantener la misma keyword principal del artículo original

### 4. Configurar redirects
- Agregar regla 301 en `_redirects`:
```
/blog/old-slug /blog/new-slug 301
```
- Si hay URLs del subdomain que linkeaban al blog, documentar qué redirects DNS serán necesarios (esto requiere configuración en Cloudflare, no se puede hacer desde el repo)

### 5. Actualizar sitemap
- Agregar URLs de blog migrado a `sitemap.xml`
- Usar `<lastmod>` con la fecha de migración

### 6. Generar checklist de migración
```
📋 Migración de blog
═══════════════════
Artículos migrados: 3/8
  ✅ que-es-kyb.html
  ✅ kyc-vs-kyb.html
  ✅ compliance-chile-2026.html
  ⬚ [pendientes...]

Redirects configurados: 3
Sitemap actualizado: ✅

⚠️ Pendiente (requiere acción en Cloudflare):
  - Configurar redirect DNS de blog.getplutto.com → getplutto.com/blog/
```

## Reglas
- NO eliminar contenido del blog existente sin confirmación
- Seguir todos los patrones de `docs/marca.md`
- Cada artículo migrado debe pasar el checklist de `/auditoria-seo`
- Informar qué acciones requieren configuración fuera del repo (DNS, Cloudflare)

## Siguiente paso
"Migración completada. Ejecuta `/auditoria-seo` para validar y luego `/publicar` para desplegar."
