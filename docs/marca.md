# Manual de Marca y Design System — Plutto Landing
**Versión 2026 · Basado en Brand Guide oficial**

Stack: HTML estático + Tailwind CSS CDN + Inter (Google Fonts) + Cloudflare Pages.

---

## 1. Configuración Base

### Tailwind Config (inline en `<head>`)

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          plutto: {
            50:  '#FAFAFE',   // fondo principal (off-white del brand guide)
            100: '#E2E2F0',   // fondo alterno secciones
            200: '#D3CFF9',   // lila suave — highlights, badges
            300: '#BAE8F2',   // cyan acento decorativo
            400: '#949AB8',   // gris azulado — texto terciario
            500: '#6B77EC',   // primary claro
            600: '#5563E6',   // PRIMARY — botones, links, acentos (#5563E6 brand guide)
            700: '#2F3A86',   // navy oscuro — hover, acentos fuertes
            800: '#1e265a',   // intermedio
            900: '#14144F',   // deep navy — footer, dark sections
            950: '#0c0c2e',   // más profundo
          },
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
        },
      },
    },
  }
</script>
```

> **Colores del Brand Guide 2026:** Primary `#5563E6` · Navy `#2F3A86` · Deep `#14144F` · Lila `#D3CFF9` · Fondo `#FAFAFE`
> **Tipografía:** Solo Inter. No agregar otras fuentes aunque el brand guide mencione Manrope.
> **Dark mode:** Deshabilitado. No usar clases `dark:`.

### Head Base Template

```html
<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Keyword principal] — [Beneficio] | Plutto</title>
  <meta name="description" content="[120-158 chars con beneficio claro y CTA]">
  <link rel="canonical" href="https://getplutto.com/[ruta]">
  <meta name="robots" content="index, follow">
  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://getplutto.com/[ruta]">
  <meta property="og:title" content="[Título]">
  <meta property="og:description" content="[Descripción]">
  <meta property="og:image" content="https://getplutto.com/assets/img/og/[pagina].png">
  <meta property="og:site_name" content="Plutto">
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="[Título]">
  <meta name="twitter:description" content="[Descripción]">
  <meta name="twitter:image" content="https://getplutto.com/assets/img/og/[pagina].png">
  <!-- Favicon -->
  <link rel="icon" href="/assets/img/favicon.ico" type="image/x-icon">
  <!-- Google Fonts: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = { theme: { extend: { colors: { plutto: { 50:'#FAFAFE',100:'#E2E2F0',200:'#D3CFF9',300:'#BAE8F2',400:'#949AB8',500:'#6B77EC',600:'#5563E6',700:'#2F3A86',800:'#1e265a',900:'#14144F',950:'#0c0c2e' } }, fontFamily: { sans: ['Inter','system-ui','sans-serif'] } } } }
  </script>
  <!-- Custom CSS -->
  <link rel="stylesheet" href="/assets/css/custom.css">
</head>
```

### Body Base

```html
<body class="bg-plutto-50 text-gray-900 font-sans antialiased">
```

> **Nota:** El fondo principal es `bg-plutto-50` (`#FAFAFE`), no `bg-white`. Es el off-white del brand guide.

---

## 2. Tokens de Diseño

### Colores

| Token | Clase Tailwind | Hex | Uso |
|-------|---------------|-----|-----|
| Primario | `plutto-600` | #5563E6 | Botones CTA, links activos, acentos |
| Primario hover | `plutto-700` | #2F3A86 | Estados hover de botones |
| Lila suave | `plutto-200` | #D3CFF9 | Fondos de badges, highlights, íconos |
| Cyan acento | `plutto-300` | #BAE8F2 | Detalles decorativos, gradientes |
| Gris azulado | `plutto-400` | #949AB8 | Texto terciario, subtexto |
| Fondo página | `plutto-50` | #FAFAFE | Background principal |
| Fondo alterno | `plutto-100` | #E2E2F0 | Secciones alternadas |
| Dark section | `plutto-900` | #14144F | Footer, secciones oscuras |
| Texto principal | `gray-900` | — | Títulos y headings |
| Texto cuerpo | `gray-600` | — | Párrafos y descripciones |
| Bordes | `gray-200` | — | Separadores, bordes de cards |

### Tipografía

| Elemento | Clases | Uso |
|----------|--------|-----|
| H1 | `text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight` | Hero heading |
| H2 | `text-3xl sm:text-4xl font-bold` | Sección heading |
| H3 | `text-xl font-semibold` | Cards, sub-items |
| Body | `text-base text-gray-600` | Párrafos generales |
| Body large | `text-lg sm:text-xl text-gray-600` | Párrafo hero, destacados |
| Label | `text-sm font-medium` | Nav links, botones pequeños |
| Kicker | `text-sm font-semibold uppercase tracking-widest text-plutto-600` | Pre-títulos de sección |

### Espaciado

