import type { Experience } from '@/domain/entities'
import type { PortfolioRepository } from '@/domain/repositories/PortfolioRepository'

/** Devuelve la experiencia laboral, de la más reciente a la más antigua. */
export class GetExperience {
  private readonly repository: PortfolioRepository

  constructor(repository: PortfolioRepository) {
    this.repository = repository
  }

  async execute(): Promise<Experience[]> {
    const items = await this.repository.getExperience()
    return [...items].sort((a, b) => b.startDate.localeCompare(a.startDate))
  }
}
