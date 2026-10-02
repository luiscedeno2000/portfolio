import type { Project } from '@/domain/entities'
import type { PortfolioRepository } from '@/domain/repositories/PortfolioRepository'

export class GetProjectBySlug {
  private readonly repository: PortfolioRepository

  constructor(repository: PortfolioRepository) {
    this.repository = repository
  }

  execute(slug: string): Promise<Project | null> {
    return this.repository.getProjectBySlug(slug)
  }
}
