<script setup lang="ts">
defineProps<{ title: string, subtitle?: string }>()
</script>

<template>
  <div v-reveal>
    <div class="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
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
