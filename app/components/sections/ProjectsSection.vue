<script setup lang="ts">
const { t } = useI18n()
const { projects } = usePortfolioContent()
</script>

<template>
  <section
    id="projects"
    class="bg-elevated/50 py-20"
  >
    <UContainer>
      <h2
        v-reveal
        class="font-display text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {{ t('projects.title') }}
      </h2>
      <p
        v-reveal
        class="mt-3 max-w-2xl text-lg text-muted"
      >
        {{ t('projects.subtitle') }}
      </p>

      <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <UCard
          v-for="(project, index) in projects"
          :key="project.name"
          v-reveal
          :style="{ transitionDelay: `${index * 70}ms` }"
          class="flex flex-col transition duration-300 hover:-translate-y-1 hover:ring-primary/40"
        >
          <template #header>
            <h3 class="font-display text-lg font-semibold">
              {{ project.name }}
            </h3>
          </template>

          <p class="text-muted">
            {{ project.description }}
          </p>

          <div class="mt-4 flex flex-wrap gap-2">
            <UBadge
              v-for="tag in project.tags"
              :key="tag"
              color="neutral"
              variant="subtle"
            >
              {{ tag }}
            </UBadge>
          </div>

          <template #footer>
            <UButton
              :to="project.url"
              target="_blank"
              rel="noopener noreferrer"
              color="neutral"
              variant="link"
              class="px-0"
              trailing-icon="i-lucide-arrow-up-right"
            >
              {{ t('projects.viewProject') }}
            </UButton>
          </template>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
