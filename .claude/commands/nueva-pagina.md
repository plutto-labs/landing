Crea una nueva página para el sitio basándote en el template de `index.html`.

## Argumento requerido: $ARGUMENTS

El nombre de la página a crear (ej: "precios", "nosotros", "producto", "contacto").

Si no se proporciona argumento, pregunta qué página quiere crear el usuario.

## Pasos

1. Lee `docs/marca.md` para los patrones de componentes
2. Lee `docs/plutto.md` para contexto del producto
3. Lee `index.html` como template base
4. Lee `sitemap.xml` para el estado actual

## Proceso de creación

### 1. Crear el archivo HTML
- Copiar la estructura base de `index.html` (head, nav, footer)
- Actualizar `<title>` con el nombre de la página: `Plutto — [Nombre de página]`
- Actualizar `<meta name="description">` con descripción relevante para la página
- Actualizar meta tags OG y Twitter Card
- Limpiar el contenido entre nav y footer
- Agregar una sección hero mínima con título y descripción placeholder
- Mantener todas las dependencias (Tailwind CDN, Google Fonts, custom.css, main.js)

### 2. Actualizar la navegación
- En la nueva página Y en todas las páginas existentes:
  - Agregar link a la nueva página en el nav desktop
  - Agregar link a la nueva página en el menú móvil
  - Asegurar que los links internos (#features, etc.) apunten a la página correcta (ej: `index.html#features`)

### 3. Actualizar sitemap.xml
- Agregar `<url>` con la nueva página:
```xml
<url>
  <loc>https://getplutto.com/[nombre-pagina].html</loc>
  <lastmod>[fecha de hoy en formato YYYY-MM-DD]</lastmod>
</url>
```

### 4. Mostrar resumen
Indicar:
- Archivo creado
- Cambios en nav (qué archivos se modificaron)
- URL agregada al sitemap
- Qué secciones necesita llenar el usuario

## Reglas
- Seguir todos los patrones de componentes de `docs/marca.md`
- Mantener paridad de dark mode
- Incluir `data-animate` en elementos principales
- Mantener la estructura de comentarios HTML (`<!-- HERO -->`, etc.)
