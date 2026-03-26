---
name: publicar
description: Valida y publica los cambios del sitio. Ejecuta checklist de calidad y hace git add/commit/push sin que toques git.
---

Valida y publica los cambios del sitio. Ejecuta un checklist de calidad antes de hacer commit y push.

## Pasos

### 1. Detectar cambios
- Ejecuta `git status` para ver qué archivos cambiaron
- Si no hay cambios, informa al usuario y detente
- Clasifica los cambios: páginas nuevas, páginas editadas, archivos de configuración, assets

### 2. Checklist pre-publicación

Para cada archivo HTML nuevo o modificado, verifica:

#### Contenido
- [ ] No hay texto placeholder entre corchetes `[...]`
- [ ] No hay Lorem ipsum ni texto de ejemplo
- [ ] No hay URLs placeholder (`example.com`, `#`, `javascript:void`)

#### Meta Tags
- [ ] `<title>` presente (50-60 chars)
- [ ] `<meta name="description">` presente (120-158 chars)
- [ ] `<link rel="canonical">` con URL absoluta correcta
- [ ] `<meta property="og:title">`, `og:description`, `og:image`, `og:url` presentes
- [ ] `<meta name="twitter:card">`, `twitter:title`, `twitter:description` presentes
- [ ] `<html lang="es">` configurado

#### Schema y SEO
- [ ] Al menos un bloque JSON-LD (`<script type="application/ld+json">`)
- [ ] Exactamente un `<h1>` por página
- [ ] Jerarquía de headings correcta (no salta niveles)

#### Assets
- [ ] Todas las imágenes referenciadas en `<img src="...">` existen en el proyecto
- [ ] Imágenes below-fold tienen `loading="lazy"`

#### Sitemap
- [ ] Si hay páginas HTML nuevas: verificar que están en `sitemap.xml`
- [ ] Si no están, agregar la entrada automáticamente

### 3. Mostrar resumen

Presenta un resumen claro y legible:

```
📋 Resumen de publicación
─────────────────────────
Archivos nuevos:
  + soluciones/due-diligence-proveedores.html

Archivos modificados:
  ~ index.html (nav actualizado)
  ~ sitemap.xml (1 URL agregada)

Checklist: ✅ 12/12 validaciones pasaron

¿Publicar estos cambios?
```

Si hay errores en el checklist, muestra los problemas y pregunta si quiere corregirlos antes de publicar.

### 4. Publicar

Si el usuario confirma:
1. `git add` de los archivos relevantes (nunca `git add -A`, listar archivos específicos)
2. `git commit` con mensaje descriptivo en español (ej: "feat: agregar página due diligence proveedores")
3. `git push origin master`
4. Mostrar: "Publicado. Cloudflare despliega automáticamente en ~1 minuto."

### 5. Post-publicación
- Sugerir: "Puedes verificar el deploy en el dashboard de Cloudflare Pages"
- Si la página es nueva: "Recuerda que Google puede tardar días en indexar. Puedes acelerar esto enviando la URL en Google Search Console."

## Reglas
- NUNCA hacer `git add -A` o `git add .` — siempre listar archivos específicos
- NUNCA hacer force push
- NUNCA modificar `_headers` sin autorización explícita
- Si hay errores en el checklist, NO publicar hasta que se corrijan (a menos que el usuario insista)
- El commit message debe ser descriptivo y en español
- Si hay archivos `.env`, credenciales, o archivos sensibles en los cambios, ADVERTIR y no incluirlos
