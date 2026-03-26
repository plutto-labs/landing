---
name: nueva-pagina
description: Crea una nueva página para el sitio basándote en los templates HTML.
argument-hint: "[nombre de la pagina]"
---

Crea una nueva página para el sitio usando los templates HTML pre-armados.

## Argumento requerido: $ARGUMENTS

El nombre de la página a crear (ej: "precios", "nosotros", "producto", "contacto").

Si no se proporciona argumento, pregunta qué página quiere crear el usuario.

## Pasos

1. Lee `docs/plutto.md` para contexto del producto y keywords
2. Determina el tipo de página:
   - **Landing page** (soluciones, industrias, producto): Copia `templates/landing.html`
   - **Página genérica** (contacto, precios, about): Copia `templates/base.html`
3. Lee `sitemap.xml` para el estado actual

## Proceso de creación

### 1. Crear el archivo HTML
- Copiar el template correspondiente
- Reemplazar TODOS los placeholders `[...]` con contenido real
- Determinar la ruta correcta (ej: `soluciones/nombre.html`, `nombre.html`)
- Para componentes no incluidos en el template, consultar `docs/marca.md` sección 4

### 2. Actualizar la navegación
- En la nueva página Y en todas las páginas existentes:
  - Agregar link a la nueva página en el nav desktop y menú móvil si corresponde
  - Asegurar que los links internos apunten correctamente

### 3. Actualizar sitemap.xml
- Agregar `<url>` con la nueva página:
```xml
<url>
  <loc>https://getplutto.com/[ruta]</loc>
  <lastmod>[fecha de hoy en formato YYYY-MM-DD]</lastmod>
</url>
```

### 4. Linking interno
- Escanear archivos HTML existentes buscando texto relacionado con el tema de la nueva página
- Sugerir dónde agregar links internos hacia la nueva página
- Si es una página top-level, agregarla al footer

### 5. Mostrar resumen
Indicar:
- Archivo creado
- Cambios en nav (qué archivos se modificaron)
- URL agregada al sitemap
- Sugerencias de linking interno
- Qué secciones necesita llenar el usuario

### 6. Siguiente paso
Informa al usuario: "Página creada. Ejecuta `/verificar-consistencia` para validar marca y luego `/publicar` para desplegarlo."

## Reglas
- Usar templates de `templates/` como base — no armar desde cero
- Color primario: `plutto-600` (#3d3bf3). Nunca usar `indigo-600`
- No usar clases `dark:` (dark mode no está habilitado)
- Incluir `data-animate` en elementos principales
- Mantener la estructura de comentarios HTML (`<!-- HERO -->`, etc.)
