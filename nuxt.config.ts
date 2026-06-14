// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Nuxt 4 enables the new directory structure and defaults by default.

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxt/test-utils/module',
  ],

  // Static site (GitHub Pages). `nuxt generate` prerenders every route.
  ssr: true,

  // Use filename-based component names (no directory prefix), so a component at
  // components/sections/HeroSection.vue is usable as <HeroSection />.
  components: [{ path: '~/components', pathPrefix: false }],

  devtools: { enabled: true },

  // matgaspar.github.io is a user page served from the domain root.
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      meta: [
        { name: 'theme-color', content: '#4f46e5' },
      ],
      // Reveal-on-scroll elements start hidden; without JS, show them anyway.
      noscript: [
        { innerHTML: '<style>.reveal{opacity:1 !important;transform:none !important}</style>', tagPosition: 'head' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  // @nuxtjs/seo: canonical site metadata used by sitemap, robots, og-image, schema.org.
  site: {
    url: 'https://matgaspar.github.io',
    name: 'Matheus Gaspar',
    description: 'Portfólio e currículo de Matheus Gaspar — engenheiro de software.',
    defaultLocale: 'pt-BR',
  },

  // Nuxt UI bundles color mode; default to system preference.
  colorMode: {
    preference: 'system',
    fallback: 'light',
  },
  compatibilityDate: '2025-06-01',

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/en'],
      // 404 page for GitHub Pages SPA-style fallback.
      failOnError: false,
    },
  },

  typescript: {
    strict: true,
    typeCheck: false,
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'Sora', provider: 'google' },
    ],
  },

  i18n: {
    defaultLocale: 'pt-BR',
    strategy: 'prefix_except_default',
    baseUrl: 'https://matgaspar.github.io',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      redirectOn: 'root',
      fallbackLocale: 'pt-BR',
    },
    locales: [
      { code: 'pt-BR', language: 'pt-BR', name: 'Português', file: 'pt-BR.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
    ],
  },

  // Dynamic OG image generation needs a heavy native renderer; not worth it
  // for a static portfolio. Sitemap, robots and schema.org stay enabled.
  ogImage: {
    enabled: false,
  },
})
