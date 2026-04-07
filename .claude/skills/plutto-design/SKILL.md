---
name: plutto-design
description: Skill de diseño anti-IA para el sitio de Plutto. Adapta los principios de Impeccable al stack HTML estático + Tailwind CDN + paleta Plutto. Usar siempre al crear o modificar páginas del sitio.
---

# Diseño Anti-IA para Plutto Landing

Este skill adapta los principios de diseño de Impeccable al contexto específico de Plutto: HTML estático, Tailwind CDN, fuente Inter, paleta plutto-50 a plutto-950. El objetivo es que cada página se sienta diseñada por un humano, no generada por IA.

## Reglas de marca (no negociables)

- **Fuente**: Inter exclusivamente (400, 500, 600, 700). No agregar otras fuentes.
- **Color primario**: `plutto-600` (#5563E6). Nunca indigo-600.
- **Fondo**: `bg-plutto-50` (#FAFAFE), nunca `bg-white` puro.
- **Sin dark mode**: No usar clases `dark:`.
- **Stack**: HTML estático + Tailwind CDN. Sin React, sin build step.

## Cómo hacer Inter interesante (sin cambiar la fuente)

Dado que Inter es nuestra única fuente, la diferenciación viene de CÓMO la usamos:

- **Contraste de escala**: H1 muy grandes (`text-5xl lg:text-7xl`) con body pequeño (`text-base`). El salto de escala crea drama.
- **Tracking variado**: `tracking-tight` para headings grandes, `tracking-widest` para kickers/labels. Nunca el mismo tracking en todo.
- **Weight extremos**: Usar `font-light` (300) para textos grandes decorativos y `font-bold` (700) para headings de impacto. Cargar Inter con weights 300-700 donde se necesite.
- **Text-transform**: `uppercase tracking-widest text-xs font-semibold` para kickers y etiquetas — crea un elemento visual distinto sin cambiar de fuente.
- **Line-height**: `leading-none` o `leading-tight` en headings grandes. El texto apretado se siente más diseñado.
- **Sizing fluido**: Usar `clamp()` en headings cuando sea posible: `style="font-size: clamp(2rem, 5vw, 4rem)"`.

## Paleta Plutto — Uso audaz

No usar los colores de forma tímida. Guía de uso creativo:

| Técnica | Implementación |
|---------|---------------|
| Sección invertida | `bg-plutto-900 text-white` con acentos en `plutto-200` y `plutto-300` |
| Gradiente mesh | `background: radial-gradient(ellipse at 20% 50%, #D3CFF9 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #BAE8F2 0%, transparent 40%), #FAFAFE` |
| Acento inesperado | Usar `plutto-300` (cyan) como color de acento en borders o decoraciones, no solo `plutto-600` |
| Fondos con textura | Combinar `bg-plutto-100` con un patrón SVG sutil o ruido CSS |
| Overlaps de color | Elementos con `bg-plutto-200/30` superpuestos sobre secciones oscuras |

### Gradientes permitidos (nunca lineares genéricos)

```css
/* SÍ — gradiente mesh con la paleta */
background: 
  radial-gradient(ellipse at 30% 0%, rgba(211,207,249,0.4) 0%, transparent 50%),
  radial-gradient(ellipse at 70% 100%, rgba(186,232,242,0.3) 0%, transparent 50%),
  #FAFAFE;

/* SÍ — gradiente sutil en secciones oscuras */
background: linear-gradient(135deg, #14144F 0%, #1e265a 50%, #2F3A86 100%);

/* NO — gradiente genérico de IA */
background: linear-gradient(to right, #667eea, #764ba2);
```

## Anti-patrones: qué NO hacer

### Layout
- ❌ Repetir el mismo layout en secciones consecutivas (ej: 3 columnas → 3 columnas → 3 columnas)
- ❌ Hero → Features cards → Testimonials → CTA (la estructura "landing page de IA")
- ❌ Centrar todo. Usar alineación a la izquierda con composiciones asimétricas
- ❌ Cards idénticas con ícono arriba + título + texto, repetidas 3-6 veces
- ❌ Usar `py-20` en TODAS las secciones. Variar: `py-12`, `py-24`, `py-32`
- ❌ Poner íconos grandes con bordes redondeados encima de cada heading

### Visual
- ❌ Gradientes púrpura-azul genéricos
- ❌ Glassmorphism (blur, glass cards, glow borders) sin propósito
- ❌ Cards con `rounded-2xl shadow-lg` repetidas sin variación
- ❌ Sombras drop-shadow genéricas en todas las cards
- ❌ Fondo blanco puro (#fff) — usar `plutto-50` (#FAFAFE)
- ❌ Texto gris genérico (`text-gray-500`) — usar `text-gray-600` o tintado con la paleta

### Texto
- ❌ "Potencia tu...", "Automatiza tu...", "La solución definitiva para..."
- ❌ Subtítulos que repiten el título con más palabras
- ❌ Bullet points genéricos con ✓ o ✅

## Patrones SÍ: qué hacer

### Variedad de layouts entre secciones

```
Sección 1: Hero asimétrico (texto izq 60% + visual der 40%)
Sección 2: Full-width con stats en layout horizontal
Sección 3: Grid 2 columnas con una card grande + 2 pequeñas
Sección 4: Texto centrado + imagen full-bleed
Sección 5: Alternado izq-der con overlap vertical
```

Cada sección DEBE tener un layout diferente a la anterior.

### Composición espacial

- **Overlap**: Elementos que se superponen entre secciones con `relative -mt-8` o `z-10`
- **Asimetría**: Grids con columnas desiguales `grid-cols-[2fr_1fr]` o `grid-cols-[1fr_2fr]`
- **Negative space**: Secciones con mucho espacio vacío intencionado son más memorables que secciones densas
- **Grid-breaking**: Un elemento que rompe el grid (`-mx-4 lg:-mx-20`) para crear sorpresa visual
- **Stagger**: Elementos en grid con offset vertical (`mt-8` en el segundo, `mt-16` en el tercero)

### Micro-interacciones CSS-only

```css
/* Hover con escala + sombra que crece */
.card-hover {
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), 
              box-shadow 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -12px rgba(85, 99, 230, 0.15);
}

/* Underline que crece desde la izquierda */
.link-grow::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #5563E6;
  transition: width 0.3s ease;
}
.link-grow:hover::after {
  width: 100%;
}
```

### Animaciones scroll (usar sistema existente)

Usar `data-animate` + `animate-fade-in` (ya en custom.css y main.js). Para más variedad:

- Stagger con `animation-delay` incrementales
- Slide desde lateral: agregar variante `animate-slide-in-left` / `animate-slide-in-right`
- Scale-in para elementos de impacto

## Checklist pre-entrega

Antes de entregar cualquier página o sección, verificar:

1. [ ] ¿Cada sección tiene un layout DIFERENTE a la anterior?
2. [ ] ¿Hay variación en el spacing vertical entre secciones?
3. [ ] ¿Se usa al menos un overlap o elemento grid-breaking?
4. [ ] ¿Los headings usan tracking y sizing variado?
5. [ ] ¿La paleta se usa de forma audaz (no solo plutto-600 para todo)?
6. [ ] ¿Hay al menos una micro-interacción CSS?
7. [ ] ¿Pasaría el "AI slop test"? (¿alguien diría "esto lo hizo una IA"?)
8. [ ] ¿Se respeta la marca? (Inter, paleta plutto, sin dark mode)
