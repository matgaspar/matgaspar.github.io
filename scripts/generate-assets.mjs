// One-off generator for static brand assets (favicons, manifest icons, OG image,
// avatar). Run with `pnpm assets:generate`. Outputs go to `public/`.
// Uses sharp to rasterize inline SVGs — keeps the brand defined as code.
import { mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const out = p => resolve(root, 'public', p)

const INDIGO = '#4f46e5'
const INDIGO_DARK = '#312e81'
const FONT = 'Liberation Sans, DejaVu Sans, sans-serif'

// Rounded-square monogram used for favicons and PWA icons.
const monogram = size => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${INDIGO}"/>
      <stop offset="1" stop-color="${INDIGO_DARK}"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="url(#g)"/>
  <text x="50%" y="52%" font-family="${FONT}" font-size="248" font-weight="700"
        fill="#ffffff" text-anchor="middle" dominant-baseline="central">MG</text>
</svg>`

// Circular avatar (placeholder until a real photo is provided).
const avatar = `
<svg xmlns="http://www.w3.org/2000/svg" width="480" height="480" viewBox="0 0 480 480">
  <defs>
    <linearGradient id="a" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#6366f1"/>
      <stop offset="1" stop-color="${INDIGO_DARK}"/>
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
      <stop offset="0" stop-color="#1e1b4b"/>
      <stop offset="1" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="badge" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${INDIGO}"/>
      <stop offset="1" stop-color="${INDIGO_DARK}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1080" cy="90" r="320" fill="${INDIGO}" opacity="0.12"/>
  <rect x="80" y="150" width="140" height="140" rx="34" fill="url(#badge)"/>
  <text x="150" y="220" font-family="${FONT}" font-size="76" font-weight="700"
        fill="#ffffff" text-anchor="middle" dominant-baseline="central">MG</text>
  <text x="80" y="360" font-family="${FONT}" font-size="84" font-weight="700" fill="#ffffff">Matheus Gaspar</text>
  <text x="80" y="430" font-family="${FONT}" font-size="40" font-weight="400" fill="#a5b4fc">Engenheiro de Software · Software Engineer</text>
  <text x="80" y="560" font-family="${FONT}" font-size="30" font-weight="400" fill="#64748b">matgaspar.github.io</text>
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
