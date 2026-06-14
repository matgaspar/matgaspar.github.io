<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const { t } = useI18n()
const localePath = useLocalePath()

const is404 = computed(() => props.error?.statusCode === 404)

useSeoMeta({
  title: () => (is404.value ? t('error.404title') : t('error.genericTitle')),
})
</script>

<template>
  <UApp>
    <main class="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <p class="font-display text-7xl font-bold text-primary">
        {{ error.statusCode }}
      </p>
      <h1 class="text-2xl font-semibold">
        {{ is404 ? t('error.404title') : t('error.genericTitle') }}
      </h1>
      <p class="max-w-md text-muted">
        {{ is404 ? t('error.404message') : error.message }}
      </p>
      <UButton
        :to="localePath('/')"
        icon="i-lucide-arrow-left"
        size="lg"
        @click="clearError({ redirect: localePath('/') })"
      >
        {{ t('error.backHome') }}
      </UButton>
    </main>
  </UApp>
</template>
