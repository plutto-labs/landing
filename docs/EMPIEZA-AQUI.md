# Guía de Inicio - Landing Plutto

Esta guía te explica cómo usar este repositorio para crear y editar páginas del sitio de Plutto usando Claude Code. No necesitas saber programar.

---

## 1. Setup Inicial (una sola vez)

### Instalar Claude Code
```bash
npm install -g @anthropic-ai/claude-code
```

### Clonar el repo
```bash
git clone https://github.com/plutto-labs/landing.git
cd landing
```

### Abrir Claude Code
```bash
claude
```

### Ver el sitio localmente
En otra terminal:
```bash
cd landing
npx serve .
```
Abre `http://localhost:3000` en el navegador. Cada vez que Claude edite un archivo, refresca para ver los cambios.

### Verificar que funciona
Escribe en Claude Code:
> ¿Qué archivos hay en este repo?

Debería listar `index.html`, `assets/`, `docs/`, etc.

---

## 2. Tu Flujo de Trabajo Diario

### Crear una página nueva

1. Abre `docs/templates/brief-pagina.md` y copia el template en blanco
2. Llena todos los campos marcados con `[LLENAR]`
3. Abre Claude Code en el repo
4. Pega el template llenado + las instrucciones de la sección "Prompt para Claude Code" del mismo archivo
5. Claude genera el HTML -> refresca localhost:3000 -> revisa
6. Pide correcciones: "El hero debería tener el texto a la izquierda" / "Cambia el subtítulo a..."
7. Cuando estés conforme, publica (ver sección 3)

### Editar una página existente

En Claude Code:
> Abre el archivo soluciones/due-diligence-proveedores.html y haz estos cambios:
> - Cambia el H1 a "..."
> - Agrega un testimonial de [nombre], [cargo], [empresa]: "[quote]"

### Revisar SEO de una página

En Claude Code:
> /auditoria-seo

O para una página específica:
> Revisa el archivo [ruta].html y dime si cumple con las reglas SEO del design system

---

## 3. Publicar Cambios

```bash
git add .
git commit -m "feat: crear landing due diligence proveedores"
git push
```

Cloudflare Pages detecta el push y publica automáticamente en ~1 minuto.

Dashboard: https://dash.cloudflare.com -> Pages -> plutto-landing

---

## 4. Orden de Tareas SEO

Sigue el plan semanal en `docs/seo/plan-semanal.md`. Resumen:

| Cuándo | Qué hacer | Tipo |
|--------|-----------|------|
| **Semana 1-2** | Arreglos técnicos (lang, og:image, schema, robots.txt) | Con Claude |
| **Semana 3-4** | Perfiles G2, Capterra, ComparaSoftware + pedir reviews | Manual |
| **Mes 2** | 4 artículos pilar (KYB, KYC vs KYB, regulaciones, DD) | Con Claude |
| **Mes 3** | Landing pages solución + FAQ | Con Claude |
| **Mes 4+** | Landing por industria + contenido inglés + prensa | Mixto |

---

## 5. Comandos Disponibles

| Comando | Qué hace |
|---------|----------|
| `/auditoria-seo` | Revisa meta tags, headings, sitemap, keywords |
| `/verificar-consistencia` | Verifica colores, fonts, spacing vs manual de marca |
| `/mejorar-copy` | Sugiere mejoras de redacción |
| `/nueva-pagina [nombre]` | Crea una página nueva desde template |
| `/nueva-seccion [tipo] [página]` | Agrega sección a página existente |
| `/crear-articulo [título]` | Crea un artículo para conceptos/ o blog/ |
| `/auditoria-accesibilidad` | Audita accesibilidad WCAG 2.1 AA |
| `/revisar-rendimiento` | Revisa optimizaciones de rendimiento |

---

## 6. Estructura del Repo

```
landing/
├── index.html              <- Homepage (editar directamente)
├── demo.html               <- Formulario demo
├── mexico.html             <- Landing México
├── robots.txt              <- Reglas para crawlers
├── sitemap.xml             <- Mapa del sitio (actualizar con cada página nueva)
├── _headers                <- Security headers
├── _redirects              <- Redirects 301
├── assets/
│   ├── css/custom.css      <- Animaciones (no tocar)
│   ├── js/main.js          <- Mobile menu + scroll (no tocar)
│   └── img/                <- Imágenes (WebP preferido)
│       ├── og/             <- Open Graph images (1200x630px)
│       ├── logos/          <- Logos clientes (SVG)
│       └── testimonials/   <- Fotos testimoniales (WebP)
├── soluciones/             <- Landing pages por caso de uso
├── conceptos/              <- Artículos educativos (glosario)
├── industrias/             <- Landing pages por industria (futuro)
├── blog/                   <- Blog (migrado de subdominio)
├── docs/
│   ├── EMPIEZA-AQUI.md     <- Este archivo
│   ├── plutto.md           <- Contexto del producto y keywords SEO
│   ├── marca.md            <- Design system completo (colores, componentes, reglas)
│   ├── seo/
│   │   ├── auditoria.md    <- Diagnóstico SEO/AEO actual
│   │   ├── plan-semanal.md <- Plan de trabajo con tareas y briefs
│   │   └── migracion.md    <- Plan migración Webflow -> Cloudflare Pages
│   └── templates/
│       └── brief-pagina.md <- Template para briefear páginas nuevas
└── .claude/commands/       <- Comandos personalizados para Claude Code
```

---

## 7. Documentación de Referencia

| Documento | Cuándo leerlo |
|-----------|---------------|
| `docs/marca.md` | Antes de crear o editar cualquier página. Contiene el design system completo |
| `docs/plutto.md` | Para entender el producto, keywords SEO, y audiencia |
| `docs/seo/plan-semanal.md` | Para saber qué tarea hacer y en qué orden |
| `docs/seo/auditoria.md` | Para entender el diagnóstico actual y por qué hacemos esto |
| `docs/seo/migracion.md` | Cuando toque migrar el blog de subdominio a subdirectorio |
| `docs/templates/brief-pagina.md` | Cada vez que crees una página nueva |

---

## 8. Troubleshooting

### "Claude no encuentra el design system"
Copia los componentes relevantes de `docs/marca.md` directamente en el prompt.

### "La página no se ve en localhost"
- Verificar que `npx serve .` está corriendo
- Verificar la ruta del archivo (ej. `soluciones/due-diligence-proveedores.html`)
- Abrir DevTools (F12) -> Console para ver errores

### "Cloudflare no publica los cambios"
- Verificar que hiciste `git push`
- Ir a Cloudflare Dashboard -> Pages -> ver último deploy

### "La página se ve mal en mobile"
Decirle a Claude:
> La página [ruta] se ve mal en mobile. Específicamente: [qué se ve mal]. Arréglalo.

### "Google no indexa la página"
- Verificar que la URL está en `sitemap.xml`
- Verificar que `robots.txt` no la bloquea
- En Google Search Console: solicitar indexación manual
- Esperar 3-7 días
