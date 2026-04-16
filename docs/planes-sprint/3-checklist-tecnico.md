# Plan 3 — Checklist Técnico y Optimización

## Contexto

El sitio funciona pero tiene deuda técnica acumulada del sprint de 1 día: imágenes pesadas con nombres problemáticos, CSS con referencias rotas entre `CLAUDE.md` y `custom.css`, 13 de 17 titles exceden 60 chars, y las 7 páginas de industria son 99% idénticas (mismo SVG). Esta es una limpieza de 2-3 sesiones focalizadas antes de pasar más páginas a producción.

## Estado actual (evidencia verificada)

### Links rotos (footer, 4 de 5 referencias rotas)

| Ruta | Estado |
|---|---|
| `/blog` | Existe (vacío, Plan 1 lo llena) |
| `/demo` | **NO EXISTE** — CTA principal roto (Plan 2 lo crea) |
| `/sobre-plutto` | **NO EXISTE** |
| `/privacidad` | **NO EXISTE** |
| `/terminos` | **NO EXISTE** |

Felipe decidió: crear las 4 páginas en este sprint.

### Industrias repetitivas

Comparación verificada de `industrias/retail/index.html` vs `industrias/construccion/index.html`:
- Mismo SVG "red de nodos" (mismo `viewBox="0 0 400 300"`, mismos 6 nodos periféricos con iguales coordenadas)
- Única diferencia: icono central (tienda vs edificio)
- Estructura de secciones idéntica: NAV → HERO → RED DE NODOS → PROBLEMAS (3 pain points) → FEATURES → TESTIMONIOS → CTA
- 99% del código es copy-paste entre páginas

### CSS

- **Clases mencionadas en `CLAUDE.md` que NO existen en `custom.css`**: `card-hover`, `bg-mesh-light`, `bg-mesh-dark`, `grain`, `animate-slide-left`, `animate-slide-right`, `link-grow`. `CLAUDE.md` está desactualizado.
- **Clases definidas en `custom.css` pero NO usadas en HTML**: `.animate-marquee`, `.animate-blur-in`, `.animate-scale-in`
- **Clases bien usadas**: `.animate-fade-in`, `.card-lift`, `.dim-siblings`, `.glow-plutto`, `.glow-cyan`, `.metrics-strip`, `.metric-item`, `.counter-number`, `.timeline-line`

### Imágenes

- **Con espacios en el nombre** (11 archivos): `Fondo 1.png` (4.9MB), `fondo 2.png` (1.3MB), `fondo 3.png` (1.3MB), `fondo 4.png` (2.1MB), `fondo 5.png`, `fondo 6.png` (991KB), `fondo 7.jpg` (1.6MB), `fondo 8.png`, `plutto 1.png` ... `plutto 6.png`, `puerto coronel.png`, `godelius_brand 1.png`, `orbitas plutto.png`, `Vector plutto.png`
- **Pesadas (>500KB)**: 6 archivos, total ~12MB de imágenes potencialmente reducibles

### Titles largos (13 de 17 páginas >60 chars)

| Chars | Página | Title actual |
|---|---|---|
| 86 | industrias/construccion | Compliance para Construcción — Gestión de subcontratistas \| Plutto |
| 80 | industrias/alimentacion | Compliance para Alimentación — Trazabilidad de proveedores \| Plutto |
| 79 | industrias/educacion | Compliance para Educación — Gestión de proveedores \| Plutto |
| 78 | industrias/energia | Compliance para Energía — Gestión de contratistas \| Plutto |
| 78 | industrias/mineria | Compliance para Minería — Gestión de contratistas \| Plutto |
| 76 | soluciones/conflicto-interes | Conflicto de Interés — Detecta vínculos ocultos \| Plutto |
| 74 | industrias/manufactura | Compliance para Manufactura — Gestión de proveedores \| Plutto |
| 70 | soluciones/debida-diligencia | Debida Diligencia — Evalúa proveedores automáticamente \| Plutto |
| 69 | industrias/retail | Compliance para Retail — Gestión de proveedores \| Plutto |
| 68 | producto/que-es-plutto | Qué es Plutto — Plataforma de gestión de riesgo de terceros \| Plutto |
| 68 | soluciones/monitoreo-compliance | Monitoreo de Cumplimiento — Revisión y alertas \| Plutto |
| 61 | soluciones/solicitudes | Requerimiento de Compra — Centraliza tus solicitudes \| Plutto |

