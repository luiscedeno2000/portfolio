import {
  GetEducation,
  GetExperience,
  GetProfile,
  GetProjectBySlug,
  GetProjects,
  GetSkillsByCategory,
  SendContactMessage,
} from '@/application/use-cases'
import type { ContactRepository } from '@/domain/repositories/ContactRepository'
import type { PortfolioRepository } from '@/domain/repositories/PortfolioRepository'
import { env } from '@/infrastructure/config/env'
import { profile } from '@/infrastructure/data/profile'
import { HttpClient } from '@/infrastructure/http/HttpClient'
import { ApiContactRepository } from '@/infrastructure/repositories/ApiContactRepository'
import { ApiPortfolioRepository } from '@/infrastructure/repositories/ApiPortfolioRepository'
import { LocalPortfolioRepository } from '@/infrastructure/repositories/LocalPortfolioRepository'
import { MailtoContactRepository } from '@/infrastructure/repositories/MailtoContactRepository'

/**
 * Composition root: el ÚNICO lugar que conoce las implementaciones concretas.
 * Para conectar un backend basta con definir VITE_API_URL; ni los casos de uso
 * ni la UI cambian.
 */
function createRepositories(): { portfolio: PortfolioRepository; contact: ContactRepository } {
  if (env.useApi) {
    const http = new HttpClient(env.apiUrl)
    return {
      portfolio: new ApiPortfolioRepository(http),
      contact: new ApiContactRepository(http),
    }
  }

  return {
    portfolio: new LocalPortfolioRepository(),
    contact: new MailtoContactRepository(profile.email),
  }
}

export function createContainer() {
  const repos = createRepositories()

  return {
    getProfile: new GetProfile(repos.portfolio),
    getSkillsByCategory: new GetSkillsByCategory(repos.portfolio),
    getProjects: new GetProjects(repos.portfolio),
    getProjectBySlug: new GetProjectBySlug(repos.portfolio),
    getExperience: new GetExperience(repos.portfolio),
    getEducation: new GetEducation(repos.portfolio),
    sendContactMessage: new SendContactMessage(repos.contact),
  }
}

export type Container = ReturnType<typeof createContainer>
