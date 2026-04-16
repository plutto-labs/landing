# Plan 4 — Corte de DNS y Validación

## Contexto

Una vez que los Planes 1 (blog), 2 (formularios+demo) y 3 (checklist técnico) estén ejecutados, falta el corte final: apuntar `getplutto.com` al repo en Cloudflare Pages y hacer que `blog.getplutto.com` redirija al subdirectorio `/blog/`. Este es el paso irreversible a corto plazo, así que toda la validación previa importa.

## Estado actual

| Item | Estado |
|---|---|
| Webflow sigue sirviendo `getplutto.com` | Sí (dominio principal apunta a Webflow) |
| Cloudflare Pages tiene el repo conectado | Sí, pero sin dominio custom |
| `blog.getplutto.com` sigue en Fly.io | Sí — migración en Plan 1 |
| `getplutto-blog.fly.dev` indexado | Sí — genera contenido duplicado |
| Checklist pre-launch | 0% — depende de Planes 1, 2, 3 |

## Arquitectura target

```
getplutto.com (Cloudflare Pages ← plutto-labs/landing repo)
├── /                               ← Homepage
├── /demo                           ← Formulario demo (Plan 2)
├── /sobre-plutto                   ← About (Plan 3)
├── /privacidad                     ← Política de privacidad (Plan 3)
├── /terminos                       ← Términos y condiciones (Plan 3)
├── /mexico                         ← Landing México (hreflang es-MX) — futuro
├── /faq                            ← Preguntas frecuentes
├── /producto/
│   └── que-es-plutto
├── /soluciones/
│   ├── solicitudes
│   ├── debida-diligencia
│   ├── conflicto-interes
│   ├── monitoreo-compliance
│   └── monitoreo-riesgo
├── /industrias/                    ← 7 industrias (diferenciadas en Plan 3)
├── /conceptos/                     ← futuro (kyb, kyc-vs-kyb) — estrategia en docs/estrategia/plan-semanal.md
├── /recursos/
│   ├── guias                      ← Plan 2
│   └── webinars                   ← Plan 2
├── /blog/                          ← Plan 1 (migración)
├── sitemap.xml
└── robots.txt
```

## Redirects a configurar

### En `_redirects` (dentro del repo):
```
/demo-form    /demo    301
/producto     /        301
```
Más un `301` por cada artículo de blog migrado (se agregan en Plan 1, paso 12).

### En Cloudflare Dashboard → Rules → Redirect Rules (fuera del repo):
- **When:** Hostname equals `blog.getplutto.com`
- **Then:** Dynamic redirect to `https://getplutto.com/blog/${http.request.uri.path}` (301)

## Tareas paso a paso

### Fase 1 — Checklist pre-launch (bloqueante — todo debe estar ✅)

**Contenido:**
- [ ] Homepage con contenido real (sin placeholders)
- [ ] `/demo` existe y el formulario dispara leads a HubSpot correctamente (Plan 2)
- [ ] Al menos 1 landing de solución con CTA conectada a `/demo`
- [ ] Todos los links internos funcionan (Plan 3 fase 5 validó el footer)
- [ ] Páginas legales publicadas: `/privacidad`, `/terminos`, `/sobre-plutto` (Plan 3 fase 5)

**SEO Técnico:**
- [ ] `robots.txt` permite bots (GPTBot, Claude-Web, etc.) — ya ok
- [ ] `sitemap.xml` incluye todas las URLs incluyendo `/blog/` y `/faq/` (Plan 3 fase 1)
- [ ] Schema JSON-LD en todas las páginas — ya ok
- [ ] Meta tags completos y titles ≤60 chars (Plan 3 fase 1)
- [ ] `lang="es"` en `<html>` de todos los archivos — ya ok
- [ ] Canonical URLs correctas — ya ok
- [ ] `_redirects` cubre `/demo-form` → `/demo`, `/producto` → `/`, y todos los slugs de blog (Plan 1)

**Técnico:**
- [ ] `_headers` con security headers — ya ok
- [ ] Imágenes con `width`/`height` explícitos y peso optimizado (Plan 3 fase 2)
- [ ] Hero image con `fetchpriority="high"` sin `loading="lazy"` — ya ok
- [ ] PageSpeed Insights: LCP < 2.5s en mobile

