<script setup lang="ts">
// Typewriter that cycles the hero roles. Client-only (rendered inside
// <ClientOnly>) to avoid hydration mismatch; SSR shows a static fallback.
const { tm, rt } = useI18n()

const words = computed(() =>
  (tm('hero.roles') as unknown[]).map(r => rt(r as string)),
)

const typed = ref('')
let timer: ReturnType<typeof setTimeout> | undefined
let wordIndex = 0
let charIndex = 0
let deleting = false

function step() {
  const list = words.value
  if (!list.length) return
  const word = list[wordIndex % list.length] ?? ''

  if (!deleting) {
    charIndex++
    typed.value = word.slice(0, charIndex)
    if (charIndex >= word.length) {
      deleting = true
      timer = setTimeout(step, 1700)
      return
    }
    timer = setTimeout(step, 75)
  }
  else {
    charIndex--
    typed.value = word.slice(0, charIndex)
    if (charIndex <= 0) {
      deleting = false
      wordIndex++
      timer = setTimeout(step, 350)
      return
    }
    timer = setTimeout(step, 40)
  }
}

onMounted(step)
onScopeDispose(() => clearTimeout(timer))
</script>

<template>
  <span>
    <span>{{ typed }}</span><span
      class="hero-caret"
      aria-hidden="true"
    >|</span>
  </span>
</template>
