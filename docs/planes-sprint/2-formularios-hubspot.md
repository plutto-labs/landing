# Plan 2 — Formularios e Integración con HubSpot

## Contexto

El sitio hoy no captura leads en ningún lado. El CTA principal `/demo` está roto (página no existe). No hay analytics ni tracking. Felipe confirmó que solo tienen **HubSpot Sales Hub / CRM** (no Marketing Hub) — por tanto no hay forms nativos; hay que usar **Forms API de HubSpot** o un flujo custom con webhook.

## Estado actual

| Item | Estado |
|---|---|
| Formularios `<form>` en el sitio | 0 (cero) |
| Integración HubSpot | No implementada |
| Página `/demo` | No existe (CTA roto en todas las páginas) |
| Calendly / Google Calendar / HubSpot Meetings | No integrado |
| Analytics (GA4, GTM, Meta Pixel) | No implementado |
| JS custom | `assets/js/main.js` (menu móvil + animaciones, sin tracking) |

## Requisitos de integración

JP está armando la estructura de datos en HubSpot (contactos vs. negocios). Antes de conectar formularios, **Débora debe alinearse con JP** en:

- Propiedades de contacto a enviar (email, nombre, empresa, país, cargo)
- Source / origin: cada formulario debe enviar `origen_form` + `url_origen` (página donde estaba el form) como property custom para poder segmentar: guía descargada vs. webinar vs. demo
- Si el formulario crea contacto, deal, o ambos
- Qué etiquetas (tags/listas) aplicar a cada tipo de conversión

## Arquitectura recomendada

Dado que solo hay Sales Hub, la solución más limpia:

**Form HTML propio en el sitio** → `POST` a **HubSpot Forms API** (endpoint: `https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid}`) vía fetch. Funciona sin Marketing Hub porque Forms API está disponible en todos los planes con key privada.

Alternativa si falla: **Webhook a Zapier/Make** → Zapier crea contacto en HubSpot con los mismos fields.

## Tareas paso a paso

### Fase 1 — Alineación con JP (bloqueante)

1. **Débora agenda 30 min con JP** para confirmar:
   - Esquema de propiedades custom en HubSpot (crear si faltan: `origen_form`, `url_origen`, `tipo_conversion`)
   - Formato exacto de envío (field names)
   - Lista/workflow de destino por tipo de conversión

2. **Documentar acuerdo** en `docs/integraciones/hubspot.md` (crear archivo) con:
   - Portal ID
   - Form GUIDs (uno por tipo de conversión — ver Fase 2)
   - Mapping form field → HubSpot property
   - Listas/workflows que se disparan

3. **Crear API key** en HubSpot (Private App con scope `forms`). Guardar en 1Password, no en el repo.

### Fase 2 — Crear los 3 formularios en HubSpot

4. **Crear 3 forms** en HubSpot con mismo schema base pero distinto GUID:
   - `demo-request` (hero CTA de todas las páginas)
   - `guia-descarga` (una instancia por guía; usar 1 form y diferenciar por `guia_slug` hidden field)
   - `webinar-registro` (una instancia por webinar; diferenciar por `webinar_slug` hidden field)

5. **Campos por defecto**: email (required), nombre, empresa, cargo, país, teléfono (opcional), `url_origen` (hidden, autocompletado con `window.location.href`), `origen_form` (hidden, distinto por form).

### Fase 3 — Crear página `/demo`

6. **Crear `demo/index.html`** desde `templates/landing.html`:
   - Hero con headline + subheadline enfocado en conversión
   - Form a la derecha (desktop) / abajo (mobile)
   - Social proof (logos de clientes + 1 testimonial)
   - FAQ corta (3-4 preguntas)
   - Schema `ContactPage`

7. **Implementar form** con:
   ```html
   <form id="demo-form" data-hubspot-form="demo-request">
     <!-- fields -->
   </form>
   ```

8. **Crear `assets/js/hubspot-forms.js`** con una función genérica:
   ```js
   async function submitHubspotForm(formEl) {
     const formGuid = formEl.dataset.hubspotForm;
     // autocompletar url_origen y origen_form
     // POST a Forms API
     // manejo de éxito / error / redirect a thank-you
   }
   ```
   Los GUIDs y portalId se leen de `window.HS_CONFIG` definido inline en cada página (no en el JS global para evitar secrets en repo público).

9. **Crear `demo/gracias/index.html`** (thank-you page) con confirmación + link a recursos + embed de Calendar para book de reunión inmediato (Google Calendar appointment scheduling link o HubSpot Meetings link — lo que Felipe prefiera).

### Fase 4 — Formularios para guías descargables

10. **Definir 2-3 guías piloto** con Felipe (ej: "Guía KYB para fintechs", "Checklist due diligence proveedores"). Para cada una:
    - PDF en `/assets/pdf/` (nombre sin espacios, kebab-case)
    - Página `recursos/guias/[slug]/index.html` con: hero descriptivo + form de descarga + preview del PDF
    - Thank-you page `recursos/guias/[slug]/gracias.html` que sirve el PDF y dispara el form submit
    - Form guarda `guia_slug` para que marketing vea qué guía descargó cada lead

### Fase 5 — Formularios para webinars

11. **Crear `recursos/webinars/index.html`** (listado) y `recursos/webinars/[slug]/index.html` por webinar. Schema `Event` JSON-LD.

12. **Form de registro** envía `webinar_slug` + `fecha_webinar` como hidden fields.

13. **Thank-you page** con: link al calendario (`.ics` descargable), recordatorio de fecha/hora, link al webinar Zoom/Meet (generado automáticamente por HubSpot workflow si existe, o enviado por email después).

### Fase 6 — Analytics mínimo (opcional, recomendado)

14. **Instalar GA4** vía `gtag.js` en `<head>` de `templates/base.html` (aparece en todas las páginas nuevas).

15. **Track eventos de conversión**: `form_submit` con params `form_type` y `page_url` en cada submit exitoso.

16. **Ver resultados** en GA4 → Engagement → Events.

## Decisiones que Felipe debe resolver

- [ ] ¿Demo usa Calendly, Google Calendar appointment, o HubSpot Meetings para book inmediato?
- [ ] ¿Qué guías se crean primero (contenido ya existe o hay que escribirlo)?
- [ ] ¿Primer webinar ya tiene fecha y tema?
- [ ] ¿GA4 se instala ahora o espera a terminar migración?

## Verificación

- Submitear cada form en staging con email real → verificar que aparece en HubSpot con todos los fields correctos
- Verificar que `url_origen` se captura y permite filtrar en HubSpot
- `npx serve .` + Lighthouse en `/demo/` → performance ≥ 90, accesibilidad ≥ 95
- Verificar que form funciona sin JS (progressive enhancement — al menos que no rompa visualmente)
- Test en mobile: tap targets de inputs ≥ 48px, keyboard correcta (email → `inputmode="email"`)
