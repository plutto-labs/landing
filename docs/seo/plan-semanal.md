# Plan SEO y AEO — getplutto.com
## Estrategia de contenido y posicionamiento

> **Cómo usar este documento:**
> Este archivo es la **estrategia SEO/AEO**: diagnóstico, keywords objetivo, prioridades de contenido, briefs de páginas, y análisis de competidores.
>
> El **tracker de ejecución** (qué está hecho, en qué fase estamos, qué sigue) está en [`docs/seo/migracion.md`](migracion.md).
>
> Usa `/siguiente-tarea` para que Claude te diga exactamente qué hacer ahora según el estado de la migración.

---

## Mapa de tareas → Fases de migración

| Tareas de este documento | Fase | Cuándo ejecutar |
|--------------------------|------|-----------------|
| G2, Capterra, ComparaSoftware (manuales) | **Paralelo** — no bloquea | Puedes hacerlo hoy mismo, no depende de la migración |
| Artículos `conceptos/` y landings `soluciones/` | **Fase 3** | Después de que Fases 0 y 1 estén completas (diseño listo) |
| Artículos de blog nuevos | **Fase 4** | Después de migrar el blog existente |
| Industrias, inglés, prensa | **Fase 5+** | Mes 4 en adelante |

> **Sobre los arreglos técnicos:** La versión anterior de este documento incluía tareas como "cambiar lang='en'", "agregar og:image" o "configurar robots.txt". **Esas tareas ya no aplican** — el sitio se está construyendo desde cero y todas esas optimizaciones están incluidas en los templates desde el día 1.

---

## Parte 1: Diagnóstico — ¿Dónde estamos?

### El resumen en una frase

Plutto tiene un producto real y competitivo ($6.6M ARR, Y Combinator, 44 personas), pero **Google y los asistentes de IA casi no saben que existimos**.

### ¿Qué tan grave es?

| Métrica | Plutto | Lo esperado para nuestro tamaño |
|---------|--------|-------------------------------|
| Páginas indexadas en Google | ~3 | 15-20 mínimo |
| Artículos en el blog | 6-8 | 20-30 |
| Perfil en G2 (el directorio de software más importante) | No tenemos | Todos los competidores lo tienen |
| Perfil en Capterra | No tenemos | Básico para cualquier SaaS |
| Visibilidad en asistentes IA (ChatGPT, Perplexity, etc.) | 2.3 de 10 | 5-6 de 10 sería aceptable |

### ¿Qué significa esto en la práctica?

Cuando alguien busca en Google "software compliance proveedores Chile" o le pregunta a ChatGPT "¿qué herramientas hay para due diligence en Chile?", **Plutto no aparece**. Aparecen Wherex, Regcheq, CIAL, y otros competidores con menos tracción comercial que nosotros.

### Dónde aparecemos vs. dónde deberíamos aparecer

