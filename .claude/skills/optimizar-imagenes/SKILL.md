---
name: optimizar-imagenes
description: Audita y corrige atributos de imágenes en el HTML (alt, width, height, loading, formato) para mejorar rendimiento y SEO.
---

Audita todas las imágenes del sitio y corrige atributos faltantes en el HTML.

## Pasos

### 1. Escanear imágenes
- Leer todos los archivos `.html` del proyecto
- Para cada `<img>`, extraer: `src`, `alt`, `width`, `height`, `loading`, `fetchpriority`
- Verificar que cada archivo referenciado en `src` existe en el proyecto

### 2. Checklist por imagen

Para cada `<img>` encontrada:
- [ ] Atributo `alt` presente y descriptivo (no vacío, no "imagen", no solo el filename)
- [ ] Atributos `width` y `height` explícitos (previene CLS)
- [ ] `loading="lazy"` en imágenes below-fold
- [ ] `fetchpriority="high"` solo en la imagen hero/LCP
- [ ] Archivo existe en la ruta indicada
- [ ] Formato recomendado: WebP o AVIF (si es JPG/PNG, sugerir conversión)
- [ ] Tamaño de archivo razonable (< 200KB fotos, < 50KB iconos/logos)

### 3. Verificar OG images
- [ ] `og:image` apunta a un archivo que existe
- [ ] Dimensiones recomendadas: 1200x630px

### 4. Corregir automáticamente
Sin pedir confirmación, corregir:
- Agregar `loading="lazy"` a imágenes que no son hero
- Agregar `width` y `height` si se pueden determinar del archivo
- Agregar `alt` descriptivo basado en contexto (nombre de archivo, sección donde está)

Con confirmación del usuario:
- Cambiar `fetchpriority` de imágenes

### 5. Reportar
```
🖼️ Auditoría de imágenes
════════════════════════
Total imágenes: 8
  ✅ Atributos completos: 5
  🔧 Corregidas automáticamente: 2
  ⚠️ Requieren acción manual: 1

Acción manual necesaria:
  - assets/img/hero.jpg → Convertir a WebP (actualmente 450KB, target < 200KB)
    Comando: cwebp assets/img/hero.jpg -o assets/img/hero.webp -q 80
```

## Reglas
- NO convertir imágenes (no hay build step) — solo reportar qué convertir y el comando
- NO cambiar el `src` de imágenes sin confirmación
- Imágenes decorativas (`alt=""`) son válidas — no agregar alt texto a separadores/decoraciones
- Seguir las reglas de `docs/marca.md` para assets

## Siguiente paso
"Imágenes optimizadas. Ejecuta `/publicar` para desplegar los cambios."
