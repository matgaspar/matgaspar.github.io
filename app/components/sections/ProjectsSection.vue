<script setup lang="ts">
const { t } = useI18n()
const { projects } = usePortfolioContent()
</script>

<template>
  <section
    id="projects"
    class="relative overflow-hidden border-y border-default/40 bg-elevated/30 py-24 sm:py-32"
  >
    <div class="glow left-1/3 top-0 size-[28rem] bg-cyan-500/12" />

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
          class="glass group flex flex-col rounded-2xl border border-default/60 bg-default/50 p-6 hover:border-primary/50"
        >
          <div class="flex items-start justify-between gap-3">
            <h3 class="font-display text-lg font-semibold">
              {{ project.name }}
            </h3>
            <UIcon
              name="i-lucide-arrow-up-right"
              class="size-5 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
            />
          </div>

          <p class="mt-3 flex-1 text-muted">
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

          <ULink
            :to="project.url"
            target="_blank"
            rel="noopener noreferrer"
            class="absolute inset-0 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            :aria-label="`${t('projects.viewProject')}: ${project.name}`"
          />
        </article>
      </div>
    </UContainer>
  </section>
</template>
