<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const sections = ['about', 'skills', 'experience', 'education', 'contact'] as const

const links = computed(() =>
  sections.map(id => ({
    id,
    label: t(`nav.${id}`),
    to: `${localePath('/')}#${id}`.replace('//', '/'),
  })),
)

const isOpen = ref(false)
const activeId = ref('')

onMounted(() => {
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
  onScopeDispose(() => observer.disconnect())
})
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-default/60 bg-default/70 backdrop-blur-xl"
  >
    <UContainer class="flex h-16 items-center justify-between gap-4">
      <NuxtLink
        :to="localePath('/')"
        class="font-display text-lg font-bold tracking-tight"
      >
        Matheus<span class="ml-0.5 inline-block size-2 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 align-baseline" />
      </NuxtLink>

      <nav
        class="hidden items-center gap-1 md:flex"
        :aria-label="t('nav.menu')"
      >
        <UButton
          v-for="link in links"
          :key="link.id"
          :to="link.to"
          color="neutral"
          variant="ghost"
          size="sm"
          :class="activeId === link.id ? 'text-primary' : 'text-muted'"
          :aria-current="activeId === link.id ? 'true' : undefined"
        >
          {{ link.label }}
        </UButton>
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
          <UButton
            v-for="link in links"
            :key="link.id"
            :to="link.to"
            color="neutral"
            variant="ghost"
            block
            class="justify-start"
            :class="activeId === link.id ? 'text-primary' : ''"
            @click="isOpen = false"
          >
            {{ link.label }}
          </UButton>
        </UContainer>
      </nav>
    </Transition>
  </header>
</template>
