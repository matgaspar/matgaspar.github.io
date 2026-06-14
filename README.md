# matgaspar.github.io

Portfólio / CV pessoal de **Matheus Gaspar** — site estático, bilíngue (PT-BR/EN),
acessível e performático, construído com **Nuxt 4**.

[![Deploy to GitHub Pages](https://github.com/matgaspar/matgaspar.github.io/actions/workflows/nuxtjs.yml/badge.svg)](https://github.com/matgaspar/matgaspar.github.io/actions/workflows/nuxtjs.yml)

## ✨ Stack

- **Nuxt 4** (Vue 3.5, Nitro, Vite) — pré-renderização estática.
- **Nuxt UI v4** + **Tailwind CSS v4** — design system e tema claro/escuro.
- **@nuxtjs/i18n** — internacionalização PT-BR / EN.
- **@nuxtjs/seo** — sitemap, robots, schema.org, OpenGraph, `hreflang`.
- **@nuxt/fonts** (self-hosted) + ícones Iconify locais (lucide, simple-icons).
- **Remotion** (workspace isolado em `remotion/`) para animações de marca renderizadas.
- **ESLint** (flat config) · **TypeScript** strict · **Vitest**.
- Deploy automático no **GitHub Pages** via GitHub Actions.

## 🎬 Motion design (Remotion)

O fundo animado do hero é uma composição **Remotion** (`remotion/src/BrandLoop.tsx`)
renderizada para arquivos estáticos servidos pelo site (zero custo em runtime):

```bash
pnpm motion:render   # gera public/hero-loop.{webm,mp4} + poster
# ou, no workspace: cd remotion && npm run studio  (preview interativo)
```

As demais animações (scroll-reveal, typewriter, contadores, micro-interações) são
nativas, performáticas e respeitam `prefers-reduced-motion` e ausência de JS.

## 🚀 Desenvolvimento

Requer **Node 22** (ver `.nvmrc`) e **pnpm**.

```bash
pnpm install      # instala dependências
pnpm dev          # servidor de desenvolvimento em http://localhost:3000
```

## 📦 Build & qualidade

```bash
pnpm generate     # gera o site estático em .output/public
pnpm preview      # pré-visualiza o build de produção
pnpm lint         # ESLint
pnpm typecheck    # checagem de tipos
pnpm test         # testes (Vitest)
pnpm check        # lint + typecheck + test (o que a CI roda)
```

## 📝 Editando o conteúdo

Todo o texto vive em [`i18n/locales/pt-BR.json`](./i18n/locales/pt-BR.json) e
[`i18n/locales/en.json`](./i18n/locales/en.json). Os dois arquivos devem ter as
**mesmas chaves** — há um teste que garante isso (`test/content.test.ts`).

## 📐 Documentação (Spec-Driven Development)

O planejamento segue a metodologia SDD e está em [`specs/`](./specs):

| Documento | Conteúdo |
|-----------|----------|
| [`00-analise-melhorias.md`](./specs/00-analise-melhorias.md) | Diagnóstico do projeto original e oportunidades |
| [`01-constitution.md`](./specs/01-constitution.md) | Princípios de engenharia |
| [`02-spec.md`](./specs/02-spec.md) | Requisitos funcionais e não funcionais |
| [`03-plan.md`](./specs/03-plan.md) | Arquitetura e roadmap por fases |
| [`04-tasks.md`](./specs/04-tasks.md) | Tarefas executáveis e status |

## 🌐 Deploy

Cada push na branch `main` dispara o workflow que roda lint + testes, gera o
site e publica `.output/public` no GitHub Pages.
