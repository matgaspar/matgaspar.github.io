<script setup lang="ts">
// Cinematic hero backdrop: a seamless Remotion-rendered loop (WebM + MP4),
// or a static poster when the user prefers reduced motion.
const reduced = usePrefersReducedMotion()
</script>

<template>
  <div class="absolute inset-0 -z-10 overflow-hidden bg-[#0b1020]">
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
    <!-- Fade the cinematic band into the page background below -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-default"
      aria-hidden="true"
    />
  </div>
</template>
