---
name: revisar-rendimiento
description: Realiza una revisión de rendimiento del sitio estático.
---

Realiza una revisión de rendimiento del sitio estático.

## Pasos

1. Lee todos los archivos `.html` del proyecto
2. Lee `_headers` para las políticas de cache
3. Lee `assets/css/custom.css`
4. Lee `assets/js/main.js`
5. Lista los archivos en `assets/img/` y verifica sus tamaños

## Checklist de rendimiento

### Recursos externos
- [ ] Google Fonts tiene `<link rel="preconnect">` para `fonts.googleapis.com` y `fonts.gstatic.com`
- [ ] Font display usa `display=swap` para evitar FOIT
- [ ] No hay scripts externos innecesarios
- [ ] Tailwind CDN: notar que agrega ~300KB pero es aceptable para sitio estático sin build

### Imágenes
- [ ] Imágenes existen en `assets/img/` (no hay referencias rotas)
- [ ] Imágenes debajo del fold tienen `loading="lazy"`
- [ ] Imágenes tienen dimensiones explícitas (`width` y `height`) para evitar CLS
- [ ] Formato de imágenes es óptimo (WebP/AVIF preferido sobre PNG/JPG para fotos)
- [ ] Tamaño de archivos de imagen razonable (< 200KB para fotos, < 50KB para iconos)
- [ ] OG image existe y tiene dimensiones recomendadas (1200x630)

### CSS y JavaScript
- [ ] `custom.css` es mínimo (no hay estilos que podrían ser clases Tailwind)
- [ ] `main.js` es mínimo y no bloquea render (está antes de `</body>`)
- [ ] No hay CSS o JS inline innecesario en el HTML
- [ ] No hay librerías JavaScript sin usar

### Headers y cache
- [ ] `_headers` configura cache para assets estáticos
- [ ] Imágenes, CSS y JS tienen cache headers apropiados
- [ ] Headers de seguridad no bloquean recursos necesarios
- [ ] CSP permite los CDNs necesarios (Tailwind, Google Fonts)

### HTML
- [ ] No hay elementos ocultos innecesarios cargando recursos
- [ ] No hay iframes ocultos
- [ ] `<meta name="viewport">` presente para responsive
- [ ] No hay CSS inline que podría estar en la hoja de estilos

### Core Web Vitals (estimación)
- **LCP (Largest Contentful Paint)**: evaluar qué elemento es el LCP y si carga rápido
- **CLS (Cumulative Layout Shift)**: verificar que imágenes tienen dimensiones y fonts no causan shift
- **INP (Interaction to Next Paint)**: evaluar que no hay JavaScript pesado bloqueando interacciones

## Formato de salida

Presenta los resultados ordenados por impacto (de mayor a menor):
- ✅ Bien configurado
- ❌ Problema de rendimiento (con instrucción de cómo corregir)
- ⚠️ Oportunidad de mejora

Al final, muestra un resumen con las 3 optimizaciones de mayor impacto que se deberían implementar primero.

Si encuentras problemas, pregunta si quiero que los corrija automáticamente.
