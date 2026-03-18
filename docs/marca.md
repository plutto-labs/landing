# Manual de Marca — Plutto Landing

## Paleta de colores

### Colores primarios

| Nombre | Clase Tailwind | Hex | Uso |
|--------|---------------|-----|-----|
| Primario | `indigo-600` | #4F46E5 | Botones CTA, links, acentos |
| Primario hover | `indigo-700` | #4338CA | Estados hover de botones y links |
| Primario suave | `indigo-100` | #E0E7FF | Fondo de iconos (light mode) |
| Primario suave dark | `indigo-900/50` | — | Fondo de iconos (dark mode) |
| Primario texto dark | `indigo-400` | #818CF8 | Iconos y acentos en dark mode |
| CTA fondo | `indigo-600` | #4F46E5 | Fondo de sección CTA |
| CTA fondo dark | `indigo-700` | #4338CA | Fondo de sección CTA en dark mode |
| CTA texto suave | `indigo-100` | #E0E7FF | Texto secundario sobre fondo indigo |
| CTA hover | `indigo-50` | #EEF2FF | Hover de botón blanco sobre fondo indigo |

### Colores neutros

| Nombre | Clase Tailwind (light / dark) | Uso |
|--------|-------------------------------|-----|
| Texto principal | `gray-900` / `white` | Títulos y headings |
| Texto cuerpo | `gray-600` / `gray-400` | Párrafos y descripciones |
| Texto terciario | `gray-500` / `gray-400` | Labels, texto de apoyo |
| Texto footer | `gray-400` / `gray-500` | Copyright, texto mínimo |
| Fondo página | `white` / `gray-950` | Background principal |
| Fondo sección | `gray-50` / `gray-900` | Secciones alternadas |
| Fondo nav | `white/80` / `gray-950/80` | Navegación con glassmorphism |
| Fondo card | `white` / `gray-800` | Tarjetas de features |
| Fondo botón sec. | `gray-100` / `gray-800` | Botón secundario |
| Hover botón sec. | `gray-200` / `gray-700` | Hover de botón secundario |
| Texto botón sec. | `gray-700` / `gray-300` | Texto de botón secundario |
| Bordes | `gray-200` / `gray-800` | Separadores, bordes de cards |
| Placeholder logos | `gray-200` / `gray-700` | Placeholders de social proof |

### Regla de dark mode

Cada clase de color en light mode **debe** tener su contraparte con prefijo `dark:`. Ejemplo:
```html
<p class="text-gray-600 dark:text-gray-400">Texto</p>
<div class="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">Card</div>
```

## Tipografía

**Familia:** Inter (Google Fonts)

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

| Peso | Clase Tailwind | Uso |
|------|---------------|-----|
| 400 (Regular) | `font-normal` | Texto de párrafos, descripciones |
| 500 (Medium) | `font-medium` | Links de navegación, labels |
| 600 (Semibold) | `font-semibold` | Botones, subtítulos, social proof label |
| 700 (Bold) | `font-bold` | Headings (h1, h2, h3), logo |

### Tamaños de texto

| Elemento | Clases responsivas |
|----------|-------------------|
| H1 (hero) | `text-4xl sm:text-5xl lg:text-6xl` |
| H2 (secciones) | `text-3xl sm:text-4xl` |
| H3 (cards) | `text-xl` |
| Párrafo hero | `text-lg sm:text-xl` |
| Párrafo general | `text-base` (16px por defecto) |
| Párrafo cards | sin clase (hereda base) |
| Nav links | `text-sm` |
| Botones | `text-sm` (nav) o `text-base` (hero/CTA) |
| Label uppercase | `text-sm uppercase tracking-widest` |
| Footer | `text-sm` |

## Tono de voz

### Principios

