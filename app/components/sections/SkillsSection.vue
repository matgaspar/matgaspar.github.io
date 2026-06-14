<script setup lang="ts">
const { t } = useI18n()
const { skillGroups } = usePortfolioContent()
</script>

<template>
  <section
    id="skills"
    class="bg-elevated/50 py-20"
  >
    <UContainer>
      <h2 class="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {{ t('skills.title') }}
      </h2>
      <p class="mt-3 max-w-2xl text-lg text-muted">
        {{ t('skills.subtitle') }}
      </p>

      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <UCard
          v-for="group in skillGroups"
          :key="group.name"
        >
          <h3 class="font-display text-lg font-semibold">
            {{ group.name }}
          </h3>
          <div class="mt-4 flex flex-wrap gap-2">
            <UBadge
              v-for="item in group.items"
              :key="item"
              color="primary"
              variant="subtle"
            >
              {{ item }}
            </UBadge>
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
