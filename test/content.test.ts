import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

/**
 * Guardrail: the locale files must stay structurally in sync so that no
 * UI string is missing in either language. We read the raw JSON (bypassing the
 * i18n compiler) and compare the set of leaf paths.
 */
function load(name: string): Record<string, unknown> {
  const path = resolve(process.cwd(), 'i18n/locales', name)
  return JSON.parse(readFileSync(path, 'utf-8'))
}

const ptBR = load('pt-BR.json')
const en = load('en.json')
const es = load('es.json')

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
  it('pt-BR, en and es expose the same keys', () => {
    expect(leafPaths(en)).toEqual(leafPaths(ptBR))
    expect(leafPaths(es)).toEqual(leafPaths(ptBR))
  })

  it('have a non-empty meta title in every language', () => {
    for (const locale of [ptBR, en, es]) {
      expect((locale.meta as { title: string }).title.length).toBeGreaterThan(0)
    }
  })
})
