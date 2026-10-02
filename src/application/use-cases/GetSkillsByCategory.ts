import type { Skill, SkillCategory } from '@/domain/entities'
import type { PortfolioRepository } from '@/domain/repositories/PortfolioRepository'

export type SkillsByCategory = Partial<Record<SkillCategory, Skill[]>>

/** Devuelve las habilidades agrupadas por categoría, respetando el orden de origen. */
export class GetSkillsByCategory {
  private readonly repository: PortfolioRepository

  constructor(repository: PortfolioRepository) {
    this.repository = repository
  }

  async execute(): Promise<SkillsByCategory> {
    const skills = await this.repository.getSkills()
    const groups: SkillsByCategory = {}

    for (const skill of skills) {
      ;(groups[skill.category] ??= []).push(skill)
    }
    return groups
  }
}
