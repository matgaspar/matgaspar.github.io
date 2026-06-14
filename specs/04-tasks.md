# Tarefas — matgaspar.github.io

> Quebra executável do `03-plan.md`. Estado: ✅ feito · ⬜ pendente.
> As Fases 0 e 1 foram entregues nesta iteração.

## Fase 0 — Fundação & Tooling ✅

- [x] T0.1 — Migrar `package.json` para Nuxt 4, `type: module`, `engines`, `packageManager`.
- [x] T0.2 — Adotar **pnpm** (lockfile, `.npmrc`, `onlyBuiltDependencies`).
- [x] T0.3 — Estrutura de diretórios Nuxt 4 (`app/`), remover scaffold antigo.
- [x] T0.4 — `nuxt.config.ts` moderno (módulos, prerender estático, `baseURL`).
- [x] T0.5 — TypeScript **strict** + `pnpm typecheck`.
- [x] T0.6 — **ESLint** flat config (`@nuxt/eslint`, stylistic) + `lint`/`lint:fix`.
- [x] T0.7 — **Vitest** + `@nuxt/test-utils` + teste de paridade de locales.
- [x] T0.8 — Script agregado `pnpm check` (lint + typecheck + test).
- [x] T0.9 — `.editorconfig`, `.nvmrc`, `public/.nojekyll`.
- [x] T0.10 — **CI/CD** moderna (Node 22, pnpm, ações fixadas, deploy `.output/public`).
- [x] T0.11 — Remover `apiSecret` hardcoded; sanear configuração.

## Fase 1 — UI/UX & Conteúdo bilíngue ✅

- [x] T1.1 — Integrar **Nuxt UI v4** (Tailwind v4) + `app.config.ts` (tema).
- [x] T1.2 — `main.css` com tokens, `scroll-behavior` e `prefers-reduced-motion`.
- [x] T1.3 — Layout `default.vue` com **skip-link**, `<main>` semântico, footer.
- [x] T1.4 — `AppHeader` responsivo (âncoras, menu mobile, aria-expanded).
- [x] T1.5 — `ColorModeToggle` (claro/escuro, ClientOnly, aria-label).
- [x] T1.6 — `LocaleSwitcher` (troca preservando rota, `useSwitchLocalePath`).
- [x] T1.7 — Seções: Hero, About, Skills, Experience, Projects, Contact.
- [x] T1.8 — Composable `usePortfolioContent` (dados tipados a partir do i18n).
- [x] T1.9 — **i18n** PT-BR/EN (`prefix_except_default`, detecção por navegador).
- [x] T1.10 — **SEO** (`@nuxtjs/seo`: sitemap, robots, schema.org, canonical, hreflang).
- [x] T1.11 — Fontes self-hosted (`@nuxt/fonts`) e ícones locais.
- [x] T1.12 — `error.vue` localizada (404/genérica).
- [x] T1.13 — `favicon.svg`.

## Fase D — Redesign premium & correções ✅

- [x] TD.1 — **Correção do seletor de idiomas**: troca por `setLocale()` (confiável
      sob `prefix_except_default`), apresentado como toggle segmentado PT/EN.
- [x] TD.2 — Nova paleta "aurora": primary **violet**, secondary **cyan**, neutral **zinc**;
      tipografia display **Sora**.
- [x] TD.3 — Identidade re-renderizada na nova paleta: hero loop (Remotion), OG image,
      favicons, ícones PWA e avatar.
- [x] TD.4 — Sistema visual premium: `SectionHeading` com kicker em gradiente, cards
      **glass** com hover/glow, glows ambientes por seção, timeline em gradiente,
      seção de contato como faixa CTA com wash aurora, badge de disponibilidade no hero.
- [x] TD.5 — Correção do link do LinkedIn para o handle correto (`/in/matheus-gaspar`).

## Fase M — Motion design & micro-interações ✅

