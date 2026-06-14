/**
 * Animated smooth scrolling for in-page anchors.
 *
 * Uses a custom requestAnimationFrame tween (easeInOutCubic) instead of the
 * native `scroll-behavior: smooth`, so the motion has a controlled, premium
 * feel (duration scales with distance) and a sticky-header offset. A single
 * capture-phase click listener handles every same-page hash link (nav + CTAs);
 * the initial load / refresh with a hash is animated too. Respects
 * prefers-reduced-motion (instant) and cancels if the user scrolls/keys.
 */
export default defineNuxtPlugin((nuxtApp) => {
  const HEADER_OFFSET = 80

  const prefersReduced = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2

  function animateTo(targetY: number) {
    const maxY = document.documentElement.scrollHeight - window.innerHeight
    const destination = Math.max(0, Math.min(targetY, maxY))
    const startY = window.scrollY
    const diff = destination - startY
    if (Math.abs(diff) < 2) return

    if (prefersReduced()) {
      window.scrollTo(0, destination)
      return
    }

    // Duration scales with distance, clamped for a snappy-yet-smooth feel.
    const duration = Math.min(1100, Math.max(450, Math.abs(diff) * 0.6))
    let startTime: number | undefined
    let cancelled = false

    const cancel = () => {
      cancelled = true
    }
    const opts = { passive: true } as AddEventListenerOptions
    window.addEventListener('wheel', cancel, opts)
    window.addEventListener('touchstart', cancel, opts)
    window.addEventListener('keydown', cancel)

    const cleanup = () => {
      window.removeEventListener('wheel', cancel)
      window.removeEventListener('touchstart', cancel)
      window.removeEventListener('keydown', cancel)
    }

    const step = (now: number) => {
      if (cancelled) return cleanup()
      if (startTime === undefined) startTime = now
      const t = Math.min(1, (now - startTime) / duration)
      window.scrollTo(0, Math.round(startY + diff * easeInOutCubic(t)))
      if (t < 1) requestAnimationFrame(step)
      else cleanup()
    }
    requestAnimationFrame(step)
  }

  function scrollToHash(hash: string) {
    let el: Element | null
    try {
      el = document.querySelector(hash)
    }
    catch {
      return false
    }
    if (!el) return false
    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    animateTo(y)
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
      let target: Element | null
      try {
        target = document.querySelector(hash)
      }
      catch {
        return
      }
      if (!target) return
      e.preventDefault()
      scrollToHash(hash)
      history.replaceState(null, '', hash)
    },
    { capture: true },
  )

  // Initial load / refresh with a hash in the URL.
  nuxtApp.hook('app:mounted', () => {
    if (location.hash && location.hash.length > 1) {
      requestAnimationFrame(() =>
        setTimeout(() => scrollToHash(location.hash), 150),
      )
    }
  })
})