| Token | Clase | Uso |
|-------|-------|-----|
| Sección | `py-20` | Padding vertical entre secciones |
| Contenedor | `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8` | Ancho máximo contenido |
| Contenedor angosto | `max-w-4xl` | Hero, CTA, texto centrado |
| Gap grid | `gap-8` | Espacio entre cards |
| Header-a-contenido | `mb-16` | Espacio entre título de sección y contenido |

### Bordes y Sombras

| Token | Clase | Uso |
|-------|-------|-----|
| Card | `rounded-2xl border border-gray-200 shadow-sm bg-white` | Tarjetas de features |
| Botón primario | `rounded-lg shadow-lg shadow-plutto-600/20` | CTA principal |
| Ícono container | `rounded-xl` | Contenedores de íconos |

---

## 3. Hero — Fondo con Gradiente

El hero usa el fondo de gradiente del brand guide (arcos concéntricos azul-lila sobre off-white). El visual derecho es un screenshot del producto sobre fondo oscuro, con `drop-shadow` para que flote.

**Imagen de fondo:** `assets/img/bg-hero-gradient.webp` — pendiente de diseño (gradiente con arcos azul-lila del brand guide, fondo `#FAFAFE` arriba → `#E2E2F0` abajo)
**Screenshot producto:** `assets/img/hero-producto.webp` — imagen compartida por Marketing (panel de Debida Diligencia)

```html
<!-- Hero con fondo gradiente -->
<section class="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
  <!-- Fondo gradiente brand -->
  <div class="absolute inset-0 -z-10">
    <img src="/assets/img/bg-hero-gradient.webp" alt="" class="w-full h-full object-cover" width="1440" height="900" fetchpriority="high" aria-hidden="true">
  </div>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Texto -->
      <div>
        <p class="text-sm font-semibold uppercase tracking-widest text-plutto-600 mb-4">[Kicker]</p>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">[Título H1]</h1>
        <p class="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl">[Subtítulo 40-60 palabras]</p>
        <div class="mt-8 flex flex-col sm:flex-row gap-4">
          <a href="/demo" class="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-plutto-600 hover:bg-plutto-700 rounded-lg transition-colors shadow-lg shadow-plutto-600/20">Agenda tu demo →</a>
          <a href="#como-funciona" class="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors">Conoce más</a>
        </div>
      </div>
      <!-- Screenshot producto -->
      <div class="relative">
        <img src="/assets/img/hero-producto.webp" alt="Panel de evaluación de proveedores en Plutto" class="rounded-2xl shadow-2xl w-full" width="640" height="420" fetchpriority="high">
      </div>
    </div>
  </div>
</section>
```

---

## 4. Tono de Voz

### Principios

- **Profesional pero cercano** — no somos un banco, somos una startup tech que habla como personas
- **Directo** — al punto, sin rodeos ni jerga innecesaria
- **Orientado a beneficios** — lo que el usuario gana, no nuestras features técnicas
- **Español latinoamericano** — "ustedes" (nunca "vosotros"), vocabulario neutro LATAM

### DO / DON'T

| DO ✅ | DON'T ❌ |
|-------|---------|
| Verifica empresas en minutos, no en semanas | Nuestra solución enterprise-grade leveragea múltiples data sources |
| Automatiza tu proceso de compliance | Plataforma de cumplimiento normativo con arquitectura de microservicios |
| Cumple con la regulación sin frenar tu crecimiento | Solución holística de compliance end-to-end |
| Datos actualizados de fuentes oficiales | Información real-time de múltiples touchpoints gubernamentales |

---

## 5. Componentes

### A. Navegación con Mega-Menú

Sticky, con dropdowns en desktop y acordeón en mobile. Basada en arquitectura v3.

