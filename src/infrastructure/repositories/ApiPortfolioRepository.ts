import type { Certification, Education, Experience, Profile, Project, Skill } from '@/domain/entities'
import type { PortfolioRepository } from '@/domain/repositories/PortfolioRepository'
import { HttpError, type HttpClient } from '@/infrastructure/http/HttpClient'

/**
 * Adaptador para un backend REST (p. ej. Laravel). Los endpoints de abajo son
 * el contrato que deberá implementar la API.
 */
export class ApiPortfolioRepository implements PortfolioRepository {
  private readonly http: HttpClient

  constructor(http: HttpClient) {
    this.http = http
  }

  getProfile(): Promise<Profile> {
    return this.http.get('/api/profile')
  }

  getSkills(): Promise<Skill[]> {
    return this.http.get('/api/skills')
  }

  getProjects(): Promise<Project[]> {
    return this.http.get('/api/projects')
  }

  async getProjectBySlug(slug: string): Promise<Project | null> {
    try {
      return await this.http.get(`/api/projects/${encodeURIComponent(slug)}`)
    } catch (e) {
      if (e instanceof HttpError && e.status === 404) return null
      throw e
    }
  }

  getExperience(): Promise<Experience[]> {
    return this.http.get('/api/experience')
  }

  getEducation(): Promise<Education[]> {
    return this.http.get('/api/education')
  }

  getCertifications(): Promise<Certification[]> {
    return this.http.get('/api/certifications')
  }
}
