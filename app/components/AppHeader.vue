<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const sections = ['about', 'skills', 'experience', 'projects', 'contact'] as const

const links = computed(() =>
  sections.map(id => ({
    label: t(`nav.${id}`),
    to: `${localePath('/')}#${id}`.replace('//', '/'),
  })),
)

const isOpen = ref(false)
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-default bg-default/80 backdrop-blur-md"
  >
    <UContainer class="flex h-16 items-center justify-between gap-4">
      <NuxtLink
        :to="localePath('/')"
        class="font-display text-lg font-bold tracking-tight"
      >
        Matheus<span class="text-primary">.</span>
      </NuxtLink>

      <nav
        class="hidden items-center gap-1 md:flex"
        :aria-label="t('nav.menu')"
      >
        <UButton
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          color="neutral"
          variant="ghost"
          size="sm"
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
        class="border-t border-default md:hidden"
        :aria-label="t('nav.menu')"
      >
        <UContainer class="flex flex-col py-2">
          <UButton
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            color="neutral"
            variant="ghost"
            block
            class="justify-start"
            @click="isOpen = false"
          >
            {{ link.label }}
          </UButton>
        </UContainer>
      </nav>
    </Transition>
  </header>
</template>
