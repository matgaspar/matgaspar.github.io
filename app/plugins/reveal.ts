/**
 * Scroll-reveal `v-reveal` directive.
 *
 * - `getSSRProps` stamps the `reveal` class into the server-rendered HTML, so
 *   elements start hidden from the very first paint (no flash).
 * - On the client a single shared IntersectionObserver adds `reveal-in` when
 *   the element scrolls into view.
 * - No-JS users get the content via a <noscript> style (see nuxt.config), and
 *   `prefers-reduced-motion` users skip the transform (see main.css).
 */
export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null

  if (import.meta.client) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in')
            observer?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
  }

  nuxtApp.vueApp.directive('reveal', {
    getSSRProps: () => ({ class: 'reveal' }),
    mounted(el: HTMLElement) {
      // Client-navigated elements lack the SSR class; reveal them immediately.
      if (!el.classList.contains('reveal')) return
      observer?.observe(el)
    },
    unmounted(el: HTMLElement) {
      observer?.unobserve(el)
    },
  })
})