- **Profesional pero cercano** — No somos un banco, somos una startup tech que habla como personas
- **Directo** — Ir al punto, sin rodeos ni jerga innecesaria
- **Orientado a beneficios** — Hablar de lo que el usuario gana, no de nuestras features técnicas
- **Español latinoamericano** — Usar "ustedes" (nunca "vosotros"), vocabulario neutro LATAM

### Ejemplos DO / DON'T

| DO | DON'T |
|----|-------|
| Verifica empresas en minutos, no en semanas | Nuestra solución enterprise-grade leveragea múltiples data sources |
| Automatiza tu proceso de compliance | Plataforma de cumplimiento normativo con arquitectura de microservicios |
| Conecta tu app con nuestra API y empieza a verificar | Ofrecemos una robusta suite de verificación corporativa |
| Cumple con la regulación sin frenar tu crecimiento | Solución holística de compliance end-to-end |
| Datos actualizados de fuentes oficiales | Información real-time de múltiples touchpoints gubernamentales |

### Reglas de escritura

- Primera persona plural: "en Plutto" o "nuestro", no "la empresa"
- CTAs en imperativo directo: "Empieza gratis", "Prueba la API", "Conoce más"
- Evitar anglicismos cuando hay equivalente claro en español (usar "verificación" no "verification")
- Términos técnicos aceptados sin traducir: API, compliance, KYB, AML, due diligence, onboarding
- Números: usar cifras, no palabras ("5 minutos", no "cinco minutos")

## Patrones de componentes

### Botón primario
```html
<a href="#" class="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-lg shadow-indigo-600/25">
  Texto del botón
</a>
```

### Botón primario (nav, más pequeño)
```html
<a href="#" class="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors">
  Texto del botón
</a>
```

### Botón secundario
```html
<a href="#" class="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors">
  Texto del botón
</a>
```

### Botón invertido (sobre fondo indigo)
```html
<a href="#" class="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-indigo-600 bg-white hover:bg-indigo-50 rounded-lg transition-colors shadow-lg">
  Texto del botón
</a>
```

### Card de feature
```html
<div data-animate class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
  <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center mb-6">
    <!-- SVG icon aquí (w-6 h-6 text-indigo-600 dark:text-indigo-400) -->
  </div>
  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Título</h3>
  <p class="text-gray-600 dark:text-gray-400">Descripción del beneficio.</p>
</div>
```

### Contenedor de sección estándar
```html
<section class="py-20 bg-gray-50 dark:bg-gray-900">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Contenido -->
  </div>
</section>
```

### Contenedor de sección hero
```html
<section class="pt-32 pb-20 sm:pt-40 sm:pb-28">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <!-- Contenido -->
  </div>
</section>
```

### Header de sección (título + subtítulo)
```html
<div class="text-center mb-16">
  <h2 data-animate class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Título de sección</h2>
  <p data-animate class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Subtítulo descriptivo</p>
</div>
```

## Principios de diseño

- **Max width:** `max-w-6xl` (1152px) para contenido general, `max-w-4xl` para hero y CTA
- **Whitespace generoso:** `py-20` entre secciones, `mb-16` entre header de sección y contenido
- **Bordes sutiles:** `border border-gray-200 dark:border-gray-700` en cards, `border-b` en nav
- **Esquinas redondeadas:** `rounded-2xl` en cards, `rounded-xl` en iconos, `rounded-lg` en botones
- **Sombras mínimas:** `shadow-sm` en cards, `shadow-lg shadow-indigo-600/25` solo en CTA principal
- **Dark mode obligatorio:** todo elemento visual debe funcionar en ambos modos
- **Animaciones:** usar atributo `data-animate` en elementos que deben hacer fade-in al scroll
- **Glassmorphism en nav:** `bg-white/80 dark:bg-gray-950/80 backdrop-blur-md`
- **Grid responsivo:** `grid md:grid-cols-3 gap-8` para features, `flex flex-wrap` para logos
- **Mobile-first:** diseñar para móvil primero, agregar breakpoints `sm:`, `md:`, `lg:` para desktop
