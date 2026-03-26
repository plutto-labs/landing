# Manual de Marca y Design System - Plutto Landing

Stack: HTML estático + Tailwind CSS CDN + Inter (Google Fonts) + Cloudflare Pages.

---

## 1. Configuración Base

### Tailwind Config (inline en `<head>`)

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    darkMode: 'media',
    theme: {
      extend: {
        colors: {
          plutto: {
            50:  '#eef0ff',
            100: '#e0e3ff',
            200: '#c7ccff',
            300: '#a4a8ff',
            400: '#7a72ff',
            500: '#5a4fff',
            600: '#3d3bf3',
            700: '#3530d6',
            800: '#2b28ab',
            900: '#282787',
            950: '#18164f',
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

> **Nota:** Dark mode está declarado en config (`darkMode: 'media'`) pero se omite en primera versión. No usar clases `dark:` en componentes.

### Head Base Template

```html
<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Keyword] — [Beneficio] | Plutto</title>
  <meta name="description" content="[120-158 chars con CTA]">
  <link rel="canonical" href="https://getplutto.com/[ruta]">
  <meta name="robots" content="index, follow">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://getplutto.com/[ruta]">
  <meta property="og:title" content="[Título]">
  <meta property="og:description" content="[Descripción]">
  <meta property="og:image" content="https://getplutto.com/assets/img/og/[pagina].png">
  <meta property="og:site_name" content="Plutto">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="[Título]">
  <meta name="twitter:description" content="[Descripción]">
  <meta name="twitter:image" content="https://getplutto.com/assets/img/og/[pagina].png">
  <link rel="icon" href="/assets/img/favicon.ico" type="image/x-icon">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/css/custom.css">
</head>
```

### Body Base

```html
<body class="bg-white text-gray-900 font-sans antialiased">
```

---

## 2. Tokens de Diseño

### Colores

| Token | Clase Tailwind | Hex | Uso |
|-------|---------------|-----|-----|
| Primario | `plutto-600` | #3d3bf3 | Botones CTA, links, acentos |
| Primario hover | `plutto-700` | #3530d6 | Estados hover de botones y links |
| Primario suave | `plutto-50` / `plutto-100` | #eef0ff / #e0e3ff | Fondos de iconos, badges, highlights |
| Texto principal | `gray-900` | — | Títulos y headings |
| Texto cuerpo | `gray-600` | — | Párrafos y descripciones |
| Texto terciario | `gray-400` | — | Labels, texto de apoyo |
| Fondo página | `white` | — | Background principal |
| Fondo alterno | `gray-50` | — | Secciones alternadas |
| Bordes | `gray-200` | — | Separadores, bordes de cards |

### Tipografía

| Elemento | Clases | Uso |
|----------|--------|-----|
| H1 | `text-4xl sm:text-5xl lg:text-6xl font-bold` | Hero heading |
| H2 | `text-3xl sm:text-4xl font-bold` | Sección heading |
| H3 | `text-xl font-semibold` | Cards, sub-items |
| Body | `text-base` | Párrafos generales |
| Body large | `text-lg sm:text-xl` | Párrafo hero, destacados |
| Label | `text-sm font-medium` | Nav links, botones pequeños |
| Kicker | `text-sm font-semibold uppercase tracking-widest text-gray-500` | Pre-títulos de sección |

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
| Card | `rounded-2xl border border-gray-200 shadow-sm` | Tarjetas de features |
| Botón | `rounded-lg` | Todos los botones |
| Icono | `rounded-xl` | Contenedores de iconos |
| CTA shadow | `shadow-lg shadow-plutto-600/25` | Botón CTA principal |

---

## 3. Tono de Voz

### Principios

- **Profesional pero cercano** - No somos un banco, somos una startup tech que habla como personas
- **Directo** - Ir al punto, sin rodeos ni jerga innecesaria
- **Orientado a beneficios** - Hablar de lo que el usuario gana, no de nuestras features técnicas
- **Español latinoamericano** - Usar "ustedes" (nunca "vosotros"), vocabulario neutro LATAM

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

---

## 4. Componentes

### A. Navegación

Sticky, responsive, con menú hamburguesa en mobile.

```html
<nav class="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2">
        <img src="/assets/img/logo.svg" alt="Plutto" class="h-8 w-auto">
      </a>
      <!-- Links desktop -->
      <div class="hidden md:flex items-center gap-8">
        <a href="/soluciones/due-diligence-proveedores" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Soluciones</a>
        <a href="/conceptos/que-es-kyb" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Conceptos</a>
        <a href="/preguntas-frecuentes" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
        <a href="/blog" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
      </div>
      <!-- CTA desktop -->
      <div class="hidden md:flex items-center gap-4">
        <a href="https://app.getplutto.com/login" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Iniciar sesión</a>
        <a href="/demo" class="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-plutto-600 hover:bg-plutto-700 rounded-lg transition-colors">Agendar demo</a>
      </div>
      <!-- Hamburger mobile -->
      <button id="mobile-menu-btn" class="md:hidden p-2 text-gray-600 hover:text-gray-900" aria-label="Menú">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </div>
  </div>
  <!-- Mobile menu -->
  <div id="mobile-menu" class="hidden md:hidden border-t border-gray-200 bg-white">
    <div class="px-4 py-4 space-y-3">
      <a href="/soluciones/due-diligence-proveedores" class="block text-sm font-medium text-gray-600">Soluciones</a>
      <a href="/conceptos/que-es-kyb" class="block text-sm font-medium text-gray-600">Conceptos</a>
      <a href="/preguntas-frecuentes" class="block text-sm font-medium text-gray-600">FAQ</a>
      <a href="/blog" class="block text-sm font-medium text-gray-600">Blog</a>
      <hr class="border-gray-200">
      <a href="https://app.getplutto.com/login" class="block text-sm font-medium text-gray-600">Iniciar sesión</a>
      <a href="/demo" class="block text-center px-4 py-2 text-sm font-semibold text-white bg-plutto-600 rounded-lg">Agendar demo</a>
    </div>
  </div>
</nav>
```

### B. Hero

Split layout: texto a la izquierda, visual a la derecha.

```html
<section class="pt-32 pb-20 sm:pt-40 sm:pb-28">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Texto -->
      <div>
        <p class="text-sm font-semibold uppercase tracking-widest text-plutto-600 mb-4">[Kicker]</p>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">[Título H1]</h1>
        <p class="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl">[Subtítulo 40-60 palabras, respuesta directa]</p>
        <div class="mt-8 flex flex-col sm:flex-row gap-4">
          <a href="/demo" class="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-plutto-600 hover:bg-plutto-700 rounded-lg transition-colors shadow-lg shadow-plutto-600/25">Agendar demo</a>
          <a href="#como-funciona" class="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">Conoce más</a>
        </div>
      </div>
      <!-- Visual -->
      <div class="relative">
        <img src="/assets/img/[pagina]-hero.webp" alt="[Alt descriptivo]" class="rounded-2xl shadow-2xl" width="600" height="400" fetchpriority="high">
      </div>
    </div>
  </div>
</section>
```

### C. Barra de Logos

Social proof con logos de clientes.

```html
<section class="py-12 border-y border-gray-200">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <p class="text-sm font-semibold uppercase tracking-widest text-gray-500 text-center mb-8">Empresas que confían en Plutto</p>
    <div class="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
      <img src="/assets/img/logos/[cliente].svg" alt="[Cliente]" class="h-8 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" loading="lazy" width="120" height="32">
      <!-- Repetir por logo -->
    </div>
  </div>
</section>
```

### D. Sección Problema

3 pain points que el usuario reconoce.

```html
<section class="py-20">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 data-animate class="text-3xl sm:text-4xl font-bold text-gray-900">[Título problema]</h2>
      <p data-animate class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">[40-60 palabras respuesta directa]</p>
    </div>
    <div class="grid md:grid-cols-3 gap-8">
      <div data-animate class="text-center p-8">
        <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-6">
          <svg class="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><!-- icon --></svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-3">[Pain point]</h3>
        <p class="text-gray-600">[Descripción del dolor]</p>
      </div>
      <!-- Repetir x3 -->
    </div>
  </div>
</section>
```

### E. Sección Solución / Features

Grid de 4 cards con icono, título y descripción.

```html
<section class="py-20 bg-gray-50">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 data-animate class="text-3xl sm:text-4xl font-bold text-gray-900">[Título solución]</h2>
      <p data-animate class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">[40-60 palabras respuesta directa]</p>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div data-animate class="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
        <div class="w-12 h-12 bg-plutto-100 rounded-xl flex items-center justify-center mb-6">
          <svg class="w-6 h-6 text-plutto-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><!-- icon --></svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-3">[Feature]</h3>
        <p class="text-gray-600">[Beneficio, no feature técnica]</p>
      </div>
      <!-- Repetir x4 -->
    </div>
  </div>
</section>
```

### F. Stats / ROI

Métricas de impacto en fila.

```html
<section class="py-20">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 data-animate class="text-3xl sm:text-4xl font-bold text-gray-900">[Título métricas]</h2>
      <p data-animate class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">[40-60 palabras]</p>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
      <div data-animate class="text-center">
        <p class="text-4xl sm:text-5xl font-bold text-plutto-600">[N]%</p>
        <p class="mt-2 text-sm font-medium text-gray-600">[Descripción métrica]</p>
      </div>
      <!-- Repetir x4 -->
    </div>
  </div>
</section>
```

### G. Testimonial Card

Cita de cliente con foto y cargo.

```html
<section class="py-20 bg-gray-50">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div data-animate class="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-200 text-center">
      <blockquote>
        <p class="text-lg sm:text-xl text-gray-900 italic">"[Cita del cliente]"</p>
      </blockquote>
      <div class="mt-8 flex items-center justify-center gap-4">
        <img src="/assets/img/testimonials/[nombre].webp" alt="[Nombre]" class="w-12 h-12 rounded-full" loading="lazy" width="48" height="48">
        <div class="text-left">
          <p class="text-sm font-semibold text-gray-900">[Nombre Completo]</p>
          <p class="text-sm text-gray-600">[Cargo], [Empresa]</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

### H. Cómo Funciona

4 pasos verticales con números.

```html
<section id="como-funciona" class="py-20">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 data-animate class="text-3xl sm:text-4xl font-bold text-gray-900">Cómo funciona</h2>
      <p data-animate class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">[40-60 palabras]</p>
    </div>
    <div class="grid md:grid-cols-4 gap-8">
      <div data-animate class="text-center">
        <div class="w-10 h-10 bg-plutto-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">1</div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">[Paso]</h3>
        <p class="text-gray-600">[Descripción]</p>
      </div>
      <!-- Repetir x4 -->
    </div>
  </div>
</section>
```

### I. FAQ Acordeón

Preguntas frecuentes con schema FAQPage integrado.

```html
<section class="py-20 bg-gray-50">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 data-animate class="text-3xl sm:text-4xl font-bold text-gray-900">Preguntas frecuentes</h2>
    </div>
    <div class="space-y-4">
      <details data-animate class="group bg-white rounded-2xl border border-gray-200 shadow-sm">
        <summary class="flex items-center justify-between p-6 cursor-pointer">
          <h3 class="text-lg font-semibold text-gray-900 pr-4">[Pregunta]</h3>
          <svg class="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </summary>
        <div class="px-6 pb-6 text-gray-600">
          <p>[Respuesta]</p>
        </div>
      </details>
      <!-- Repetir por pregunta -->
    </div>
  </div>
</section>
```

### J. CTA Final

Sección de cierre con fondo plutto-600.

```html
<section class="py-20 bg-plutto-600">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 data-animate class="text-3xl sm:text-4xl font-bold text-white">[Título CTA]</h2>
    <p data-animate class="mt-4 text-lg text-plutto-100 max-w-2xl mx-auto">[Subtítulo]</p>
    <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/demo" class="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-plutto-600 bg-white hover:bg-plutto-50 rounded-lg transition-colors shadow-lg">Agendar demo</a>
      <a href="https://app.getplutto.com/login" class="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white border border-white/30 hover:bg-white/10 rounded-lg transition-colors">Iniciar sesión</a>
    </div>
  </div>
</section>
```

### K. Footer

4 columnas con links, logo y copyright.

```html
<footer class="bg-gray-900 text-gray-400">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
      <!-- Columna 1: Marca -->
      <div class="col-span-2 md:col-span-1">
        <img src="/assets/img/logo-white.svg" alt="Plutto" class="h-8 w-auto mb-4">
        <p class="text-sm text-gray-500">Verificación de empresas automatizada para equipos de compliance.</p>
      </div>
      <!-- Columna 2: Soluciones -->
      <div>
        <p class="text-sm font-semibold text-white mb-4">Soluciones</p>
        <ul class="space-y-2">
          <li><a href="/soluciones/due-diligence-proveedores" class="text-sm hover:text-white transition-colors">Due Diligence</a></li>
          <li><a href="/soluciones/compliance-proveedores" class="text-sm hover:text-white transition-colors">Compliance</a></li>
        </ul>
      </div>
      <!-- Columna 3: Recursos -->
      <div>
        <p class="text-sm font-semibold text-white mb-4">Recursos</p>
        <ul class="space-y-2">
          <li><a href="/conceptos/que-es-kyb" class="text-sm hover:text-white transition-colors">Conceptos</a></li>
          <li><a href="/blog" class="text-sm hover:text-white transition-colors">Blog</a></li>
          <li><a href="/preguntas-frecuentes" class="text-sm hover:text-white transition-colors">FAQ</a></li>
        </ul>
      </div>
      <!-- Columna 4: Empresa -->
      <div>
        <p class="text-sm font-semibold text-white mb-4">Empresa</p>
        <ul class="space-y-2">
          <li><a href="/demo" class="text-sm hover:text-white transition-colors">Agendar demo</a></li>
          <li><a href="https://app.getplutto.com/login" class="text-sm hover:text-white transition-colors">Iniciar sesión</a></li>
        </ul>
      </div>
    </div>
    <div class="mt-12 pt-8 border-t border-gray-800 text-center">
      <p class="text-sm text-gray-500">&copy; 2026 Plutto. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>
```

### L. Breadcrumbs

Con schema BreadcrumbList. Usar en todas las páginas internas.

```html
<nav aria-label="Breadcrumb" class="pt-24 pb-4">
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

Barra fija en la parte inferior en mobile.

```html
<div class="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white border-t border-gray-200 p-3">
  <a href="/demo" class="flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-white bg-plutto-600 hover:bg-plutto-700 rounded-lg transition-colors shadow-lg shadow-plutto-600/25">Agendar demo</a>
</div>
```

### N. Tabla Comparativa

Tabla HTML nativa para comparar features o planes.

```html
<section class="py-20">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 data-animate class="text-3xl sm:text-4xl font-bold text-gray-900">[Título comparativa]</h2>
      <p data-animate class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">[40-60 palabras]</p>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="border-b-2 border-gray-200">
            <th class="py-4 pr-4 text-sm font-semibold text-gray-900">[Criterio]</th>
            <th class="py-4 px-4 text-sm font-semibold text-gray-900">[Opción A]</th>
            <th class="py-4 px-4 text-sm font-semibold text-plutto-600">[Plutto]</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-gray-200">
            <td class="py-4 pr-4 text-sm text-gray-900 font-medium">[Feature]</td>
            <td class="py-4 px-4 text-sm text-gray-600">[Valor]</td>
            <td class="py-4 px-4 text-sm text-gray-900 font-medium">[Valor Plutto]</td>
          </tr>
          <!-- Repetir por fila -->
        </tbody>
      </table>
    </div>
  </div>
</section>
```

---

## 5. Schema JSON-LD Templates

### Organization (solo homepage)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Plutto",
  "url": "https://getplutto.com",
  "logo": "https://getplutto.com/assets/img/logo.svg",
  "description": "Plataforma de verificación de empresas (KYB) y compliance automatizado para Latinoamérica.",
  "sameAs": [
    "https://www.linkedin.com/company/getplutto"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "sales@getplutto.com",
    "contactType": "sales"
  }
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

### SoftwareApplication (páginas de soluciones)

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
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Demo gratuita disponible"
  }
}
</script>
```

### FAQPage (páginas con FAQ) + Article (blog/conceptos)

```html
<!-- FAQPage -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Pregunta]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Respuesta]"
      }
    }
  ]
}
</script>

