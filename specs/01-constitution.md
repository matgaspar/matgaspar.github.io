# Constituição de Engenharia — matgaspar.github.io

> Princípios não negociáveis que guiam toda decisão técnica do projeto.
> Inspirado na metodologia _Spec-Driven Development_ (spec-kit).

## Princípio 1 — Modernidade pragmática

Usamos a versão **estável mais recente** do ecossistema (Nuxt 4, Vue 3.5,
Tailwind 4, Node LTS). Não adotamos _release candidates_ em produção. Mantemos
dependências atualizadas e a `compatibilityDate` fixada.

## Princípio 2 — Estático por padrão

O site é **100% pré-renderizado** (`nuxt generate`) e servido pelo GitHub Pages.
Nada de servidor em runtime, nada de segredos no _bundle_. Toda rota é navegável
sem JavaScript para o conteúdo essencial.

## Princípio 3 — Acessibilidade é requisito, não enfeite

Toda interface atende **WCAG 2.2 nível AA**: HTML semântico, contraste mínimo,
foco visível, navegação por teclado, `aria-*` correto e respeito a
`prefers-reduced-motion`. Uma feature inacessível é uma feature incompleta.

## Princípio 4 — Conteúdo orientado a dados e internacionalizável

Nenhum texto fica _hardcoded_ em componentes. Todo o conteúdo vive nos arquivos
de locale (`i18n/locales/*.json`), com **paridade estrutural** garantida por
teste automatizado. Adicionar um idioma é adicionar um arquivo.

## Princípio 5 — Qualidade verificável

Todo merge passa pelos _gates_: **lint + type-check + testes + build**. O comando
`pnpm check` reproduz localmente o que a CI executa. Código que não passa nos
_gates_ não chega à branch principal.

## Princípio 6 — Performance como funcionalidade

Metas de Core Web Vitals: **LCP < 2.5s, CLS < 0.1, INP < 200ms** e Lighthouse
≥ 95 em todas as categorias. Fontes e imagens são otimizadas em build; nada é
baixado de terceiros em runtime (fontes self-hosted, ícones locais).

## Princípio 7 — Experiência de desenvolvimento (DX)

Um clone novo deve rodar com `pnpm install && pnpm dev`. Configuração
explícita e comentada, `.nvmrc`/`.editorconfig` versionados, _scripts_ claros.

## Princípio 8 — Simplicidade e manutenção

Preferimos a solução mais simples que atenda ao requisito. Componentes pequenos
e de responsabilidade única, sem dependências supérfluas. Cada módulo adicionado
precisa justificar seu custo de _bundle_ e manutenção.
