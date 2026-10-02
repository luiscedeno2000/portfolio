import type { Certification, Education, Experience, Profile, Project, Skill } from '@/domain/entities'

/**
 * Puerto (interfaz) de lectura del portafolio. El dominio define QUÉ necesita;
 * la infraestructura decide CÓMO obtenerlo (archivos locales, API REST…).
 */
export interface PortfolioRepository {
  getProfile(): Promise<Profile>
  getSkills(): Promise<Skill[]>
  getProjects(): Promise<Project[]>
  getProjectBySlug(slug: string): Promise<Project | null>
  getExperience(): Promise<Experience[]>
  getEducation(): Promise<Education[]>
  getCertifications(): Promise<Certification[]>
}
