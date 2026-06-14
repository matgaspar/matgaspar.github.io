<script setup lang="ts">
const { t } = useI18n()
const { experience } = usePortfolioContent()
</script>

<template>
  <section
    id="experience"
    class="relative overflow-hidden border-y border-default/40 bg-elevated/30 py-24 sm:py-32"
  >
    <div class="glow -right-32 bottom-10 size-96 bg-blue-600/15" />

    <UContainer class="relative">
      <SectionHeading
        :title="t('experience.title')"
        :subtitle="t('experience.subtitle')"
      />

      <ol
        class="relative mt-12 space-y-8 ps-8"
        role="list"
      >
        <!-- gradient timeline rail -->
        <span
          class="absolute inset-y-1 left-0 w-px bg-gradient-to-b from-blue-500 via-primary/40 to-transparent"
          aria-hidden="true"
        />
        <li
          v-for="(item, index) in experience"
          :key="`${item.company}-${item.period}`"
          v-reveal
          :style="{ transitionDelay: `${index * 90}ms` }"
          class="relative rounded-2xl p-5 transition-colors"
          :class="item.url
            ? 'border border-primary/30 bg-primary/5'
            : 'hover:bg-default/40'"
        >
          <span
            class="absolute -start-[2.35rem] top-6 size-3.5 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 ring-4 ring-default"
            :class="item.url ? 'shadow-[0_0_0_4px_rgba(59,130,246,0.25)]' : ''"
            aria-hidden="true"
          />

          <div class="flex flex-wrap items-center gap-2">
            <p class="text-sm font-medium text-primary">
              {{ item.period }}
            </p>
            <UBadge
              v-if="item.url"
              color="primary"
              variant="subtle"
              size="sm"
            >
              {{ t('experience.founderBadge') }}
            </UBadge>
          </div>

          <h3 class="mt-1 font-display text-xl font-semibold">
            {{ item.role }}
          </h3>
          <p class="text-muted">
            {{ item.company }}
          </p>
          <p class="mt-2 max-w-2xl text-muted">
            {{ item.description }}
          </p>

          <ULink
            v-if="item.url"
            :to="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80"
          >
            <UIcon
              name="i-lucide-globe"
              class="size-4"
            />
            {{ t('experience.visitSite') }}
            <UIcon
              name="i-lucide-arrow-up-right"
              class="size-4"
            />
          </ULink>
        </li>
      </ol>
    </UContainer>
  </section>
</template>
