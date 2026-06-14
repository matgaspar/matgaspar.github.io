<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const { heroStats } = usePortfolioContent()

const anchor = (id: string) => `${localePath('/')}#${id}`.replace('//', '/')
</script>

<template>
  <section
    id="hero"
    class="relative isolate overflow-hidden text-white"
    :aria-label="t('hero.role')"
  >
    <HeroBackground />

    <UContainer
      class="relative z-10 grid min-h-[92vh] items-center gap-12 py-24 lg:grid-cols-[1.15fr_0.85fr]"
    >
      <div>
        <div
          v-reveal
          class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-blue-100 backdrop-blur"
        >
          <span class="relative flex size-2">
            <span class="absolute inline-flex size-full animate-ping rounded-full bg-sky-400 opacity-75" />
            <span class="relative inline-flex size-2 rounded-full bg-sky-400" />
          </span>
          {{ t('hero.badge') }}
        </div>

        <p
          v-reveal
          class="mb-2 text-lg text-blue-200/90"
        >
          {{ t('hero.greeting') }}
        </p>
        <h1
          v-reveal
          class="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span class="text-shine">{{ t('hero.name') }}</span>
        </h1>
        <p
          v-reveal
          class="mt-4 min-h-[1.4em] text-2xl font-medium text-blue-200 sm:text-3xl"
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
          class="mt-6 max-w-xl text-lg leading-relaxed text-slate-300"
        >
          {{ t('hero.tagline') }}
        </p>

        <p
          v-reveal
          class="mt-5 flex items-center gap-2 text-sm text-slate-400"
        >
          <UIcon
            name="i-lucide-map-pin"
            class="size-4"
          />
          {{ t('hero.location') }}
        </p>

        <div
          v-reveal
          class="mt-9 flex flex-wrap gap-4"
        >
          <UButton
            :to="anchor('contact')"
            size="lg"
            icon="i-lucide-send"
          >
            {{ t('hero.ctaPrimary') }}
          </UButton>
          <UButton
            :to="anchor('experience')"
            size="lg"
            color="neutral"
            variant="outline"
            class="text-white ring-white/30 hover:bg-white/10"
            trailing-icon="i-lucide-arrow-down"
          >
            {{ t('hero.ctaSecondary') }}
          </UButton>
        </div>

        <!-- Stats -->
        <dl
          v-reveal
          class="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8"
        >
          <div
            v-for="stat in heroStats"
            :key="stat.label"
          >
            <dt class="sr-only">
              {{ stat.label }}
            </dt>
            <dd class="font-display text-3xl font-bold text-white sm:text-4xl">
              <AnimatedNumber :value="stat.value" />
            </dd>
            <p class="mt-1 text-xs text-slate-400">
              {{ stat.label }}
            </p>
          </div>
        </dl>
      </div>

      <!-- Code showcase (replaces the avatar) -->
      <div
        v-reveal
        class="w-full"
      >
        <HeroShowcase />
      </div>
    </UContainer>

    <!-- Scroll cue -->
    <div
      class="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex justify-center text-white/40"
      aria-hidden="true"
    >
      <UIcon
        name="i-lucide-chevron-down"
        class="size-6 animate-bounce"
      />
    </div>
  </section>
</template>
