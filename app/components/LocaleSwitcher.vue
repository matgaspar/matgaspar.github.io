<script setup lang="ts">
const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const items = computed(() =>
  (locales.value as { code: 'pt-BR' | 'en', name: string }[]).map(l => ({
    label: l.name,
    to: switchLocalePath(l.code),
    active: l.code === locale.value,
  })),
)
</script>

<template>
  <UDropdownMenu :items="items">
    <UButton
      icon="i-lucide-languages"
      color="neutral"
      variant="ghost"
      :aria-label="t('locale.switch')"
    />
  </UDropdownMenu>
</template>
