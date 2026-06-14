<script setup lang="ts">
// Cinematic hero backdrop: a seamless Remotion-rendered loop (WebM + MP4),
// or a static poster when the user prefers reduced motion. The band stays dark
// in BOTH light and dark mode, so the white hero text is always legible.
const reduced = usePrefersReducedMotion()
</script>

<template>
  <div class="absolute inset-0 z-0 overflow-hidden bg-[#0a0a14]">
    <video
      v-if="!reduced"
      class="size-full object-cover"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      poster="/hero-loop-poster.jpg"
      aria-hidden="true"
    >
      <source
        src="/hero-loop.webm"
        type="video/webm"
      >
      <source
        src="/hero-loop.mp4"
        type="video/mp4"
      >
    </video>
    <img
      v-else
      src="/hero-loop-poster.jpg"
      alt=""
      aria-hidden="true"
      class="size-full object-cover"
    >
    <!-- Fade to the fixed dark canvas (not the theme bg) for a clean seam -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a14]"
      aria-hidden="true"
    />
  </div>
</template>
