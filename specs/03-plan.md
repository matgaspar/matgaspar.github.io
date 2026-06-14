# Plano Técnico — matgaspar.github.io

> O **como**. Arquitetura, decisões técnicas e roadmap por fases.

## 1. Stack

| Camada | Tecnologia | Versão alvo |
|--------|------------|-------------|
| Framework | Nuxt | 4.x |
| UI | Vue | 3.5 |
| Runtime de build | Nitro / Vite | 2.x / 7.x |
| Design system | Nuxt UI v4 (Tailwind CSS v4) | 4.x / 4.x |
| i18n | @nuxtjs/i18n | 10.x |
| SEO | @nuxtjs/seo | 5.x |
| Fontes | @nuxt/fonts (self-hosted) | 0.14.x |
| Imagens | @nuxt/image | 2.x |
| Ícones | @nuxt/icon + coleções locais (lucide, simple-icons) | — |
| Lint | @nuxt/eslint (flat config, stylistic) | 1.x |
| Testes | Vitest + @nuxt/test-utils | 4.x |
| Runtime | Node | 22 (LTS) |
| Gerenciador | pnpm | 10.x |
| Motion (assets) | Remotion (workspace isolado) | 4.x |
| Hospedagem | GitHub Pages (estático) | — |

## 2. Arquitetura de pastas (Nuxt 4 — diretório `app/`)

```
app/
  app.vue                 # raiz: <UApp> + layout + SEO base + <html lang>
  error.vue               # página de erro localizada (404/genérica)
  assets/css/main.css     # Tailwind v4 + Nuxt UI + tokens de tema
  layouts/default.vue     # header + main (skip-link) + footer
  pages/index.vue         # compõe as seções do portfólio
  components/
    AppHeader.vue         # nav fixa, troca de idioma e tema, menu mobile
    AppFooter.vue
    ColorModeToggle.vue
    LocaleSwitcher.vue
    sections/             # Hero, About, Skills, Experience, Projects, Contact
  composables/
    usePortfolioContent.ts # resolve dados estruturados do i18n (tm/rt → tipos)
i18n/locales/             # pt-BR.json, en.json (fonte de conteúdo)
public/                   # favicon.svg, .nojekyll
test/                     # testes Vitest
app.config.ts             # tema do Nuxt UI (cores)
nuxt.config.ts            # módulos, i18n, seo, prerender, eslint
```

## 3. Decisões técnicas (ADR resumido)

- **`pathPrefix: false`** nos componentes: permite `<HeroSection />` mesmo dentro
  de `components/sections/` (sem o prefixo de diretório).
- **Conteúdo no i18n** + composable `usePortfolioContent` que converte as
  mensagens compiladas (`tm`/`rt`) em objetos tipados — evita texto _hardcoded_.
- **OG image dinâmica desativada** (`ogImage.enabled = false`): o renderer nativo
  (`@takumi-rs/core`) é pesado e desnecessário para um portfólio estático;
  usamos meta OpenGraph estática. Sitemap, robots e schema.org seguem ativos.
- **Estratégia i18n `prefix_except_default`**: PT-BR na raiz (`/`), EN em `/en`.
- **Ícones locais** (`@iconify-json/*`): zero requisições a terceiros em runtime.
- **`.nojekyll`** em `public/`: impede o Jekyll de ignorar a pasta `_nuxt/`.
- **Motion via Remotion (render, não runtime):** o `remotion/` é um workspace
  isolado (React, fora das deps do Nuxt) que **renderiza** vídeos/posters para
  `public/` em tempo de build/dev (`pnpm motion:render`). O site só serve os
  arquivos estáticos resultantes — zero custo de runtime. O vídeo do hero pesa
  ~65 kB (WebM/VP9), com fallback MP4 e poster, e respeita `prefers-reduced-motion`.
- **Animações nativas performáticas:** scroll-reveal (IntersectionObserver +
  `getSSRProps` para evitar flash), typewriter, contadores e micro-interações —
  todas com degradação graciosa (no-JS e movimento reduzido).

## 4. Roadmap por fases

### Fase 0 — Fundação & Tooling  ✅ (entregue)
Upgrade Nuxt 4, pnpm, Node 22, ESLint flat, type-check estrito, Vitest, CI
moderna, `.editorconfig`/`.nvmrc`, `.nojekyll`.

### Fase 1 — UI/UX & Conteúdo bilíngue  ✅ (entregue)
Design system Nuxt UI v4, tema claro/escuro, layout responsivo e acessível,
seções do portfólio, i18n PT-BR/EN, SEO técnico, fontes/ícones otimizados.

### Fase 2 — Conteúdo real & Identidade visual
- Substituir _placeholders_ por experiência, projetos e links reais.
- Foto/avatar otimizado via `@nuxt/image`.
- OG image estática personalizada (1200×630) + favicon multi-tamanho.
- Ajuste fino da paleta e tipografia à marca pessoal.

### Fase 3 — Performance & Observabilidade
- **Lighthouse CI** no pipeline (orçamento de performance que falha o build).
- Auditoria de acessibilidade automatizada (`axe-core`/`@axe-core/playwright`).
- Pré-carregamento estratégico, _critical CSS_, verificação de _bundle size_.

### Fase 4 — Conteúdo dinâmico (opcional)
- Blog com **@nuxt/content** (Markdown, _syntax highlighting_, RSS).
- Tags, busca e índice de artigos; OG por artigo.

### Fase 5 — Engajamento (opcional)
- Formulário de contato (Formspree/Resend) com validação.
- Analytics _privacy-first_ (Plausible/Umami).
- Página de currículo imprimível / download em PDF.

## 5. Estratégia de testes

- **Unitário/contrato:** paridade de chaves entre locales (já implementado).
- **Componente:** montar seções com `@nuxt/test-utils` e checar render/aria.
- **E2E (futuro):** Playwright cobrindo navegação, troca de idioma e tema.
- **Não-funcional (futuro):** Lighthouse CI + axe no pipeline.

## 6. CI/CD

Workflow `Deploy to GitHub Pages` (push à `main`): instala com pnpm + cache,
roda **lint → test → generate**, faz upload de `.output/public` e publica via
`actions/deploy-pages@v4`. Node fixado por `.nvmrc`. Concorrência única.
