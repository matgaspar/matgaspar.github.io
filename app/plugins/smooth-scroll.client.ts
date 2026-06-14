/**
 * Smooth in-page scrolling for every anchor link (nav, hero CTAs, etc.).
 *
 * A single capture-phase click listener intercepts same-page hash links and
 * animates the scroll with a sticky-header offset, then updates the URL hash.
 * Capturing + preventDefault stops NuxtLink from doing an instant jump.
 * Also handles the initial load / refresh when the URL already has a hash.
 */
export default defineNuxtPlugin((nuxtApp) => {
  const HEADER_OFFSET = 80

  const prefersReduced = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function scrollToHash(hash: string, smooth: boolean) {
    let el: Element | null
    try {
      el = document.querySelector(hash)
    }
    catch {
      return false
    }
    if (!el) return false
    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    window.scrollTo({ top: y, behavior: smooth && !prefersReduced() ? 'smooth' : 'auto' })
    return true
  }

  document.addEventListener(
    'click',
    (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const anchor = (e.target as HTMLElement)?.closest?.('a')
      if (!anchor) return
      const href = anchor.getAttribute('href') || ''
      const hashIndex = href.indexOf('#')
      if (hashIndex === -1) return
      const hash = href.slice(hashIndex)
      if (hash.length < 2) return
      // Only intercept when the target section exists on this page.
      let target: Element | null
      try {
        target = document.querySelector(hash)
      }
      catch {
        return
      }
      if (!target) return
      e.preventDefault()
      scrollToHash(hash, true)
      history.replaceState(null, '', hash)
    },
    { capture: true },
  )

  // Initial load / refresh with a hash in the URL.
  nuxtApp.hook('app:mounted', () => {
    if (location.hash && location.hash.length > 1) {
      requestAnimationFrame(() =>
        setTimeout(() => scrollToHash(location.hash, true), 120),
      )
    }
  })
})
