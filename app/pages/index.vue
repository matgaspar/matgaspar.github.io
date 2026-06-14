<script setup lang="ts">
const { t } = useI18n()

// Page-level SEO + structured data (schema.org Person via @nuxtjs/seo).
useSeoMeta({
  title: () => t('meta.title'),
  description: () => t('meta.description'),
})
</script>

<template>
  <div>
    <HeroSection />
    <TechMarquee />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <EducationSection />
    <ContactSection />
  </div>
</template>
