Realiza una auditoría de consistencia de marca en todo el sitio. Lee `docs/marca.md` para obtener las guías de marca oficiales.

## Pasos

1. Lee `docs/marca.md` completo
2. Lee todos los archivos `.html` del proyecto
3. Lee `assets/css/custom.css`

## Checklist de consistencia

### Colores
- [ ] Solo se usan los colores definidos en `docs/marca.md` (plutto-600, plutto-700, etc.)
- [ ] No hay variantes de indigo (indigo-600 es legacy, debe ser plutto-600)
- [ ] Todos los colores de texto siguen la guía (gray-900 headings, gray-600 body, etc.)
- [ ] No hay colores hardcodeados en CSS inline o custom.css
- [ ] Botones CTA usan `shadow-lg shadow-plutto-600/25`

### Tipografía
- [ ] Font family es Inter en todo el sitio (configurado en tailwind.config y Google Fonts)
- [ ] Pesos de fuente correctos según uso (700 headings, 600 botones, 500 nav, 400 body)
- [ ] Tamaños de texto siguen los patrones del manual (h1: text-4xl sm:text-5xl lg:text-6xl, etc.)

### Spacing y layout
- [ ] Secciones usan `py-20` de padding vertical
- [ ] Contenedores usan `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- [ ] Hero usa `max-w-4xl`
- [ ] Cards usan `p-8 rounded-2xl`
- [ ] Grid de features usa `grid md:grid-cols-3 gap-8`

### Componentes
- [ ] Botones primarios siguen el patrón exacto del manual
- [ ] Botones secundarios siguen el patrón exacto del manual
- [ ] Cards de features siguen el patrón exacto del manual
- [ ] Todos los botones tienen `transition-colors`

### SEO
- [ ] Cada página tiene `<html lang="es">`
- [ ] Cada página tiene Tailwind config inline con paleta plutto (no usa tailwind CDN sin config)
- [ ] Schema JSON-LD presente (BreadcrumbList en páginas internas, Organization en homepage)
- [ ] Meta tags completos (title, description, og:*, twitter:*)
- [ ] Breadcrumbs presentes en páginas internas

### Consistencia entre páginas
- [ ] Navegación idéntica en todas las páginas (mismos links, mismo orden)
- [ ] Footer idéntico en todas las páginas
- [ ] Favicon referenciado en todas las páginas
- [ ] Google Fonts cargado en todas las páginas
- [ ] Tailwind CDN + config inline en todas las páginas

### Links
- [ ] No hay links internos rotos (verificar que los archivos referenciados existen)
- [ ] Anchors internos (#features, #social-proof, etc.) apuntan a IDs existentes

## Formato de salida

Presenta los resultados agrupados por categoría con:
- ✅ Consistente
- ❌ Inconsistencia encontrada (con número de línea y archivo, y cómo corregir)
- ⚠️ Advertencia

Si encuentras inconsistencias, pregunta si quiero que las corrija automáticamente.
