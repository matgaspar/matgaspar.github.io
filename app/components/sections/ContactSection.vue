<script setup lang="ts">
const { t } = useI18n()
const { socials } = usePortfolioContent()

const email = 'matheus@web7online.com'
</script>

<template>
  <section
    id="contact"
    class="relative overflow-hidden py-24 sm:py-32"
  >
    <UContainer class="relative">
      <div
        v-reveal
        class="relative overflow-hidden rounded-3xl border border-default/60 bg-elevated/40 px-6 py-16 text-center backdrop-blur sm:px-12"
      >
        <!-- aurora wash -->
        <div
          class="pointer-events-none absolute inset-0 -z-10 opacity-60"
          style="background: radial-gradient(60% 80% at 50% 0%, rgba(139,92,246,0.25), transparent 70%), radial-gradient(50% 60% at 80% 100%, rgba(34,211,238,0.18), transparent 70%);"
          aria-hidden="true"
        />

        <div class="mx-auto mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
        <h2 class="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {{ t('contact.title') }}
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-lg text-muted">
          {{ t('contact.subtitle') }}
        </p>

        <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <UButton
            :to="`mailto:${email}`"
            size="lg"
            icon="i-lucide-mail"
          >
            {{ email }}
          </UButton>
          <div class="flex items-center gap-2">
            <UButton
              v-for="social in socials"
              :key="social.url"
              :to="social.url"
              :icon="social.icon"
              :aria-label="social.label"
              color="neutral"
              variant="ghost"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
