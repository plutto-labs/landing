---
name: plutto-blog
description: Escribe artículos del blog de Plutto con voz auténtica, pipeline anti-IA y estructura variable.
argument-hint: "[título o tema del artículo]"
---

Escribe artículos para el blog de Plutto (getplutto.com/blog) con voz auténtica chilena, contenido de valor real y cero señales de IA.

## Argumento requerido: $ARGUMENTS

El título o tema del artículo (ej: "Por qué las evaluaciones de proveedores no sirven", "Cómo implementar scoring de proveedores").

Si no se proporciona argumento, pregunta qué artículo quiere escribir el usuario.

## Antes de empezar

1. Lee `docs/plutto.md` para contexto del producto y palabras clave SEO
2. Lee los 4 archivos de referencia en `references/`:
   - `voz-blog.md` - calibración de voz
   - `anti-ai-patterns-blog.md` - detector de contenido artificial
   - `plantillas-blog.md` - templates por formato
   - `referentes-blog.md` - principios de blogs referentes

## Paso 1: Definir el artículo

Pregunta al usuario (si no lo especificó):

| Decisión | Opciones |
|----------|----------|
| **Pilar** | Dolor, Framework, Trinchera, Tutorial/How-to, Análisis de mercado |
| **Formato** | Artículo estándar (800-1500), Guía técnica (1500-2500), Caso de uso (800-1200), Opinión/editorial (600-1000) |
| **Keyword principal** | De `docs/plutto.md` o propuesta del usuario |

### 5 Pilares de contenido (rotación obligatoria)

| Pilar | Descripción | Ejemplo |
|---|---|---|
| Dolor | Problemas reales: Excel, subjetividad, sin trazabilidad | "Por qué tu Excel de proveedores te va a explotar" |
| Framework | Contenido "guardable": matrices, KPIs, scoring, checklists | "Cómo armar un score de proveedores en 4 familias" |
| Trinchera | Historias de builder: qué aprendemos construyendo Plutto | "Lo que aprendimos evaluando 10.000 proveedores" |
| Tutorial/How-to | Guías técnicas, pasos concretos | "Cómo implementar evaluaciones automatizadas" |
| Análisis de mercado | Tendencias regulatorias, comparativas, estado LatAm | "El estado del compliance en minería chilena 2026" |

## Paso 2: Pipeline multi-agente

Ejecutar 3 agentes en secuencia. Esto es CLAVE para calidad.

### Agent 1 - Escritor

Lanza un agente con este prompt:

```
Eres el escritor del blog de Plutto. Lee estos archivos ANTES de escribir:
- .claude/skills/plutto-blog/references/voz-blog.md
- .claude/skills/plutto-blog/references/plantillas-blog.md
- .claude/skills/plutto-blog/references/anti-ai-patterns-blog.md

Tu tarea: escribir un artículo de blog sobre [TEMA].
- Pilar: [PILAR]
- Formato: [FORMATO]
- Keyword: [KEYWORD]

REGLAS CRÍTICAS:
1. Elige una estructura variable de anti-ai-patterns-blog.md (NUNCA hook-desarrollo-cierre por default)
2. Sigue la plantilla del formato elegido en plantillas-blog.md
3. Escribe en la voz de Plutto según voz-blog.md
4. Datos específicos, opinión propia, cero relleno
5. NUNCA uses em dash (—)
6. Subtítulos en chileno natural

Output: el artículo completo en markdown.
```

### Agent 2 - Detector IA

Lanza un agente con este prompt:

```
Eres un detector de contenido generado por IA. Lee COMPLETO:
- .claude/skills/plutto-blog/references/anti-ai-patterns-blog.md

Tu tarea: revisar este artículo y marcar CADA señal de IA.

[PEGAR ARTÍCULO DEL AGENT 1]

Proceso:
1. Pasa el checklist pre-entrega completo (las 15 preguntas)
2. Busca TODAS las señales léxicas de muerte instantánea
3. Busca señales de alerta media
4. Busca señales estructurales
5. Busca señales de tono

Output:
- Marca cada señal encontrada con [!AI] inline
- Lista resumen de señales encontradas
- Veredicto: APROBADO (0-2 señales menores) / REWRITE (3+ señales o cualquier muerte instantánea)
- Si REWRITE: indica exactamente qué reescribir y por qué
```

### Agent 3 - Editor Final

Lanza un agente con este prompt:

```
Eres el editor final del blog de Plutto. Lee:
- .claude/skills/plutto-blog/references/voz-blog.md

Tu tarea: tomar el artículo y el reporte del detector, y producir la versión final.

Artículo: [ARTÍCULO]
Reporte detector: [REPORTE AGENT 2]

Proceso:
1. Reescribe cada parte marcada con [!AI]
2. Verifica que la voz sea consistente con voz-blog.md
3. Revisa que no se hayan introducido nuevas señales de IA al reescribir
4. Ajusta ritmo: variar largo de párrafos y oraciones
5. Verifica que el artículo tome una posición clara

Output: artículo final limpio en markdown, listo para publicar.
```

## Paso 3: Generar el HTML

Una vez aprobado el artículo final:

1. Usa `templates/articulo.html` como base
2. Reemplaza todos los placeholders con el contenido del artículo
3. Guarda en `blog/[slug].html`
4. Actualiza `sitemap.xml`
5. SEO: title tag (50-60 chars), meta description (120-158 chars), headers H2/H3 con keywords naturales
6. Schema JSON-LD: BreadcrumbList + BlogPosting
7. Breadcrumbs HTML en la página

## Paso 4: Mostrar al usuario

Muestra:
- El artículo final
- Resumen del reporte del detector (señales encontradas y resueltas)
- Ruta del archivo creado
- Pregunta si quiere ajustes antes de publicar

## Diferencia clave vs crear-articulo

Este skill (`plutto-blog`) es para escribir el CONTENIDO del artículo con pipeline de calidad anti-IA. El skill `crear-articulo` es para crear la PÁGINA HTML desde el template. Este skill hace ambas cosas: escribe el contenido Y genera el HTML.

## Reglas inamovibles

- Todo en español chileno, tuteo siempre
- NUNCA em dash (—), siempre coma, punto o dos puntos
- NUNCA "En el mundo actual de...", "En este artículo exploraremos...", "Es importante destacar..."
- Datos ultra-específicos: "3.500 proveedores", no "muchos proveedores"
- Opinión propia, no posts informativos genéricos
- Clientes siempre anonimizados: "una minera grande", "una utility"
- Si el detector marca >3 señales de muerte instantánea, el artículo se reescribe completo
