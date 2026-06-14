# Especificação — Portfólio / CV de Matheus Gaspar

> O **quê** e o **porquê**. Decisões de implementação ficam em `03-plan.md`.

## 1. Visão

Um site pessoal de **portfólio/CV**, bilíngue (PT-BR/EN), rápido, acessível e
elegante, que apresente Matheus Gaspar como engenheiro de software e sirva como
ponto central de contato profissional.

## 2. Público-alvo

- Recrutadores e gestores técnicos avaliando o perfil.
- Pares da comunidade técnica.
- Clientes em potencial para projetos/freelance.

## 3. Requisitos funcionais

| ID | Requisito | Critério de aceite |
|----|-----------|--------------------|
| RF1 | Seção **Hero** | Nome, cargo, _tagline_ e CTAs para contato e projetos |
| RF2 | Seção **Sobre** | Texto de apresentação + _highlights_ (números) |
| RF3 | Seção **Competências** | Grupos de skills agrupados por categoria |
| RF4 | Seção **Experiência** | Linha do tempo com cargo, empresa, período, descrição |
| RF5 | Seção **Projetos** | Cards com nome, descrição, tags e link |
| RF6 | Seção **Contato** | E-mail e links sociais (GitHub, LinkedIn) |
| RF7 | **Alternância de idioma** | PT-BR ⇄ EN preservando a rota; detecção por navegador |
| RF8 | **Tema claro/escuro** | Alternável e persistente; respeita preferência do SO |
| RF9 | **Navegação** | Header fixo com âncoras; menu responsivo no mobile |
| RF10 | **Página de erro** | 404 amigável e localizada, com retorno à home |

## 4. Requisitos não funcionais

| ID | Requisito | Meta |
|----|-----------|------|
| RNF1 | Performance | Lighthouse ≥ 95; LCP < 2.5s; CLS < 0.1 |
| RNF2 | Acessibilidade | WCAG 2.2 AA; Lighthouse a11y = 100 |
| RNF3 | SEO | Meta tags, OpenGraph, sitemap, robots, schema.org, `hreflang` |
| RNF4 | Hospedagem | Estático no GitHub Pages, deploy automático no push à `main` |
| RNF5 | Compatibilidade | Navegadores _evergreen_; degradação graciosa sem JS |
| RNF6 | Manutenção | Conteúdo editável só nos arquivos de locale |
| RNF7 | Qualidade | Lint, type-check e testes verdes em todo merge |

## 5. Escopo

**Dentro:** site institucional pessoal estático, bilíngue, com as seções acima.

**Fora (por ora):** blog/CMS, formulário com back-end, analytics, autenticação,
comentários. Ver "Evoluções futuras" em `03-plan.md`.

## 6. Conteúdo (fonte da verdade)

Todo o texto vive em `i18n/locales/pt-BR.json` e `i18n/locales/en.json`. O
conteúdo atual é **placeholder realista** e deve ser substituído pelos dados
reais de Matheus (experiência, projetos, links). O teste `test/content.test.ts`
garante que os dois idiomas tenham exatamente as mesmas chaves.

## 7. Riscos e suposições

- **Suposição:** perfil de engenheiro de software / produtos de dados (Dattos).
- **Suposição:** domínio raiz `matgaspar.github.io` (user page), `baseURL = '/'`.
- **Risco:** geração de OG image dinâmica exige dependência nativa pesada —
  decidimos desativá-la e usar OG estático (ver `03-plan.md`).
