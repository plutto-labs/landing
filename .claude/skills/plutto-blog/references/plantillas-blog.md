# Plantillas de Blog - Plutto

4 formatos. Cada uno con estructura, largo, ejemplo de apertura buena vs mala, y qué evitar.

Notas generales para todos los formatos:
- Subtítulos en chileno natural: "El problema real", "Lo que funciona", "Por qué nadie lo hace"
- NUNCA: "En este artículo veremos...", "A continuación exploraremos...", "Conclusiones"
- Links inline ok
- Puede mencionar Plutto por nombre
- Clientes siempre anonimizados: "una minera grande", "una utility", "una constructora vial"
- Elegir estructura variable de `anti-ai-patterns-blog.md` (NUNCA hook-desarrollo-cierre por default)

---

## 1. Artículo Estándar

**Largo:** 800-1500 palabras
**Pilar típico:** Dolor, Framework
**Cuándo usarlo:** Tema puntual que no requiere guía paso a paso ni historia de implementación.

### Estructura

1. **Apertura con anécdota o dato** (1-2 párrafos) - algo real, específico
2. **El problema real** (2-3 párrafos) - datos específicos, por qué no es anecdótico
3. **Framework o solución** (3-5 párrafos) - propuesta concreta, números, rangos
4. **Aplicación práctica** (2-3 párrafos) - hacer tangible
5. **Cierre corto** - sin moraleja forzada, pregunta concreta o insight

### Apertura MAL:
> La gestión de proveedores es un tema cada vez más relevante para las empresas en Chile y Latinoamérica. En este artículo exploraremos las mejores prácticas para implementar un sistema de evaluación efectivo.

### Apertura BIEN:
> El otro día un gerente de abastecimiento nos mostró su "sistema de evaluación de proveedores". Era un Excel con 47 pestañas. La última se había editado en 2023.
>
> Lo interesante es que el tipo maneja 1.200 proveedores. Sabe perfectamente cuáles son buenos y cuáles no. Pero todo eso vive en su cabeza.
>
> ¿Qué pasa cuando se va de vacaciones? ¿O cuando renuncia?

### Qué evitar
- Intro de más de 2 párrafos antes del punto
- Secciones todas del mismo largo
- Conclusión que repita la intro
- Subtítulos tipo "Beneficios de X", "Importancia de Y"

---

## 2. Guía Técnica

**Largo:** 1500-2500 palabras
**Pilar típico:** Tutorial/How-to, Framework
**Cuándo usarlo:** Contenido paso a paso. Puede incluir código/API si aplica. El lector quiere implementar algo.

### Estructura

1. **El problema que resuelve** (1-2 párrafos) - por qué alguien necesitaría esta guía
2. **Prerequisitos o contexto mínimo** (1 párrafo o lista corta) - qué necesitas antes de empezar
3. **Pasos de implementación** (bloques de 2-4 párrafos cada uno) - numerados pero con narrativa, no solo bullets
4. **Ejemplo real o caso práctico** (2-3 párrafos) - cómo se ve implementado
5. **Errores comunes** (2-4 items) - qué sale mal y cómo evitarlo
6. **Cierre práctico** - siguiente paso concreto

### Apertura MAL:
> En esta guía completa, exploraremos paso a paso cómo implementar un sistema de scoring de proveedores. Cubriremos desde la definición de KPIs hasta la automatización del proceso.

### Apertura BIEN:
> Vamos a armar un scoring de proveedores que sirva. No uno de 47 indicadores que nadie revisa - uno de 4 familias, ponderado en dos niveles, con un score de 0 a 100.
>
> Lo hemos implementado en empresas que manejan entre 500 y 8.000 proveedores. Toma entre 2 y 4 semanas tenerlo corriendo.

### Qué evitar
- Pasos genéricos ("1. Defina sus objetivos, 2. Identifique stakeholders")
- Guía sin números ni especificidad
- Todos los pasos del mismo largo
- No dar ejemplo concreto de cómo se ve el resultado

---

## 3. Caso de Uso

**Largo:** 800-1200 palabras
**Pilar típico:** Trinchera, Dolor
**Cuándo usarlo:** Historia de implementación. Siempre anonimizada. El valor es la experiencia real.

### Estructura

1. **La situación** (1-2 párrafos) - industria, tamaño, problema concreto con números
2. **Lo que intentaron antes** (1-2 párrafos) - qué no funcionó y por qué
3. **Lo que hicimos** (2-3 párrafos) - implementación real, decisiones, trade-offs
4. **Resultados** (1-2 párrafos) - números específicos, antes/después
5. **Lo que aprendimos** (1 párrafo) - insight que aplica más allá de este caso

### Apertura MAL:
> Nuestro cliente, una empresa del sector minero, enfrentaba importantes desafíos en la gestión de sus proveedores. La falta de un sistema centralizado generaba ineficiencias significativas.

### Apertura BIEN:
> Una minera en el norte tenía 2.800 proveedores activos. Hacían evaluaciones anuales - en papel. El proceso tomaba 4 meses. Cuando terminaban de evaluar al último proveedor, la evaluación del primero ya tenía 16 meses de antigüedad.
>
> Nos pidieron algo específico: que en 6 semanas pudieran ver un score actualizado de cualquier proveedor.

### Qué evitar
- Nombres reales de clientes
- Números inventados o redondeados en exceso
- Convertirlo en caso de éxito publicitario
- Omitir lo que salió mal o los trade-offs
- Tono de caso de estudio de MBA

---

## 4. Opinión/Editorial

**Largo:** 600-1000 palabras
**Pilar típico:** Trinchera, Análisis de mercado
**Cuándo usarlo:** Take fuerte sobre una tendencia, problema o decisión del mercado. La opinión es el contenido.

### Estructura

1. **La tesis** (1-2 oraciones) - directo, sin setup
2. **Por qué pensamos esto** (3-5 párrafos) - evidencia de primera mano, datos, experiencia
3. **La implicación** (1-2 párrafos) - qué significa para el lector
4. **Cierre punzante** (1-2 oraciones) - que deje pensando

### Apertura MAL:
> La transformación digital del sector compliance es un tema que merece una reflexión profunda. En los últimos años, hemos observado cambios significativos que impactan la forma en que las empresas gestionan sus procesos.

### Apertura BIEN:
> El 90% de las "transformaciones digitales" en compliance son poner el mismo Excel en la nube.
>
> Lo decimos porque lo vemos todas las semanas. Empresas que cambian de Excel local a Google Sheets y lo llaman digitalización. O que pagan por un software que es básicamente un formulario con un dashboard encima.

### Qué evitar
- "Depende" como respuesta
- Tomar ambos lados sin comprometerse
- Disclaimer de "esto es solo nuestra opinión"
- Cerrar con "¿qué opinan?" genérico
- Más de 1000 palabras (si la opinión necesita más, probablemente es un artículo estándar)
