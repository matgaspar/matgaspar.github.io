// One-off generator for static brand assets (favicons, manifest icons, OG image,
// avatar). Run with `pnpm assets:generate`. Outputs go to `public/`.
// Uses sharp to rasterize inline SVGs — keeps the brand defined as code.
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const out = p => resolve(root, 'public', p)

// Aurora palette
const V1 = '#8b5cf6' // violet
const V2 = '#6366f1' // indigo
const C1 = '#22d3ee' // cyan
const BG0 = '#08070f'
const BG1 = '#140d2e'
const FONT = 'Liberation Sans, DejaVu Sans, sans-serif'

// Rounded-square monogram used for favicons and PWA icons.
const monogram = size => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${V1}"/>
      <stop offset="0.55" stop-color="${V2}"/>
      <stop offset="1" stop-color="${C1}"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="116" fill="url(#g)"/>
  <text x="50%" y="52%" font-family="${FONT}" font-size="244" font-weight="700"
        fill="#ffffff" text-anchor="middle" dominant-baseline="central">MG</text>
</svg>`

// Circular avatar (placeholder until a real photo is provided).
const avatar = `
<svg xmlns="http://www.w3.org/2000/svg" width="480" height="480" viewBox="0 0 480 480">
  <defs>
    <linearGradient id="a" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${V1}"/>
      <stop offset="0.5" stop-color="${V2}"/>
      <stop offset="1" stop-color="${C1}"/>
    </linearGradient>
  </defs>
  <circle cx="240" cy="240" r="240" fill="url(#a)"/>
  <text x="50%" y="53%" font-family="${FONT}" font-size="220" font-weight="700"
        fill="#ffffff" text-anchor="middle" dominant-baseline="central">MG</text>
</svg>`

// Social share card (Open Graph / Twitter), 1200x630.
const ogImage = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${BG1}"/>
      <stop offset="1" stop-color="${BG0}"/>
    </linearGradient>
    <linearGradient id="badge" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${V1}"/>
      <stop offset="0.55" stop-color="${V2}"/>
      <stop offset="1" stop-color="${C1}"/>
    </linearGradient>
    <linearGradient id="name" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#c4b5fd"/>
    </linearGradient>
    <radialGradient id="glowV" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="${V1}" stop-opacity="0.55"/>
      <stop offset="1" stop-color="${V1}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowC" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="${C1}" stop-opacity="0.4"/>
      <stop offset="1" stop-color="${C1}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1050" cy="120" r="360" fill="url(#glowV)"/>
  <circle cx="180" cy="560" r="320" fill="url(#glowC)"/>
  <rect x="80" y="150" width="132" height="132" rx="34" fill="url(#badge)"/>
  <text x="146" y="220" font-family="${FONT}" font-size="72" font-weight="700"
        fill="#ffffff" text-anchor="middle" dominant-baseline="central">MG</text>
  <text x="80" y="362" font-family="${FONT}" font-size="86" font-weight="700" fill="url(#name)">Matheus Gaspar</text>
  <text x="80" y="432" font-family="${FONT}" font-size="40" font-weight="400" fill="#a5b4fc">Engenheiro de Software · Software Engineer</text>
  <text x="80" y="560" font-family="${FONT}" font-size="29" font-weight="400" fill="#7c83a3">matgaspar.github.io</text>
</svg>`

const jobs = [
  { svg: monogram(512), size: 512, file: 'icon-512.png' },
  { svg: monogram(192), size: 192, file: 'icon-192.png' },
  { svg: monogram(180), size: 180, file: 'apple-touch-icon.png' },
  { svg: monogram(32), size: 32, file: 'favicon-32x32.png' },
  { svg: monogram(16), size: 16, file: 'favicon-16x16.png' },
  { svg: avatar, size: 480, file: 'avatar.png' },
]

mkdirSync(resolve(root, 'public'), { recursive: true })

for (const { svg, size, file } of jobs) {
  await sharp(Buffer.from(svg)).resize(size, size).png().toFile(out(file))
  console.log(`✓ ${file} (${size}x${size})`)
}

await sharp(Buffer.from(ogImage)).png().toFile(out('og-image.png'))
console.log('✓ og-image.png (1200x630)')
writeFileSync(out('favicon.svg'), monogram(64).trim() + '\n')
console.log('✓ favicon.svg')
