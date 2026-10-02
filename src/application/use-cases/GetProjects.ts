import type { Project, ProjectCategory } from '@/domain/entities'
import type { PortfolioRepository } from '@/domain/repositories/PortfolioRepository'

export interface GetProjectsFilter {
  category?: ProjectCategory
  featuredOnly?: boolean
}

/**
 * Lista proyectos filtrados; destacados primero y luego los más recientes.
 * Los proyectos sin año conservan su orden de origen.
 */
export class GetProjects {
  private readonly repository: PortfolioRepository

  constructor(repository: PortfolioRepository) {
    this.repository = repository
  }

  async execute(filter: GetProjectsFilter = {}): Promise<Project[]> {
    const projects = await this.repository.getProjects()

    return projects
      .filter((p) => !filter.category || p.category === filter.category)
      .filter((p) => !filter.featuredOnly || p.featured)
      .sort((a, b) => Number(b.featured) - Number(a.featured) || (b.year ?? 0) - (a.year ?? 0))
  }
}
