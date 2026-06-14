<script setup lang="ts">
// Decorative animated "editor" card — a developer-meaningful hero visual.
// Lines fade in with a stagger; the card gently floats. aria-hidden: it's art.
const lines = [
  [{ t: 'const', c: 'text-blue-300' }, { t: ' matheus', c: 'text-sky-300' }, { t: ' = {', c: 'text-slate-500' }],
  [{ t: '  role', c: 'text-blue-300' }, { t: ': ', c: 'text-slate-500' }, { t: '"Tech Lead & Software Engineer"', c: 'text-sky-200' }, { t: ',', c: 'text-slate-500' }],
  [{ t: '  company', c: 'text-blue-300' }, { t: ': ', c: 'text-slate-500' }, { t: '"Dattos"', c: 'text-sky-200' }, { t: ',', c: 'text-slate-500' }],
  [{ t: '  stack', c: 'text-blue-300' }, { t: ': [', c: 'text-slate-500' }, { t: '".NET"', c: 'text-sky-200' }, { t: ', ', c: 'text-slate-500' }, { t: '"C#"', c: 'text-sky-200' }, { t: ', ', c: 'text-slate-500' }, { t: '"Vue"', c: 'text-sky-200' }, { t: ', ', c: 'text-slate-500' }, { t: '"Python"', c: 'text-sky-200' }, { t: '],', c: 'text-slate-500' }],
  [{ t: '  principles', c: 'text-blue-300' }, { t: ': [', c: 'text-slate-500' }, { t: '"SOLID"', c: 'text-sky-200' }, { t: ', ', c: 'text-slate-500' }, { t: '"DDD"', c: 'text-sky-200' }, { t: ', ', c: 'text-slate-500' }, { t: '"Clean Code"', c: 'text-sky-200' }, { t: '],', c: 'text-slate-500' }],
  [{ t: '  shipping', c: 'text-blue-300' }, { t: ': ', c: 'text-slate-500' }, { t: 'true', c: 'text-blue-300' }, { t: ',', c: 'text-slate-500' }],
  [{ t: '}', c: 'text-slate-500' }],
]
</script>

<template>
  <div
    class="relative"
    aria-hidden="true"
  >
    <!-- ambient glow -->
    <div class="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-500/30 via-blue-500/15 to-sky-400/30 blur-2xl" />

    <div class="float relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1020]/90 shadow-2xl shadow-blue-950/50 backdrop-blur">
      <!-- gradient top edge -->
      <div class="h-1 w-full bg-gradient-to-r from-blue-500 via-blue-500 to-sky-400" />

      <!-- window chrome -->
      <div class="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <span class="size-3 rounded-full bg-white/15" />
        <span class="size-3 rounded-full bg-white/15" />
        <span class="size-3 rounded-full bg-white/15" />
        <span class="ml-2 font-mono text-xs text-slate-400">matheus.ts</span>
      </div>

      <!-- code -->
      <pre class="overflow-x-auto p-5 font-mono text-sm leading-relaxed sm:text-[0.95rem]"><code><span
        v-for="(line, i) in lines"
        :key="i"
        class="code-line block"
        :style="{ animationDelay: `${300 + i * 220}ms` }"
      ><span
        v-for="(tok, j) in line"
        :key="j"
        :class="tok.c"
      >{{ tok.t }}</span></span><span class="hero-caret text-sky-300">▋</span></code></pre>
    </div>
  </div>
</template>
