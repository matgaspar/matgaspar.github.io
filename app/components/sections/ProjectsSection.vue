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
          class="glass group flex flex-col rounded-2xl border border-default/60 bg-default/50 p-6 hover:border-primary/50"
        >
          <div class="flex items-center justify-between gap-3">
            <div class="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-sky-400/20 text-primary ring-1 ring-primary/20">
              <UIcon
                name="i-simple-icons-github"
                class="size-5"
              />
            </div>
            <UIcon
              name="i-lucide-arrow-up-right"
              class="size-5 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
            />
          </div>

          <h3 class="mt-4 font-display text-lg font-semibold">
            {{ project.name }}
          </h3>
          <p class="mt-2 flex-1 text-sm text-muted">
            {{ project.description }}
          </p>

          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="rounded-full border border-default/60 px-2.5 py-0.5 text-xs font-medium text-muted"
            >
              {{ tag }}
            </span>
          </div>

          <div class="mt-5 flex items-center gap-3 border-t border-default/40 pt-4 text-sm">
            <ULink
              :to="project.repo"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 font-medium text-muted hover:text-primary"
            >
              <UIcon
                name="i-lucide-code-xml"
                class="size-4"
              />
              {{ t('projects.code') }}
            </ULink>
            <ULink
              v-if="project.demo"
              :to="project.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 font-medium text-primary hover:text-primary/80"
            >
              <UIcon
                name="i-lucide-external-link"
                class="size-4"
              />
              {{ t('projects.demo') }}
            </ULink>
          </div>
        </article>
      </div>

      <div
        v-reveal
        class="mt-10 flex justify-center"
      >
        <UButton
          to="https://github.com/matgaspar"
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          color="neutral"
          variant="outline"
          icon="i-simple-icons-github"
        >
          {{ t('projects.viewAll') }}
        </UButton>
      </div>
    </UContainer>
  </section>
</template>
