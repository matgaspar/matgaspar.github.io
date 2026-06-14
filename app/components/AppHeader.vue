<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact'] as const

// Plain in-page hash anchors → the browser handles the smooth scroll natively
// (scroll-behavior + scroll-padding-top), with no router race.
const links = computed(() =>
  sections.map(id => ({
    id,
    label: t(`nav.${id}`),
    href: `#${id}`,
  })),
)

const isOpen = ref(false)
const activeId = ref('')

function setActive(id: string) {
  activeId.value = id
}

onMounted(() => {
  // Initialize from the URL hash (e.g. opening /#projects directly).
  if (route.hash) activeId.value = route.hash.slice(1)

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) activeId.value = entry.target.id
      }
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
  )
  for (const id of sections) {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  }

  const onHash = () => {
    if (location.hash) activeId.value = location.hash.slice(1)
  }
  window.addEventListener('hashchange', onHash)

  onScopeDispose(() => {
    observer.disconnect()
    window.removeEventListener('hashchange', onHash)
  })
})
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-default/60 bg-default/70 backdrop-blur-xl"
  >
    <UContainer class="flex h-16 items-center justify-between gap-4">
      <NuxtLink
        :to="localePath('/')"
        class="font-display text-lg font-bold tracking-tight"
        @click="setActive('')"
      >
        Matheus<span class="ml-0.5 inline-block size-2 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 align-baseline" />
      </NuxtLink>

      <nav
        class="hidden items-center gap-1 md:flex"
        :aria-label="t('nav.menu')"
      >
        <a
          v-for="link in links"
          :key="link.id"
          :href="link.href"
          class="relative inline-flex items-center rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors"
          :class="activeId === link.id ? 'text-primary' : 'text-muted hover:text-highlighted'"
          :aria-current="activeId === link.id ? 'true' : undefined"
          @click="setActive(link.id)"
        >
          {{ link.label }}
          <span
            class="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 transition-all duration-300"
            :class="activeId === link.id ? 'opacity-100' : 'opacity-0'"
          />
        </a>
      </nav>

      <div class="flex items-center gap-1">
        <LocaleSwitcher />
        <ColorModeToggle />
        <UButton
          class="md:hidden"
          :icon="isOpen ? 'i-lucide-x' : 'i-lucide-menu'"
          color="neutral"
          variant="ghost"
          :aria-label="t('nav.menu')"
          :aria-expanded="isOpen"
          @click="isOpen = !isOpen"
        />
      </div>
    </UContainer>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-if="isOpen"
        class="border-t border-default/60 md:hidden"
        :aria-label="t('nav.menu')"
      >
        <UContainer class="flex flex-col py-2">
          <a
            v-for="link in links"
            :key="link.id"
            :href="link.href"
            class="rounded-md px-3 py-2.5 text-sm font-medium transition-colors"
            :class="activeId === link.id ? 'text-primary' : 'text-muted hover:text-highlighted'"
            @click="setActive(link.id); isOpen = false"
          >
            {{ link.label }}
          </a>
        </UContainer>
      </nav>
    </Transition>
  </header>
</template>