<!-- Article (para blog y conceptos) -->
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

## 6. Estructura de Archivos

```
landing/
├── index.html
├── demo.html
├── mexico.html
├── robots.txt, sitemap.xml, _headers, _redirects
├── assets/
│   ├── css/
│   │   └── custom.css
│   ├── js/
│   └── img/
│       ├── og/
│       ├── logos/
│       └── testimonials/
├── soluciones/
│   ├── due-diligence-proveedores.html
│   └── compliance-proveedores.html
├── conceptos/
│   ├── que-es-kyb.html
│   ├── kyc-vs-kyb.html
│   └── ...
├── industrias/
│   ├── banca.html
│   ├── fintech.html
│   └── retail.html
├── blog/
│   ├── index.html
│   └── [slug].html
└── preguntas-frecuentes.html
```

---

## 7. Reglas para Claude Code

1. **Usar componentes exactos del design system.** Copiar el HTML de la sección 4 y reemplazar placeholders `[...]`.
2. **Color primario: `plutto-600` (#3d3bf3).** Nunca usar `indigo-600` ni otro color como primario.
3. **Font: Inter.** No agregar otras fuentes.
4. **Incluir Tailwind config inline en `<head>`** (copiar de sección 1).
5. **HTML semántico:** `<article>`, `<section>`, `<table>` nativo, `<ul>`/`<ol>` nativo.
6. **1 H1 por página, H2 por sección, H3 sub-items.** Nunca saltar niveles de heading.
7. **Cada sección abre con 40-60 palabras** de respuesta directa al tema (optimización AEO).
8. **Schema JSON-LD obligatorio:** BreadcrumbList (todas las internas) + el que corresponda a la página.
9. **Meta tags completos:** title (50-60 chars), description (120-158 chars), og:image, Twitter Card, canonical.
10. **Hero image con `fetchpriority="high"`.** Resto de imágenes con `loading="lazy"` y atributos `width`/`height`.
11. **`data-animate`** en elementos que animan al scroll.
12. **Mobile:** CTA sticky (componente M), tap targets 48x48px mínimo, font base 16px.
13. **Breadcrumbs** (HTML + schema) en todas las páginas internas.
14. **No usar dark mode.** Omitir todas las clases con prefijo `dark:`.