```html
<nav class="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">

      <!-- Logo -->
      <a href="/" class="flex items-center">
        <img src="/assets/img/logo.svg" alt="Plutto" class="h-8 w-auto">
      </a>

      <!-- Links desktop -->
      <div class="hidden lg:flex items-center gap-1">

        <!-- Dropdown: Producto -->
        <div class="relative group">
          <button class="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
            Producto
            <svg class="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="absolute top-full left-0 mt-1 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
            <a href="/producto/solicitudes" class="flex items-start gap-3 px-4 py-3 hover:bg-plutto-50 transition-colors">
              <div class="w-8 h-8 bg-plutto-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-plutto-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-gray-900">Solicitudes</p>
                <p class="text-xs text-gray-500 mt-0.5">Centraliza cada pedido de evaluación</p>
              </div>
            </a>
            <a href="/producto/debida-diligencia" class="flex items-start gap-3 px-4 py-3 hover:bg-plutto-50 transition-colors">
              <div class="w-8 h-8 bg-plutto-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-plutto-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-gray-900">Debida Diligencia</p>
                <p class="text-xs text-gray-500 mt-0.5">Verifica legal, tributario y financiero</p>
              </div>
            </a>
            <a href="/producto/conflicto-interes" class="flex items-start gap-3 px-4 py-3 hover:bg-plutto-50 transition-colors">
              <div class="w-8 h-8 bg-plutto-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-plutto-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-gray-900">Conflicto de Interés</p>
                <p class="text-xs text-gray-500 mt-0.5">Detecta vínculos ocultos en tu nómina</p>
              </div>
            </a>
            <a href="/producto/monitoreo-compliance" class="flex items-start gap-3 px-4 py-3 hover:bg-plutto-50 transition-colors">
              <div class="w-8 h-8 bg-plutto-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-plutto-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-gray-900">Monitoreo Compliance</p>
                <p class="text-xs text-gray-500 mt-0.5">Seguimiento normativo continuo</p>
              </div>
            </a>
            <a href="/producto/monitoreo-riesgo" class="flex items-start gap-3 px-4 py-3 hover:bg-plutto-50 transition-colors">
              <div class="w-8 h-8 bg-plutto-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-plutto-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-gray-900">Monitoreo de Riesgo</p>
                <p class="text-xs text-gray-500 mt-0.5">Alertas ante cambios en el perfil</p>
              </div>
            </a>
          </div>
        </div>

        <!-- Dropdown: Industrias -->
        <div class="relative group">
          <button class="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
            Industrias
            <svg class="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="absolute top-full left-0 mt-1 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
            <a href="/industrias/energia" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-plutto-50 hover:text-gray-900 transition-colors">Energía</a>
            <a href="/industrias/mineria" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-plutto-50 hover:text-gray-900 transition-colors">Minería</a>
            <a href="/industrias/retail" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-plutto-50 hover:text-gray-900 transition-colors">Retail</a>
            <a href="/industrias/construccion" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-plutto-50 hover:text-gray-900 transition-colors">Construcción</a>
            <a href="/industrias/manufactura" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-plutto-50 hover:text-gray-900 transition-colors">Manufactura</a>
            <a href="/industrias/alimentacion" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-plutto-50 hover:text-gray-900 transition-colors">Alimentación</a>
          </div>
        </div>

        <!-- Dropdown: Recursos -->
        <div class="relative group">
          <button class="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
            Recursos
            <svg class="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="absolute top-full left-0 mt-1 w-40 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
            <a href="/blog" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-plutto-50 hover:text-gray-900 transition-colors">Blog</a>
            <a href="/guias" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-plutto-50 hover:text-gray-900 transition-colors">Guías</a>
            <a href="/webinars" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-plutto-50 hover:text-gray-900 transition-colors">Webinars</a>
            <a href="/preguntas-frecuentes" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-plutto-50 hover:text-gray-900 transition-colors">Preguntas frecuentes</a>
          </div>
        </div>

        <!-- Dropdown: Nosotros -->
        <div class="relative group">
          <button class="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
            Nosotros
            <svg class="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="absolute top-full left-0 mt-1 w-40 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
            <a href="/sobre-plutto" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-plutto-50 hover:text-gray-900 transition-colors">Sobre Plutto</a>
            <a href="/que-es-plutto" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-plutto-50 hover:text-gray-900 transition-colors">Qué es Plutto</a>
          </div>
        </div>

        <!-- País selector -->
        <div class="relative group">
          <button class="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
            🇨🇱
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="absolute top-full right-0 mt-1 w-36 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
            <a href="/" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-plutto-50 transition-colors">🇨🇱 Chile</a>
            <a href="/mexico" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-plutto-50 transition-colors">🇲🇽 México</a>
          </div>
        </div>
      </div>

      <!-- CTA desktop -->
      <div class="hidden lg:flex items-center gap-3">
        <a href="https://app.getplutto.com/login" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Iniciar sesión</a>
        <a href="/demo" class="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-plutto-600 hover:bg-plutto-700 rounded-lg transition-colors shadow-sm">Agenda tu demo →</a>
      </div>

      <!-- Hamburger mobile -->
      <button id="mobile-menu-btn" class="lg:hidden p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100" aria-label="Menú">
        <svg id="hamburger-icon" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        <svg id="close-icon" class="w-6 h-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>
  </div>

  <!-- Mobile menu -->
  <div id="mobile-menu" class="hidden lg:hidden border-t border-gray-200 bg-white max-h-screen overflow-y-auto">
    <div class="px-4 py-4 space-y-1">
      <!-- Acordeón Producto -->
      <details class="group">
        <summary class="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-700 cursor-pointer rounded-lg hover:bg-gray-50 list-none">
          Producto
          <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </summary>
        <div class="mt-1 ml-3 space-y-1 border-l-2 border-plutto-200 pl-3">
          <a href="/producto/solicitudes" class="block py-2 text-sm text-gray-600 hover:text-gray-900">Solicitudes</a>
          <a href="/producto/debida-diligencia" class="block py-2 text-sm text-gray-600 hover:text-gray-900">Debida Diligencia</a>
          <a href="/producto/conflicto-interes" class="block py-2 text-sm text-gray-600 hover:text-gray-900">Conflicto de Interés</a>
          <a href="/producto/monitoreo-compliance" class="block py-2 text-sm text-gray-600 hover:text-gray-900">Monitoreo Compliance</a>
          <a href="/producto/monitoreo-riesgo" class="block py-2 text-sm text-gray-600 hover:text-gray-900">Monitoreo de Riesgo</a>
        </div>
      </details>
      <!-- Acordeón Industrias -->
      <details class="group">
        <summary class="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-700 cursor-pointer rounded-lg hover:bg-gray-50 list-none">
          Industrias
          <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </summary>
        <div class="mt-1 ml-3 space-y-1 border-l-2 border-plutto-200 pl-3">
          <a href="/industrias/energia" class="block py-2 text-sm text-gray-600 hover:text-gray-900">Energía</a>
          <a href="/industrias/mineria" class="block py-2 text-sm text-gray-600 hover:text-gray-900">Minería</a>
          <a href="/industrias/retail" class="block py-2 text-sm text-gray-600 hover:text-gray-900">Retail</a>
          <a href="/industrias/construccion" class="block py-2 text-sm text-gray-600 hover:text-gray-900">Construcción</a>
          <a href="/industrias/manufactura" class="block py-2 text-sm text-gray-600 hover:text-gray-900">Manufactura</a>
          <a href="/industrias/alimentacion" class="block py-2 text-sm text-gray-600 hover:text-gray-900">Alimentación</a>
        </div>
      </details>
      <!-- Acordeón Recursos -->
      <details class="group">
        <summary class="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-700 cursor-pointer rounded-lg hover:bg-gray-50 list-none">
          Recursos
          <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </summary>
        <div class="mt-1 ml-3 space-y-1 border-l-2 border-plutto-200 pl-3">
          <a href="/blog" class="block py-2 text-sm text-gray-600 hover:text-gray-900">Blog</a>
          <a href="/guias" class="block py-2 text-sm text-gray-600 hover:text-gray-900">Guías</a>
          <a href="/webinars" class="block py-2 text-sm text-gray-600 hover:text-gray-900">Webinars</a>
          <a href="/preguntas-frecuentes" class="block py-2 text-sm text-gray-600 hover:text-gray-900">Preguntas frecuentes</a>
        </div>
      </details>
      <!-- Acordeón Nosotros -->
      <details class="group">
        <summary class="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-700 cursor-pointer rounded-lg hover:bg-gray-50 list-none">
          Nosotros
          <svg class="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </summary>
        <div class="mt-1 ml-3 space-y-1 border-l-2 border-plutto-200 pl-3">
          <a href="/sobre-plutto" class="block py-2 text-sm text-gray-600 hover:text-gray-900">Sobre Plutto</a>
          <a href="/que-es-plutto" class="block py-2 text-sm text-gray-600 hover:text-gray-900">Qué es Plutto</a>
        </div>
      </details>
      <hr class="border-gray-200 my-2">
      <div class="flex items-center gap-2 px-3 py-2">
        <a href="/" class="text-sm text-gray-600">🇨🇱 Chile</a>
        <span class="text-gray-300">·</span>
        <a href="/mexico" class="text-sm text-gray-600">🇲🇽 México</a>
      </div>
      <hr class="border-gray-200 my-2">
      <a href="https://app.getplutto.com/login" class="block px-3 py-2.5 text-sm font-medium text-gray-600">Iniciar sesión</a>
      <a href="/demo" class="block text-center px-4 py-3 text-sm font-semibold text-white bg-plutto-600 rounded-lg">Agenda tu demo →</a>
    </div>
  </div>
</nav>
```

