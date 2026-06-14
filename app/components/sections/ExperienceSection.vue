<script setup lang="ts">
const { t } = useI18n()
const { experience } = usePortfolioContent()
</script>

<template>
  <section
    id="experience"
    class="py-20"
  >
    <UContainer>
      <h2 class="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {{ t('experience.title') }}
      </h2>

      <ol
        class="mt-10 space-y-8 border-s border-default ps-6"
        role="list"
      >
        <li
          v-for="item in experience"
          :key="`${item.company}-${item.period}`"
          class="relative"
        >
          <span
            class="absolute -start-[1.6rem] top-1.5 size-3 rounded-full bg-primary ring-4 ring-default"
            aria-hidden="true"
          />
          <p class="text-sm font-medium text-muted">
            {{ item.period }}
          </p>
          <h3 class="mt-1 font-display text-xl font-semibold">
            {{ item.role }}
          </h3>
          <p class="text-primary">
            {{ item.company }}
          </p>
          <p class="mt-2 text-muted">
            {{ item.description }}
          </p>
        </li>
      </ol>
    </UContainer>
  </section>
</template>
