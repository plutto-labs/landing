# Contexto: Rediseño Homepage Plutto

> Actualizado: 2026-04-07 — Sesión 2 (post-rediseño visual completo)

## Objetivo

Que la landing **no se vea "generada por IA"**: más fondos de marca, imágenes reales del producto, layouts asimétricos, ritmo visual variado. Referencia: ruixen-ui-hero component (adaptado a HTML estático).

---

## Cambios completados (en archivos, sin push a master)

### Hero (estilo ruixen-ui)
- Layout 50/50 con `flex-col lg:flex-row` y `min-h-[90vh]`
- **Imagen**: `assets/img/fotos producto/hero-producto.webp` (dashboard DD real) dentro de feature showcase card (`bg-white/80 backdrop-blur-sm border rounded-2xl shadow-lg`)
- Card incluye screenshot `aspect-video` + 4 features con checkmark SVGs
- Badge con dot indicator + borde (`bg-plutto-100/80 border border-plutto-200`)
- Heading: "Escala tu evaluación de **terceros**" (acento `text-plutto-600`)
- 2 CTAs: "Agenda una demo" (filled, arrow animada) + "Ver producto" (outline, external link icon)
- Animated blurred shapes: `.hero-glow-left` / `.hero-glow-right` (CSS keyframes)
- Fondo: `fondo 3.png` órbitas lavanda a 30% + gradientes + shapes blur
- Métricas strip integrado debajo (4 counters animados)

### Sección Problema (pain points)
- Layout asimétrico: 1 card grande oscura `bg-plutto-900` (5 cols) + 3 cards horizontales `.card-lift` (7 cols)
- Card principal: dato estadístico + `orbitas plutto.png` decorativo
- Fondo: `fondo 2.png` (lavanda) + órbitas sutiles

### Logo bar — Sin cambios
- 16 logos reales, scroll infinito CSS `animate-marquee`, grayscale hover

### Testimonios
- Fondo: `fondo 3.png` órbitas a 50% con gradiente overlay
- 3 estrellas `Vector plutto.png` decorativas
- Spacing `py-16 sm:py-20`
- **BUG PENDIENTE**: JS del carrusel (`window.testimonialPrev/Next`) nunca se registra. Flechas no funcionan. Posible causa: error silencioso antes del código en main.js o script faltante

### Producto (tabs de módulos)
- **5 screenshots reales** reemplazaron TODOS los placeholders SVG:
  - Debida Diligencia → `plutto 1.png`
  - Onboarding KYB → `plutto 2.png`
  - Screening Continuo → `plutto 4.png`
  - Expedientes → `plutto 5.png`
  - API e Integraciones → `plutto 3.png`
- Spacing `py-28`

### Proceso (cómo funciona)
- Fondo: `fondo 4.png` azul oscuro con órbitas a 60%
- Timeline con línea conectora animada `.timeline-line` (CSS `scaleX`)
- Círculos `rounded-full` + `ring-4` (antes eran cuadrados `rounded-2xl`)
- 2 estrellas Vector plutto con `filter: brightness(2)`

### Audiencias (para quién es)
- Fondo: `fondo 2.png` + `orbitas plutto.png` sutil + 3 estrellas
- Cards con `.card-lift` (hover translateY -4px + sombra plutto)
- Spacing `py-24`

### CTA final
- Fondo: `Fondo 1.png` gradiente azul→cyan a 70% (protagonista)
- Texto `lg:text-6xl`
- 3 estrellas Vector plutto con brillo
- Botón hover lift + sombra blanca
- Spacing `py-36 sm:py-40`

### CSS nuevo (`assets/css/custom.css`)
- `.card-lift` — hover translateY(-4px) + `box-shadow: 0 12px 32px -8px rgba(85,99,230,0.15)`
- `.timeline-line` — keyframes `timelineDraw` con scaleX
- `.hero-glow-left` / `.hero-glow-right` — blurred shapes animados
- `prefers-reduced-motion` respetado para todo

---

## Mapeo de assets

### Fondos
| Archivo | Descripción | Usado en |
|---------|-------------|----------|
| `Fondo 1.png` | Gradiente azul oscuro → cyan | CTA final (70%) |
| `fondo 2.png` | Gradiente blanco → lavanda | Problema, Audiencias |
| `fondo 3.png` | Lavanda con líneas de órbitas | Hero (30%), Testimonios (50%) |
| `fondo 4.png` | Azul oscuro con órbitas | Proceso (60%) |
| `orbitas plutto.png` | Círculos concéntricos (negro) | Problema card, Audiencias (invert) |
| `Vector plutto.png` | Estrella 4 puntas plutto | Decorativo en 5 secciones |

### Fotos de producto
| Archivo | Contenido | Usado en |
|---------|-----------|----------|
| `hero-producto.webp` | Dashboard DD real con actividad | Hero card |
| `plutto 1.png` | Verificación tributaria + alertas | Tab: Debida Diligencia |
| `plutto 2.png` | Flujo de solicitud con etapas | Tab: Onboarding KYB |
| `plutto 3.png` | Diagrama áreas conectadas | Tab: API e Integraciones |
| `plutto 4.png` | Fuentes datos (SII, Equifax, CMF) | Tab: Screening Continuo |
| `plutto 5.png` | Mapa conflicto de interés | Tab: Expedientes |

---

## Estructura actual de secciones (index.html)

1. NAV (mega-menu, fixed)
2. **HERO** — ruixen-ui style, min-h-90vh, feature card
3. **LOGOS BAR** — carrusel infinito clientes
4. **PROBLEMA** — layout asimétrico, 1 dark + 3 light
5. **TESTIMONIOS** — carrusel flechas (JS roto)
6. **PRODUCTO** — 5 tabs con screenshots reales
7. **PROCESO** — timeline 5 pasos, fondo oscuro
8. **AUDIENCIAS** — 3 cards con card-lift
9. **CTA FINAL** — fondo cyan protagonista
10. FOOTER — 5 columnas
11. STICKY MOBILE CTA (si existe)

---

## Qué falta por hacer

### Bugs
- [ ] **Carrusel testimonios JS roto** — `window.testimonialPrev/Next` nunca se registra. Flechas no hacen nada. Dots vacíos.

### QA
- [ ] Revisar en mobile (375px) — todo se verificó en desktop 1280px
- [ ] Revisar en tablet (768px)
- [ ] Verificar que tabs de producto siguen funcionando (click cambia panel)
- [ ] Verificar navbar scroll effect (shadow al hacer scroll)

### Optimización
- [ ] Lazy loading para fondos PNG decorativos
- [ ] Considerar convertir PNGs de producto a WebP
- [ ] Auditar contraste de texto sobre fondos con `/auditoria-accesibilidad`

### Publicación
- [ ] Push a master cuando QA pase (auto-deploy Cloudflare Pages)

---

## Configuración técnica

- **Stack**: HTML estático + Tailwind CSS v3 CDN + Vanilla JS
- **Primary**: `plutto-600` (#5563E6)
- **Font**: Inter (Google Fonts)
- **CSS**: `assets/css/custom.css`
- **JS**: `assets/js/main.js` (menú, tabs, IntersectionObserver, counters, navbar scroll)
- **Deploy**: Push a `master` → Cloudflare Pages auto-deploy

## Reglas (de CLAUDE.md)

- Español latinoamericano
- No eliminar `data-animate`
- No dark mode, no indigo-600, solo Inter
- 1 h1 por página, h2 por sección
- Color primario `plutto-600` (#5563E6), nunca indigo
- CTA principal → `/demo`
- Actualizar sitemap.xml si se agregan páginas
