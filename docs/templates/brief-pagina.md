# Template de Página - Plutto Landing

Este template se llena **antes** de pedirle a Claude Code que construya una página. Es el brief estratégico que le da a Claude toda la información necesaria para generar HTML consistente.

## Cómo usar

1. Copia el template en blanco (Sección 1)
2. Llena todos los campos marcados con `[LLENAR]`
3. Abre Claude Code en el repo `plutto-labs/landing`
4. Pega el template llenado + las instrucciones de la Sección 4
5. Claude genera el HTML -> tú revisas -> commit -> push -> live

---

## 1. Template en Blanco

```markdown
# Brief: [LLENAR: nombre de la página]

## Metadata
- **URL:** /[LLENAR: ruta] (ej: /soluciones/due-diligence-proveedores)
- **Tipo:** [LLENAR: landing | artículo | faq]
- **Archivo HTML:** [LLENAR: ruta del archivo] (ej: soluciones/due-diligence-proveedores.html)

## SEO
- **Keyword principal:** [LLENAR]
- **Keywords secundarias:** [LLENAR: 3-5 keywords separadas por coma]
- **H1:** [LLENAR: máx 8 palabras, keyword + valor]
- **Meta title:** [LLENAR: 50-60 caracteres, keyword al inicio]
- **Meta description:** [LLENAR: 120-158 caracteres, incluir CTA]

## Audiencia
- **¿Quién llega a esta página?** [LLENAR: ej. oficial de cumplimiento buscando "compliance proveedores Chile"]
- **¿Qué necesita saber?** [LLENAR: ej. que existen regulaciones que lo obligan + que hay herramientas que automatizan]
- **¿Qué debe hacer?** [LLENAR: ej. agendar una demo]

## CTA
- **Texto CTA primario:** [LLENAR: ej. "Agenda una demo"]
- **Link CTA:** [LLENAR: ej. /demo]
- **CTA secundario (opcional):** [LLENAR: ej. "Ver cómo funciona"]

## Estructura de Secciones

Para **landing pages**, usar esta secuencia (marcar con [x] las que aplican):

- [ ] Hero (above-the-fold) - H1 + subtítulo + CTA + visual
- [ ] Barra de logos
- [ ] Sección problema - 3 pain points
- [ ] Sección solución / features - 3-4 features orientadas a resultado
- [ ] Capacidades detalladas (opcional) - profundizar con screenshots
- [ ] Stats / ROI - métricas cuantificadas
- [ ] Testimonials - 2-3 quotes con nombre, cargo, empresa, métrica
- [ ] Cómo funciona - 3-4 pasos visuales
- [ ] FAQ - 4-5 preguntas + schema FAQPage
- [ ] CTA final - repetir CTA + badges credibilidad

Para **artículos**, definir el outline:

1. [LLENAR: sección 1]
2. [LLENAR: sección 2]
3. ...
n. FAQ (obligatorio)

## Contenido Específico

### Hero
- **Subtítulo:** [LLENAR: 1-2 oraciones. ¿Para quién? ¿Qué resuelve?]
- **Visual:** [LLENAR: screenshot del producto / GIF / placeholder]
- **Trust badges:** [LLENAR: ej. "Y Combinator S22", "+90 clientes"]

### Problema (si aplica)
- **Pain 1:** [LLENAR: título + 1 oración]
- **Pain 2:** [LLENAR]
- **Pain 3:** [LLENAR]

### Features/Solución (si aplica)
- **Feature 1:** [LLENAR: título orientado a resultado + 1-2 oraciones]
- **Feature 2:** [LLENAR]
- **Feature 3:** [LLENAR]
- **Feature 4 (opcional):** [LLENAR]

### Stats (si aplica)
- **Stat 1:** [LLENAR: número + contexto, ej. "80% menos tiempo de DD"]
- **Stat 2:** [LLENAR]
- **Stat 3:** [LLENAR]

### FAQ
- **Pregunta 1:** [LLENAR pregunta] -> [LLENAR respuesta 2-4 oraciones]
- **Pregunta 2:** [LLENAR] -> [LLENAR]
- **Pregunta 3:** [LLENAR] -> [LLENAR]
- **Pregunta 4:** [LLENAR] -> [LLENAR]

## Schema JSON-LD
- [ ] BreadcrumbList (obligatorio en páginas internas)
- [ ] SoftwareApplication (páginas de solución)
- [ ] FAQPage (páginas con FAQ)
- [ ] Organization (solo homepage)

## Referencias
- **Competidor a mirar:** [LLENAR: URL de referencia, ej. wherex.com/compliance]
- **Notas adicionales:** [LLENAR: cualquier contexto extra]
```

