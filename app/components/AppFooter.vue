<script setup lang="ts">
const { t } = useI18n()
const { socials } = usePortfolioContent()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-default/60 py-12">
    <UContainer class="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
      <div>
        <p class="font-display text-base font-bold">
          Matheus<span class="text-primary">.</span>
        </p>
        <p class="mt-1 text-sm text-muted">
          {{ t('footer.tagline') }}
        </p>
        <p class="mt-1 text-xs text-muted">
          &copy; {{ year }} Matheus Gaspar. {{ t('footer.rights') }}
        </p>
      </div>

      <div class="flex flex-col items-center gap-3 sm:items-end">
        <div class="flex items-center gap-1">
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
        <p class="flex items-center gap-1 text-xs text-muted">
          {{ t('footer.builtWith') }}
          <UIcon
            name="i-simple-icons-nuxtdotjs"
            class="text-primary"
          />
          Nuxt
        </p>
      </div>
    </UContainer>
  </footer>
</template>