### Otros hallazgos

- **Color discrepancia**: `CLAUDE.md` dice `plutto-600 = #3d3bf3` pero código real usa `#5563E6` (en tailwind config inline de todas las páginas). `CLAUDE.md` es el desactualizado.
- **Sitemap incompleto**: falta `/blog/` y `/faq/`
- **Tracker antiguo archivado**: el tracker de `docs/seo/migracion.md` fue reemplazado por los planes de este sprint
- **Hero image**: verificado — NO tiene contradicción `fetchpriority="high"` + `loading="lazy"` simultáneos. La auditoría original estaba equivocada en este punto.
- **`_redirects` vacío** (Plan 1 lo llena)

## Tareas paso a paso

### Fase 1 — Quick wins (1 sesión, 2-3 horas)

1. **Actualizar `CLAUDE.md`**: cambiar `#3d3bf3` → `#5563E6` (línea 93). Es autoridad de 1 línea que impacta todas las próximas ediciones.

2. **Acortar los 12 titles largos** a 50-60 chars. Patrón propuesto:
   - `Compliance para [Industria] | Plutto` (40-50 chars) — más directo
   - `Debida Diligencia automatizada | Plutto` (39 chars)
   - `Conflicto de Interés detectado | Plutto` (39 chars)
   - `Monitoreo de Compliance continuo | Plutto` (41 chars)
   - `Qué es Plutto | KYB para LATAM` (30 chars)

   Aplicar en `<title>` + `<meta property="og:title">` + schema `headline` (los 3 deben coincidir).

3. **Actualizar `sitemap.xml`**: agregar `<url>` para `/blog/` y `/faq/`. Actualizar `<lastmod>` de todas las URLs modificadas hoy.

4. (Tarea removida — el tracker histórico `docs/seo/migracion.md` fue archivado al reemplazar este sprint. Los planes de esta carpeta son la nueva fuente de verdad.)

5. **Renombrar imágenes con espacios** masivamente:
   ```
   Fondo 1.png      → fondo-1.png
   fondo 2.png      → fondo-2.png
   ...
   plutto 1.png     → plutto-1.png (dentro de fotos-producto/)
   puerto coronel.png → puerto-coronel.png
   godelius_brand 1.png → godelius-brand.png
   orbitas plutto.png → orbitas-plutto.png
   Vector plutto.png → vector-plutto.png
   ```
   Hacer `grep -rn "Fondo 1.png"` (etc.) para actualizar todas las referencias en HTML.

### Fase 2 — Optimización de imágenes (1 sesión)

6. **Convertir PNG > 500KB a WebP** con compresión al 85%. Usa `cwebp` (Cloudflare Pages lo sirve nativamente):
   ```
   cwebp -q 85 assets/img/fondo-1.png -o assets/img/fondo-1.webp
   ```
   Esperar reducción ~70-80% de peso (4.9MB → ~500KB).

7. **Usar `<picture>` con fallback** donde importe (hero, logos críticos):
   ```html
   <picture>
     <source srcset="/assets/img/fondo-1.webp" type="image/webp">
     <img src="/assets/img/fondo-1.png" alt="..." width="..." height="...">
   </picture>
   ```

8. **Agregar `width`/`height` explícitos** a todas las imágenes del sitio (previene CLS). Usar skill `/optimizar-imagenes` para auditar + arreglar masivamente.

9. **Verificar `loading="lazy"`** en todas las imágenes fuera del viewport inicial. Hero solo: `fetchpriority="high"` sin `loading`.

### Fase 3 — Limpieza CSS

