# Planes del sprint — Landing Plutto

> **Esta carpeta es la fuente de verdad de ejecución para Débora.**
> Los docs antiguos (`docs/seo/migracion.md`, tareas de G2 en `plan-semanal.md`) ya migraron aquí. La estrategia de mediano plazo queda en `docs/estrategia/`.

## Contexto rápido

Después del sprint de Débora (abril 2026, 15 páginas creadas en 1 día), Felipe hizo auditoría y quedaron 5 bloques de trabajo. Estos 5 planes los encapsulan bajo la regla "80% planificación, 20% ejecución".

## Qué plan abrir según lo que vayas a hacer

| Lo que vas a hacer | Abre |
|---|---|
| Migrar artículos de `blog.getplutto.com` | [Plan 1](./1-migracion-blog.md) |
| Crear `/demo`, integrar HubSpot, armar forms de guías/webinars | [Plan 2](./2-formularios-hubspot.md) |
| Arreglar titles, imágenes, CSS, páginas legales, diferenciar industrias | [Plan 3](./3-checklist-tecnico.md) |
| Hacer el corte DNS de Webflow → Cloudflare y de `blog.getplutto.com` | [Plan 4](./4-corte-dns.md) |
| Crear perfiles en G2, Capterra, ComparaSoftware y pedir reviews | [Plan 5](./5-directorios-g2-capterra.md) |

## Orden de ejecución recomendado

1. **Plan 5** (en paralelo desde hoy) — 100% manual, no bloquea ejecución del resto.
2. **Plan 3 (Fases 1-2)** — Quick wins + imágenes. Limpia deuda técnica antes de agregar más features.
3. **Plan 2** — Crear `/demo` (CTA principal roto hoy) + integrar HubSpot con JP.
4. **Plan 3 (Fases 3-5)** — Limpieza CSS, diferenciación de industrias, páginas legales.
5. **Plan 1** — Migración del blog (el más grande; se puede iterar artículo por artículo en paralelo con lo demás).
6. **Plan 4** — Corte de DNS. Solo cuando Planes 1, 2, 3 estén ✅.

## Reglas de oro (aplican a los 3 planes)

- Leer `CLAUDE.md` y `docs/marca.md` antes de tocar código
- Usar templates en `templates/` (no escribir HTML desde cero)
- Un commit por tarea terminada; mensajes descriptivos en español
- Usar skill `/publicar` al final del día (valida checklist + hace push)
- No tocar `_headers` sin autorización

## Flujo diario sugerido

1. Débora abre Claude Code en el repo
2. Corre `/siguiente-tarea` para saber qué toca
3. Abre el plan correspondiente en esta carpeta
4. Trabaja una tarea a la vez
5. Commit individual al terminar cada tarea
6. `/publicar` al final del día

## Sync semanal con Felipe

15 min:
- Revisar qué tareas están hechas
- Desbloquear decisiones pendientes (cada plan tiene su sección "Decisiones que Felipe debe resolver")
- Ajustar prioridades si algo cambió

## Cómo se relacionan estos planes con los otros docs

| Doc | Qué es | Cuándo leerlo |
|---|---|---|
| **`planes-sprint/`** | **Ejecución del sprint actual (fuente de verdad)** | **Todos los días** |
| `docs/EMPIEZA-AQUI.md` | Onboarding al repo y setup inicial | Una vez al comenzar |
| `docs/marca.md` | Design system completo (colores, componentes, anti-IA) | Antes de tocar cada página |
| `docs/plutto.md` | Contexto de producto y keywords SEO | Al escribir copy o definir metadata |
| `docs/estrategia/auditoria.md` | Diagnóstico SEO/AEO histórico (marzo 2026) | Como contexto — no es plan de acción |
| `docs/estrategia/plan-semanal.md` | Estrategia SEO/AEO de mediano plazo: keywords, briefs de artículos pilar, competencia | Cuando definas contenido nuevo o URLs |
| `docs/contexto-rediseno-home.md` | Mapeo de assets y decisiones del rediseño del home | Solo si tocas el home |
| `docs/templates/brief-pagina.md` | Template de brief para páginas nuevas | Antes de crear cada página |
