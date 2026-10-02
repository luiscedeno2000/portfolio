import type { Profile } from '@/domain/entities'
import type { PortfolioRepository } from '@/domain/repositories/PortfolioRepository'

export class GetProfile {
  private readonly repository: PortfolioRepository

  constructor(repository: PortfolioRepository) {
    this.repository = repository
  }

  execute(): Promise<Profile> {
    return this.repository.getProfile()
  }
}
