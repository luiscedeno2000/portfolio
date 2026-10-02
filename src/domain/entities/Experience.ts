export interface Experience {
  company: string
  position: string
  /** Formato YYYY-MM */
  startDate: string
  /** Formato YYYY-MM; `null` = puesto actual */
  endDate: string | null
  location: string
  highlights: string[]
  stack: string[]
}