---

## 2. Ejemplo: Homepage

```markdown
# Brief: Homepage Plutto

## Metadata
- **URL:** /
- **Tipo:** landing
- **Archivo HTML:** index.html

## SEO
- **Keyword principal:** evaluación riesgo terceros
- **Keywords secundarias:** due diligence proveedores Chile, compliance proveedores, gestión riesgo terceros, KYB Chile
- **H1:** Evalúa proveedores en minutos, no semanas
- **Meta title:** Plutto - Evaluación y gestión de riesgo de terceros con IA
- **Meta description:** Automatiza el due diligence y compliance de tus proveedores con IA. Consulta 20+ fuentes oficiales en segundos. Agenda una demo.

## Audiencia
- **¿Quién llega a esta página?** Gerente de operaciones o compliance buscando una herramienta para evaluar proveedores. Puede venir de Google, LinkedIn, o referido.
- **¿Qué necesita saber?** Que Plutto automatiza lo que hoy hace manual, que funciona en Chile/LATAM, que empresas reales lo usan.
- **¿Qué debe hacer?** Agendar una demo.

## CTA
- **Texto CTA primario:** Agenda una demo
- **Link CTA:** /demo
- **CTA secundario:** Ver cómo funciona

## Estructura de Secciones

- [x] Hero - H1 + subtítulo + CTA + screenshot dashboard
- [x] Barra de logos - Buda.com, Soprole, Essbio, CEN, Lipigas
- [x] Sección problema - "¿Todavía haces due diligence manual?"
- [x] Sección solución - 4 features: verificación automática, análisis IA, monitoreo continuo, reportes auditoría
- [ ] Capacidades detalladas - omitir en homepage
- [x] Stats / ROI - 80% menos tiempo, +90 clientes, +70.000 empresas evaluadas
- [x] Testimonials - 3 quotes de clientes con métricas
- [x] Cómo funciona - 4 pasos: subir -> verificar -> reporte -> monitoreo
- [x] FAQ - 5 preguntas sobre Plutto, due diligence, implementación
- [x] CTA final - "Automatiza tu compliance hoy" + badges YC, países

## Contenido Específico

### Hero
- **Subtítulo:** Plutto automatiza el due diligence y compliance de terceros con IA. Para equipos de riesgo y operaciones en Chile y LATAM.
- **Visual:** Screenshot del dashboard mostrando evaluación de proveedor con score de riesgo
- **Trust badges:** Y Combinator S22 · +90 clientes en LATAM

### Problema
- **Pain 1:** Toma semanas - Evaluar un proveedor requiere consultar 5+ fuentes distintas manualmente
- **Pain 2:** Errores humanos - Nombres mal escritos, fuentes desactualizadas, PEPs no detectados
- **Pain 3:** Sin monitoreo continuo - Un proveedor aprobado hoy puede ser sancionado mañana

### Features/Solución
- **Feature 1:** Verificación automática - Consulta SII, CMF, UAF, Poder Judicial y 20+ fuentes en segundos
- **Feature 2:** Análisis con IA - Identifica riesgos, PEPs y beneficiarios finales automáticamente
- **Feature 3:** Monitoreo continuo - Alertas automáticas cuando cambia el estado de un proveedor
- **Feature 4:** Reportes listos para auditoría - Due diligence completo con trazabilidad para reguladores

### Stats
- **Stat 1:** 80% menos tiempo en due diligence
- **Stat 2:** +90 empresas confían en Plutto
- **Stat 3:** +70.000 empresas evaluadas

### FAQ
- **¿Qué hace Plutto?** -> Plutto es una plataforma que automatiza la evaluación y gestión de riesgo de terceros (proveedores, clientes, contrapartes). Consulta fuentes oficiales, analiza documentos con IA, y monitorea cambios en tiempo real.
- **¿En qué países opera?** -> Chile, México, Colombia y Perú. Las fuentes de datos y regulaciones están adaptadas a cada país.
- **¿Cuánto tarda una evaluación?** -> Depende de la profundidad, pero una evaluación estándar toma entre 30 segundos y 5 minutos. Comparado con el proceso manual que puede tomar 1-2 semanas.
- **¿Plutto reemplaza al oficial de cumplimiento?** -> No. Plutto automatiza la recopilación de datos y el análisis inicial, pero las decisiones de aprobación las toma el equipo de compliance con mejor información y en menos tiempo.
- **¿Cómo se integra con mi sistema actual?** -> Plutto tiene API REST documentada y se integra con los sistemas más comunes. También se puede usar directamente desde la plataforma web.

## Schema JSON-LD
- [x] Organization
- [x] FAQPage
- [ ] BreadcrumbList (no aplica en homepage)
- [x] SoftwareApplication

## Referencias
- **Competidor a mirar:** regcheq.com (estructura de secciones), vanta.com (hero + social proof)
- **Notas adicionales:** El Webflow actual tiene métricas "+90 Clientes" y "+70.000 Empresas" - mantener esos números.
```

