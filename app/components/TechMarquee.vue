<script setup lang="ts">
// Infinite, always-on marquee of the tech stack — adds constant, premium motion.
const tech = [
  '.NET', 'C#', '.NET Core', 'Vue.js', 'Python', 'SQL Server', 'PostgreSQL',
  'Databricks', 'PySpark', 'DuckDB', 'AWS', 'CI/CD', 'SOLID', 'DDD', 'Clean Code', 'Scrum',
]
// Duplicated so the -50% translate loops seamlessly.
const loop = [...tech, ...tech]
</script>

<template>
  <div
    class="relative overflow-hidden border-y border-default/40 bg-elevated/30 py-5"
    aria-hidden="true"
  >
    <!-- edge fades -->
    <div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-default to-transparent" />
    <div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-default to-transparent" />

    <div class="marquee items-center gap-10">
      <span
        v-for="(item, i) in loop"
        :key="i"
        class="flex items-center gap-10 whitespace-nowrap font-display text-lg font-semibold text-muted"
      >
        {{ item }}
        <span class="size-1.5 rounded-full bg-gradient-to-r from-blue-500 to-sky-400" />
      </span>
    </div>
  </div>
</template>
