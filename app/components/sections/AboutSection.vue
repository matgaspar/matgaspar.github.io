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
    class="relative overflow-hidden py-24 sm:py-32"
  >
    <div class="glow -left-32 top-10 size-96 bg-blue-600/20" />

    <UContainer class="relative">
      <SectionHeading :title="t('about.title')" />

      <div class="mt-10 grid gap-10 lg:grid-cols-3">
        <div class="space-y-5 text-lg leading-relaxed text-muted lg:col-span-2">
          <p
            v-for="(paragraph, index) in paragraphs"
            :key="index"
            v-reveal
            :style="{ transitionDelay: `${index * 90}ms` }"
          >
            {{ paragraph }}
          </p>
        </div>

        <ul
          class="grid grid-cols-2 gap-4 lg:grid-cols-1"
          role="list"
        >
          <li
            v-for="(highlight, index) in highlights"
            :key="highlight.label"
            v-reveal
            :style="{ transitionDelay: `${index * 90}ms` }"
            class="glass rounded-2xl border border-default/60 bg-default/50 p-5 hover:border-primary/50"
          >
            <p class="font-display text-4xl font-bold">
              <span class="aurora-text"><AnimatedNumber :value="highlight.value" /></span>
            </p>
            <p class="mt-1 text-sm text-muted">
              {{ highlight.label }}
            </p>
          </li>
        </ul>
      </div>
    </UContainer>
  </section>
</template>
