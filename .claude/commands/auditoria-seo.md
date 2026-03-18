Realiza una auditoría SEO completa del sitio. Lee `docs/plutto.md` para obtener las palabras clave SEO objetivo.

## Pasos

1. Lee todos los archivos `.html` del proyecto
2. Lee `sitemap.xml` y `robots.txt`
3. Lee `docs/plutto.md` para las palabras clave SEO objetivo

## Checklist de auditoría

Para cada página HTML, revisa:

### Meta Tags
- [ ] `<title>` presente, único, entre 50-60 caracteres, incluye palabra clave principal
- [ ] `<meta name="description">` presente, entre 150-160 caracteres, incluye palabra clave
- [ ] `<link rel="canonical">` presente con URL correcta
- [ ] `<meta property="og:title">`, `og:description`, `og:image`, `og:url` presentes
- [ ] `<meta name="twitter:card">`, `twitter:title`, `twitter:description`, `twitter:image` presentes
- [ ] OG y Twitter Card tienen los mismos valores que title/description
- [ ] No hay contenido placeholder entre corchetes `[...]` en meta tags

### Estructura de encabezados
- [ ] Exactamente un `<h1>` por página
- [ ] Jerarquía correcta (h1 → h2 → h3, sin saltar niveles)
- [ ] Headings incluyen palabras clave relevantes de `docs/plutto.md`
- [ ] No hay contenido placeholder entre corchetes `[...]` en headings

### Imágenes
- [ ] Todas las `<img>` tienen atributo `alt` descriptivo
- [ ] Los nombres de archivo de imágenes son descriptivos (no `img1.png`)
- [ ] Favicon configurado correctamente

### Sitemap y Robots
- [ ] `sitemap.xml` incluye todas las páginas HTML del proyecto
- [ ] URLs en sitemap son absolutas y correctas (https://getplutto.com/...)
- [ ] `robots.txt` no bloquea páginas importantes
- [ ] `robots.txt` referencia el sitemap

### Datos estructurados
- [ ] JSON-LD (Schema.org) presente para Organization o WebSite
- [ ] `<html lang="es">` configurado correctamente

### Contenido
- [ ] No quedan placeholders `[...]` sin reemplazar
- [ ] Palabras clave de `docs/plutto.md` aparecen naturalmente en el contenido
- [ ] Links internos usan texto descriptivo (no "click aquí")
- [ ] Links externos relevantes tienen `rel="noopener"`

## Formato de salida

Presenta los resultados agrupados por categoría. Para cada item usa:
- ✅ Pasa
- ❌ Falla (con instrucción específica de cómo corregir)
- ⚠️ Advertencia (sugerencia de mejora)

Al final, muestra un resumen con el puntaje total (items pasados / total) y las 3 acciones más importantes a tomar.
