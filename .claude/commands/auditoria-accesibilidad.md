Realiza una auditoría de accesibilidad WCAG 2.1 nivel AA en todo el sitio.

## Pasos

1. Lee todos los archivos `.html` del proyecto
2. Lee `assets/css/custom.css`
3. Lee `assets/js/main.js`

## Checklist WCAG 2.1 AA

### Imágenes y medios
- [ ] Todas las `<img>` tienen atributo `alt` descriptivo (no vacío, no genérico)
- [ ] Imágenes decorativas tienen `alt=""` y `role="presentation"`
- [ ] SVGs inline tienen `aria-hidden="true"` si son decorativos, o `role="img"` con título si son informativos

### Estructura semántica
- [ ] Uso correcto de elementos semánticos (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- [ ] Exactamente un `<h1>` por página
- [ ] Jerarquía de headings sin saltos (h1 → h2 → h3)
- [ ] `<html lang="es">` presente

### Navegación por teclado
- [ ] Todos los elementos interactivos son alcanzables con Tab
- [ ] Estilos de `:focus` visibles (no `outline: none` sin alternativa)
- [ ] Orden de tabulación lógico (no hay `tabindex` positivos)
- [ ] Menú móvil es operable con teclado
- [ ] Links de "skip to content" presentes (o sugerir agregarlos)

### Contraste de colores
- [ ] Texto gray-600 (#4B5563) sobre white: ratio ≥ 4.5:1 ✓
- [ ] Texto white sobre plutto-600 (#3d3bf3): ratio ≥ 4.5:1 ✓
- [ ] Texto gray-900 (#111827) sobre white: ratio ≥ 4.5:1 ✓
- [ ] Texto plutto-100 (#e0e3ff) sobre plutto-600: verificar ratio
- [ ] Texto en botones cumple contraste mínimo

### Formularios (si aplica)
- [ ] Todos los inputs tienen `<label>` asociado
- [ ] Mensajes de error son descriptivos y accesibles
- [ ] Campos requeridos están marcados con `aria-required`

### Links y botones
- [ ] Todos los links tienen texto descriptivo (no "click aquí", no "leer más" sin contexto)
- [ ] Botones tienen texto visible o `aria-label`
- [ ] El botón de menú móvil tiene `aria-label`
- [ ] Links que abren en nueva ventana lo indican (`aria-label` o texto visible)

### ARIA
- [ ] Roles ARIA usados correctamente (no redundantes con elementos nativos)
- [ ] `aria-expanded` en toggle del menú móvil
- [ ] `aria-hidden` en elementos decorativos
- [ ] Landmarks principales presentes: banner, navigation, main, contentinfo

### Responsive y zoom
- [ ] El contenido es legible con zoom al 200%
- [ ] No hay scroll horizontal a 320px de ancho
- [ ] Targets de toque mínimo 44x44px en móvil

## Formato de salida

Presenta los resultados agrupados por categoría:
- ✅ Cumple
- ❌ No cumple (con archivo, línea, y cómo corregir)
- ⚠️ Sugerencia de mejora

Al final, muestra un resumen con el nivel de cumplimiento y las correcciones prioritarias.

Si encuentras problemas, pregunta si quiero que los corrija automáticamente.
