---
name: siguiente-tarea
description: Te dice exactamente qué página o artículo crear a continuación según el plan SEO, y el comando para hacerlo.
---

Te dice qué tarea hacer a continuación según el plan SEO semanal y el estado actual del sitio.

## Pasos

### 1. Leer el plan y el estado actual

Lee estos archivos:
1. `docs/seo/plan-semanal.md` — el plan completo con todas las tareas
2. `docs/seo/auditoria.md` — las 10 acciones de mayor ROI

Escanea qué contenido ya existe:
- `soluciones/*.html`
- `conceptos/*.html`
- `blog/*.html`
- `industrias/*.html`
- `index.html` (secciones existentes)
- `sitemap.xml` (URLs publicadas)

### 2. Cruzar plan vs realidad

Para cada tarea del plan, determina:
- **Completada**: el archivo HTML existe y está en sitemap.xml
- **Pendiente**: no existe aún
- **En progreso**: el archivo existe pero tiene placeholders `[...]`

### 3. Determinar la siguiente tarea

Prioriza en este orden:
1. Arreglos técnicos críticos del plan (lang, schema, OG tags del homepage)
2. Artículos de mayor impacto SEO (los que tienen keywords sin competencia local)
3. Landing pages de soluciones
4. Contenido educativo (conceptos/)
5. Páginas de industria

### 4. Mostrar el resultado

Formato:

```
📊 Progreso del plan SEO
════════════════════════
Completado: 2/10 acciones prioritarias

✅ Arreglos técnicos homepage (lang, meta tags)
✅ Artículo: Qué es KYB
⬚ Artículo: KYC vs KYB diferencias
⬚ Landing: Due diligence proveedores
⬚ Perfil en G2 (requiere acción manual)
⬚ Perfil en Capterra (requiere acción manual)
⬚ Artículo: Regulaciones compliance Chile 2026
⬚ Landing: Compliance proveedores
⬚ Migración blog a /blog/
⬚ Artículo: Onboarding digital empresas

═══════════════════════════════════════
👉 Siguiente tarea: Crear artículo "KYC vs KYB: Diferencias clave"

   Keyword principal: "KYC vs KYB"
   Impacto: Alto — sin competencia local en español
   Ejecuta: /crear-articulo KYC vs KYB: Diferencias clave para empresas en Chile

   Después de crear: /auditoria-seo → /publicar
```

### 5. Si el usuario quiere otra tarea

Si dice "ya lo hice" o "quiero otra", avanza a la siguiente tarea pendiente.
Si dice "quiero elegir", muestra la lista completa de pendientes con el comando para cada una.

## Reglas
- Las tareas que requieren acción manual (crear perfil en G2, Capterra) se marcan pero no se pueden ejecutar con un skill — indicar qué hacer manualmente
- Siempre mostrar el comando exacto a ejecutar para la siguiente tarea
- Siempre mostrar el flujo post-creación: `/auditoria-seo` → `/publicar`
- No inventar tareas que no estén en el plan — ceñirse a `docs/seo/plan-semanal.md`
