<script setup lang="ts">
const { t } = useI18n()
const { skillGroups } = usePortfolioContent()
</script>

<template>
  <section
    id="skills"
    class="relative overflow-hidden border-y border-default/40 bg-elevated/30 py-24 sm:py-32"
  >
    <div class="glow right-0 top-1/4 size-96 bg-cyan-500/15" />

    <UContainer class="relative">
      <SectionHeading
        :title="t('skills.title')"
        :subtitle="t('skills.subtitle')"
      />

      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(group, index) in skillGroups"
          :key="group.name"
          v-reveal
          :style="{ transitionDelay: `${index * 70}ms` }"
          class="glass rounded-2xl border border-default/60 bg-default/50 p-6 hover:border-primary/50"
        >
          <h3 class="font-display text-lg font-semibold">
            {{ group.name }}
          </h3>
          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="item in group.items"
              :key="item"
              class="rounded-full border border-default/60 bg-default/40 px-3 py-1 text-sm text-muted transition-colors hover:border-primary/50 hover:text-highlighted"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