10. **Sincronizar `CLAUDE.md` ↔ `custom.css`**: decidir cuál es la fuente de verdad.
    - **Opción A** (recomendado): crear en `custom.css` las clases que `CLAUDE.md` documenta (`card-hover`, `bg-mesh-light`, `bg-mesh-dark`, `grain`, `animate-slide-left`, `animate-slide-right`, `link-grow`). Diseñarlas con el look anti-IA de `docs/marca.md`. Aplicarlas donde cobre sentido.
    - **Opción B**: borrar menciones de esas clases en `CLAUDE.md`. Más rápido pero pierdes la intención del diseño anti-IA original.

11. **Eliminar clases definidas y NO usadas**: `.animate-marquee`, `.animate-blur-in`, `.animate-scale-in`. Si se deciden usar, aplicarlas en lugares concretos; si no, borrarlas del CSS.

### Fase 4 — Diferenciación de industrias

Este es el bloque más grande y probablemente requiere 2-3 sesiones.

12. **Priorizar 3 industrias estratégicas** (pedirle a Felipe cuáles: probablemente `construccion`, `mineria`, y una tercera). El resto puede esperar.

13. **Por cada industria priorizada**:
    - **Rediseñar SVG hero** con concepto visual distinto. Ejemplos:
      - Construcción: diagrama de árbol de subcontratación multi-nivel
      - Minería: mapa con pines geolocalizados de contratistas
      - Retail: flujo de cadena de suministro horizontal
    - **Variar estructura** de secciones (diferente orden, diferente cantidad). Aplicar regla anti-IA de `docs/marca.md` sec. 16.
    - **Reemplazar 3 pain points genéricos** con 3 pain points específicos del sector (entrevistar a Felipe o a clientes del sector).
    - **Caso de éxito expandido** en 1-2 industrias (no solo testimonial, sino caso completo con antes/después y métricas).
    - **Variar spacing vertical**: mezclar `py-16`, `py-24`, `py-32` (no todo `py-20`).

14. **Para las 4 industrias restantes**: mínimo cambiar el SVG hero por uno distinto y los 3 pain points. Si no hay tiempo de rediseño completo, ésta es la barra mínima.

### Fase 5 — Crear páginas legales y /sobre-plutto

15. **Crear `sobre-plutto/index.html`** desde `templates/landing.html`:
    - Historia de la empresa (pedirle a Felipe 2 párrafos)
    - Misión
    - Equipo (fotos + nombres + roles — pedirle a Felipe quiénes)
    - Inversionistas / respaldo (si aplica)
    - CTA a `/demo`

16. **Crear `privacidad/index.html` y `terminos/index.html`**:
    - **Paso 1**: Felipe confirma con legal el texto exacto. Pueden adaptar plantillas estándar (GDPR / Ley 19.628 Chile / LGPD Brasil / LFPDPPP México).
    - **Paso 2**: Débora maqueta como página simple de texto largo (usar `<article>` con tipografía cómoda, max-width ~700px, H2 por sección).
    - Incluir fecha de última actualización visible.
    - Schema `WebPage` (no `LegalService`).

17. **Validar links del footer**: después de crear las 4 páginas, correr `grep` para verificar que no queda ningún link roto.

## Decisiones que Felipe debe resolver

- [ ] Opción A o B para el sync `CLAUDE.md` ↔ `custom.css` (tarea 10)
- [ ] ¿Qué 3 industrias priorizar para rediseño profundo? (tarea 12)
- [ ] Input de legal para `/privacidad` y `/terminos` (tarea 16)
- [ ] 2 párrafos para `/sobre-plutto` + equipo a mostrar (tarea 15)

## Verificación

- `grep -rn 'href="/demo"\|href="/sobre-plutto"\|href="/privacidad"\|href="/terminos"'` → todas las rutas existen
- Lighthouse en mobile ≥ 90 performance en index + 2 industrias modificadas
- Total peso de imágenes en `/assets/img/` bajo 5MB (hoy ~14MB)
- `ls assets/img/ | grep ' '` → 0 archivos con espacios
- Audit manual: abrir 3 industrias distintas lado a lado → el layout y el SVG hero son claramente distintos
- `/audit` + `/critique` correr sobre 2 páginas cualesquiera → score ≥ 8/10