**DNS preparación:**
- [ ] Cloudflare Pages conectado al repo `plutto-labs/landing` con último deploy verde
- [ ] Dominio custom `getplutto.com` agregado en Cloudflare Pages (pero no activo aún)
- [ ] SSL/TLS configurado (certificado emitido por Cloudflare)
- [ ] TTL del DNS bajado a 300s **al menos 24h antes del corte**

### Fase 2 — Día del corte

1. **Bajar TTL a 300s** (24h antes) — si no se hizo ya.

2. **Verificar último deploy en Cloudflare Pages**: `plutto-labs/landing` debe estar verde y accesible en la URL temporal (`plutto-landing.pages.dev` o similar).

3. **Cambiar los registros DNS** de `getplutto.com`:
   - Apuntar A/CNAME del root domain a Cloudflare Pages (sigue las instrucciones que muestra Cloudflare Pages al agregar el dominio custom).
   - ⚠️ **Acción irreversible a corto plazo**. Rollback: volver a apuntar DNS a Webflow (inmediato si TTL está a 300s).

4. **Configurar Redirect Rule de `blog.getplutto.com`** en Cloudflare Dashboard (ver arriba).

5. **Verificar propagación** (puede tardar 5-60 min):
   - `dig getplutto.com` → debe apuntar a Cloudflare
   - Abrir `https://getplutto.com` → debe cargar el nuevo sitio
   - Abrir `https://blog.getplutto.com/[cualquier-slug]` → debe redirigir 301 a `https://getplutto.com/blog/[slug]`

6. **Agregar `noindex` a `getplutto-blog.fly.dev`** para evitar contenido duplicado:
   - Agregar `<meta name="robots" content="noindex, nofollow">` en el `<head>` del tema de Fly.io.
   - O idealmente, apagar el servicio de Fly.io una vez verificado que el redirect funciona.

### Fase 3 — Validación post-corte

7. **Navegar el sitio como usuario**: home → cada solución → cada industria → FAQ → /demo → enviar form de prueba. Verificar que todo funciona.

8. **Validar todos los redirects** con `curl -I`:
   - `curl -I https://blog.getplutto.com/que-es-kyb` → debe devolver `301` a `https://getplutto.com/blog/que-es-kyb`
   - `curl -I https://getplutto.com/demo-form` → `301` a `/demo`
   - `curl -I https://getplutto.com/producto` → `301` a `/`

9. **Solicitar indexación en Google Search Console**:
   - Agregar propiedad `https://getplutto.com` (si no existe).
   - Subir `sitemap.xml`.
   - Solicitar indexación manual de las 10-15 URLs principales.

10. **Monitorear 404s en Cloudflare Analytics** durante 48h post-corte. Cualquier spike indica un link interno roto o un redirect que faltó.

11. **Monitorear Search Console** 2-4 semanas:
    - Verificar que URLs nuevas se indexen
    - Verificar que URLs del subdomain queden marcadas como "redirected"
    - Watch "Coverage" report por errores nuevos

## Decisiones que Felipe debe resolver

- [ ] ¿Quién ejecuta el cambio DNS — Felipe o DevOps de Plutto?
- [ ] Ventana de tiempo del corte (idealmente viernes temprano para tener el fin de semana de buffer)
- [ ] ¿Se apaga Fly.io de blog.getplutto.com o se deja con `noindex`?

## Rollback

Si algo sale muy mal en las primeras horas:
1. Volver a apuntar DNS de `getplutto.com` a Webflow (instantáneo con TTL 300s)
2. Revertir Redirect Rule de `blog.getplutto.com` en Cloudflare
3. Diagnosticar y reintentar el corte otro día

## Verificación de éxito

- Sitio nuevo sirviendo desde Cloudflare Pages en `https://getplutto.com` con SSL verde
- Todos los redirects de `blog.getplutto.com` funcionando con 301
- Google Search Console sin errores críticos en 7 días post-corte
- Analytics (GA4 si se instaló en Plan 2) registra tráfico normal
- 0 reportes de links rotos del equipo interno en 7 días