---

## 3. Ejemplo: Landing de Solución

```markdown
# Brief: Due Diligence de Proveedores

## Metadata
- **URL:** /soluciones/due-diligence-proveedores
- **Tipo:** landing
- **Archivo HTML:** soluciones/due-diligence-proveedores.html

## SEO
- **Keyword principal:** due diligence proveedores Chile
- **Keywords secundarias:** automatizar due diligence, debida diligencia terceros, proceso due diligence, evaluación proveedores
- **H1:** Automatiza el due diligence de tus proveedores
- **Meta title:** Due Diligence de Proveedores Automatizado | Plutto
- **Meta description:** Automatiza el due diligence de proveedores con IA. Verificación en fuentes oficiales, monitoreo continuo y reportes de auditoría.

## Audiencia
- **¿Quién llega a esta página?** Alguien que ya sabe que necesita hacer due diligence y busca una herramienta. Alta intención de compra.
- **¿Qué necesita saber?** Que Plutto hace exactamente lo que busca, que funciona, que otros lo usan.
- **¿Qué debe hacer?** Agendar una demo.

## CTA
- **Texto CTA primario:** Agenda una demo
- **Link CTA:** /demo

## Estructura de Secciones

- [x] Hero - enfocado en DD automático
- [x] Barra de logos
- [x] Sección problema - DD manual no escala
- [x] Sección solución - 4 features de DD
- [x] Stats / ROI - 80% reducción, caso Buda.com
- [x] Testimonials - 2-3 quotes enfocados en DD
- [x] Cómo funciona - 4 pasos
- [x] FAQ - 5 preguntas sobre DD + schema
- [x] CTA final

### Hero
- **Subtítulo:** Evalúa proveedores en minutos consultando automáticamente SII, CMF, UAF y 20+ fuentes oficiales. Para equipos de compliance y operaciones.
- **Visual:** Screenshot mostrando un reporte de due diligence
- **Trust badges:** 80% menos tiempo · +90 empresas · Y Combinator S22

### Problema
- **Pain 1:** Recopilar datos manualmente es lento - 5+ fuentes distintas por proveedor
- **Pain 2:** Los reportes manuales tienen errores - PEPs y sanciones pasan desapercibidos
- **Pain 3:** Sin trazabilidad para auditorías - reguladores piden evidencia que no tienes

### Features/Solución
- **Feature 1:** Verificación automática en fuentes oficiales - SII, CMF, UAF, Poder Judicial, boletines comerciales
- **Feature 2:** Identificación de PEPs y beneficiarios finales - IA analiza estructura societaria
- **Feature 3:** Score de riesgo automático - Matriz de riesgo configurable por tu equipo
- **Feature 4:** Reportes listos para auditoría - PDF con toda la evidencia y trazabilidad

### Stats
- **Stat 1:** 80% reducción en tiempo de due diligence
- **Stat 2:** 20+ fuentes oficiales consultadas automáticamente
- **Stat 3:** Reportes en minutos, no semanas

### FAQ
- **¿Qué fuentes consulta Plutto para due diligence?** -> SII, CMF, UAF, Poder Judicial, boletines comerciales (Dicom, Sinacofi), listas de sanciones internacionales, y más de 20 fuentes oficiales en Chile y LATAM.
- **¿Puedo personalizar el proceso de evaluación?** -> Sí. Puedes configurar qué fuentes consultar, qué nivel de riesgo aplica, y qué aprobaciones se requieren según el tipo de proveedor.
- **¿Cómo se hace el monitoreo continuo?** -> Plutto consulta periódicamente las fuentes oficiales y te alerta si hay cambios en el estado de tus proveedores aprobados (nuevas sanciones, cambios societarios, etc.).
- **¿Cuánto tarda la implementación?** -> La implementación básica toma 1-2 semanas. Incluye configuración de fuentes, carga de proveedores existentes, y capacitación del equipo.
- **¿Plutto cumple con la Ley 20.393?** -> Sí. Plutto está diseñado para cumplir con los requisitos de due diligence de la Ley 20.393, Ley 21.595, y normativas CMF y UAF.

## Schema JSON-LD
- [x] BreadcrumbList (Inicio > Soluciones > Due Diligence de Proveedores)
- [x] SoftwareApplication
- [x] FAQPage

## Referencias
- **Competidor a mirar:** Wherex tiene 2 posiciones para "compliance proveedores Chile". Nuestra landing debe diferenciarse enfatizando IA y cobertura multi-fuente.
```

