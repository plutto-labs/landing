# Guía de Inicio - Landing Plutto

Esta guía te explica cómo usar este repositorio para crear y editar páginas del sitio de Plutto usando Claude Code. No necesitas saber programar.

> **¿Ya estás en medio del sprint actual?** Ve directo a **[`docs/planes-sprint/README.md`](./planes-sprint/README.md)** — ahí están los 3 planes que tienes que seguir (blog, formularios+HubSpot, checklist técnico). Este archivo es solo setup inicial y referencia.

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

### Subir assets obligatorios

Antes de publicar, asegúrate de que estos archivos existan en `assets/img/`:

| Archivo | Qué es | Tamaño recomendado |
|---------|--------|--------------------|
| `favicon.ico` | Ícono de pestaña del navegador | 32x32px |
| `og-image.png` | Imagen al compartir en redes sociales | 1200x630px |

Sin estos archivos, el sitio se ve sin ícono y las previews en redes muestran imagen rota.

Para logos de clientes (sección social proof), agrégalos en `assets/img/logos/` en formato SVG o PNG.

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
5. Claude usa los templates HTML de `templates/` (landing o artículo) como base — no necesita armar desde cero
6. Refresca localhost:3000 -> revisa
7. Pide correcciones: "El hero debería tener el texto a la izquierda" / "Cambia el subtítulo a..."
8. Cuando estés conforme, publica (ver sección 3)

> **Tip:** Los templates HTML (`templates/landing.html` y `templates/articulo.html`) ya tienen toda la estructura, nav, footer, schemas y secciones pre-armadas. Esto hace que crear páginas sea mucho más rápido.

### Editar una página existente

En Claude Code:
> Abre index.html y haz estos cambios:
> - Cambia el H1 a "..."
> - Agrega un testimonial de [nombre], [cargo], [empresa]: "[quote]"

### Revisar SEO de una página

En Claude Code:
> /auditoria-seo

O para una página específica:
> Revisa el archivo [ruta].html y dime si cumple con las reglas SEO del design system

---

## 3. Publicar Cambios

**Opción recomendada:** Usa el skill `/publicar`. Valida automáticamente que todo esté correcto y publica por ti.

**Opción manual (si prefieres):**
```bash
git add .
git commit -m "feat: crear landing due diligence proveedores"
git push
```

Cloudflare Pages detecta el push y publica automáticamente en ~1 minuto.

Dashboard: https://dash.cloudflare.com -> Pages -> plutto-landing

---

## 4. Orden de Tareas del Sprint Actual

La fuente de verdad del sprint actual es **[`docs/planes-sprint/`](./planes-sprint/)**. Cinco planes:

1. **Plan 3 (fases 1-2)** — Quick wins + optimización de imágenes
2. **Plan 2** — Formularios + HubSpot + crear `/demo`
3. **Plan 3 (fases 3-5)** — Limpieza CSS, industrias diferenciadas, páginas legales
4. **Plan 1** — Migración del blog (iterativo, en paralelo con el resto)
5. **Plan 4** — Corte de DNS (último, cuando todo lo anterior esté listo)
6. **Plan 5** — Directorios G2/Capterra/ComparaSoftware (100% manual, se puede hacer en paralelo desde hoy)

Para estrategia SEO de mediano plazo (artículos pilar, keywords, competencia) ver `docs/estrategia/plan-semanal.md`.

---

## 5. Comandos Disponibles

| Comando | Qué hace |
|---------|----------|
| **Flujo diario** | |
| `/siguiente-tarea` | Te dice qué hacer a continuación según el plan SEO |
| `/crear-articulo [título]` | Crea un artículo educativo optimizado para AI y Google |
| `/nueva-pagina [nombre]` | Crea una página nueva desde template |
| `/nueva-seccion [tipo] [página]` | Agrega sección a página existente |
| `/publicar` | Valida todo y publica (no necesitas saber git) |
| **Revisión y mejora** | |
| `/auditoria-seo` | Revisa SEO + optimización para AI engines (AEO) |
| `/verificar-consistencia` | Verifica colores, fonts, spacing vs manual de marca |
| `/mejorar-copy` | Sugiere mejoras de redacción |
| `/auditoria-accesibilidad` | Audita accesibilidad WCAG 2.1 AA |
| `/revisar-rendimiento` | Revisa optimizaciones de rendimiento |
| `/optimizar-imagenes` | Audita y corrige atributos de imágenes |
| **Migración** | |
| `/migrar-blog` | Migra artículos del subdomain blog a /blog/ |

---

## 6. Estructura del Repo

```
landing/
├── index.html              <- Homepage (editar directamente)
├── templates/
│   ├── base.html           <- Esqueleto HTML reutilizable (head, nav, footer)
│   ├── landing.html        <- Template landing con todas las secciones
│   └── articulo.html       <- Template artículo educativo (AEO optimizado)
├── robots.txt              <- Reglas para crawlers
├── sitemap.xml             <- Mapa del sitio (actualizar con cada página nueva)
├── _headers                <- Security headers
├── _redirects              <- Redirects 301 (se llenan al crear páginas)
├── assets/
│   ├── css/custom.css      <- Animaciones (no tocar)
│   ├── js/main.js          <- Mobile menu + scroll (no tocar)
│   └── img/                <- Imágenes (WebP preferido)
│       └── logos/          <- Logos clientes (SVG)
├── soluciones/             <- Por crear: landing pages por caso de uso
├── conceptos/              <- Por crear: artículos educativos (glosario)
├── industrias/             <- Por crear: landing pages por industria
├── blog/                   <- Por crear: blog (migrado de subdominio)
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
└── .claude/skills/         <- Skills personalizados para Claude Code
```

---

## 7. Documentación de Referencia

| Documento | Cuándo leerlo |
|-----------|---------------|
| **`docs/planes-sprint/`** | **Ejecución del sprint actual (5 planes). Fuente de verdad día a día** |
| `docs/marca.md` | Antes de crear o editar cualquier página. Contiene el design system completo |
| `docs/plutto.md` | Para entender el producto, keywords SEO, y audiencia |
| `docs/estrategia/plan-semanal.md` | Estrategia SEO/AEO de mediano plazo: keywords, briefs de artículos pilar, competencia |
| `docs/estrategia/auditoria.md` | Diagnóstico SEO/AEO histórico (contexto, no plan de acción) |
| `docs/contexto-rediseno-home.md` | Mapeo de assets y decisiones del home (solo si tocas el home) |
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
