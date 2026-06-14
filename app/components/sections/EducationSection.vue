<script setup lang="ts">
const { t } = useI18n()
const { education, certifications } = usePortfolioContent()
</script>

<template>
  <section
    id="education"
    class="relative overflow-hidden border-y border-default/40 bg-elevated/30 py-24 sm:py-32"
  >
    <div class="glow left-1/4 bottom-0 size-96 bg-violet-600/15" />

    <UContainer class="relative">
      <SectionHeading
        :title="t('education.title')"
        :subtitle="t('education.subtitle')"
      />

      <div class="mt-12 grid gap-6 lg:grid-cols-2">
        <!-- Degrees -->
        <ul
          class="space-y-4"
          role="list"
        >
          <li
            v-for="(degree, index) in education"
            :key="degree.course"
            v-reveal
            :style="{ transitionDelay: `${index * 80}ms` }"
            class="glass flex gap-4 rounded-2xl border border-default/60 bg-default/50 p-5 hover:border-primary/50"
          >
            <div class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-primary ring-1 ring-primary/20">
              <UIcon
                name="i-lucide-graduation-cap"
                class="size-5"
              />
            </div>
            <div>
              <h3 class="font-display font-semibold leading-snug">
                {{ degree.course }}
              </h3>
              <p class="text-sm text-muted">
                {{ degree.school }}
              </p>
              <p class="mt-1 text-xs font-medium text-primary">
                {{ degree.period }}
              </p>
            </div>
          </li>
        </ul>

        <!-- Certifications -->
        <div
          v-reveal
          class="glass rounded-2xl border border-default/60 bg-default/50 p-6"
        >
          <h3 class="flex items-center gap-2 font-display font-semibold">
            <UIcon
              name="i-lucide-award"
              class="size-5 text-primary"
            />
            {{ t('education.certificationsTitle') }}
          </h3>
          <ul
            class="mt-4 space-y-3"
            role="list"
          >
            <li
              v-for="cert in certifications"
              :key="cert"
              class="flex gap-3 text-muted"
            >
              <UIcon
                name="i-lucide-check-circle-2"
                class="mt-0.5 size-4 shrink-0 text-cyan-400"
              />
              <span>{{ cert }}</span>
            </li>
          </ul>
        </div>
      </div>
    </UContainer>
  </section>
</template>
