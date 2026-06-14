<script setup lang="ts">
// Counts a numeric value up when it scrolls into view. Non-numeric values
// (e.g. "∞") are shown verbatim. Respects prefers-reduced-motion and degrades
// gracefully without JS (shows the final value).
const props = defineProps<{ value: string }>()

const match = props.value.match(/^(\d+)(.*)$/)
const target = match ? Number(match[1]) : 0
const suffix = match ? match[2] : ''
const isNumeric = match !== null

const reduced = usePrefersReducedMotion()
const el = ref<HTMLElement>()
const current = ref(target) // start at final value → safe SSR/no-JS

onMounted(() => {
  if (!isNumeric || reduced.value || !el.value) return

  const observer = new IntersectionObserver((entries) => {
    if (!entries[0]?.isIntersecting) return
    observer.disconnect()

    const duration = 1300
    const start = performance.now()
    current.value = 0
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - (1 - p) ** 3
      current.value = Math.round(target * eased)
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, { threshold: 0.6 })

  observer.observe(el.value)
  onScopeDispose(() => observer.disconnect())
})
</script>

<template>
  <span ref="el">{{ isNumeric ? `${current}${suffix}` : value }}</span>
</template>