---

## 4. Prompt para Claude Code

Cuando tengas el template llenado, pega esto en Claude Code junto con el brief:

```
Crea la página HTML descrita en el brief de abajo.

IMPORTANTE - Antes de empezar:
1. Lee docs/marca.md
   (o usa los componentes que te pego a continuación)
2. Usa EXACTAMENTE los componentes del design system - no inventes clases ni colores
3. Color primario: plutto-600 (#3d3bf3). Nunca usar indigo-600
4. Incluye el Tailwind config inline completo en el <head>
5. HTML semántico: <article>, <section>, <table> nativo
6. 1 H1 por página, H2 por sección, H3 para sub-items
7. Cada sección abre con 40-60 palabras de respuesta directa
8. Schema JSON-LD obligatorio según lo marcado en el brief
9. Meta tags completos: title, description, og:image, Twitter Card, canonical
10. Hero image: fetchpriority="high". Resto: loading="lazy" con width/height
11. data-animate en elementos que animan al scroll
12. Breadcrumbs (HTML + schema) en páginas internas
13. No usar dark mode (omitir clases dark:)
14. Actualizar sitemap.xml con la nueva URL
15. Actualizar la navegación (nav + footer) si la página es nueva

[PEGAR EL BRIEF LLENADO AQUÍ]
```

---

## 5. Checklist Post-Creación

Después de que Claude Code genere la página, verificar:

- [ ] H1 tiene la keyword principal y es <= 8 palabras
- [ ] Meta title tiene <= 60 chars con keyword al inicio
- [ ] Meta description tiene 120-158 chars con CTA
- [ ] og:image apunta a archivo que existe (o crear placeholder)
- [ ] Canonical URL es correcta
- [ ] Schema JSON-LD presente y válido (probar en https://validator.schema.org/)
- [ ] Breadcrumbs presentes en páginas internas
- [ ] FAQ tiene schema FAQPage con las respuestas exactas
- [ ] CTA aparece en 4 puntos: hero, post-social proof, post-features, final
- [ ] Todas las imágenes tienen width, height, y loading="lazy" (excepto hero)
- [ ] Links internos funcionan (nav, footer, breadcrumbs)
- [ ] Se ve bien en mobile (revisar en Chrome DevTools -> responsive)
- [ ] sitemap.xml actualizado con la nueva URL
