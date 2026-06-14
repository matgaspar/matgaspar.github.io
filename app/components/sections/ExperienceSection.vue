<script setup lang="ts">
const { t } = useI18n()
const { experience } = usePortfolioContent()
</script>

<template>
  <section
    id="experience"
    class="relative overflow-hidden py-24 sm:py-32"
  >
    <div class="glow -right-32 bottom-10 size-96 bg-violet-600/15" />

    <UContainer class="relative">
      <SectionHeading :title="t('experience.title')" />

      <ol
        class="relative mt-12 space-y-10 ps-8"
        role="list"
      >
        <!-- gradient timeline rail -->
        <span
          class="absolute inset-y-1 left-0 w-px bg-gradient-to-b from-violet-500 via-primary/40 to-transparent"
          aria-hidden="true"
        />
        <li
          v-for="(item, index) in experience"
          :key="`${item.company}-${item.period}`"
          v-reveal
          :style="{ transitionDelay: `${index * 90}ms` }"
          class="relative"
        >
          <span
            class="absolute -start-[2.1rem] top-1.5 size-3.5 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 ring-4 ring-default"
            aria-hidden="true"
          />
          <p class="text-sm font-medium text-primary">
            {{ item.period }}
          </p>
          <h3 class="mt-1 font-display text-xl font-semibold">
            {{ item.role }}
          </h3>
          <p class="text-muted">
            {{ item.company }}
          </p>
          <p class="mt-2 max-w-2xl text-muted">
            {{ item.description }}
          </p>
        </li>
      </ol>
    </UContainer>
  </section>
</template>
