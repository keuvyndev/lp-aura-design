# Studio Aura — Landing page

Landing page imersiva para o **Studio Aura** (Marina Vasconcelos): arquitetura e interiores de alto padrão, com foco em **luxo discreto**, conversão de leads qualificados e narrativa visual de boutique.

Este repositório é um exemplo de **produto unindo especificação orientada a marca, engenharia front-end e uso assistido por IA**: o brief vive em `.ai/prd.md`; a implementação é HTML, CSS e JavaScript nativos, com animações e scroll pensados para sensação premium.

## Objetivo e conceito (brief)

Conforme o [PRD](.ai/prd.md):

- **Conceito visual:** “The Curated Void” — riqueza material com respiro espacial; direção tipo *boutique hotel* + galeria de arte.
- **Público:** leads de alto poder aquisitivo.
- **Jornada em uma página:** hero com vídeo, processo em três momentos, galeria assimétrica, essência da fundadora, depoimentos e contato (formulário + WhatsApp).

## Tecnologias

| Camada | Uso no projeto |
|--------|------------------|
| **HTML5** | Estrutura semântica (`header`, `main`, `section`, `nav`, `article`), acessibilidade básica (`aria-*`, `role="status"`), meta SEO e `lang="pt-BR"`. |
| **CSS3** | Variáveis (`:root`), Grid e Flexbox, `clamp()` para tipografia fluida, `backdrop-filter`, transições, media queries (desktop-first com breakpoints ~1080px e ~860px), overlay de ruído sutil. |
| **Google Fonts** | **Bodoni Moda** (títulos) e **Hanken Grotesk** (corpo e UI), alinhados ao design system do brief. |
| **JavaScript (ES6+)** | Módulo único sem framework: dados do portfólio, formulário com validação, menu mobile, slider de depoimentos, `IntersectionObserver` para reveals. |
| **GSAP 3.12.5** + **ScrollTrigger** | Seção “processo”: pin do bloco de vídeo, *scrub* no scroll, timeline sincronizada com `currentTime` do vídeo para narrativa em camadas. |

Não há build step obrigatório: é um site **estático**, adequado a hospedagem em qualquer CDN ou servidor de arquivos estáticos.

## Desenvolvimento e IA

- **Papel da IA:** acelerar iteração a partir de um PRD explícito (paleta, tipografia, sitemap, inventário de mídias), gerar markup/CSS/JS de alta fidelidade e refinar copy em português — sempre com revisão humana para marca, performance e acessibilidade.
- **Papel do desenvolvimento:** decisões de arquitetura (vanilla vs. framework), contratos de dados (array do portfólio), integração GSAP/ScrollTrigger com vídeo, validação de formulário, lazy loading de imagens e CSS responsivo com *safe areas* e menu colapsável.

Esse fluxo **PRD → implementação → ajuste manual** é o que torna o projeto um estudo de **IA + engenharia front-end**, não apenas um template gerado.

## Estrutura do repositório

```
Aura/
├── index.html          # Ponto de entrada da página
├── src/
│   ├── css/styles.css  # Design system e layout
│   ├── js/script.js    # Comportamentos e animação do processo
│   └── assets/         # Vídeos e imagens (vide PRD)
└── .ai/
    └── prd.md          # Brief do produto
```

**Nota:** o `index.html` referencia `css/styles.css` e `js/script.js`. Os arquivos-fonte atuais estão em `src/css/` e `src/js/`. Para abrir localmente sem ajuste de caminhos, alinhe as pastas `css/` e `js/` à raiz (cópia, symlink ou atualização dos `href`/`src` no HTML) ou sirva o projeto com um mapeamento que resolva esses URLs.

## Assets esperados (inventário do PRD)

- `src/assets/interior-dark-video.mp4` — fundo do hero  
- `src/assets/video-camadas.mp4` — seção de processo  
- Imagens do portfólio e retrato/ambiente da seção “Essência” (nomes usados no código: `projeto-*.png`, etc.)

## Como visualizar

1. Garanta que `css/styles.css`, `js/script.js` e `src/assets/` estejam acessíveis conforme os caminhos do `index.html`.  
2. Sirva a pasta com um servidor HTTP local (vídeos e alguns recursos se comportam melhor do que com `file://`). Exemplos:

```bash
# Node (npx)
npx --yes serve .

# Python
python -m http.server 8080
```

3. Abra a URL indicada no terminal no navegador.

## Funcionalidades implementadas

- Hero com vídeo em loop, poster e vinheta.  
- Processo com **scroll pin + scrub** e vídeo sincronizado ao progresso do scroll.  
- Galeria **assimétrica** (classes `card-tall` / `card-wide`) montada via JavaScript.  
- Reveal ao entrar na viewport (`IntersectionObserver`).  
- Depoimentos em rotação automática.  
- Formulário de contato com validação client-side; CTA para WhatsApp (substitua o número em `href` do `wa.me` pelo real).  
- Header fixo com blur; menu hambúrguer em telas menores.

## Licença e créditos

Conteúdo de marca **Studio Aura** conforme brief interno. Ajuste direitos de imagem/vídeo antes de publicação pública.

---

© 2026 — Projeto de portfólio / estudo **Aura**: interiores premium, stack web moderna e fluxo **especificação + IA + desenvolvimento**.