| Búsqueda | ¿Aparece Plutto? | ¿Quién aparece en vez? |
|----------|:-:|---|
| "plutto KYB" | Si (#1) | — |
| "plutto compliance" | Si (#1) | — |
| "due diligence proveedores Chile" | **No** | Wherex, AdmiralOne, BDO |
| "compliance proveedores Chile" | **No** | Wherex (posiciones 1 y 4) |
| "qué es KYB" | **No** | Moody's, Stripe (nadie de LATAM) |
| "software compliance empresas Chile" | **No** | Complisafe (posición 1) |
| "gestión riesgo terceros Chile" | Si (#4) | Podríamos subir a top 3 |
| "mejores plataformas KYB Chile" (en ChatGPT) | **No** | Nadie — oportunidad abierta |
| "software compliance proveedores LATAM" (en ChatGPT) | **No** | Nadie — oportunidad abierta |

**Conclusión:** Solo nos encuentran si ya saben que existimos. El tráfico orgánico (gente que nos descubre buscando) es casi cero.

### ¿Qué hacen los competidores que nosotros no?

| Competidor | Qué hacen bien | Referencia |
|-----------|---------------|-----------|
| **Regcheq** | Tienen una sección "Conceptos" (glosario) con páginas como "qué es compliance", "qué es debida diligencia", etc. Esto captura todo el tráfico de gente que está aprendiendo | regcheq.com → sección Conceptos |
| **Wherex** | Blog activo con títulos tipo pregunta ("¿Cómo evaluar proveedores?") que Google adora | wherex.com → Blog |
| **Verdana** | Landing pages por ley específica (Ley 20.393, Ley 21.595) que capturan búsquedas regulatorias | verdana.app |
| **CIAL D&B** | Autoridad global, posición 1 para "debida diligencia proveedores" | dnb.com |

### Fuentes donde los asistentes AI buscan y Plutto NO aparece

Los asistentes de IA (ChatGPT, Claude, Perplexity, Google AI Overviews) arman sus respuestas leyendo sitios web. Estos son los sitios que más consultan para recomendar software, y Plutto no está:

| Fuente | ¿Qué es? | ¿Estamos? | Urgencia |
|--------|----------|:-:|---------|
| **G2** | El directorio de software B2B más importante del mundo. Cuando alguien pregunta "mejores herramientas de compliance", la IA mira G2 primero | No | URGENTE |
| **Capterra** | Segundo directorio más consultado por IAs | No | URGENTE |
| **ComparaSoftware** | El directorio #1 en Latinoamérica | No | URGENTE |
| **Reddit** | Fuente creciente para respuestas de IA (r/compliance, r/fintech) | No | Puede esperar |
| **Prensa** | Solo tenemos una mención vieja (Forbes 2023). Prensa tech chilena (DF, Emol) ayudaría mucho | Casi nada | Importante |

---

## Parte 2: Tareas de contenido y posicionamiento

### Tareas paralelas — Perfiles en directorios de software

> Estas tareas son **manuales** (se hacen en los sitios web de cada directorio, sin tocar código).
> **No dependen de la migración** — puedes empezarlas hoy mismo mientras avanza la Fase 0.

### Semana 3-4 — Perfiles en directorios de software

Estas tareas son manuales (se hacen en los sitios web de cada directorio, sin código).

#### Tarea 6: Crear perfil en G2
**Etiqueta:** Manual (sin código)
**Por qué:** G2 es LA fuente #1 que usan los asistentes de IA para recomendar software B2B. Si no estamos ahí, no existimos para ChatGPT ni Perplexity.

- [ ] Ir a https://www.g2.com/products/new
- [ ] Categoría: "Third-Party Risk Management Software" (buscar esta categoría exacta)
- [ ] Completar estos campos:
  - **Product name:** Plutto
  - **Website:** https://getplutto.com
  - **Description (corta):** Plataforma de evaluación y gestión de riesgo de terceros con IA. Automatiza due diligence, compliance regulatorio y monitoreo continuo de proveedores en Chile y Latinoamérica.
  - **Description (larga):** Plutto ayuda a empresas a evaluar, aprobar y monitorear a sus terceros (proveedores, clientes, contrapartes) de forma automatizada. Usando inteligencia artificial, Plutto analiza documentos legales, consulta bases de datos regulatorias (SAT, SII, CMF, UAF), genera reportes de due diligence, y monitorea cambios en tiempo real. Fundada en 2020 y respaldada por Y Combinator (S22), Plutto es usada por empresas como Buda.com, Soprole, y Essbio para reducir hasta un 80% el tiempo de evaluación de terceros.
  - **Categorías adicionales:** Compliance Software, Vendor Risk Management, Due Diligence Software
  - **Logo:** Subir logo de Plutto
  - **Screenshots:** Subir 3-5 capturas de la plataforma
- [ ] Una vez creado, pedir a 5-10 clientes que dejen un review (esto es CRÍTICO — G2 prioriza productos con reviews)

#### Tarea 7: Crear perfil en Capterra
**Etiqueta:** Manual (sin código)

- [ ] Ir a https://www.capterra.com/vendors/sign-up
- [ ] Seguir el mismo approach que G2
- [ ] Categoría: "Third-Party Risk Management" o "Compliance Software"
- [ ] Usar las mismas descripciones de la Tarea 6
- [ ] Pedir reviews a los mismos clientes

#### Tarea 8: Crear perfil en ComparaSoftware
**Etiqueta:** Manual (sin código)
**Por qué:** Es el directorio #1 en Latinoamérica. Muchas búsquedas en español terminan ahí.

- [ ] Ir a https://www.comparasoftware.com/
- [ ] Buscar cómo registrar un producto (sección "Vendors" o "Proveedores")
- [ ] Categoría: "Software de Compliance" o "Gestión de Proveedores"
- [ ] Usar descripciones similares a G2 pero más enfocadas en LATAM

#### Tarea 9: Solicitar reviews de clientes
**Etiqueta:** Manual (sin código)
**Por qué:** Los directorios sin reviews no sirven de nada. G2 y Capterra priorizan productos con más y mejores reviews. Los asistentes de IA también le dan más peso.

- [ ] Hacer una lista de 10-15 clientes satisfechos (idealmente variados: banca, fintech, retail, etc.)
- [ ] Enviar un email personalizado pidiendo que dejen un review en G2 y/o Capterra
- [ ] Template sugerido:

> Asunto: ¿Nos ayudas con un review rápido?
>
> Hola [nombre],
>
> Estamos mejorando nuestra presencia online y nos ayudaría mucho tener tu experiencia reflejada en G2/Capterra. Son 5 minutos y nos hace una gran diferencia.
>
> [Link directo al formulario de review]
>
> ¡Gracias!
> Felipe

- [ ] Hacer follow-up a los 5-7 días con quienes no hayan respondido
- [ ] Meta: al menos 5 reviews en G2 y 3 en Capterra en el primer mes

---

### Fase 3 — Contenido pilar (artículos conceptos/)

> Estas páginas se crean **después de que Fases 0 y 1 estén completas** (diseño y templates listos).
> Todos se hacen con Claude — más abajo está el brief completo de cada uno.

#### Tarea 10: Artículo "¿Qué es KYB? Guía completa en español"
**Etiqueta:** Con Claude en el repo

- [ ] Ver Brief de Contenido #1 (abajo)
- [ ] Crear la página en el repo landing con Claude

#### Tarea 11: Artículo "KYC vs KYB: Diferencias y cuándo usar cada uno"
**Etiqueta:** Con Claude en el repo

- [ ] Ver Brief de Contenido #2 (abajo)

#### Tarea 12: Artículo "Regulaciones para gestión de proveedores en Chile 2026"
**Etiqueta:** Con Claude en el repo

- [ ] Ver Brief de Contenido #3 (abajo)

#### Tarea 13: Artículo "Cómo hacer due diligence de proveedores: paso a paso"
**Etiqueta:** Con Claude en el repo

- [ ] Ver Brief de Contenido #4 (abajo)

---

### Fase 3 — Landing pages por solución + FAQ

#### Tarea 14: Landing page — Due Diligence de Proveedores
**Etiqueta:** Con Claude en el repo

- [ ] Ver Brief de Contenido #5 (abajo)

#### Tarea 15: Landing page — Compliance de Proveedores
**Etiqueta:** Con Claude en el repo

- [ ] Ver Brief de Contenido #6 (abajo)

#### Tarea 16: Página de FAQ con datos estructurados
**Etiqueta:** Con Claude en el repo

- [ ] Ver Brief de Contenido #7 (abajo)

---

### Fase 5+ — Expansión (Mes 4 en adelante)

#### Tarea 17: Landing pages por industria
**Etiqueta:** Con Claude en el repo

- [ ] `/industrias/banca` — Compliance bancario para proveedores
- [ ] `/industrias/fintech` — KYB para fintech en Chile
- [ ] `/industrias/retail` — Evaluación de proveedores retail
- [ ] Cada una sigue el mismo patrón: problema del sector + cómo Plutto lo resuelve + caso de éxito + CTA demo

#### Tarea 18: Contenido en inglés
**Etiqueta:** Con Claude en el repo

- [ ] Crear versión en inglés de la homepage: "KYB Platform for Latin America"
- [ ] Artículo en inglés: "The Definitive Guide to KYB in Latin America"
- [ ] Esto es importante para que los asistentes de IA en inglés también nos conozcan

#### Tarea 19: Cobertura en prensa
**Etiqueta:** Manual (sin código)

- [ ] Identificar periodistas tech en Chile (DF, Emol Tecnología, FayerWayer, La Tercera Pulso)
- [ ] Preparar un one-pager de Plutto para prensa (qué hacemos, números, por qué importa)
- [ ] Ángulos posibles: "Startup chilena de Y Combinator llega a $6.6M ARR automatizando compliance con IA" o "Cómo la IA está transformando el compliance de proveedores en Chile"
- [ ] Cada mención en prensa con link a getplutto.com sube nuestra autoridad en Google y en asistentes de IA

---

## Parte 3: Briefs de contenido

Cada brief incluye todo lo que necesitas para crear la página. Abre Claude Code en el repo `plutto-labs/landing` y copia el prompt indicado.

---

### Brief #1: ¿Qué es KYB? Guía completa en español

| Campo | Detalle |
|-------|---------|
| **Título sugerido** | ¿Qué es KYB (Know Your Business)? Guía completa 2026 |
| **Keyword principal** | qué es KYB |
| **Keywords secundarias** | KYB significado, know your business en español, KYB compliance |
| **Formato** | Guía educativa con definición + secciones explicativas + tabla comparativa + CTA |
| **Largo sugerido** | 1.500-2.000 palabras |
| **CTA** | "Automatiza tu proceso KYB → Agenda una demo" |
| **Referencia competidor** | Regcheq tiene páginas similares en su sección Conceptos. Mirar regcheq.com para ver el estilo. |
| **Por qué esta keyword** | Nadie en Latinoamérica tiene una buena guía de KYB en español. Moody's y Stripe rankean, pero en inglés. Oportunidad limpia. |

**Outline:**
1. ¿Qué es KYB? (definición simple, 2-3 párrafos)
2. ¿Para qué sirve? (casos de uso: onboarding proveedores, compliance regulatorio, prevención fraude)
3. ¿Cuál es la diferencia entre KYB y KYC? (tabla comparativa)
4. ¿Qué información se verifica en un proceso KYB? (lista: razón social, RUT, representantes legales, beneficiarios finales, PEPs, sanciones)
5. ¿Quién necesita hacer KYB? (bancos, fintech, empresas con proveedores, etc.)
6. ¿Cómo automatizar KYB? (introducir Plutto como solución)
7. FAQ: 3-4 preguntas frecuentes

**Prompt para Claude:**

> Estoy creando una nueva página en el sitio de Plutto (getplutto.com). Necesito que crees una página HTML nueva en la ruta `/conceptos/que-es-kyb` (o como esté organizado el sitio).
>
> Es un artículo educativo titulado "¿Qué es KYB (Know Your Business)? Guía completa 2026".
>
> El outline es:
> 1. Qué es KYB - definición simple (2-3 párrafos)
> 2. Para qué sirve - casos de uso reales (onboarding proveedores, compliance, prevención fraude)
> 3. Diferencia entre KYB y KYC - tabla comparativa
> 4. Qué información se verifica (RUT, razón social, representantes legales, beneficiarios finales, PEPs, sanciones)
> 5. Quién necesita hacer KYB (bancos, fintech, empresas con cadena de proveedores)
> 6. Cómo automatizar KYB - mencionar Plutto como solución
> 7. FAQ con 3-4 preguntas frecuentes
>
> Requisitos:
> - Largo: 1.500-2.000 palabras
> - Tono profesional pero accesible (no ultra-técnico)
> - Enfoque en Chile y Latinoamérica
> - CTA al final: "Automatiza tu proceso KYB → Agenda una demo" con link a /demo-form
> - Agrega schema markup FAQ (JSON-LD) para las preguntas frecuentes
> - Usa el mismo estilo visual y CSS del resto del sitio
> - Meta title: "¿Qué es KYB (Know Your Business)? Guía completa 2026 | Plutto"
> - Meta description: "Aprende qué es KYB, para qué sirve, y cómo automatizar la verificación de empresas y proveedores en Chile y LATAM."
> - Agrega og:image y Twitter Card tags

---

### Brief #2: KYC vs KYB — Diferencias y cuándo usar cada uno

| Campo | Detalle |
|-------|---------|
| **Título sugerido** | KYC vs KYB: ¿Cuál es la diferencia y cuándo usar cada uno? |
| **Keyword principal** | diferencia KYC KYB |
| **Keywords secundarias** | KYC vs KYB, KYC qué es, KYB qué es, verificación clientes vs proveedores |
| **Formato** | Tabla comparativa + explicación + FAQ |
| **Largo sugerido** | 1.200-1.500 palabras |
| **CTA** | "Necesitas KYB para tus proveedores → Conoce Plutto" |
| **Referencia competidor** | TMT ID y ComplyAdvantage tienen versiones en inglés. No hay buena versión en español. |
| **Por qué esta keyword** | Es una de las preguntas más buscadas por personas descubriendo el mundo compliance. Alto volumen, baja competencia en español. |

**Outline:**
1. Introducción: por qué importa entender la diferencia
2. ¿Qué es KYC? (verificación de clientes personas naturales)
3. ¿Qué es KYB? (verificación de empresas y proveedores)
4. Tabla comparativa KYC vs KYB (qué verifica cada uno, quién lo usa, regulaciones aplicables, ejemplos)
5. ¿Puedo necesitar ambos? (sí — ejemplo: banco que tiene clientes persona y proveedores empresa)
6. Cómo Plutto resuelve el lado KYB
7. FAQ

**Prompt para Claude:**

> Crea una nueva página HTML en `/conceptos/kyc-vs-kyb`.
>
> Título: "KYC vs KYB: ¿Cuál es la diferencia y cuándo usar cada uno?"
>
> Outline:
> 1. Intro breve - por qué importa entender la diferencia
> 2. ¿Qué es KYC? (verificación de clientes personas naturales: identidad, dirección, origen de fondos)
> 3. ¿Qué es KYB? (verificación de empresas: razón social, estructura societaria, beneficiarios finales, PEPs)
> 4. Tabla comparativa grande KYC vs KYB con columnas: qué verifica, quién lo aplica, regulaciones, ejemplos, herramientas
> 5. ¿Puedo necesitar ambos? - ejemplo práctico
> 6. Cómo Plutto resuelve KYB
> 7. FAQ con schema markup JSON-LD
>
> Requisitos:
> - 1.200-1.500 palabras
> - La tabla comparativa es el elemento central — debe ser visualmente clara
> - Tono profesional pero accesible
> - CTA: "Necesitas KYB para tus proveedores → Conoce Plutto" con link a /demo-form
> - Meta title: "KYC vs KYB: Diferencias y cuándo usar cada uno | Plutto"
> - Meta description: "Conoce las diferencias entre KYC y KYB, cuándo aplicar cada proceso, y cómo automatizar la verificación de empresas y proveedores."
> - Mismo estilo visual del sitio + og:image + Twitter Cards

---

### Brief #3: Regulaciones para gestión de proveedores en Chile 2026

| Campo | Detalle |
|-------|---------|
| **Título sugerido** | Regulaciones para gestión de proveedores en Chile: Guía 2026 |
| **Keyword principal** | requisitos compliance proveedores Chile |
| **Keywords secundarias** | regulaciones proveedores Chile, ley 20.393 proveedores, ley 21.595, compliance Chile 2026 |
| **Formato** | Guía con lista de leyes + qué exige cada una + checklist |
| **Largo sugerido** | 2.000-2.500 palabras |
| **CTA** | "Cumple con todas las regulaciones automáticamente → Demo Plutto" |
| **Referencia competidor** | Verdana tiene landing pages por ley individual. Nosotros haríamos una guía consolidada (mejor para SEO). |
| **Por qué esta keyword** | Muchas empresas buscan esto cuando les piden cumplir con alguna regulación. Hoy rankean sitios del gobierno — no hay ninguna guía privada buena. |

**Outline:**
1. Introducción: por qué la gestión de proveedores está cada vez más regulada en Chile
2. Ley 20.393 — Responsabilidad penal de personas jurídicas (qué exige sobre proveedores)
3. Ley 21.595 — Delitos económicos (nuevo, qué cambia)
4. Ley 19.913 — Lavado de activos y financiamiento del terrorismo (UAF)
5. Ley Fintech — Implicancias para verificación de terceros
6. Normativa CMF — Requisitos para entidades reguladas
7. Checklist: ¿Tu empresa cumple? (tabla con "sí/no" para que el lector se autoevalúe)
8. Cómo automatizar el cumplimiento (Plutto)
9. FAQ

**Prompt para Claude:**

> Crea una nueva página HTML en `/conceptos/regulaciones-proveedores-chile`.
>
> Título: "Regulaciones para gestión de proveedores en Chile: Guía 2026"
>
> Outline:
> 1. Intro - por qué está cada vez más regulado
> 2. Ley 20.393 - responsabilidad penal de personas jurídicas, qué exige sobre proveedores
> 3. Ley 21.595 - delitos económicos, qué cambia para la gestión de terceros
> 4. Ley 19.913 - lavado de activos y UAF
> 5. Ley Fintech - implicancias para verificación de terceros
> 6. Normativa CMF - requisitos para empresas reguladas
> 7. Checklist de cumplimiento: tabla con columnas "Requisito | ¿Tu empresa cumple? | Riesgo si no cumples"
> 8. Cómo automatizar el cumplimiento con Plutto
> 9. FAQ con schema JSON-LD
>
> Requisitos:
> - 2.000-2.500 palabras
> - Investigar las leyes mencionadas para dar información precisa y actualizada
> - Tono profesional, pensado para un oficial de cumplimiento o gerente de operaciones
> - La checklist es el elemento más valioso — debe ser práctica
> - CTA: "Cumple con todas las regulaciones automáticamente → Demo Plutto"
> - Meta title: "Regulaciones proveedores Chile 2026: Guía completa de compliance | Plutto"
> - Meta description: "Todas las regulaciones que afectan la gestión de proveedores en Chile (Ley 20.393, 21.595, 19.913, Ley Fintech, CMF). Checklist incluido."
> - Mismo estilo del sitio + og:image + Twitter Cards

---

### Brief #4: Cómo hacer due diligence de proveedores — Paso a paso

| Campo | Detalle |
|-------|---------|
| **Título sugerido** | Cómo hacer due diligence de proveedores en Chile: Guía paso a paso |
| **Keyword principal** | cómo hacer due diligence proveedores |
| **Keywords secundarias** | due diligence proveedores Chile, debida diligencia terceros, proceso due diligence |
| **Formato** | Guía paso a paso (numerada) + caso real + checklist |
| **Largo sugerido** | 2.000-2.500 palabras |
| **CTA** | "Reduce tu due diligence de semanas a minutos → Demo Plutto" |
| **Referencia competidor** | Ambit-Iberia y BBVA tienen guías similares, pero enfocadas en España. No hay una buena para Chile/LATAM. |
| **Por qué esta keyword** | Alto volumen de búsqueda. Plutto ya rankea #1 para la versión "automatizar" — esta página refuerza esa posición y captura búsquedas relacionadas. |

**Outline:**
1. ¿Qué es due diligence de proveedores y por qué es obligatorio?
2. Paso 1: Recopilar información básica (RUT, razón social, documentos)
3. Paso 2: Verificar en fuentes oficiales (SII, CMF, UAF, Poder Judicial)
4. Paso 3: Identificar beneficiarios finales y PEPs
5. Paso 4: Evaluar riesgo (matriz de riesgo simple)
6. Paso 5: Documentar y aprobar/rechazar
7. Paso 6: Monitoreo continuo
8. Caso real: cómo Buda.com redujo 80% el tiempo con Plutto
9. Checklist descargable (resumen de todos los pasos)
10. FAQ

**Prompt para Claude:**

> Crea una nueva página HTML en `/conceptos/due-diligence-proveedores`.
>
> Título: "Cómo hacer due diligence de proveedores en Chile: Guía paso a paso"
>
> Outline:
> 1. Qué es due diligence de proveedores y por qué es importante/obligatorio en Chile
> 2. Paso 1: Recopilar información básica (RUT, razón social, documentos constitutivos)
> 3. Paso 2: Verificar en fuentes oficiales (SII, CMF, UAF, Poder Judicial, boletines comerciales)
> 4. Paso 3: Identificar beneficiarios finales (UBOs) y personas políticamente expuestas (PEPs)
> 5. Paso 4: Evaluar riesgo con una matriz simple (bajo/medio/alto/crítico)
> 6. Paso 5: Documentar hallazgos y aprobar o rechazar al proveedor
> 7. Paso 6: Monitoreo continuo post-aprobación
> 8. Caso real: "Buda.com redujo 80% el tiempo de due diligence con Plutto"
> 9. Checklist resumen de todos los pasos
> 10. FAQ con schema JSON-LD
>
> Requisitos:
> - 2.000-2.500 palabras
> - Cada paso debe ser concreto y accionable (no genérico)
> - Incluir una matriz de riesgo visual (tabla HTML)
> - El caso Buda.com debe ser creíble pero sin inventar datos específicos (solo usar el dato del 80% de reducción)
> - CTA: "Reduce tu due diligence de semanas a minutos → Demo Plutto"
> - Meta title: "Cómo hacer due diligence de proveedores en Chile: Paso a paso | Plutto"
> - Meta description: "Guía completa para hacer due diligence de proveedores en Chile. 6 pasos, fuentes oficiales, matriz de riesgo y checklist incluidos."

---

### Brief #5: Landing page — Due Diligence de Proveedores

| Campo | Detalle |
|-------|---------|
| **Título sugerido** | Due Diligence de Proveedores Automatizado | Plutto |
| **Keyword principal** | due diligence proveedores Chile |
| **Formato** | Landing page de producto (hero + problema + solución + features + caso + CTA) |
| **Largo sugerido** | 800-1.000 palabras |
| **CTA** | "Agenda una demo" |
| **Por qué esta keyword** | Es la búsqueda de mayor intención de compra — quien busca esto ya sabe que necesita una herramienta. |

**Importante:** Esta landing debe seguir las **Directrices de Diseño para Landing Pages** (Parte 3.5 más abajo). Aplicar especialmente las secciones A (arquitectura de 10 secciones), B (hero), D (schema), F (CTAs) y G (social proof).

**Prompt para Claude:**

> Crea una landing page nueva en `/soluciones/due-diligence-proveedores`.
>
> Es una landing page de producto, NO un artículo. Antes de empezar, lee las "Directrices de Diseño para Landing Pages" en este mismo documento (Parte 3.5) y sigue la arquitectura de 10 secciones ahí definida.
>
> Estructura (basada en directrices):
>
> 1. **Hero** (above-the-fold): H1 "Automatiza el due diligence de tus proveedores" (máx 8 palabras), subtítulo (1 línea sobre quién es el usuario y qué resuelve), CTA único "Agenda una demo", screenshot o GIF del producto (NO stock photos), trust badges si hay (G2, Capterra). Layout split: texto izquierda, visual derecha.
> 2. **Barra de logos**: "Empresas que confían en Plutto" + logos de clientes (placeholder)
> 3. **Sección problema**: "¿Todavía haces due diligence manual?" — 3 pain points con íconos (toma semanas, errores humanos, no hay monitoreo continuo). Formato "respuesta primero": abrir con 40-60 palabras que resuman el problema.
> 4. **Sección solución**: "Con Plutto, evalúa proveedores en minutos" — 4 features principales con icono + H3 + 1-2 oraciones orientadas a resultado (verificación automática en fuentes oficiales, análisis con IA, monitoreo continuo, reportes listos para auditoría)
> 5. **Stats/ROI**: Métrica cuantificada ("80% reducción en tiempo de evaluación") con caso Buda.com
> 6. **Testimonials**: Placeholder para 2-3 quotes con nombre, cargo, empresa, foto. Incluir métrica en cada quote.
> 7. **Cómo funciona**: 3-4 pasos visuales del proceso (subir proveedor → verificación automática → reporte → monitoreo)
> 8. **FAQ**: 4-5 preguntas frecuentes con acordeón + schema FAQPage JSON-LD
> 9. **CTA final**: Repetir "Agenda una demo" + badge secundario
>
> Requisitos técnicos:
> - HTML semántico: `<article>`, `<section>`, `<table>` nativo (no divs que simulen tablas)
> - Jerarquía de headings: 1 H1, H2 por sección, H3 para sub-items. Nunca saltar niveles
> - Schema JSON-LD: `SoftwareApplication` + `FAQPage` + `BreadcrumbList`
> - Breadcrumbs: Home > Soluciones > Due Diligence de Proveedores
> - Meta title: "Due Diligence de Proveedores Automatizado | Plutto" (50-60 chars)
> - Meta description: "Automatiza el due diligence de proveedores con IA. Verificación en fuentes oficiales, monitoreo continuo y reportes de auditoría." (120-158 chars)
> - og:image único (1200x630px) + Twitter Card `summary_large_image`
> - Canonical URL + `lang="es"`
> - Hero image con `fetchpriority="high"`, NO lazy-load. Resto de imágenes con `loading="lazy"`
> - Imágenes en WebP con `srcset` para responsivo
> - Mobile-first: CTA sticky en bottom, tap targets mín 48x48px, font mín 16px
> - Formato "respuesta primero" para AEO: cada sección abre con 40-60 palabras de respuesta directa
> - Nivel de lectura universitario, párrafos de 2-4 oraciones máximo
> - Mismo estilo visual del resto del sitio

---

### Brief #6: Landing page — Compliance de Proveedores

| Campo | Detalle |
|-------|---------|
| **Título sugerido** | Compliance de Proveedores: Automatiza el cumplimiento | Plutto |
| **Keyword principal** | compliance proveedores Chile |
| **Formato** | Landing page de producto (similar a Brief #5) |
| **Largo sugerido** | 800-1.000 palabras |
| **CTA** | "Agenda una demo" |
| **Por qué esta keyword** | Wherex domina esta búsqueda con 2 posiciones. Es nuestra oportunidad de competir directamente. |

**Importante:** Esta landing debe seguir las **Directrices de Diseño para Landing Pages** (Parte 3.5 más abajo). Aplicar especialmente las secciones A (arquitectura de 10 secciones), B (hero), D (schema), F (CTAs) y G (social proof).

**Prompt para Claude:**

> Crea una landing page nueva en `/soluciones/compliance-proveedores`.
>
> Antes de empezar, lee las "Directrices de Diseño para Landing Pages" en este mismo documento (Parte 3.5) y sigue la arquitectura de 10 secciones ahí definida.
>
> Estructura (basada en directrices):
>
> 1. **Hero** (above-the-fold): H1 "Gestiona el compliance de tus proveedores en un solo lugar" (valor prop, no feature), subtítulo (1 línea), CTA único "Agenda una demo", screenshot/GIF del producto. Layout split.
> 2. **Barra de logos**: "Empresas que confían en Plutto" + logos clientes (placeholder)
> 3. **Sección problema**: "El compliance manual no escala" — 3 pain points (regulaciones cambian, proveedores son muchos, auditorías exigen trazabilidad). Abrir con 40-60 palabras de respuesta directa.
> 4. **Sección solución**: 4 features de compliance con icono + H3 + resultado (monitoreo regulatorio automático, alertas de cambios, reportes de cumplimiento, trazabilidad completa)
> 5. **Regulaciones cubiertas**: Tabla HTML nativa (`<table>` con `<thead>`) — Ley 20.393, Ley 21.595, normativa CMF, UAF. Tablas originales = +112% citación por IA.
> 6. **Testimonials**: Placeholder para 2-3 quotes con nombre, cargo, empresa. Incluir métrica.
> 7. **Cómo funciona**: 3-4 pasos visuales del proceso
> 8. **FAQ**: 4-5 preguntas con acordeón + schema FAQPage JSON-LD
> 9. **CTA final**: "Cumple sin complicaciones → Agenda una demo"
>
> Requisitos técnicos:
> - HTML semántico: `<article>`, `<section>`, `<table>` nativo
> - Jerarquía: 1 H1, H2 por sección, H3 para sub-items. Nunca saltar niveles
> - Schema JSON-LD: `SoftwareApplication` + `FAQPage` + `BreadcrumbList`
> - Breadcrumbs: Home > Soluciones > Compliance de Proveedores
> - Diferenciar de Wherex: enfatizar la IA y la cobertura multi-regulación
> - Meta title: "Compliance de Proveedores: Automatiza el cumplimiento | Plutto" (50-60 chars)
> - Meta description: "Automatiza el compliance de proveedores: Ley 20.393, 21.595, CMF y más. Monitoreo continuo, alertas y reportes de auditoría con Plutto." (120-158 chars)
> - og:image único (1200x630px) + Twitter Card `summary_large_image`
> - Canonical URL + `lang="es"`
> - Hero image con `fetchpriority="high"`, resto `loading="lazy"`, WebP con `srcset`
> - Mobile-first: CTA sticky, tap targets 48x48px, font 16px
> - Formato "respuesta primero" para AEO en cada sección
> - Nivel universitario, párrafos 2-4 oraciones

---

### Brief #7: Página de FAQ

| Campo | Detalle |
|-------|---------|
| **Título sugerido** | Preguntas Frecuentes sobre KYB, Due Diligence y Compliance | Plutto |
| **Keywords** | preguntas frecuentes compliance, FAQ KYB, dudas due diligence |
| **Formato** | FAQ con acordeones (expandir/colapsar) + schema JSON-LD |
| **Largo sugerido** | 20-30 preguntas agrupadas por tema |
| **CTA** | "¿Tienes más preguntas? → Habla con nosotros" |
| **Por qué esta página** | Las FAQs con datos estructurados aparecen como "featured snippets" (cajas destacadas) en Google y son la fuente principal de los asistentes de IA para responder preguntas directas. |

**Prompt para Claude:**

> Crea una página FAQ en `/faq` o `/preguntas-frecuentes`.
>
> Debe tener 20-25 preguntas organizadas en estas categorías:
>
> **Sobre KYB y compliance:**
> - ¿Qué es KYB (Know Your Business)?
> - ¿Cuál es la diferencia entre KYC y KYB?
> - ¿Qué es due diligence de proveedores?
> - ¿Qué regulaciones chilenas exigen verificar proveedores?
> - ¿Qué es un beneficiario final (UBO)?
> - ¿Qué es una persona políticamente expuesta (PEP)?
>
> **Sobre Plutto:**
> - ¿Qué hace Plutto?
> - ¿En qué países opera Plutto?
> - ¿Qué fuentes de datos consulta Plutto?
> - ¿Plutto tiene API?
> - ¿Cuánto tarda una evaluación con Plutto?
> - ¿Plutto reemplaza al oficial de cumplimiento?
>
> **Sobre implementación:**
> - ¿Cuánto tarda la implementación?
> - ¿Plutto se integra con mi sistema actual?
> - ¿Qué soporte ofrece Plutto?
>
> Requisitos:
> - Implementar como acordeones (JavaScript para expandir/colapsar)
> - OBLIGATORIO: agregar schema JSON-LD de tipo FAQPage con TODAS las preguntas
> - Las respuestas deben ser concisas (2-4 oraciones cada una)
> - Meta title: "Preguntas Frecuentes - KYB, Due Diligence y Compliance | Plutto"
> - CTA al final de la página

---

## Parte 3.5: Directrices de Diseño para Landing Pages

Estas directrices definen la **estructura y arquitectura** que debe seguir toda landing page de Plutto. No son contenido — son el esquema que asegura que cada página funcione bien para SEO, AEO (ser citado por asistentes de IA), y conversión.

**Basado en:** Análisis de 130+ fuentes (Moz, Ahrefs, SEMrush, Unbounce, Google Web.dev, CXL, HubSpot, estudios de citación LLM) + análisis directo de landing pages de Coupa, LSEG/Refinitiv, OneTrust, Vanta, Regcheq y Wherex.

---

### A. Arquitectura de Secciones — Orden y Propósito

Toda landing page de Plutto debe seguir esta secuencia de 10 secciones. No todas son obligatorias — las marcadas con ★ son imprescindibles.

| # | Sección | Obligatoria | Propósito | Quién lo hace bien |
|---|---------|:-:|-----------|-------------------|
| 1 | **★ Hero (above-the-fold)** | ★ | Capturar atención, comunicar valor, iniciar acción | Todos |
| 2 | **★ Barra de logos / social proof inmediato** | ★ | Establecer credibilidad en los primeros 3 segundos de scroll | Vanta, Regcheq, Wherex, OneTrust |
| 3 | **★ Sección problema** | ★ | Conectar emocionalmente con el dolor del visitante | OneTrust, Coupa |
| 4 | **★ Sección solución (features/beneficios)** | ★ | Mostrar cómo el producto resuelve cada dolor — orientado a resultado, no a feature | Vanta, OneTrust |
| 5 | **Capacidades detalladas** | Opcional | Profundizar en 3-5 capabilities con screenshots. Para compradores técnicos | OneTrust (5 capabilities), Vanta (6 pasos) |
| 6 | **★ Stats / ROI** | ★ | Cuantificar el valor con números duros. Estadísticas originales = +41% citación IA | Vanta (526% ROI), Coupa (25%, 40%, 6%) |
| 7 | **★ Testimonials** | ★ | Validar claims con voces de clientes reales | Regcheq (6 quotes), Vanta (5 CISOs) |
| 8 | **Cómo funciona** | Recomendado | Reducir complejidad percibida con 3-4 pasos visuales | Vanta (6 pasos en product page) |
| 9 | **★ FAQ** | ★ | SEO (featured snippets) + AEO (+221% citación con schema) + resolver objeciones | OneTrust, Vanta, Wherex |
| 10 | **★ CTA final** | ★ | Repetir la acción principal + badges de credibilidad | Todos |

**Principio clave:** Problema primero. El hero habla del dolor del visitante, NO de las features del producto. Las features vienen después, cuando ya hay conexión emocional.

---

### B. Hero (Above-the-Fold) — Checklist

El hero es lo que el visitante ve sin hacer scroll. Tiene ~3 segundos para capturar atención.

| Elemento | Especificación | Dato |
|----------|---------------|------|
| **H1 (titular)** | Máx 8 palabras / 44 caracteres. Orientado a resultado, no a feature. Debe incluir el keyword principal de forma natural | Valor prop claro convierte 35-40% más que feature-first |
| **Sub-headline** | 1-2 oraciones. Responde: ¿para quién es? + ¿qué problema resuelve? | — |
| **CTA principal** | Un solo botón con verbo de acción ("Agenda una demo", "Prueba gratis"). NO poner 2 CTAs compitiendo en el hero | CTA único = 13.5% conversión vs 10.5% con múltiples |
| **Visual** | Screenshot real del producto, GIF animado del dashboard, o video corto mudo. NUNCA stock photos | Regcheq usa GIF animado del dashboard |
| **Trust badges** | Cerca del CTA: logos G2, Capterra, ISO 27001, o "X empresas confían" | Wherex pone Capterra + ISO en hero |
| **Layout** | Split: texto a la izquierda, visual a la derecha | Patrón dominante 2025-2026 |

**Lo que NO debe tener:**
- Navegación que distraiga del CTA
- Jerga o claims vagos ("plataforma de siguiente generación")
- Formulario con más de 3-4 campos
- Video con sonido automático

---

### C. Jerarquía de Headings (H1-H6)

Los headings definen la estructura de la página para Google y para los asistentes de IA. Una jerarquía limpia es obligatoria.

```
H1: [Keyword principal + value prop]                    ← UNO solo por página
│
├─ H2: El problema                                      ← Sección mayor
│
├─ H2: Cómo Plutto lo resuelve
│   ├─ H3: [Feature 1 — orientado a resultado]          ← Sub-item
│   ├─ H3: [Feature 2]
│   └─ H3: [Feature 3]
│
├─ H2: Resultados medibles                              ← Stats/ROI
│
├─ H2: Empresas que confían en Plutto                   ← Social proof
│
├─ H2: Cómo funciona
│   ├─ H3: Paso 1: ...
│   ├─ H3: Paso 2: ...
│   └─ H3: Paso 3: ...
│
├─ H2: Preguntas frecuentes                             ← FAQ
│   ├─ H3: ¿Qué es...?
│   ├─ H3: ¿Cómo funciona...?
│   └─ H3: ¿Cuánto tarda...?
│
└─ H2: Agenda una demo                                  ← CTA final
```

**Reglas:**
- **1 H1 por página** — define el tema principal para buscadores
- **H2 para cada sección mayor** — actúa como "tabla de contenidos"
- **H3 cuando el contenido bajo un H2 supera ~300 palabras** — agregar sub-secciones
- **Nunca saltar niveles** (no ir de H1 a H3 sin un H2)
- **Keywords naturales** en los headings, pero nunca keyword-stuffing
- **Headings semánticos** — usar `<h2>` por estructura, no para hacer texto grande (eso es CSS)
- **2-7 palabras** por heading, que capturen la esencia de la sección

---

### D. Schema Markup (JSON-LD) — Obligatorio por tipo de página

Los datos estructurados le dicen a Google y a los asistentes de IA exactamente qué es cada página. Sin schema, tienen que adivinar.

| Schema | Dónde aplicar | Qué habilita |
|--------|--------------|-------------|
| **`BreadcrumbList`** | Todas las landing pages | Breadcrumbs en resultados de Google. Señal de arquitectura del sitio |
| **`SoftwareApplication`** | Páginas de producto/solución (/soluciones/*, /producto) | Rich snippets con ratings, precio, badge "Free Trial" |
| **`FAQPage`** | Cualquier página con sección FAQ | FAQ desplegable en Google + fuente para AI Overviews. +221% citación IA |
| **`Organization`** | Homepage (ya definido en OUTPUT.md) | Knowledge Panel, links sociales |
| **`Product` + `Offer`** | Página de pricing | Precio visible en resultados de búsqueda |

**Templates JSON-LD:**

**BreadcrumbList** (todas las landings):
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://getplutto.com/"},
    {"@type": "ListItem", "position": 2, "name": "Soluciones", "item": "https://getplutto.com/soluciones/"},
    {"@type": "ListItem", "position": 3, "name": "[Nombre de esta página]"}
  ]
}
</script>
```

**SoftwareApplication** (páginas de solución):
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Plutto — [Nombre de la solución]",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "[Descripción que coincida con el H1/meta description]",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Contactar para pricing personalizado"
  }
}
</script>
```

**FAQPage** (páginas con FAQ):
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Pregunta exacta como aparece en la página]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Respuesta completa pero concisa, 2-4 oraciones]"
      }
    }
  ]
}
</script>
```

**Reglas:**
- Formato **JSON-LD** en `<head>` o al final de `<body>` (recomendación de Google)
- El contenido del schema **debe coincidir** con el texto visible de la página (si no coincide, Google lo ignora)
- Cada tipo de página tiene su propio schema — no volcar todo en todas las páginas

---

### E. Optimización AEO (para ser citado por asistentes de IA)

Los asistentes de IA (ChatGPT, Claude, Perplexity, Google AI Overviews) leen las páginas y deciden cuáles citar. Estos patrones aumentan la probabilidad de ser citado:

**Formatos que más citación generan:**

| Formato | Aumento de citación vs texto plano | Cómo implementar |
|---------|:--:|---|
| FAQ con schema JSON-LD | **+221%** | Sección FAQ con acordeón + schema `FAQPage` |
| Tablas comparativas | **+112%** | Tabla HTML nativa (`<table>` con `<thead>`) con datos originales. 3-5 columnas, 4-8 filas |
| Visualizaciones de datos | **+103%** | Gráficos o tablas con estadísticas propias |
| FAQ sin schema | **+89%** | Menos efectivo que con schema, pero aún alto |
| Listas paso a paso | **+67%** | `<ol>` con 5-8 items, cada uno en 1 línea |
| Estadísticas inline | **+41%** | Datos cuantificados dentro del texto ("80% de reducción en tiempo de DD") |
| Citas de expertos | **+37%** | Quotes con nombre, cargo y organización |

**Reglas de estructura para AEO:**

1. **Formato "respuesta primero"**: Cada sección abre con 40-60 palabras de respuesta directa y clara. El 44.2% de las citaciones de IA vienen del primer 30% de una página.

2. **Jerarquía H2 > H3 > bullet**: Páginas con esta estructura tienen 40% más probabilidad de ser citadas. Los headings definen los "chunks" que la IA extrae.

3. **Headings tipo pregunta**: "¿Qué es due diligence de proveedores?", "¿Cómo funciona?" — los asistentes de IA los usan como queries naturales.

4. **Párrafos cortos**: 2-4 oraciones máximo. La IA divide por párrafos.

5. **Nivel de lectura universitario**: No PhD-level. Texto claro y directo supera texto denso y académico.

6. **HTML semántico obligatorio**: `<article>`, `<section>`, `<main>`, `<table>` nativo, `<ul>`/`<ol>` nativo. No divs que simulen listas o tablas. Los crawlers de IA procesan HTML crudo, no JavaScript renderizado.

7. **Tablas con datos originales**: Tablas comparativas con datos propios de Plutto se citan 4.1x más que tablas genéricas. Usar `<caption>` para título de tabla.

8. **`dateModified` visible**: Mostrar fecha de actualización. 76.4% de las páginas más citadas por ChatGPT se actualizaron en los últimos 30 días.

---

### F. CTAs — Dónde y Cuántos

| Ubicación | Qué poner | Por qué |
|-----------|-----------|---------|
| **Hero** (above-the-fold) | CTA primario: "Agenda una demo" | Captura la intención inmediata |
| **Después de social proof** | Mismo CTA repetido | El visitante acaba de ver prueba social — momento de alta confianza |
| **Después de features** | Mismo CTA | El visitante entiende el valor — momento de decisión |
| **Final de página** | CTA primario + opción secundaria ("Ver producto" o "Descargar guía") | Último punto de conversión |

**Reglas:**
- **1 acción primaria por página**: "Agenda una demo" O "Prueba gratis" — no ambas compitiendo
- **Máximo 2 tipos de CTA**: Primario ("Agenda una demo") + Secundario ("Ver cómo funciona")
- **Repetir el mismo CTA** en los 4 puntos de la tabla, no inventar CTAs distintos
- **Verbos de acción**: "Agenda", "Prueba", "Conoce", "Empieza". Evitar pasivos ("Enviar", "Saber más")
- **Botones mínimo 48x48px** para tappability en mobile (requisito Google)
- **En mobile**: CTA sticky (barra fija en bottom) con el CTA primario siempre visible
- **CTAs personalizados**: Convierten 202% más que genéricos. Si sabemos la industria del visitante, adaptar el copy

---

### G. Social Proof — Distribución en Capas

El social proof NO va en un solo bloque. Se distribuye en 3 capas a lo largo de la página:

**Capa 1 — Temprana (inmediatamente bajo el hero):**
- Logo carousel de clientes (5-8 logos reconocibles)
- Stat agregado: "X+ empresas confían en Plutto" o "X proveedores verificados"
- Propósito: establecer legitimidad básica en los primeros segundos

**Capa 2 — Media (después de features/solución):**
- 2-3 testimonials detallados con:
  - Nombre completo, cargo, empresa
  - Foto real (no avatar)
  - Métrica cuantificada: "Redujimos el tiempo de due diligence de 2 semanas a 30 minutos"
- Propósito: validar los claims específicos que se acaban de hacer
- Dato: 3 testimonials = +34% conversión

**Capa 3 — Cerca del CTA final:**
- Badges de review (G2, Capterra) con estrellitas y labels ("High Performer", "Líder")
- Certificaciones (ISO 27001, SOC 2 si aplica)
- Propósito: reducir la hesitación del último momento antes de hacer click

**Patrones LATAM específicos (lo que funciona en la región):**

| Patrón | Quién lo usa | Por qué funciona |
|--------|-------------|-----------------|
| Logos de inversores/VCs | Regcheq (Endeavor, BTG) | Startups LATAM necesitan credibilidad institucional — los VCs la dan |
| Badges de Capterra/Software Advice en hero | Wherex | Review platforms son reconocidas como validación independiente |
| ISO 27001 + Empresa B en footer | Wherex | Certificaciones como trust signals — especialmente ISO para B2B |
| Direcciones físicas en 4 países | Wherex, Regcheq | Presencia regional visible = confianza |
| "+X empresas de LATAM" como stat | Regcheq ("+500 empresas") | Enfoque geográfico resuena con buyers regionales |

---

### H. Velocidad y Performance

Si la página tarda en cargar, Google la penaliza y los visitantes se van. Targets obligatorios:

| Métrica (Core Web Vitals) | Target | Qué pasa si no se cumple |
|---------------------------|--------|-------------------------|
| **LCP** (Largest Contentful Paint) | < 2.5 segundos | Bounce sube 32%. A 4 segundos, sube 90% |
| **INP** (Interaction to Next Paint) | < 200ms | Página se siente lenta/trabada |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Contenido "salta" visualmente — experiencia terrible |

**Checklist de imágenes:**

- [ ] Usar formato **WebP** o **AVIF** (10-20x más rápido que PNG/JPG sin comprimir)
- [ ] **Hero image**: `loading="eager"` + `fetchpriority="high"` + `<link rel="preload">`. NUNCA lazy-load la imagen del hero
- [ ] **Todas las demás imágenes**: `loading="lazy"`
- [ ] **`width` y `height` explícitos** en todas las imágenes (previene CLS)
- [ ] **`srcset` y `sizes`** para servir imágenes responsivas
- [ ] **og:image**: 1200x630px, único por página, JPEG o PNG, < 300KB
- [ ] No usar CSS `background-image` para el elemento LCP

**Otras optimizaciones:**
- Inline CSS crítico para above-the-fold
- Defer JavaScript no crítico
- Preconnect a orígenes necesarios: `<link rel="preconnect" href="https://fonts.googleapis.com">`
- Minimizar scripts de terceros (analytics, chat widgets)

---

### I. Mobile-First

El 68% de compradores B2B investigan desde mobile. Google usa indexación mobile-first. Se diseña para mobile primero, luego se escala a desktop.

**Reglas:**

| Aspecto | Especificación |
|---------|---------------|
| **Tap targets** | Mínimo 48x48px para botones y links (requisito Google) |
| **CTA sticky** | Barra fija en bottom del mobile con el CTA primario siempre visible |
| **Font mínimo** | 16px body text (previene zoom automático en iOS) |
| **Forms** | Máximo 3-4 campos. Usar `type="email"`, `type="tel"` para teclados apropiados |
| **Columnas** | 2-3 columnas en desktop → 1 columna en mobile |
| **Hero image** | Puede necesitar crop/composición diferente en mobile |
| **Carousels** | Testimonials en carousel → cards swipeables en mobile |
| **Tablas** | Tablas comparativas → acordeones colapsables en mobile |
| **Scroll horizontal** | NUNCA |
| **Hover** | No depender de hover para mostrar info — no existe en touch |

---

### J. Meta Tags — Checklist por Página

Cada landing page debe tener estos meta tags configurados individualmente:

```html
<!-- Básicos -->
<html lang="es">
<title>[Keyword principal] — [Beneficio] | Plutto</title>        <!-- 50-60 chars, keyword al inicio -->
<meta name="description" content="[Descripción con CTA]">        <!-- 120-158 chars -->
<link rel="canonical" href="https://getplutto.com/[ruta]">
<meta name="robots" content="index, follow">

<!-- Open Graph (redes sociales) -->
<meta property="og:title" content="[Título — puede diferir del <title>]">     <!-- < 70 chars -->
<meta property="og:description" content="[Descripción]">
<meta property="og:image" content="https://getplutto.com/[imagen-unica].png"> <!-- 1200x630px -->
<meta property="og:url" content="https://getplutto.com/[ruta]">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Plutto">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Título]">
<meta name="twitter:image" content="https://getplutto.com/[imagen].png">      <!-- 1200x675px -->

<!-- Viewport -->
<meta name="viewport" content="width=device-width, initial-scale=1">
```

**Reglas:**
- **Cada página tiene su propio og:image** — no reusar la misma imagen en todas
- **Title tag**: keyword principal al inicio, bajo 60 caracteres
- **Meta description**: incluir un CTA ("Agenda una demo", "Conoce cómo")
- **og:image**: colorida y descriptiva, no solo el logo

---

### K. Estructura de URLs

| Grupo | Patrón | Ejemplo |
|-------|--------|---------|
| Soluciones por caso de uso | `/soluciones/{keyword}` | `/soluciones/due-diligence-proveedores` |
| Soluciones por industria | `/industrias/{keyword}` | `/industrias/banca` |
| Contenido educativo | `/conceptos/{keyword}` | `/conceptos/que-es-kyb` |
| Casos de éxito | `/casos-de-exito/{empresa}` | `/casos-de-exito/buda-com` |
| FAQ | `/preguntas-frecuentes` | — |

**Reglas:**
- **Minúsculas siempre**
- **Guiones** para separar palabras (no guiones bajos — Google recomienda guiones explícitamente)
- **Slugs de 3-5 palabras** (25-30 caracteres)
- **Sin fechas** en URLs (hace que el contenido parezca viejo, limita reutilización)
- **Sin caracteres especiales**, query parameters, ni IDs
- **Incluir keyword principal** en el slug, pero no embutir múltiples keywords
- Cada grupo de URLs actúa como **topic cluster** para autoridad SEO

---

### L. Largo de Contenido

| Tipo de página | Largo recomendado | Contexto |
|---------------|:-:|---------|
| Landing page SEO (tráfico frío) | 1,500 - 3,000 palabras | El visitante no nos conoce — necesita contexto, credibilidad, pruebas |
| Landing page conversión (tráfico caliente/retargeting) | 300 - 800 palabras | Ya nos conoce — solo necesita el CTA |
| Artículo pilar (guía completa) | 2,000 - 3,000 palabras | Contenido educativo profundo |
| Artículo de blog estándar | 1,500 - 2,500 palabras | — |
| FAQ | 20 - 30 preguntas | Respuestas de 2-4 oraciones cada una |

**Nota:** El largo NO es un factor de ranking per se (Google lo ha dicho múltiples veces). Lo que importa es satisfacer la intención de búsqueda. Pero contenido demasiado corto no logra establecer credibilidad con tráfico frío. Cada sección debe ganarse su lugar — si no resuelve una objeción, construye confianza, o mueve hacia conversión, cortarla.

---

### M. Señales de Frescura (crítico para AEO)

Los asistentes de IA tienen un sesgo fuerte hacia contenido reciente:

| Dato | Implicación |
|------|------------|
| 85% de citaciones de AI Overviews son de contenido < 2 años | Contenido viejo no se cita |
| 76.4% de páginas más citadas por ChatGPT se actualizaron < 30 días | Actualizar frecuentemente |
| Páginas sin actualización trimestral pierden citaciones 3x más rápido | Mínimo cada 3 meses |
| Citaciones de IA son 25.7% más frescas que resultados orgánicos de Google | AEO premia frescura más que SEO tradicional |

**Cómo implementar:**

- **Año en títulos**: "Guía 2026", "Regulaciones 2026" — señal de vigencia
- **Fecha "Actualizado" visible** en la página + `dateModified` en schema
- **Actualizaciones sustantivas**: La IA detecta cambios cosméticos (solo cambiar la fecha no funciona). Agregar datos nuevos, stats actualizados, o casos de éxito frescos
- **Cadencia de actualización**:
  - Landing pages: cada 2 meses
  - Guías educativas: cada trimestre
  - FAQ: cada 6 meses
  - Blog posts: revisión ligera trimestral, profunda anual

---

### N. Oportunidades Diferenciadoras

Del análisis de 6 competidores directos (Coupa, LSEG, OneTrust, Vanta, Regcheq, Wherex), **ninguno** implementa estos elementos:

| Oportunidad | Por qué diferencia | Complejidad |
|-------------|-------------------|:-:|
| **Calculadora de ROI interactiva** | El visitante ingresa su # de proveedores y tiempo actual de DD → ve cuánto ahorraría con Plutto. Engagement + datos de lead | Media |
| **Tabla pública de comparación con competidores** | "Plutto vs Regcheq vs Wherex" — tabla honesta. Tablas comparativas originales = +112% citación IA | Baja |
| **Demo interactiva sin registro** | Sandbox o tour guiado del producto sin pedir datos. Reduce fricción de "ver para creer" | Alta |
| **Case study cards con métricas clickeables** | En vez de quotes genéricos: "Buda.com: 80% menos tiempo de DD" como card que abre el caso completo | Baja |

Estas 4 oportunidades son diferenciadores reales — se pueden implementar gradualmente empezando por las de complejidad baja (tabla comparativa y case study cards).

---

### Checklist rápido — Antes de publicar cualquier landing

- [ ] H1 único con keyword principal (< 8 palabras)
- [ ] Jerarquía H1 > H2 > H3 sin saltar niveles
- [ ] HTML semántico (`<article>`, `<section>`, `<table>` nativo)
- [ ] Schema JSON-LD: `BreadcrumbList` + `SoftwareApplication` o `FAQPage` según aplique
- [ ] Meta title (50-60 chars) + meta description (120-158 chars) + canonical
- [ ] og:image único (1200x630px) + Twitter Card
- [ ] `lang="es"` en `<html>`
- [ ] Hero image con `fetchpriority="high"`, resto con `loading="lazy"`
- [ ] CTA en 4 puntos: hero, post-social proof, post-features, final
- [ ] Social proof en 3 capas: logos, testimonials, badges
- [ ] FAQ con schema `FAQPage` (4-5 preguntas mínimo)
- [ ] Formato "respuesta primero" en cada sección (40-60 palabras)
- [ ] Mobile: CTA sticky, tap targets 48px, font 16px, 1 columna
- [ ] Breadcrumbs visibles + schema `BreadcrumbList`
- [ ] `dateModified` visible + en schema
- [ ] URL en formato `/soluciones/{keyword}` (minúsculas, guiones, 3-5 palabras)
- [ ] LCP < 2.5s, imágenes WebP con `srcset`

---

## Parte 4: Tareas que necesitan ingeniería

Estas tareas NO las puedes hacer sola — requieren cambios de infraestructura que debe hacer el equipo de desarrollo.

### 4.1 Migrar blog de subdominio a subdirectorio
**Impacto:** ALTO
**Qué pasa hoy:** El blog está en `blog.getplutto.com` (un subdominio). Google trata los subdominios como sitios separados, entonces toda la "autoridad" que gana el blog no beneficia al sitio principal.
**Qué necesitamos:** Mover el blog a `getplutto.com/blog` (un subdirectorio). Así todo el SEO del blog suma al dominio principal.
**Nota:** Esto requiere cambios en el servidor (Fly.io), configuración de DNS, y redirecciones 301 de todas las URLs antiguas.

### 4.2 Bloquear instancia Fly.io duplicada
**Impacto:** ALTO
**Qué pasa hoy:** Existe `getplutto-blog.fly.dev` indexado por Google. Es una copia exacta del blog, lo que Google penaliza como "contenido duplicado".
**Qué necesitamos:** Bloquear el acceso público a esa URL (con autenticación básica o redirección).

### 4.3 Arreglar template roto del blog
**Impacto:** MEDIO
**Qué pasa hoy:** La URL `blog.getplutto.com/tag/[slug]` está indexada en Google (con los corchetes literales — es un template que nunca se configuró).
**Qué necesitamos:** Eliminar esa página y agregar una regla `noindex` para que Google la desindexe.

### 4.4 Verificar indexación en Google Search Console
**Impacto:** Diagnóstico
**Qué pasa hoy:** Las páginas /producto, /precios y /mexico posiblemente no están indexadas en Google (no aparecen en búsquedas `site:getplutto.com`).
**Qué necesitamos:** Que alguien con acceso a Google Search Console verifique el estado de indexación y solicite indexación manual si es necesario.

### 4.5 Ejecutar PageSpeed Insights
**Impacto:** Diagnóstico
**Qué hacer:** Ir a https://pagespeed.web.dev/ y probar getplutto.com en mobile y desktop. Anotar los scores y las recomendaciones principales. Esto lo puede hacer marketing, pero las correcciones probablemente necesiten ingeniería.

---

## Parte 5: Competidores a monitorear

### Regcheq (regcheq.com) — Prioridad ALTA
**Qué hacen bien:**
- Sección "Conceptos" con glosario SEO (nos ganan todo el tráfico informacional)
- Versión en inglés del sitio
- Eventos propios ("Regcheq Night")
- Multi-país: Chile, Brasil, México, Perú

**Su debilidad que podemos explotar:**
- Se enfocan en KYC/AML, no en KYB. Plutto es mejor en verificación de empresas/proveedores.
- No tienen case studies visibles.

**Qué copiar:** La sección de Conceptos/Glosario. Es lo más urgente.

### Wherex (wherex.com) — Prioridad ALTA
**Qué hacen bien:**
- Blog activo con títulos tipo pregunta
- Rankean para "compliance proveedores Chile" con múltiples URLs

**Su debilidad:**
- Plataforma más enfocada en procurement que en compliance. Plutto es más profundo en due diligence y compliance.

**Qué copiar:** Los títulos tipo pregunta en el blog. Funciona muy bien para SEO y asistentes de IA.

### Verdana (verdana.app) — Prioridad MEDIA
**Qué hacen bien:**
- Landing pages por ley específica (Ley 20.393, Ley 21.595)

**Qué copiar:** La idea de tener contenido asociado a regulaciones específicas.

### CIAL D&B — Prioridad MEDIA
**Qué hacen bien:**
- Autoridad global, posición 1 para "debida diligencia proveedores"
- Content Hub con recursos por vertical

**Su debilidad:**
- Son globales, no tienen contenido específico para Chile. Plutto puede ganar en lo local.

---

## Resumen visual de prioridades

```
HACER AHORA (Semana 1-2):
├── Arreglos técnicos en el repo (Tareas 1-5) — Con Claude
└── Perfiles G2 + Capterra + ComparaSoftware (Tareas 6-8) — Manual

HACER ESTE MES (Semana 3-4):
├── Solicitar reviews de clientes (Tarea 9) — Manual
└── Primer artículo pilar: "Qué es KYB" (Tarea 10) — Con Claude

HACER MES 2:
├── 3 artículos pilar restantes (Tareas 11-13) — Con Claude
└── Landing pages por solución (Tareas 14-15) — Con Claude + Directrices Parte 3.5

HACER MES 3:
├── FAQ con schema (Tarea 16) — Con Claude + Directrices Parte 3.5
├── Tareas de ingeniería (4.1-4.3) — Necesita ingeniería
└── Landing por industria (Tarea 17) — Con Claude + Directrices Parte 3.5

HACER MES 4+:
├── Contenido en inglés (Tarea 18) — Con Claude
└── Prensa (Tarea 19) — Manual
```

---

*Documento generado a partir del deep review SEO/AEO de getplutto.com (marzo 2026). Fuente técnica: docs/seo/auditoria.md*
