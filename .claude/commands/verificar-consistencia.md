Realiza una auditoría de consistencia de marca en todo el sitio. Lee `docs/marca.md` para obtener las guías de marca oficiales.

## Pasos

1. Lee `docs/marca.md` completo
2. Lee todos los archivos `.html` del proyecto
3. Lee `assets/css/custom.css`

## Checklist de consistencia

### Colores
- [ ] Solo se usan los colores definidos en `docs/marca.md` (indigo-600, indigo-700, etc.)
- [ ] No hay variantes de indigo no autorizadas (ej: indigo-500, indigo-400 en light mode)
- [ ] Todos los colores de texto siguen la guía (gray-900 headings, gray-600 body, etc.)
- [ ] No hay colores hardcodeados en CSS inline o custom.css

### Tipografía
- [ ] Font family es Inter en todo el sitio (configurado en tailwind.config y Google Fonts)
- [ ] Pesos de fuente correctos según uso (700 headings, 600 botones, 500 nav, 400 body)
- [ ] Tamaños de texto siguen los patrones del manual (h1: text-4xl sm:text-5xl lg:text-6xl, etc.)

### Dark mode
- [ ] Cada clase de color light tiene su contraparte `dark:` (listar las que faltan)
- [ ] Fondos de página: `bg-white dark:bg-gray-950`
- [ ] Fondos de sección: `bg-gray-50 dark:bg-gray-900`
- [ ] Fondos de cards: `bg-white dark:bg-gray-800`
- [ ] Bordes: `border-gray-200 dark:border-gray-700` o `dark:border-gray-800`

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
- [ ] Botón CTA principal tiene `shadow-lg shadow-indigo-600/25`

### Consistencia entre páginas
- [ ] Navegación idéntica en todas las páginas (mismos links, mismo orden)
- [ ] Footer idéntico en todas las páginas
- [ ] Favicon referenciado en todas las páginas
- [ ] Google Fonts cargado en todas las páginas
- [ ] Tailwind CDN cargado en todas las páginas

### Links
- [ ] No hay links internos rotos (verificar que los archivos referenciados existen)
- [ ] Anchors internos (#features, #social-proof, etc.) apuntan a IDs existentes

## Formato de salida

Presenta los resultados agrupados por categoría con:
- ✅ Consistente
- ❌ Inconsistencia encontrada (con número de línea y archivo, y cómo corregir)
- ⚠️ Advertencia

Si encuentras inconsistencias, pregunta si quiero que las corrija automáticamente.
