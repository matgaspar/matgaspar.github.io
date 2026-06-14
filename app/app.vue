<script setup lang="ts">
const { t, locale } = useI18n()

// Drive <html lang> + SEO defaults from the active locale.
useHead({
  htmlAttrs: { lang: () => locale.value },
})

useSeoMeta({
  title: () => t('meta.title'),
  description: () => t('meta.description'),
  ogTitle: () => t('meta.title'),
  ogDescription: () => t('meta.description'),
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