### B. Barra de Logos (social proof)

```html
<section class="py-12 border-y border-gray-200 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <p class="text-xs font-semibold uppercase tracking-widest text-gray-400 text-center mb-8">Empresas que confían en Plutto</p>
    <div class="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
      <img src="/assets/img/logos/[cliente].svg" alt="[Cliente]" class="h-7 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" loading="lazy" width="120" height="28">
      <!-- Repetir por logo -->
    </div>
  </div>
</section>
```

### C. Métricas de Impacto

```html
<section class="py-16 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
      <div data-animate>
        <p class="text-4xl sm:text-5xl font-bold text-plutto-600">+80</p>
        <p class="mt-2 text-sm font-medium text-gray-500">empresas en Chile, Perú y México</p>
      </div>
      <div data-animate>
        <p class="text-4xl sm:text-5xl font-bold text-plutto-600">+175K</p>
        <p class="mt-2 text-sm font-medium text-gray-500">empresas evaluadas</p>
      </div>
      <div data-animate>
        <p class="text-4xl sm:text-5xl font-bold text-plutto-600">76%</p>
        <p class="mt-2 text-sm font-medium text-gray-500">reducción en tiempo de gestión</p>
      </div>
      <div data-animate>
        <p class="text-4xl sm:text-5xl font-bold text-plutto-600">22%</p>
        <p class="mt-2 text-sm font-medium text-gray-500">disminución en costo operacional</p>
      </div>
    </div>
  </div>
</section>
```

### D. Sección Problema

