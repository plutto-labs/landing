Crea un nuevo articulo educativo para el sitio.

## Argumento requerido: $ARGUMENTS

El titulo del articulo (ej: "Que es KYB", "KYC vs KYB: diferencias clave", "Regulaciones de compliance en Chile").

Si no se proporciona argumento, pregunta que articulo quiere crear el usuario.

## Pasos

1. Lee `docs/marca.md` para los patrones de componentes y schema markup
2. Lee `docs/plutto.md` para contexto del producto y palabras clave SEO
3. Lee `docs/seo/plan-semanal.md` para ver si el articulo esta en el plan
4. Lee `index.html` como referencia de estructura base (head, nav, footer)

## Proceso de creacion

### 1. Determinar la ubicacion
- Contenido educativo tipo glosario: `conceptos/[slug].html`
- Contenido tipo blog/opinion/noticia: `blog/[slug].html`
- El slug debe ser descriptivo y usar guiones: `que-es-kyb.html`, `kyc-vs-kyb-diferencias.html`

### 2. Crear el archivo HTML
- Copiar estructura base de `index.html` (head con Tailwind config, nav, footer)
- Actualizar `<title>`: `[Titulo del Articulo] | Plutto`
- Actualizar `<meta name="description">` (120-158 chars, incluir keyword principal)
- Actualizar canonical, OG y Twitter Card meta tags
- Agregar schema JSON-LD tipo `Article` (ver template en `docs/marca.md`)
- Agregar breadcrumbs (HTML + schema `BreadcrumbList`)

### 3. Estructura del contenido
- Breadcrumb: Inicio > Conceptos/Blog > Titulo
- H1: Titulo del articulo (incluir keyword principal)
- Parrafo introductorio: 40-60 palabras que respondan la pregunta directamente (optimizacion AEO)
- H2 por cada seccion principal
- H3 para sub-secciones
- Tabla comparativa si aplica (HTML nativo `<table>`, no divs)
- Lista de puntos clave con `<ul>`/`<ol>` nativo
- Seccion FAQ al final con schema `FAQPage` si aplica
- CTA al final: "Automatiza tu compliance con Plutto"

### 4. Actualizar sitemap.xml
- Agregar `<url>` con la nueva pagina:
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
- Largo del contenido (target: 1500-2500 palabras para articulos pilar)

## Reglas
- Seguir todos los patrones de `docs/marca.md`
- NO usar dark mode (no clases `dark:`)
- Incluir `data-animate` en elementos principales
- HTML semantico: `<article>`, `<section>`, `<table>`, `<ul>`/`<ol>`
- 1 `<h1>` por pagina, nunca saltar niveles de heading
- Cada seccion abre con respuesta directa (optimizacion AEO para featured snippets)
- Usar palabras clave de `docs/plutto.md`
- Tono: profesional pero accesible, sin jerga innecesaria
- Idioma: español latinoamericano
