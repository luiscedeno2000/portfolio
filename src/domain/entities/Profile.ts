export type SocialIcon = 'github' | 'linkedin' | 'x' | 'mail' | 'web'

export interface SocialLink {
  label: string
  url: string
  icon: SocialIcon
}

export interface Language {
  name: string
  level: string
}

export interface Profile {
  name: string
  fullName: string
  role: string
  /** Título profesional / formación principal */
  headline: string
  tagline: string
  about: string[]
  location: string
  email: string
  languages: Language[]
  avatarUrl?: string
  resumeUrl?: string
  available: boolean
  socials: SocialLink[]
}
