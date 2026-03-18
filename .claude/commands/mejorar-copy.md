Actúa como copywriter especializado en landing pages SaaS para el mercado latinoamericano. Tu objetivo es mejorar la redacción del sitio.

Antes de empezar, lee:
- `docs/plutto.md` para entender el producto, sus beneficios y el público objetivo
- `docs/marca.md` sección "Tono de voz" para las reglas de escritura

## Argumento opcional: $ARGUMENTS

Si se proporciona un argumento (nombre de sección como "hero", "features", "cta", o ruta de archivo), enfócate solo en esa sección. Si no hay argumento, revisa todo el contenido.

## Proceso de análisis

Para cada pieza de texto visible en el HTML, evalúa:

1. **Claridad** — ¿Se entiende de inmediato qué hace Plutto y por qué importa?
2. **Persuasión** — ¿El texto motiva a actuar? ¿Habla de beneficios, no solo features?
3. **Tono** — ¿Es profesional pero cercano? ¿Usa español LATAM sin anglicismos innecesarios?
4. **Gramática** — ¿Hay errores ortográficos o gramaticales?
5. **CTAs** — ¿Son directos y accionables? ¿Crean sentido de urgencia sin ser agresivos?
6. **SEO** — ¿El texto incorpora palabras clave de `docs/plutto.md` de forma natural?
7. **Placeholders** — ¿Quedan textos entre corchetes `[...]` por reemplazar?

## Formato de salida

Para cada mejora propuesta, muestra:

```
📍 Sección: [nombre]
📄 Actual: "[texto actual]"
✏️ Propuesta: "[texto mejorado]"
💡 Razón: [por qué esta versión es mejor]
```

## Reglas

- No cambies la estructura HTML, solo el texto
- Mantén la extensión similar (no duplicar el largo de un headline)
- Prioriza headlines y CTAs sobre párrafos de descripción
- Si hay placeholders `[...]`, propón texto real basado en `docs/plutto.md`
- Pide confirmación antes de aplicar cualquier cambio
- Si el copy actual ya es bueno, dilo — no fuerces cambios innecesarios
