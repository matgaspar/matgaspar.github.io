<script setup lang="ts">
const { t } = useI18n()
const { projects } = usePortfolioContent()
</script>

<template>
  <section
    id="projects"
    class="relative overflow-hidden py-24 sm:py-32"
  >
    <div class="glow right-0 top-1/3 size-96 bg-sky-500/12" />

    <UContainer class="relative">
      <SectionHeading
        :title="t('projects.title')"
        :subtitle="t('projects.subtitle')"
      />

      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(project, index) in projects"
          :key="project.name"
          v-reveal
          :style="{ transitionDelay: `${index * 70}ms` }"
          class="glass flex flex-col rounded-2xl border border-default/60 bg-default/50 p-6 hover:border-primary/50"
        >
          <div class="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-sky-400/20 text-primary ring-1 ring-primary/20">
            <UIcon
              name="i-lucide-sparkles"
              class="size-5"
            />
          </div>

          <h3 class="mt-4 font-display text-lg font-semibold">
            {{ project.name }}
          </h3>
          <p class="mt-2 flex-1 text-sm leading-relaxed text-muted">
            {{ project.description }}
          </p>

          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="rounded-full border border-default/60 px-2.5 py-0.5 text-xs font-medium text-muted"
            >
              {{ tag }}
            </span>
          </div>
        </article>
      </div>
    </UContainer>
  </section>
</template>
