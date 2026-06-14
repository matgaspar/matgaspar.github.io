<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex min-h-screen flex-col bg-default text-default">
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-inverted"
    >
      {{ t('nav.skipToContent') }}
    </a>

    <AppHeader />

    <main
      id="main"
      class="flex-1"
    >
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
