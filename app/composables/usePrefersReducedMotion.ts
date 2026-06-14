/**
 * Reactive `prefers-reduced-motion` flag. Defaults to `false` on the server so
 * motion renders by default, then syncs to the user's OS setting on the client.
 */
export function usePrefersReducedMotion() {
  const reduced = ref(false)

  onMounted(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    reduced.value = mq.matches
    const onChange = (e: MediaQueryListEvent) => {
      reduced.value = e.matches
    }
    mq.addEventListener('change', onChange)
    onScopeDispose(() => mq.removeEventListener('change', onChange))
  })

  return reduced
}
