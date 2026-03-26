# Estrategia de Migración - getplutto.com

Cómo migrar de Webflow a HTML estático (Cloudflare Pages) sin perder tráfico ni posicionamiento.

---

## 1. Estado Actual

### Sitio principal (Webflow)
| URL | Estado en Google | Acción |
|-----|-----------------|--------|
| `getplutto.com/` | Indexada, rankea bien para branded | Migrar primero |
| `getplutto.com/producto` | Probablemente no indexada | Migrar como parte de homepage (no necesita página separada) |
| `getplutto.com/precios` | Probablemente no indexada | Migrar si existe contenido útil |
| `getplutto.com/mexico` | Existe | Migrar con hreflang `es-MX` |
| `getplutto.com/demo-form` | Indexada | Migrar a `/demo` + redirect 301 |

### Blog (Fly.io - `blog.getplutto.com`)
| URL | Estado | Acción |
|-----|--------|--------|
| `blog.getplutto.com/` | Indexada | Migrar a `getplutto.com/blog/` |
| `blog.getplutto.com/[articulos]` | ~6-8 artículos indexados | Migrar cada uno a `getplutto.com/blog/[slug]` |
| `blog.getplutto.com/tag/[slug]` | Template roto indexado | Bloquear con noindex + redirect a /blog |
| `getplutto-blog.fly.dev` | Indexada (contenido duplicado) | Bloquear acceso público |

### DNS actual
- `getplutto.com` -> Webflow
- `blog.getplutto.com` -> Fly.io
- Dominio registrado en: verificar (probablemente Cloudflare o registrar apuntado a Cloudflare)

---

## 2. Arquitectura Target

```
getplutto.com (Cloudflare Pages <- plutto-labs/landing repo)
├── /                               <- Homepage
├── /demo                           <- Formulario demo
├── /mexico                         <- Landing México (hreflang es-MX)
├── /soluciones/
│   ├── due-diligence-proveedores   <- NUEVA
│   └── compliance-proveedores      <- NUEVA
├── /conceptos/
│   ├── que-es-kyb                  <- NUEVA
│   ├── kyc-vs-kyb                  <- NUEVA
│   ├── regulaciones-proveedores-chile <- NUEVA
│   └── due-diligence-proveedores   <- NUEVA
├── /industrias/                    <- FUTURO (Mes 4+)
├── /blog/
│   ├── index                       <- Migrado de blog.getplutto.com
│   └── [slug]                      <- Artículos migrados
├── /preguntas-frecuentes           <- NUEVA
├── /terminos
├── /privacidad
├── sitemap.xml
└── robots.txt
```

---

## 3. Plan de Redirects

Cloudflare Pages usa el archivo `_redirects` en la raíz del repo. Formato: `[url-vieja] [url-nueva] [código]`

### Redirects del sitio principal

```
# _redirects

# Páginas renombradas
/demo-form    /demo    301
/producto     /        301

# Blog: subdominio -> subdirectorio
# NOTA: Estos redirects se configuran en el DNS/Cloudflare, no en _redirects
# Ver sección "Migración del Blog" más abajo
```

### Redirects del blog (en Cloudflare DNS/Workers)

Para que `blog.getplutto.com/*` redirija a `getplutto.com/blog/*`, hay que configurar:

**Opción A - Cloudflare Redirect Rules (recomendado):**
1. En Cloudflare Dashboard -> `getplutto.com` -> Rules -> Redirect Rules
2. Crear regla:
   - When: Hostname equals `blog.getplutto.com`
   - Then: Dynamic redirect to `https://getplutto.com/blog/${http.request.uri.path}` (301)

**Opción B - Cloudflare Worker:**
```javascript
// Solo si Opción A no es suficiente
addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.hostname === 'blog.getplutto.com') {
    url.hostname = 'getplutto.com';
    url.pathname = '/blog' + url.pathname;
    return event.respondWith(Response.redirect(url.toString(), 301));
  }
});
```

### Bloquear Fly.io duplicado

En la instancia Fly.io, agregar un redirect 301 de `getplutto-blog.fly.dev` a `getplutto.com/blog`:

```toml
# fly.toml - agregar
[[services.http_checks]]
  # O simplemente: en el app, si recibe host getplutto-blog.fly.dev -> redirect 301
```

Alternativa más simple: agregar meta noindex en todas las páginas servidas desde `*.fly.dev`:
```html
<meta name="robots" content="noindex, nofollow">
```

---

## 4. Migración del Blog - Paso a Paso

### Fase 1: Preparar contenido (antes de cambiar DNS)

1. **Inventariar artículos actuales:**
   - Abrir `blog.getplutto.com` y listar todos los artículos con sus URLs
   - Para cada artículo: copiar título, contenido, fecha de publicación, imágenes

2. **Crear estructura en el repo:**
   ```
   landing/
   └── blog/
       ├── index.html          <- Índice del blog
       ├── articulo-uno.html   <- Cada artículo como HTML
       └── assets/             <- Imágenes del blog (si las hay)
   ```

3. **Recrear cada artículo con Claude Code:**
   - Usar el TEMPLATE-PAGINA.md con tipo "artículo"
   - Mantener las mismas URLs (slugs) que tenía el blog
   - Agregar schema Article + FAQPage si aplica
   - Optimizar meta tags y headings

4. **Crear mapa de redirects** para cada artículo:
   ```
   blog.getplutto.com/mi-articulo -> getplutto.com/blog/mi-articulo
   ```

