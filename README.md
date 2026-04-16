# Plutto Landing

Landing page estática para [getplutto.com](https://getplutto.com). Deploy automático en Cloudflare Pages.

## Para marketing: empieza aquí

**Si eres parte del equipo de marketing, lee [`docs/EMPIEZA-AQUI.md`](docs/EMPIEZA-AQUI.md)** - tiene todo lo que necesitas para crear y editar páginas con Claude Code.

## Desarrollo local

```bash
npx serve .
```

## Deploy

Push a `master` → Cloudflare Pages despliega automáticamente.

```bash
git add .
git commit -m "update: descripción del cambio"
git push
```

Dashboard: https://dash.cloudflare.com → Pages → plutto-landing

## Comandos de Claude Code

| Comando | Qué hace |
|---------|----------|
| `/siguiente-tarea` | Te dice qué hacer a continuación según el plan SEO |
| `/crear-articulo` | Crea artículo educativo con optimización AEO |
| `/nueva-pagina` | Crea una página nueva desde template |
| `/nueva-seccion` | Agrega una sección a una página existente |
| `/publicar` | Valida todo y publica (checklist + git push) |
| `/auditoria-seo` | Revisa meta tags, headings, sitemap y keywords SEO |
| `/verificar-consistencia` | Verifica colores, fonts y spacing vs manual de marca |
| `/mejorar-copy` | Sugiere mejoras de redacción y copy |
| `/auditoria-accesibilidad` | Audita accesibilidad WCAG 2.1 AA |
| `/revisar-rendimiento` | Revisa optimizaciones de rendimiento |
| `/optimizar-imagenes` | Audita y corrige atributos de imágenes |
| `/migrar-blog` | Migra artículos del subdomain blog a /blog/ |
| `/plutto-blog` | Escribe artículos del blog con pipeline anti-IA |

## Documentación

| Documento | Contenido |
|-----------|-----------|
| [`docs/planes-sprint/`](docs/planes-sprint/README.md) | **Sprint actual — 5 planes (blog, forms+HubSpot, checklist, DNS, directorios). Fuente de verdad** |
| [`docs/EMPIEZA-AQUI.md`](docs/EMPIEZA-AQUI.md) | Guía de inicio para marketing |
| [`docs/plutto.md`](docs/plutto.md) | Contexto del producto y keywords SEO |
| [`docs/marca.md`](docs/marca.md) | Design system (colores, componentes, schema, reglas) |
| [`docs/estrategia/auditoria.md`](docs/estrategia/auditoria.md) | Diagnóstico SEO/AEO histórico (marzo 2026) |
| [`docs/estrategia/plan-semanal.md`](docs/estrategia/plan-semanal.md) | Estrategia SEO de mediano plazo (artículos pilar, competencia, briefs) |
| [`docs/templates/brief-pagina.md`](docs/templates/brief-pagina.md) | Template para briefear páginas nuevas |

## Stack

- HTML estático
- Tailwind CSS v3 (CDN, sin build)
- Cloudflare Pages (hosting + CDN + auto-deploy)
