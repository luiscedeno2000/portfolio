export interface Education {
  degree: string
  institution: string
  /** Formato YYYY-MM */
  startDate: string
  /** Formato YYYY-MM; `null` = en curso */
  endDate: string | null
  location: string
  thesis?: string
}

export type CertificationType = 'certificate' | 'course'

export interface Certification {
  name: string
  issuer: string
  type: CertificationType
}
