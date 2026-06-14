<script setup lang="ts">
// Reliable locale switch via setLocale() (handles routing + cookie under the
// prefix_except_default strategy). Rendered as a premium segmented control.
const { locale, locales, setLocale, t } = useI18n()

const available = computed(() =>
  locales.value as { code: 'pt-BR' | 'en', name: string }[],
)

const short: Record<string, string> = { 'pt-BR': 'PT', 'en': 'EN' }
</script>

<template>
  <div
    role="group"
    :aria-label="t('locale.switch')"
    class="flex items-center gap-0.5 rounded-full border border-default/60 bg-elevated/50 p-0.5 text-xs font-semibold backdrop-blur"
  >
    <button
      v-for="l in available"
      :key="l.code"
      type="button"
      :aria-pressed="l.code === locale"
      :title="l.name"
      class="cursor-pointer rounded-full px-2.5 py-1 transition-colors duration-200"
      :class="l.code === locale
        ? 'bg-primary text-inverted shadow-sm'
        : 'text-muted hover:text-highlighted'"
      @click="setLocale(l.code)"
    >
      {{ short[l.code] ?? l.code }}
    </button>
  </div>
</template>
