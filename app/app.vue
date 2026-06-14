<script setup lang="ts">
const { t, locale } = useI18n()

// Drive <html lang> + SEO defaults from the active locale.
useHead({
  htmlAttrs: { lang: () => locale.value },
})

const ogImage = 'https://matgaspar.github.io/og-image.png'

useSeoMeta({
  title: () => t('meta.title'),
  description: () => t('meta.description'),
  ogTitle: () => t('meta.title'),
  ogDescription: () => t('meta.description'),
  ogType: 'website',
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: 'summary_large_image',
  twitterImage: ogImage,
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
