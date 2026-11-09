# SOS Desentupidora SP · site

Site de desentupidora 24h em São Paulo e Grande SP, com foco em SEO local e Google Ads. Feito com [Astro](https://astro.build) (páginas estáticas, sem animação de abertura), publicado na Vercel.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Nome, telefone, WhatsApp, ID do Google Tag Manager | `src/data/site.ts` |
| Serviços (textos, FAQ, SEO) | `src/data/servicos.ts` |
| Cidades/regiões atendidas | `src/data/bairros.ts` |
| Posts do blog | `src/content/blog/*.md` |
| Logo | `src/assets/logo.png` |
| Fotos dos serviços e imagem de fundo | `fotos/<slug>/` (ver `fotos/README.md`) |

Cada serviço vira `/servicos/<slug>/`, cada cidade vira `/desentupidora-em-<slug>/` e cada post vira `/blog/<arquivo>/`.

## Botões

- Ligar: `tel:01198342-3445`, aparece como **011 98342-3445**
- WhatsApp: `api.whatsapp.com/send?phone=5511983423445`, aparece como **11 98342-3445**
