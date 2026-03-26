Agrega una nueva sección a una página existente del sitio.

## Argumentos: $ARGUMENTS

Formato esperado: `[tipo de sección] [página destino]`

Ejemplos:
- `testimonios index.html`
- `pricing precios.html`
- `faq index.html`
- `equipo nosotros.html`
- `estadisticas index.html`
- `integraciones index.html`
- `cta-secundario index.html`

Si no se proporcionan argumentos, pregunta qué tipo de sección y en qué página.

## Pasos

1. Lee `docs/marca.md` para los patrones de componentes
2. Lee `docs/plutto.md` para contexto del producto
3. Lee la página destino completa

## Tipos de sección disponibles

### testimonios
Grid de testimonios con nombre, cargo, empresa y cita. Incluye foto placeholder.

### pricing
Tabla de precios con 2-3 planes. Cards con nombre, precio, features, y CTA.

### faq
Sección de preguntas frecuentes con acordeón (details/summary nativo, sin JS extra).

### equipo
Grid de miembros del equipo con foto, nombre, cargo y links sociales.

### estadisticas
Fila de métricas destacadas (ej: "+500 empresas verificadas", "10 países", etc.).

### integraciones
Grid de logos/iconos de tecnologías o servicios con los que Plutto se integra.

### comparativa
Tabla comparativa de Plutto vs alternativas.

### cta-secundario
Sección CTA adicional con fondo gris y mensaje diferente al CTA principal.

### logos-clientes
Sección mejorada de logos de clientes con imágenes reales.

### beneficios-detallados
Sección de features con layout alternado (imagen + texto, texto + imagen).

## Reglas de generación

- Usar los patrones exactos de componentes de `docs/marca.md`
- Contenedor: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- Padding de sección: `py-20`
- Alternar fondo: si la sección anterior tiene fondo blanco, usar `bg-gray-50` y viceversa
- Incluir `data-animate` en todos los elementos visibles
- No usar clases dark: (sin dark mode por ahora)
- Agregar comentario HTML identificando la sección (`<!-- TESTIMONIOS -->`, etc.)
- Usar texto placeholder entre corchetes `[...]` para contenido que el usuario debe completar
- Insertar antes del footer y después de la última sección de contenido
- Preguntar al usuario dónde quiere insertar la sección si no es obvio

## Formato de salida

1. Mostrar preview del HTML que se va a insertar
2. Indicar entre qué secciones se insertará
3. Pedir confirmación antes de aplicar el cambio