### Fase 2: Ejecutar migración

5. **Deploy del nuevo sitio** con blog incluido (push al repo -> Cloudflare Pages)

6. **Configurar redirects en Cloudflare** (ver Sección 3)

7. **Actualizar DNS:**
   - `blog.getplutto.com` -> puede apuntar a Cloudflare Pages con redirect rule
   - O simplemente dejar el redirect rule a nivel de Cloudflare

8. **En Google Search Console:**
   - Solicitar indexación de las nuevas URLs (`getplutto.com/blog/*`)
   - Monitorear que las URLs antiguas (`blog.getplutto.com/*`) se desindexen
   - Usar la herramienta "Cambio de dirección" si GSC lo permite para subdominios

### Fase 3: Verificar y limpiar

9. **Verificar redirects** - probar cada URL antigua y confirmar que redirige correctamente
10. **Monitorear 404s** en Cloudflare Analytics los primeros 7 días
11. **Desactivar instancia Fly.io** una vez que los redirects estén confirmados (o mantenerla solo como redirect)

---

## 5. Orden de Migración

### Semana 1 (28 mar - 3 abr): Construir homepage + páginas base

| Día | Tarea | Archivo |
|-----|-------|---------|
| 1 | Completar homepage con contenido real | `index.html` |
| 1 | Configurar robots.txt optimizado | `robots.txt` |
| 1 | Agregar schema Organization + SoftwareApplication | `index.html` |
| 2 | Crear página demo (formulario) | `demo.html` |
| 2 | Crear página México con hreflang | `mexico.html` |
| 3 | Configurar `_redirects` iniciales | `_redirects` |
| 3 | Actualizar sitemap.xml | `sitemap.xml` |

### Semana 2 (4-10 abr): Landing pages de solución + conceptos

| Día | Tarea | Archivo |
|-----|-------|---------|
| 4-5 | Landing Due Diligence | `soluciones/due-diligence-proveedores.html` |
| 6-7 | Landing Compliance | `soluciones/compliance-proveedores.html` |
| 8 | Artículo "¿Qué es KYB?" | `conceptos/que-es-kyb.html` |
| 9 | Artículo "KYC vs KYB" | `conceptos/kyc-vs-kyb.html` |
| 10 | Actualizar nav + footer + sitemap | todos |

### Semana 3 (11-14 abr): Blog + migración DNS

| Día | Tarea |
|-----|-------|
| 11-12 | Migrar artículos del blog |
| 13 | Configurar redirects en Cloudflare |
| 13 | Cambiar DNS: getplutto.com -> Cloudflare Pages |
| 14 | Verificar indexación, monitorear 404s |
| 14 | Solicitar indexación de nuevas URLs en GSC |

---

## 6. Checklist Pre-Launch

Antes de cambiar el DNS de Webflow a Cloudflare Pages:

### Contenido
- [ ] Homepage completa con contenido real (no placeholders)
- [ ] Formulario de demo funcional (o redirect a Calendly/similar)
- [ ] Landing México con hreflang configurado
- [ ] Al menos 1 landing de solución publicada
- [ ] Todos los links internos funcionan

### SEO Técnico
- [ ] `robots.txt` permite crawlers (incluyendo bots AI)
- [ ] `sitemap.xml` actualizado con todas las URLs
- [ ] Schema JSON-LD en homepage (Organization + SoftwareApplication)
- [ ] Meta tags completos en todas las páginas (title, description, og, twitter)
- [ ] `lang="es"` en `<html>`
- [ ] Canonical URLs correctas
- [ ] `_redirects` cubre todas las URLs que cambian

### Técnico
- [ ] `_headers` con security headers (CSP, HSTS, X-Frame-Options)
- [ ] Imágenes en WebP con width/height
- [ ] Hero image sin lazy-load (`fetchpriority="high"`)
- [ ] CSS y JS mínimos (Tailwind CDN + custom.css + main.js)
- [ ] Probar en PageSpeed Insights: LCP < 2.5s

### DNS
- [ ] Backup del DNS actual (screenshot de registros)
- [ ] Cloudflare Pages configurado con dominio custom
- [ ] SSL/TLS configurado

## 7. Checklist Post-Launch

Primeras 48 horas después del cambio de DNS:

- [ ] Verificar que `getplutto.com` carga correctamente
- [ ] Verificar que `getplutto.com/demo` funciona
- [ ] Probar todos los redirects (especialmente `/demo-form` -> `/demo`)
- [ ] Probar en mobile
- [ ] En Google Search Console: solicitar indexación de homepage
- [ ] En Google Search Console: verificar que no hay aumento de 404s
- [ ] Probar og:image compartiendo en LinkedIn/WhatsApp
- [ ] Monitorear Cloudflare Analytics por 404s inesperados

Primera semana:
- [ ] Verificar que Google está indexando las nuevas URLs (`site:getplutto.com`)
- [ ] Verificar que las URLs antiguas de Webflow no generan 404
- [ ] Si hay blog migrado: verificar redirects de `blog.getplutto.com`

---

## 8. Rollback

Si algo sale mal después del cambio de DNS:

1. **Cambiar DNS de vuelta a Webflow** - esto es inmediato si el TTL es bajo
2. Los redirects en `_redirects` no aplican porque el tráfico ya no llega a Cloudflare Pages
3. Investigar el problema, corregir, y volver a intentar

**Recomendación:** Antes de cambiar el DNS, poner TTL bajo (60-300 segundos) para que el rollback sea rápido.