```html
<section class="py-20 bg-plutto-50">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16 max-w-3xl mx-auto">
      <p data-animate class="text-sm font-semibold uppercase tracking-widest text-plutto-600 mb-3">El problema</p>
      <h2 data-animate class="text-3xl sm:text-4xl font-bold text-gray-900">[Título dolor]</h2>
      <p data-animate class="mt-4 text-lg text-gray-600">[40-60 palabras de respuesta directa]</p>
    </div>
    <div class="grid md:grid-cols-3 gap-6">
      <div data-animate class="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
        <div class="w-11 h-11 bg-red-100 rounded-xl flex items-center justify-center mb-5">
          <svg class="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><!-- icon --></svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">[Pain point]</h3>
        <p class="text-gray-600 text-sm leading-relaxed">[Descripción del dolor]</p>
      </div>
      <!-- Repetir x3 -->
    </div>
  </div>
</section>
```

### E. Módulos con Tabs (estilo Zip)

```html
<section class="py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12 max-w-3xl mx-auto">
      <p data-animate class="text-sm font-semibold uppercase tracking-widest text-plutto-600 mb-3">Plataforma completa</p>
      <h2 data-animate class="text-3xl sm:text-4xl font-bold text-gray-900">Todo lo que necesitas en un solo flujo</h2>
      <p data-animate class="mt-4 text-lg text-gray-600">Desde la solicitud hasta el monitoreo continuo.</p>
    </div>
    <!-- Tabs -->
    <div class="flex flex-wrap gap-2 justify-center mb-10" role="tablist">
      <button role="tab" aria-selected="true" class="tab-btn px-4 py-2 text-sm font-semibold rounded-full bg-plutto-600 text-white transition-colors" data-tab="solicitudes">Solicitudes</button>
      <button role="tab" aria-selected="false" class="tab-btn px-4 py-2 text-sm font-semibold rounded-full bg-white border border-gray-200 text-gray-600 hover:border-plutto-300 transition-colors" data-tab="debida-diligencia">Debida Diligencia</button>
      <button role="tab" aria-selected="false" class="tab-btn px-4 py-2 text-sm font-semibold rounded-full bg-white border border-gray-200 text-gray-600 hover:border-plutto-300 transition-colors" data-tab="conflicto">Conflicto de Interés</button>
      <button role="tab" aria-selected="false" class="tab-btn px-4 py-2 text-sm font-semibold rounded-full bg-white border border-gray-200 text-gray-600 hover:border-plutto-300 transition-colors" data-tab="compliance">Monitoreo Compliance</button>
      <button role="tab" aria-selected="false" class="tab-btn px-4 py-2 text-sm font-semibold rounded-full bg-white border border-gray-200 text-gray-600 hover:border-plutto-300 transition-colors" data-tab="riesgo">Monitoreo de Riesgo</button>
    </div>
    <!-- Panel -->
    <div class="bg-plutto-50 rounded-3xl p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <h3 class="text-2xl font-bold text-gray-900 mb-4">[Nombre módulo]</h3>
        <p class="text-gray-600 leading-relaxed mb-6">[Descripción del módulo]</p>
        <a href="/producto/[slug]" class="inline-flex items-center gap-2 text-sm font-semibold text-plutto-600 hover:text-plutto-700 transition-colors">Ver más sobre este módulo <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></a>
      </div>
      <div>
        <img src="/assets/img/producto/[modulo].webp" alt="[Módulo] en Plutto" class="rounded-2xl shadow-xl w-full" loading="lazy" width="560" height="360">
      </div>
    </div>
  </div>
</section>
```

### F. Cómo Funciona (5 pasos)

```html
<section id="como-funciona" class="py-20 bg-plutto-50">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16 max-w-3xl mx-auto">
      <p data-animate class="text-sm font-semibold uppercase tracking-widest text-plutto-600 mb-3">Proceso</p>
      <h2 data-animate class="text-3xl sm:text-4xl font-bold text-gray-900">De la solicitud al monitoreo en minutos</h2>
      <p data-animate class="mt-4 text-lg text-gray-600">Un flujo estructurado que reemplaza correos, planillas y revisiones manuales.</p>
    </div>
    <div class="grid md:grid-cols-5 gap-4">
      <div data-animate class="text-center">
        <div class="w-12 h-12 bg-plutto-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-sm font-bold shadow-lg shadow-plutto-600/20">01</div>
        <h3 class="text-sm font-semibold text-gray-900 mb-1">Solicitud</h3>
        <p class="text-xs text-gray-500">El área pide la evaluación</p>
      </div>
      <div data-animate class="text-center">
        <div class="w-12 h-12 bg-plutto-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-sm font-bold shadow-lg shadow-plutto-600/20">02</div>
        <h3 class="text-sm font-semibold text-gray-900 mb-1">Evaluación</h3>
        <p class="text-xs text-gray-500">Debida diligencia automática</p>
      </div>
      <div data-animate class="text-center">
        <div class="w-12 h-12 bg-plutto-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-sm font-bold shadow-lg shadow-plutto-600/20">03</div>
        <h3 class="text-sm font-semibold text-gray-900 mb-1">Análisis IA</h3>
        <p class="text-xs text-gray-500">Síntesis y recomendación</p>
      </div>
      <div data-animate class="text-center">
        <div class="w-12 h-12 bg-plutto-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-sm font-bold shadow-lg shadow-plutto-600/20">04</div>
        <h3 class="text-sm font-semibold text-gray-900 mb-1">Decisión</h3>
        <p class="text-xs text-gray-500">Aprobación con trazabilidad</p>
      </div>
      <div data-animate class="text-center">
        <div class="w-12 h-12 bg-plutto-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-sm font-bold shadow-lg shadow-plutto-600/20">05</div>
        <h3 class="text-sm font-semibold text-gray-900 mb-1">Monitoreo</h3>
        <p class="text-xs text-gray-500">Alertas continuas</p>
      </div>
    </div>
  </div>
</section>
```

