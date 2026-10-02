import type { Certification, Education } from '@/domain/entities'
import type { PortfolioRepository } from '@/domain/repositories/PortfolioRepository'

export interface EducationSummary {
  degrees: Education[]
  certificates: Certification[]
  courses: Certification[]
}

/** Reúne la formación académica, certificados y cursos. */
export class GetEducation {
  private readonly repository: PortfolioRepository

  constructor(repository: PortfolioRepository) {
    this.repository = repository
  }

  async execute(): Promise<EducationSummary> {
    const [education, certifications] = await Promise.all([
      this.repository.getEducation(),
      this.repository.getCertifications(),
    ])

    return {
      degrees: [...education].sort((a, b) => b.startDate.localeCompare(a.startDate)),
      certificates: certifications.filter((c) => c.type === 'certificate'),
      courses: certifications.filter((c) => c.type === 'course'),
    }
  }
}
