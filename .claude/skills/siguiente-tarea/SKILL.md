---
name: siguiente-tarea
description: Te dice exactamente qué hacer a continuación según el estado de la migración y el plan SEO.
---

Determina la siguiente tarea a ejecutar leyendo el estado actual de la migración y respetando los gates de fase.

## Pasos

### 1. Leer el estado de la migración

Lee `docs/seo/migracion.md` completo. Es la fuente de verdad.

Para cada fase (0 al 5), determina su estado:
- **Bloqueada** 🔴: tiene tareas en 🔴 Pendiente
- **En progreso** 🟡: tiene mezcla de 🟡 y 🔴
- **Completa** 🟢: todas las tareas en 🟢 Completado

### 2. Identificar la fase activa

La fase activa es la primera fase que NO está completa (🟢).

### 3. Aplicar gate de fase

**Gate estricto:** No se puede avanzar a la siguiente fase hasta completar la actual.

| Fase activa | Qué mostrar | Qué NO mostrar |
|-------------|-------------|----------------|
| Fase 0 | Tareas de Fase 0 (pedir brand-guide, referentes, definir diseño) | Nada de fases siguientes |
| Fase 1 | Tareas de Fase 1 (templates, CSS) | Ninguna página de contenido |
| Fase 2 | Tareas de Fase 2 (páginas base) | Landings SEO ni artículos |
| Fase 3 | Tareas de Fase 3 + prioridad desde plan-semanal.md | Blog ni DNS |
| Fase 4 | Tareas de Fase 4 (blog) | DNS cutover |
| Fase 5 | Checklist pre-launch y DNS | — |

**Excepción:** Las tareas de directorios (G2, Capterra, ComparaSoftware) son paralelas — siempre mostrarlas si están pendientes, sin importar la fase activa.

### 4. Si la fase activa es 0 o 1 (diseño)

Mostrar este mensaje especial:

```
🚧 Gate activo: diseño no definido
════════════════════════════════════
Antes de crear cualquier página, necesitamos tener el diseño listo.

Estado de la migración:
  Fase 0 — Definición Visual: [estado]
  Fase 1 — Sistema de Diseño: [estado]

👉 Siguiente tarea: [primera tarea pendiente de la fase activa]

[Si Fase 0 activa]:
  Necesito que me compartas:
  1. El brand-guide en PDF (adjúntalo en el chat)
  2. URLs o imágenes de sitios de referencia visual

[Si Fase 1 activa]:
  Tengo el diseño definido en docs/marca.md.
  Ejecuta: /nueva-seccion [o el skill correspondiente]
```

### 5. Si la fase activa es 2, 3, 4 o 5

Escanear qué archivos ya existen:
- `index.html`, `demo.html`, `mexico.html`, `preguntas-frecuentes.html`
- `soluciones/*.html`, `conceptos/*.html`, `blog/*.html`
- `sitemap.xml` (para confirmar páginas publicadas)

Cruzar contra las tareas pendientes en `migracion.md`.

Para Fase 3: consultar `docs/seo/plan-semanal.md` para ordenar las páginas pendientes por prioridad SEO (keywords sin competencia local van primero).

### 6. Mostrar el resultado

```
📊 Estado de la migración
══════════════════════════════════════════

  Fase 0 — Definición Visual:    🟢 Completa
  Fase 1 — Sistema de Diseño:    🟢 Completa
  Fase 2 — Páginas Base:         🟡 En progreso (3/7 completadas)
  Fase 3 — Landings + Conceptos: 🔴 Pendiente
  Fase 4 — Blog:                 🔴 Pendiente
  Fase 5 — DNS Cutover:          🔴 Pendiente

Paralelo (sin bloqueo de fase):
  ⬚ Perfil en G2 — requiere acción manual
  ⬚ Perfil en Capterra — requiere acción manual
  ⬚ Perfil en ComparaSoftware — requiere acción manual

══════════════════════════════════════════
👉 Siguiente tarea (Fase 2): [nombre de tarea]

   [Descripción breve de qué es y por qué]
   Ejecuta: /nueva-pagina [o el comando exacto]

   Después: /publicar
```

### 7. Si el usuario quiere otra tarea

- "ya lo hice" → avanzar a la siguiente pendiente de la misma fase
- "quiero elegir" → mostrar todas las tareas pendientes de la fase activa con comando para cada una
- "quiero ver todo" → mostrar el estado completo de todas las fases

## Reglas

- Siempre leer `migracion.md` primero — nunca asumir estado desde conversaciones anteriores
- Actualizar el estado en `migracion.md` cuando el usuario confirme que completó una tarea
- Las tareas de directorios (G2, Capterra) son manuales — indicar el link y pasos, no hay skill para ejecutarlas
- Siempre terminar con el comando exacto a ejecutar y el flujo post-creación: `/publicar`
- No inventar tareas que no estén en `migracion.md` o `plan-semanal.md`
- Si hay ambigüedad sobre si una tarea está completa, verificar que el archivo HTML existe Y está en `sitemap.xml`
