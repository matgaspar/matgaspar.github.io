<script setup lang="ts">
defineProps<{ title: string, subtitle?: string }>()
</script>

<template>
  <div v-reveal>
    <div class="accent-bar mb-4" />
    <h2 class="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      class="mt-4 max-w-2xl text-lg text-muted"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
