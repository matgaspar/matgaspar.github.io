/**
 * Centralizes access to the structured (array/object) portfolio content stored
 * in the i18n locale files. vue-i18n returns compiled message objects from
 * `tm()`, so we resolve them to plain strings with `rt()` here and expose
 * strongly-typed, reactive data to the section components.
 */
export interface Highlight {
  label: string
  value: string
}

export interface SkillGroup {
  name: string
  items: string[]
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string
}

export interface ProjectItem {
  name: string
  description: string
  tags: string[]
  url: string
}

export interface SocialLink {
  label: string
  handle: string
  icon: string
  url: string
}

type RawMessage = Record<string, unknown>

export function usePortfolioContent() {
  const { tm, rt } = useI18n()

  // `rt` renders a compiled message leaf into a plain string.
  const str = (value: unknown): string => rt(value as string)
  const list = (value: unknown): RawMessage[] => (value as RawMessage[]) ?? []
  const strList = (value: unknown): string[] =>
    ((value as unknown[]) ?? []).map(str)

  const highlights = computed<Highlight[]>(() =>
    list(tm('about.highlights')).map(h => ({
      label: str(h.label),
      value: str(h.value),
    })),
  )

  const skillGroups = computed<SkillGroup[]>(() =>
    list(tm('skills.groups')).map(g => ({
      name: str(g.name),
      items: strList(g.items),
    })),
  )

  const experience = computed<ExperienceItem[]>(() =>
    list(tm('experience.items')).map(e => ({
      role: str(e.role),
      company: str(e.company),
      period: str(e.period),
      description: str(e.description),
    })),
  )

  const projects = computed<ProjectItem[]>(() =>
    list(tm('projects.items')).map(p => ({
      name: str(p.name),
      description: str(p.description),
      tags: strList(p.tags),
      url: str(p.url),
    })),
  )

  const socials = computed<SocialLink[]>(() =>
    list(tm('contact.socials')).map(s => ({
      label: str(s.label),
      handle: str(s.handle),
      icon: str(s.icon),
      url: str(s.url),
    })),
  )

  return { highlights, skillGroups, experience, projects, socials }
}
