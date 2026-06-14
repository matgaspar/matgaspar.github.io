<script setup lang="ts">
const { t } = useI18n()
const { socials } = usePortfolioContent()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-default py-8">
    <UContainer
      class="flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row"
    >
      <p>&copy; {{ year }} Matheus Gaspar. {{ t('footer.rights') }}</p>

      <div class="flex items-center gap-2">
        <UButton
          v-for="social in socials"
          :key="social.url"
          :to="social.url"
          :icon="social.icon"
          :aria-label="social.label"
          color="neutral"
          variant="ghost"
          size="sm"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>

      <p class="flex items-center gap-1">
        {{ t('footer.builtWith') }}
        <UIcon
          name="i-simple-icons-nuxtdotjs"
          class="text-primary"
        />
      </p>
    </UContainer>
  </footer>
</template>
