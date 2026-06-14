<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section
    id="hero"
    class="relative overflow-hidden text-white"
    :aria-label="t('hero.role')"
  >
    <HeroBackground />

    <UContainer
      class="grid min-h-[88vh] items-center gap-12 py-24 lg:grid-cols-[1fr_auto]"
    >
      <div>
        <div
          v-reveal
          class="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-violet-100 backdrop-blur"
        >
          <span class="relative flex size-2">
            <span class="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span class="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          {{ t('hero.badge') }}
        </div>
        <p
          v-reveal
          class="mb-3 text-lg text-violet-200/90"
        >
          {{ t('hero.greeting') }}
        </p>
        <h1
          v-reveal
          class="font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span class="text-shine">{{ t('hero.name') }}</span>
        </h1>
        <p
          v-reveal
          class="mt-3 min-h-[1.4em] text-2xl font-medium text-violet-200 sm:text-3xl"
          :aria-label="t('hero.role')"
        >
          <ClientOnly>
            <HeroRoles />
            <template #fallback>
              {{ t('hero.role') }}
            </template>
          </ClientOnly>
        </p>
        <p
          v-reveal
          class="mt-6 max-w-2xl text-lg text-slate-300"
        >
          {{ t('hero.tagline') }}
        </p>

        <div
          v-reveal
          class="mt-10 flex flex-wrap gap-4"
        >
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
            variant="outline"
            class="text-white ring-white/30 hover:bg-white/10"
            trailing-icon="i-lucide-arrow-down"
          >
            {{ t('hero.ctaSecondary') }}
          </UButton>
        </div>
      </div>

      <div
        v-reveal
        class="order-first justify-self-center lg:order-none"
      >
        <NuxtImg
          src="/avatar.png"
          :alt="t('hero.avatarAlt')"
          width="240"
          height="240"
          sizes="200px sm:240px"
          format="webp"
          quality="90"
          class="size-48 rounded-full ring-4 ring-white/15 shadow-2xl shadow-indigo-950/50 sm:size-60"
        />
      </div>
    </UContainer>

    <!-- Scroll cue -->
    <div
      class="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center text-white/50"
      aria-hidden="true"
    >
      <UIcon
        name="i-lucide-chevron-down"
        class="size-6 animate-bounce"
      />
    </div>
  </section>
</template>
