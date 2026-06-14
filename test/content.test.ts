import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

/**
 * Guardrail: the two locale files must stay structurally in sync so that no
 * UI string is missing in either language. We read the raw JSON (bypassing the
 * i18n compiler) and compare the set of leaf paths.
 */
function load(name: string): Record<string, unknown> {
  const path = resolve(process.cwd(), 'i18n/locales', name)
  return JSON.parse(readFileSync(path, 'utf-8'))
}

const ptBR = load('pt-BR.json')
const en = load('en.json')

function leafPaths(obj: unknown, prefix = ''): string[] {
  if (Array.isArray(obj)) {
    return obj.flatMap((item, i) => leafPaths(item, `${prefix}[${i}]`))
  }
  if (obj && typeof obj === 'object') {
    return Object.entries(obj).flatMap(([key, value]) =>
      leafPaths(value, prefix ? `${prefix}.${key}` : key),
    )
  }
  return [prefix]
}

describe('i18n locales', () => {
  it('pt-BR and en expose the same keys', () => {
    expect(leafPaths(en)).toEqual(leafPaths(ptBR))
  })

  it('have a non-empty meta title in both languages', () => {
    const ptMeta = ptBR.meta as { title: string }
    const enMeta = en.meta as { title: string }
    expect(ptMeta.title.length).toBeGreaterThan(0)
    expect(enMeta.title.length).toBeGreaterThan(0)
  })
})
