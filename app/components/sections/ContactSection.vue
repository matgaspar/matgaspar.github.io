<script setup lang="ts">
const { t } = useI18n()
const { socials } = usePortfolioContent()

const email = 'matheus.oliveira@dattos.com.br'
</script>

<template>
  <section
    id="contact"
    class="py-20"
  >
    <UContainer class="max-w-3xl text-center">
      <h2 class="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {{ t('contact.title') }}
      </h2>
      <p class="mx-auto mt-3 max-w-xl text-lg text-muted">
        {{ t('contact.subtitle') }}
      </p>

      <div class="mt-8 flex justify-center">
        <UButton
          :to="`mailto:${email}`"
          size="lg"
          icon="i-lucide-mail"
        >
          {{ email }}
        </UButton>
      </div>

      <div class="mt-8 flex justify-center gap-3">
        <UButton
          v-for="social in socials"
          :key="social.url"
          :to="social.url"
          :icon="social.icon"
          :label="social.label"
          color="neutral"
          variant="subtle"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </UContainer>
  </section>
</template>
