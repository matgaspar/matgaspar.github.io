<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section
    id="hero"
    class="relative overflow-hidden"
    :aria-label="t('hero.role')"
  >
    <!-- Decorative gradient backdrop -->
    <div
      class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 to-transparent"
      aria-hidden="true"
    />

    <UContainer class="flex min-h-[80vh] flex-col justify-center py-20">
      <p class="mb-3 text-lg text-muted">
        {{ t('hero.greeting') }}
      </p>
      <h1
        class="font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
      >
        {{ t('hero.name') }}
      </h1>
      <p class="mt-2 text-2xl font-medium text-primary sm:text-3xl">
        {{ t('hero.role') }}
      </p>
      <p class="mt-6 max-w-2xl text-lg text-muted">
        {{ t('hero.tagline') }}
      </p>

      <div class="mt-10 flex flex-wrap gap-4">
        <UButton
          :to="`${localePath('/')}#contact`.replace('//', '/')"
          size="lg"
          icon="i-lucide-send"
        >
          {{ t('hero.ctaPrimary') }}
        </UButton>
        <UButton
          :to="`${localePath('/')}#projects`.replace('//', '/')"
          size="lg"
          color="neutral"
          variant="subtle"
          trailing-icon="i-lucide-arrow-down"
        >
          {{ t('hero.ctaSecondary') }}
        </UButton>
      </div>
    </UContainer>
  </section>
</template>