### G. Testimonios

```html
<section class="py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <p data-animate class="text-sm font-semibold uppercase tracking-widest text-plutto-600 mb-3">Clientes</p>
      <h2 data-animate class="text-3xl sm:text-4xl font-bold text-gray-900">Lo que dicen nuestros clientes</h2>
    </div>
    <!-- 3 destacados -->
    <div class="grid md:grid-cols-3 gap-6 mb-8">
      <div data-animate class="bg-plutto-50 rounded-2xl p-8 border border-plutto-100">
        <blockquote class="text-gray-700 leading-relaxed mb-6 text-sm">"[Cita del cliente — específica, con resultado concreto]"</blockquote>
        <div class="flex items-center gap-3">
          <img src="/assets/img/testimonials/[nombre].webp" alt="[Nombre]" class="w-10 h-10 rounded-full object-cover" loading="lazy" width="40" height="40">
          <div>
            <p class="text-sm font-semibold text-gray-900">[Nombre Completo]</p>
            <p class="text-xs text-gray-500">[Cargo] · [Empresa]</p>
          </div>
        </div>
      </div>
      <!-- Repetir x3 -->
    </div>
  </div>
</section>
```

### H. Para Quién Es (tabs por audiencia)

```html
<section class="py-20 bg-plutto-50">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12 max-w-3xl mx-auto">
      <p data-animate class="text-sm font-semibold uppercase tracking-widest text-plutto-600 mb-3">Audiencias</p>
      <h2 data-animate class="text-3xl sm:text-4xl font-bold text-gray-900">Diseñado para tu equipo</h2>
    </div>
    <div class="grid md:grid-cols-3 gap-6">
      <div data-animate class="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:border-plutto-300 transition-colors">
        <div class="w-11 h-11 bg-plutto-200 rounded-xl flex items-center justify-center mb-5">
          <svg class="w-5 h-5 text-plutto-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><!-- icon --></svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Compliance, Legal y Auditoría</h3>
        <p class="text-gray-600 text-sm leading-relaxed">Cumplimiento normativo, trazabilidad completa, evidencia lista para auditorías.</p>
        <a href="/demo" class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-plutto-600 hover:text-plutto-700">Agenda tu demo <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></a>
      </div>
      <div data-animate class="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:border-plutto-300 transition-colors">
        <div class="w-11 h-11 bg-plutto-200 rounded-xl flex items-center justify-center mb-5">
          <svg class="w-5 h-5 text-plutto-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><!-- icon --></svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Abastecimiento</h3>
        <p class="text-gray-600 text-sm leading-relaxed">Evaluación de proveedores sin Excel. Proceso centralizado y auditable.</p>
        <a href="/demo" class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-plutto-600 hover:text-plutto-700">Agenda tu demo <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></a>
      </div>
      <div data-animate class="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:border-plutto-300 transition-colors">
        <div class="w-11 h-11 bg-plutto-200 rounded-xl flex items-center justify-center mb-5">
          <svg class="w-5 h-5 text-plutto-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><!-- icon --></svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Finanzas</h3>
        <p class="text-gray-600 text-sm leading-relaxed">Control de riesgo, reducción de costos, respaldo ante auditorías.</p>
        <a href="/demo" class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-plutto-600 hover:text-plutto-700">Agenda tu demo <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></a>
      </div>
    </div>
  </div>
</section>
```

### I. FAQ Acordeón

```html
<section class="py-20 bg-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 data-animate class="text-3xl sm:text-4xl font-bold text-gray-900">Preguntas frecuentes</h2>
    </div>
    <div class="space-y-3">
      <details data-animate class="group bg-plutto-50 rounded-2xl border border-plutto-100">
        <summary class="flex items-center justify-between px-6 py-5 cursor-pointer">
          <h3 class="text-base font-semibold text-gray-900 pr-4">[Pregunta]</h3>
          <svg class="w-5 h-5 text-plutto-600 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </summary>
        <div class="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
          <p>[Respuesta]</p>
        </div>
      </details>
    </div>
  </div>
</section>
```

### J. CTA Final

