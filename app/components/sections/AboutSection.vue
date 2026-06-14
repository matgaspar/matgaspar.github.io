<script setup lang="ts">
const { t, tm, rt } = useI18n()
const { highlights } = usePortfolioContent()

const paragraphs = computed(() =>
  (tm('about.paragraphs') as string[]).map(p => rt(p)),
)
</script>

<template>
  <section
    id="about"
    class="py-20"
  >
    <UContainer>
      <h2 class="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {{ t('about.title') }}
      </h2>

      <div class="mt-8 grid gap-10 lg:grid-cols-3">
        <div class="space-y-4 text-lg text-muted lg:col-span-2">
          <p
            v-for="(paragraph, index) in paragraphs"
            :key="index"
          >
            {{ paragraph }}
          </p>
        </div>

        <ul
          class="grid grid-cols-2 gap-4 lg:grid-cols-1"
          role="list"
        >
          <li
            v-for="highlight in highlights"
            :key="highlight.label"
          >
            <UCard>
              <p class="font-display text-3xl font-bold text-primary">
                {{ highlight.value }}
              </p>
              <p class="mt-1 text-sm text-muted">
                {{ highlight.label }}
              </p>
            </UCard>
          </li>
        </ul>
      </div>
    </UContainer>
  </section>
</template>
