/**
 * Centralizes access to the structured (array/object) portfolio content stored
 * in the i18n locale files. vue-i18n returns compiled message objects from
 * `tm()`, so we resolve them to plain strings with `rt()` here and expose
 * strongly-typed, reactive data to the section components.
 */
export interface Stat {
  value: string
  label: string
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

export interface Degree {
  course: string
  school: string
  period: string
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

  const str = (value: unknown): string => rt(value as string)
  const list = (value: unknown): RawMessage[] => (value as RawMessage[]) ?? []
  const strList = (value: unknown): string[] =>
    ((value as unknown[]) ?? []).map(str)

  const stat = (s: RawMessage): Stat => ({ value: str(s.value), label: str(s.label) })

  const heroStats = computed<Stat[]>(() => list(tm('hero.stats')).map(stat))
  const highlights = computed<Stat[]>(() => list(tm('about.highlights')).map(stat))

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

  const education = computed<Degree[]>(() =>
    list(tm('education.degrees')).map(d => ({
      course: str(d.course),
      school: str(d.school),
      period: str(d.period),
    })),
  )

  const certifications = computed<string[]>(() => strList(tm('education.certifications')))

  const socials = computed<SocialLink[]>(() =>
    list(tm('contact.socials')).map(s => ({
      label: str(s.label),
      handle: str(s.handle),
      icon: str(s.icon),
      url: str(s.url),
    })),
  )

  return { heroStats, highlights, skillGroups, experience, education, certifications, socials }
}
