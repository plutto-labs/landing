# Auditoría SEO y AEO - getplutto.com

**Fecha:** Marzo 2026
**Score AEO:** 2.3/10

---

## Resumen Ejecutivo

Plutto tiene una desconexión significativa entre su tracción comercial ($6.6M ARR, 44 personas, YC S22) y su visibilidad en búsqueda orgánica y motores de respuesta AI.

1. **SEO técnico**: Blog en subdominio diluye autoridad, instancia Fly.io genera contenido duplicado, `lang="en"` en sitio español, sin schema markup, sin OG tags
2. **SEO contenido**: Solo aparece en 1 de 10 keywords non-branded. Competidores locales (Regcheq, Wherex, Verdana) con mejor posicionamiento
3. **AEO**: Score 2.3/10. Sin perfil en G2, Capterra, ComparaSoftware. No aparece en queries AI clave
4. **Competencia**: Regcheq domina tráfico informacional con sección "Conceptos"

**Oportunidad más inmediata**: Perfiles en G2/Capterra + sección contenido educativo (glosario + guías)

---

## Hallazgos Técnicos de ALTO IMPACTO

| # | Problema | Detalle | Acción |
|---|----------|---------|--------|
| 1 | Blog en subdominio | blog.getplutto.com - Google trata subdominios como sitios separados | Migrar a subdirectorio |
| 2 | Instancia Fly.io expuesta | getplutto-blog.fly.dev indexado = contenido duplicado | Bloquear con noindex |
| 3 | Template CMS roto | blog.getplutto.com/tag/[slug] indexado | Eliminar y bloquear |
| 4 | og:image ausente | Sin preview al compartir en LinkedIn/WhatsApp | Agregar og:image 1200x630px |
| 5 | Twitter Card tags ausentes | Webflow no genera por defecto | Agregar vía custom code |
| 6 | lang probablemente en inglés | Webflow usa lang="en" por defecto | Cambiar a lang="es" |
| 7 | Sin schema markup | Sin Organization, SoftwareApplication, FAQ | Implementar JSON-LD |
| 8 | Páginas clave no indexadas | /producto, /precios, /mexico no aparecen | Verificar en GSC |

---

## Keywords Non-Branded - Oportunidades

### ALTA OPORTUNIDAD

| Keyword | Quién rankea | Oportunidad |
|---------|-------------|-------------|
| "due diligence proveedores Chile" | Wherex, AdmiralOne, BDO | Landing page + artículo pilar |
| "compliance proveedores Chile" | Wherex (pos 1 y 4) | Landing diferenciada |
| "debida diligencia proveedores" | CIAL D&B (pos 1) | Artículo pilar LATAM |
| "gestión de proveedores compliance" | Torg, Nalanda (globales) | Ningún competidor chileno - oportunidad limpia |
| "automatización due diligence" | DataRooms, Psicosmart | Artículo con caso real |
| "qué es KYB" | Moody's, Stripe (inglés) | Guía definitiva en español |
| "cómo hacer due diligence proveedores" | Ambit-Iberia, BBVA (España) | Guía Chile/LATAM |
| "requisitos compliance proveedores Chile" | SERNAC, ChileCompra | Guía 2026 con leyes |
| "cómo evaluar riesgo proveedores" | Pleo, Secureframe | Guía práctica |

---

## AEO - Score 2.3/10

### Presencia en Queries AI

| Query | Aparece Plutto | Oportunidad |
|-------|---------------|-------------|
| "mejores plataformas KYB Chile" | NO | ALTO |
| "software compliance proveedores LATAM" | NO | ALTO |
| "herramientas due diligence empresas Chile" | SÍ (pos. 5) | MEDIO |
| "soluciones compliance B2B Chile" | NO | ALTO |
| "KYB platform Latin America" | NO | ALTO |

### Fuentes Indexables por LLMs - Gaps Críticos

| Fuente | Presencia | Urgencia |
|--------|-----------|---------|
| G2 | NO | CRÍTICO |
| Capterra | NO | CRÍTICO |
| ComparaSoftware | NO | CRÍTICO |
| LinkedIn | SÍ (2,476+ seg) | MEDIO |
| Reddit | NO | MEDIO |
| Prensa | LIMITADA | ALTO |

---

## Competencia

| Competidor | Amenaza | Fortaleza SEO |
|-----------|---------|---------------|
| Regcheq | ALTA | Sección "Conceptos" - glosario que captura todo tráfico informacional |
| Wherex | ALTA | Blog activo, múltiples URLs para "compliance proveedores Chile" |
| CIAL D&B | ALTA | Autoridad global, pos 1 para "debida diligencia proveedores" |
| Verdana | MEDIA | Landing pages por ley específica (20.393, 21.595) |
| Complisafe | MEDIA | SEO activo, pos 1 para "software compliance Chile" |

### Diferenciadores de Plutto No Explotados

1. **IA aplicada a due diligence** - Regcheq es automatización de flujos, Plutto es análisis con IA
2. **KYB (no solo KYC/AML)** - Nicho sub-capturado en español
3. **API-first** - Pocos competidores locales ofrecen API
4. **YC S22** - Credibilidad internacional
5. **Reducción medible** - "80% reducción en tiempo de DD"
6. **Multi-industria** - Banca, fintech, retail, automotriz, seguros, telco

---

## Top 10 Acciones por ROI

| # | Acción | Esfuerzo | Impacto SEO | Impacto AEO | Timeline |
|---|--------|----------|-------------|-------------|----------|
| 1 | Arreglos técnicos (lang, OG, Fly.io, [slug]) | 2 horas | ALTO | BAJO | Semana 1 |
| 2 | Perfiles G2 + Capterra + ComparaSoftware | 4 horas | BAJO | CRÍTICO | Semana 1-2 |
| 3 | JSON-LD schema (Organization + SoftwareApplication) | 2 horas | ALTO | ALTO | Semana 2 |
| 4 | Artículo "Qué es KYB: Guía completa" | 4 horas | ALTO | ALTO | Mes 1 |
| 5 | Artículo "KYC vs KYB: Diferencias" | 3 horas | ALTO | ALTO | Mes 1 |
| 6 | Landing /soluciones/due-diligence-proveedores | 4 horas | ALTO | MEDIO | Mes 1 |
| 7 | Artículo "Regulaciones proveedores Chile 2026" | 4 horas | ALTO | ALTO | Mes 1 |
| 8 | Solicitar reviews G2/Capterra a clientes | 2 horas | BAJO | CRÍTICO | Mes 1-2 |
| 9 | FAQ page con schema markup | 3 horas | MEDIO | ALTO | Mes 2 |
| 10 | Cobertura prensa tech Chile | Variable | ALTO | ALTO | Mes 2-3 |

---

*Plan de acción detallado con tareas semanales: ver `docs/seo/plan-semanal.md`*
*Design system y componentes: ver `docs/marca.md`*