```html
<section class="py-24 bg-plutto-900 relative overflow-hidden">
  <!-- Acento decorativo -->
  <div class="absolute top-0 right-0 w-96 h-96 bg-plutto-700/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
    <h2 data-animate class="text-3xl sm:text-4xl font-bold text-white">Empieza a saber con quién trabajas.</h2>
    <p data-animate class="mt-4 text-lg text-plutto-300 max-w-2xl mx-auto">Te mostramos la plataforma en vivo, adaptada a tu proceso y tu equipo.</p>
    <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/demo" class="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-plutto-900 bg-white hover:bg-plutto-50 rounded-lg transition-colors shadow-lg">Agenda tu demo →</a>
      <a href="https://app.getplutto.com/login" class="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white border border-white/20 hover:bg-white/10 rounded-lg transition-colors">Iniciar sesión</a>
    </div>
  </div>
</section>
```

### K. Footer

```html
<footer class="bg-plutto-900 text-plutto-400 border-t border-white/5">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="grid grid-cols-2 md:grid-cols-5 gap-8">
      <!-- Marca -->
      <div class="col-span-2 md:col-span-1">
        <img src="/assets/img/logo-white.svg" alt="Plutto" class="h-8 w-auto mb-4">
        <p class="text-sm text-plutto-400 leading-relaxed">Gestión de riesgo y compliance para empresas en Latinoamérica.</p>
        <div class="mt-4 flex gap-3">
          <a href="https://www.linkedin.com/company/getplutto" class="text-plutto-400 hover:text-white transition-colors" aria-label="LinkedIn">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>
      <!-- Producto -->
      <div>
        <p class="text-sm font-semibold text-white mb-4">Producto</p>
        <ul class="space-y-2.5">
          <li><a href="/producto/solicitudes" class="text-sm hover:text-white transition-colors">Solicitudes</a></li>
          <li><a href="/producto/debida-diligencia" class="text-sm hover:text-white transition-colors">Debida Diligencia</a></li>
          <li><a href="/producto/conflicto-interes" class="text-sm hover:text-white transition-colors">Conflicto de Interés</a></li>
          <li><a href="/producto/monitoreo-compliance" class="text-sm hover:text-white transition-colors">Monitoreo Compliance</a></li>
          <li><a href="/producto/monitoreo-riesgo" class="text-sm hover:text-white transition-colors">Monitoreo de Riesgo</a></li>
        </ul>
      </div>
      <!-- Industrias -->
      <div>
        <p class="text-sm font-semibold text-white mb-4">Industrias</p>
        <ul class="space-y-2.5">
          <li><a href="/industrias/energia" class="text-sm hover:text-white transition-colors">Energía</a></li>
          <li><a href="/industrias/mineria" class="text-sm hover:text-white transition-colors">Minería</a></li>
          <li><a href="/industrias/retail" class="text-sm hover:text-white transition-colors">Retail</a></li>
          <li><a href="/industrias/construccion" class="text-sm hover:text-white transition-colors">Construcción</a></li>
          <li><a href="/industrias/manufactura" class="text-sm hover:text-white transition-colors">Manufactura</a></li>
          <li><a href="/industrias/alimentacion" class="text-sm hover:text-white transition-colors">Alimentación</a></li>
        </ul>
      </div>
      <!-- Recursos -->
      <div>
        <p class="text-sm font-semibold text-white mb-4">Recursos</p>
        <ul class="space-y-2.5">
          <li><a href="/blog" class="text-sm hover:text-white transition-colors">Blog</a></li>
          <li><a href="/guias" class="text-sm hover:text-white transition-colors">Guías</a></li>
          <li><a href="/webinars" class="text-sm hover:text-white transition-colors">Webinars</a></li>
          <li><a href="/preguntas-frecuentes" class="text-sm hover:text-white transition-colors">Preguntas frecuentes</a></li>
        </ul>
      </div>
      <!-- Empresa -->
      <div>
        <p class="text-sm font-semibold text-white mb-4">Empresa</p>
        <ul class="space-y-2.5">
          <li><a href="/sobre-plutto" class="text-sm hover:text-white transition-colors">Sobre Plutto</a></li>
          <li><a href="/que-es-plutto" class="text-sm hover:text-white transition-colors">Qué es Plutto</a></li>
          <li><a href="/demo" class="text-sm hover:text-white transition-colors">Agenda una demo</a></li>
          <li><a href="https://app.getplutto.com/login" class="text-sm hover:text-white transition-colors">Iniciar sesión</a></li>
          <li><a href="mailto:hola@getplutto.com" class="text-sm hover:text-white transition-colors">hola@getplutto.com</a></li>
        </ul>
      </div>
    </div>
    <div class="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-xs text-plutto-400">© 2026 Plutto. Todos los derechos reservados.</p>
      <div class="flex gap-6">
        <a href="/politica-privacidad" class="text-xs text-plutto-400 hover:text-white transition-colors">Política de privacidad</a>
        <a href="/terminos" class="text-xs text-plutto-400 hover:text-white transition-colors">Términos de uso</a>
      </div>
    </div>
  </div>
</footer>
```

### L. Breadcrumbs