- [x] TM.1 — Workspace **Remotion** isolado (`remotion/`) com composição `BrandLoop`
      (orbs indigo à deriva + grid + vignette), loop perfeito de 6s a 1080p.
- [x] TM.2 — Render programático: `hero-loop.webm` (~65 kB, VP9), `.mp4` (fallback H.264)
      e poster `.jpg`, via `pnpm motion:render`.
- [x] TM.3 — `HeroBackground` cinematográfico (vídeo `autoplay/muted/loop/playsinline`),
      com fallback estático para `prefers-reduced-motion`.
- [x] TM.4 — Wordmark com gradiente animado (`text-shine`).
- [x] TM.5 — Typewriter de cargos (`HeroRoles`, client-only com fallback SSR estático).
- [x] TM.6 — Scroll-reveal acessível (`v-reveal`, classe via `getSSRProps` — sem flash;
      `<noscript>` + `prefers-reduced-motion` como fallback).
- [x] TM.7 — Contadores animados nas métricas (`AnimatedNumber`, valor final no SSR/no-JS).
- [x] TM.8 — Micro-interações de hover (elevação + ring) nos cards.

## Fase 2 — Conteúdo real & Identidade visual ✅

- [x] T2.1 — Conteúdo real (bio, experiência, competências, formação) extraído do
      LinkedIn (PDF) e aplicado em PT-BR/EN. Tech Lead/Eng. de Software @ Dattos.
- [x] T2.2 — Avatar otimizado via `<NuxtImg>` em moldura com anel em gradiente.
- [x] T2.3 — "Projetos" genérico substituído por **Formação & Certificações** reais
      (Eng. da Computação, IFRJ; ETL 1bi/dia, Engage) + experiência detalhada.
- [x] T2.6 — E-mail de contato corrigido para `matheus@web7online.com`; tema **dark por
      padrão**; navegação com **scroll-spy** (link ativo); hero com **stats** reais.
- [x] T2.4 — OG image 1200×630, favicons multi-tamanho, `site.webmanifest`, `theme-color`,
      `apple-touch-icon` e meta OpenGraph/Twitter. Gerados por `pnpm assets:generate` (sharp).
- [x] T2.5 — Identidade visual coesa (indigo `#4f46e5`): favicon, OG, avatar, manifest e
      `theme-color` alinhados; tipografia Inter (texto) + Lexend (display).

## Fase 3 — Performance & Observabilidade 🟡 (em andamento)

- [x] T3.1 — **Lighthouse CI** no pipeline (`.github/workflows/lighthouse.yml` +
      `lighthouserc.json`), com asserts: acessibilidade ≥ 0.9 (erro), SEO/BP/perf (aviso).
- [x] T3.2 — **Auditoria de acessibilidade automatizada** via Lighthouse (categoria
      a11y usa regras axe-core). Scores atuais: **A11y 100, SEO 100, BP 96, Perf ~88**.
- [ ] T3.3 — Verificação de _bundle size_ / análise de assets.
- [ ] T3.4 — Testes de componente (render + aria) com `@nuxt/test-utils`.

## Fase 4 — Blog (opcional) ⬜

- [ ] T4.1 — Integrar **@nuxt/content** (Markdown).
- [ ] T4.2 — Listagem, página de artigo, tags e busca.
- [ ] T4.3 — RSS e OG por artigo.

## Fase 5 — Engajamento (opcional) ⬜

- [ ] T5.1 — Formulário de contato com validação (Formspree/Resend).
- [ ] T5.2 — Analytics privacy-first (Plausible/Umami).
- [ ] T5.3 — Currículo imprimível / download em PDF.

---

### Como retomar (Definition of Done por tarefa)

Uma tarefa só é ✅ quando: implementada, **`pnpm check` verde**,
**`pnpm generate` sem erros de link** e revisada. Atualize este arquivo a cada
entrega para manter o estado fiel.
