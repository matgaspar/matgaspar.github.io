# Análise de Melhorias — matgaspar.github.io

> Documento de diagnóstico. Mapeia o estado original do projeto, os problemas
> encontrados e as oportunidades de melhoria que alimentam a especificação SDD
> (ver `02-spec.md`, `03-plan.md`, `04-tasks.md`).

## 1. Estado original (baseline)

O repositório era essencialmente o _starter_ mínimo do Nuxt 3, com:

- `nuxt@3.0.0-rc.12` — um **release candidate** de 2022, anos desatualizado.
- `@nuxt/ui@latest` declarado, porém **comentado** em `modules` (não usado).
- Duas páginas _placeholder_ (`index.vue` com um `input` de teste e um `ref`
  `isLoad` sem uso; `about.vue` apenas com um `<h2>`).
- Layout único com navegação sem estilo.
- `runtimeConfig.apiSecret = '123'` — segredo _hardcoded_ inútil em site estático.
- Workflow do GitHub Actions usando ações **descontinuadas** (`checkout@v3`,
  `setup-node@v3` com **Node 16 EOL**, `configure-pages@v2`, `upload-pages-artifact@v1`,
  `deploy-pages@v1`), a sintaxe **deprecada** `::set-output` e publicando `./dist`
  (caminho incorreto para o Nuxt moderno, que gera em `.output/public`).
- Sem CSS, sem design system, sem SEO, sem testes, sem lint, sem i18n.
- `README.md` era o boilerplate padrão; indentação inconsistente (tabs vs. espaços).

## 2. Problemas e riscos identificados

| # | Categoria | Problema | Impacto |
|---|-----------|----------|---------|
| P1 | Dependências | Nuxt em RC de 2022 | Bugs, falhas de segurança, incompatibilidade com o ecossistema atual |
| P2 | CI/CD | Ações e Node EOL, `::set-output`, artefato errado | Pipeline quebraria/avisaria; deploy frágil |
| P3 | Segurança | `apiSecret` hardcoded | _Code smell_; vazaria se houvesse uso server-side |
| P4 | UX/UI | Nenhum estilo, sem design system | Site sem identidade, não apresentável |
| P5 | Acessibilidade | Sem semântica/foco/skip-link/contraste | Exclui usuários; reprova em auditorias |
| P6 | SEO | Sem meta tags, sitemap, robots, OpenGraph | Invisível para buscadores e redes sociais |
| P7 | Performance | Sem otimização de fontes/imagens/CWV | Pontuação baixa de Lighthouse |
| P8 | Qualidade | Sem lint, type-check, testes | Regressões silenciosas |
| P9 | i18n | Conteúdo só em PT, sem estrutura | Limita alcance internacional |
| P10 | DX | Sem `.editorconfig`/`.nvmrc`, scripts pobres | Onboarding e consistência ruins |
| P11 | GitHub Pages | Sem `.nojekyll` | Jekyll ignoraria a pasta `_nuxt/` (assets 404) |

## 3. Oportunidades de melhoria (resumo)

1. **Atualizar a stack** para Nuxt 4 + Nitro + Vite 7 + Vue 3.5.
2. **Design system** com Nuxt UI v4 (Tailwind CSS v4) e modo claro/escuro.
3. **Site real de portfólio/CV**: hero, sobre, competências, experiência,
   projetos e contato — orientado a dados (conteúdo em arquivos i18n).
4. **Internacionalização** PT-BR/EN com `@nuxtjs/i18n` e SEO `hreflang`.
5. **SEO técnico** com `@nuxtjs/seo` (sitemap, robots, schema.org, canonical).
6. **Performance**: fontes self-hosted (`@nuxt/fonts`), imagens (`@nuxt/image`),
   prerender estático, `prefers-reduced-motion`.
7. **Acessibilidade WCAG 2.2 AA**: HTML semântico, _skip link_, foco visível,
   `aria-*`, contraste, navegação por teclado.
8. **Qualidade**: ESLint (flat config), type-check estrito, Vitest + CI _gates_.
9. **CI/CD moderna**: Node 22, pnpm, ações fixadas, deploy de `.output/public`.
10. **DX**: `.editorconfig`, `.nvmrc`, scripts `lint/typecheck/test/check`.

> As melhorias 1, 2, 4, 5, 6, 7, 8, 9 e 10 já foram **implementadas na Fase 0/1**
> desta entrega (ver `04-tasks.md`). As demais ficam planejadas para fases seguintes.
