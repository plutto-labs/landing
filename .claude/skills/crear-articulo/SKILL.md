---
name: crear-articulo
description: Crea un nuevo articulo educativo para el sitio.
argument-hint: "[titulo del articulo]"
---

Crea un nuevo articulo educativo para el sitio usando el template de artículo.

## Argumento requerido: $ARGUMENTS

El titulo del articulo (ej: "Que es KYB", "KYC vs KYB: diferencias clave", "Regulaciones de compliance en Chile").

Si no se proporciona argumento, pregunta que articulo quiere crear el usuario.

## Pasos

1. Copia `templates/articulo.html` como base
2. Lee `docs/plutto.md` para contexto del producto y palabras clave SEO
3. Lee `docs/seo/plan-semanal.md` para ver si el articulo esta en el plan

## Proceso de creacion

### 1. Determinar la ubicacion
- Contenido educativo tipo glosario: `conceptos/[slug].html`
- Contenido tipo blog/opinion/noticia: `blog/[slug].html`
- El slug debe ser descriptivo y usar guiones: `que-es-kyb.html`, `kyc-vs-kyb-diferencias.html`

### 2. Crear el archivo HTML
- Copiar `templates/articulo.html`
- Reemplazar TODOS los placeholders `[...]` con contenido real
- Actualizar canonical, OG y Twitter Card meta tags con la ruta correcta
- Actualizar schemas JSON-LD (Article, BreadcrumbList, FAQPage) con datos reales
- El TL;DR box y el H1 deben tener los IDs `tldr` y `article-title` (ya están en el template) para el schema `speakable`
- Si el articulo menciona directamente Plutto, agregar schema `SoftwareApplication` (ver `docs/marca.md` sección 5)

### 3. Estructura del contenido
El template ya incluye la estructura correcta. Asegurar:
- H1: Titulo del articulo (incluir keyword principal)
- TL;DR box: 2-3 frases que respondan la pregunta directamente
- Intro: 40-60 palabras expandiendo la respuesta directa
- Cada H2 abre con respuesta directa (40-60 palabras) antes de profundizar
- Tabla comparativa si aplica (ya incluida en template, eliminar si no aplica)
- FAQ al final: minimo 3 preguntas relevantes
- Contenido relacionado: 3-5 links internos a otros articulos/paginas
- Fuentes: links externos a fuentes autoritativas
- Target: 1500-2500 palabras para articulos pilar

### 4. Actualizar sitemap.xml
```xml
<url>
  <loc>https://getplutto.com/[ruta]</loc>
  <lastmod>[fecha de hoy YYYY-MM-DD]</lastmod>
</url>
```

### 5. Mostrar resumen
Indicar:
- Archivo creado y ruta
- Keyword principal y secundarias usadas
- Schema markup incluido
- URL agregada al sitemap
- Largo del contenido

### 6. Siguiente paso
Informa al usuario: "Artículo creado. Ejecuta `/auditoria-seo` para validar y luego `/publicar` para desplegarlo."

## Reglas
- Usar `templates/articulo.html` como base — no armar desde cero
- NO usar dark mode (no clases `dark:`)
- Incluir `data-animate` en elementos principales
- HTML semantico: `<article>`, `<section>`, `<table>`, `<ul>`/`<ol>`
- 1 `<h1>` por pagina, nunca saltar niveles de heading
- Cada seccion abre con respuesta directa (optimizacion AEO para featured snippets)
- Usar palabras clave de `docs/plutto.md`
- Tono: profesional pero accesible, sin jerga innecesaria
- Idioma: español latinoamericano
