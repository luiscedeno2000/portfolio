import type { Certification, Education, Experience, Profile, Project, Skill } from '@/domain/entities'
import type { PortfolioRepository } from '@/domain/repositories/PortfolioRepository'
import { certifications, education } from '@/infrastructure/data/education'
import { experience } from '@/infrastructure/data/experience'
import { profile } from '@/infrastructure/data/profile'
import { projects } from '@/infrastructure/data/projects'
import { skills } from '@/infrastructure/data/skills'

/** Adaptador que lee los datos estáticos de infrastructure/data (modo solo frontend). */
export class LocalPortfolioRepository implements PortfolioRepository {
  async getProfile(): Promise<Profile> {
    return profile
  }

  async getSkills(): Promise<Skill[]> {
    return skills
  }

  async getProjects(): Promise<Project[]> {
    return projects
  }

  async getProjectBySlug(slug: string): Promise<Project | null> {
    return projects.find((p) => p.slug === slug) ?? null
  }

  async getExperience(): Promise<Experience[]> {
    return experience
  }

  async getEducation(): Promise<Education[]> {
    return education
  }

  async getCertifications(): Promise<Certification[]> {
    return certifications
  }
}