```html
<nav aria-label="Breadcrumb" class="pt-24 pb-2">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <ol class="flex items-center gap-2 text-sm text-gray-500">
      <li><a href="/" class="hover:text-gray-900 transition-colors">Inicio</a></li>
      <li><span class="text-gray-300">/</span></li>
      <li><a href="/[seccion]" class="hover:text-gray-900 transition-colors">[Sección]</a></li>
      <li><span class="text-gray-300">/</span></li>
      <li class="text-gray-900 font-medium">[Página actual]</li>
    </ol>
  </div>
</nav>
```

### M. CTA Sticky Mobile

```html
<div class="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur border-t border-gray-200 p-3 safe-area-bottom">
  <a href="/demo" class="flex items-center justify-center w-full px-6 py-3.5 text-base font-semibold text-white bg-plutto-600 hover:bg-plutto-700 rounded-xl transition-colors shadow-lg shadow-plutto-600/20">Agenda tu demo →</a>
</div>
```

---

## 6. Schema JSON-LD Templates

### Organization (solo homepage)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Plutto",
  "url": "https://getplutto.com",
  "logo": "https://getplutto.com/assets/img/logo.svg",
  "description": "Plataforma de gestión de riesgo y compliance para empresas en Latinoamérica.",
  "sameAs": ["https://www.linkedin.com/company/getplutto"],
  "contactPoint": { "@type": "ContactPoint", "email": "hola@getplutto.com", "contactType": "sales" }
}
</script>
```

### BreadcrumbList (todas las páginas internas)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://getplutto.com/" },
    { "@type": "ListItem", "position": 2, "name": "[Sección]", "item": "https://getplutto.com/[seccion]/" },
    { "@type": "ListItem", "position": 3, "name": "[Página]", "item": "https://getplutto.com/[seccion]/[slug]" }
  ]
}
</script>
```

### SoftwareApplication (páginas de soluciones/producto)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Plutto",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "url": "https://getplutto.com",
  "description": "[Descripción de la solución específica]",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Demo gratuita disponible" }
}
</script>
```

### FAQPage + Article (conceptos y blog)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{ "@type": "Question", "name": "[Pregunta]", "acceptedAnswer": { "@type": "Answer", "text": "[Respuesta]" } }]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Título]",
  "description": "[Descripción]",
  "author": { "@type": "Organization", "name": "Plutto" },
  "publisher": { "@type": "Organization", "name": "Plutto", "logo": { "@type": "ImageObject", "url": "https://getplutto.com/assets/img/logo.svg" } },
  "datePublished": "[YYYY-MM-DD]",
  "dateModified": "[YYYY-MM-DD]",
  "mainEntityOfPage": "https://getplutto.com/[ruta]"
}
</script>
```

---

## 7. Imágenes Pendientes de Diseño

> Estos assets deben ser entregados por el equipo de diseño antes de publicar:

| Archivo | Descripción | Prioridad |
|---------|-------------|-----------|
| `assets/img/logo.svg` | Logo Plutto color (sobre fondo claro) | 🔴 Alta |
| `assets/img/logo-white.svg` | Logo Plutto blanco (para footer dark) | 🔴 Alta |
| `assets/img/favicon.ico` | Favicon | 🔴 Alta |
| `assets/img/hero-producto.webp` | Screenshot del panel de DD (imagen compartida por Marketing) | 🔴 Alta |
| `assets/img/bg-hero-gradient.webp` | Fondo gradiente con arcos del brand guide | 🟡 Media |
| `assets/img/og/home.png` | OG image homepage (1200×630) | 🟡 Media |
| `assets/img/logos/[cliente].svg` | Logos de clientes en SVG | 🟡 Media |
| `assets/img/testimonials/[nombre].webp` | Fotos de testimonios | 🟢 Baja |

---

## 8. Reglas para Claude Code

1. **Color primario: `plutto-600` = `#5563E6`** — nunca `indigo-600`, nunca `#3D3BF3`
2. **Fondo principal: `bg-plutto-50`** (`#FAFAFE`) — no `bg-white`
3. **Font: Inter únicamente** — no agregar otras fuentes
4. **Tailwind config inline en `<head>`** de cada página
5. **HTML semántico:** `<article>`, `<section>`, `<table>`, `<ul>`/`<ol>` nativo
6. **1 H1 por página**, H2 por sección, H3 sub-items. Nunca saltar niveles
7. **Cada sección abre con 40-60 palabras** de respuesta directa (AEO)
8. **Schema JSON-LD:** BreadcrumbList (internas) + el que corresponda
9. **Meta tags completos:** title (50-60 chars), description (120-158), og:image, Twitter Card, canonical
10. **Hero:** `fetchpriority="high"`. Resto: `loading="lazy"` + `width`/`height`
11. **`data-animate`** en todos los elementos que deben animar al scroll
12. **Mobile:** CTA sticky (componente M), tap targets 48×48px mínimo
13. **Breadcrumbs** (HTML + schema) en todas las páginas internas
14. **No usar `dark:`** — dark mode deshabilitado
15. **Nunca eliminar atributos `data-animate`**
