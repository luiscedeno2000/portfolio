export type ProjectCategory = 'frontend' | 'backend' | 'fullstack' | 'mobile'

export interface Project {
  slug: string
  title: string
  summary: string
  description: string
  /** Logros o funcionalidades clave, se muestran en el detalle */
  highlights?: string[]
  stack: string[]
  category: ProjectCategory
  /** Contexto del proyecto: cliente, empresa o tipo (p. ej. "Freelance") */
  client: string
  /** Aclaración adicional (p. ej. confidencialidad) */
  note?: string
  imageUrl?: string
  repoUrl?: string
  demoUrl?: string
  featured: boolean
  year?: number
}
