export type SkillCategory =
  | 'languages'
  | 'backend'
  | 'frontend'
  | 'mobile'
  | 'database'
  | 'architecture'
  | 'security'
  | 'cloud'
  | 'integrations'

/** Etiquetas y orden de presentación de las categorías. */
export const SKILL_CATEGORY_LABELS: Record<SkillCategory, string> = {
  languages: 'Lenguajes',
  backend: 'Backend',
  frontend: 'Frontend',
  mobile: 'Mobile',
  database: 'Bases de datos',
  architecture: 'Arquitectura y patrones',
  security: 'Seguridad',
  cloud: 'Cloud, DevOps y herramientas',
  integrations: 'Integraciones',
}

export interface Skill {
  name: string
  category: SkillCategory
}
