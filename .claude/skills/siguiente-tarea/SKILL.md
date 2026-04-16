---
name: siguiente-tarea
description: Te dice exactamente qué hacer a continuación según el estado de los planes de sprint.
---

Determina la siguiente tarea a ejecutar leyendo los 5 planes de sprint en `docs/planes-sprint/`.

## Pasos

### 1. Leer el estado actual

Lee en orden:
1. `docs/planes-sprint/README.md` — mapa y orden recomendado
2. Los 5 planes: `1-migracion-blog.md`, `2-formularios-hubspot.md`, `3-checklist-tecnico.md`, `4-corte-dns.md`, `5-directorios-g2-capterra.md`

Identifica para cada plan cuáles tareas están marcadas hechas (el usuario debe ir agregando ✅ o fechas a medida que completa).

### 2. Orden de prioridad

Respetar el orden recomendado del README:
1. **Plan 5** — ejecución manual en paralelo desde día 1 (G2, Capterra, ComparaSoftware)
2. **Plan 3 fases 1-2** — quick wins + imágenes
3. **Plan 2** — formularios + HubSpot + `/demo`
4. **Plan 3 fases 3-5** — CSS, industrias, páginas legales
5. **Plan 1** — migración del blog (iterativo, puede correr en paralelo)
6. **Plan 4** — corte DNS (solo cuando 1, 2, 3 estén ✅)

### 3. Decidir siguiente tarea

- Si Plan 3 fases 1-2 tiene tareas pendientes → esas primero
- Si Plan 2 no tiene `/demo` creado → prioridad máxima (CTA roto hoy)
- Plan 5 puede hacerse en cualquier momento si Débora tiene tiempo manual disponible
- Plan 4 solo se muestra si los 3 planes principales están ✅

### 4. Mostrar el resultado

```
📊 Estado de los planes de sprint
══════════════════════════════════════════

Plan 1 — Blog:            [estado, N/M tareas hechas]
Plan 2 — Forms + HubSpot: [estado]
Plan 3 — Checklist:       [estado]
Plan 4 — Corte DNS:       [estado, bloqueado si Planes 1-3 no están listos]
Plan 5 — Directorios:     [estado — manual, paralelo]

══════════════════════════════════════════
👉 Siguiente tarea (Plan X, Fase Y): [nombre tarea]

   [Descripción breve + por qué es la siguiente]
   Archivos a tocar: [rutas]
   Después: commit + /publicar
```

### 5. Si el usuario pide otra tarea

- "ya lo hice" → avanzar a la siguiente pendiente del mismo plan
- "quiero elegir" → mostrar todas las tareas pendientes de todos los planes desbloqueados
- "quiero ver todo" → resumen de los 5 planes con conteo pendientes

## Reglas

- Siempre leer los planes de `docs/planes-sprint/` — nunca asumir estado desde conversaciones anteriores
- No inventar tareas que no estén en los planes
- Respetar bloqueos: si el Plan 2 requiere alineación con JP (tarea 1), no mostrar tareas posteriores del mismo plan hasta confirmar
- Siempre terminar con el comando exacto a ejecutar y el flujo post-creación: `/publicar`
- Decisiones marcadas "Felipe debe resolver" en cada plan bloquean las tareas que dependen de ellas — señalar al usuario cuando corresponda
- Para contexto estratégico (keywords, artículos pilar futuros) remitir a `docs/estrategia/plan-semanal.md` — no es parte del sprint actual
