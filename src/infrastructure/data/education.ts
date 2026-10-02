import type { Certification, Education } from '@/domain/entities'

export const education: Education[] = [
  {
    degree: 'Ingeniería en Sistemas Informáticos',
    institution: 'Universidad Técnica de Manabí',
    startDate: '2018-09',
    endDate: '2024-08',
    location: 'Portoviejo, Ecuador',
    thesis: 'Aplicación móvil para la revisión automática de pruebas objetivas (Android Studio, Kotlin).',
  },
]

const course = (name: string): Certification => ({ name, issuer: 'Udemy', type: 'course' })

export const certifications: Certification[] = [
  {
    name: 'Prevención de Lavado de Activos para la Ciudadanía',
    issuer: 'UAFE (Unidad de Análisis Financiero y Económico)',
    type: 'certificate',
  },
  course('Laravel 9 desde cero + APIs RESTful'),
  course('Master en PHP: desarrollo de sistemas completos'),
  course('API REST Full con PHP nativo (patrón MVC)'),
  course('JavaScript: de cero a experto'),
  course('Desarrollo Web Frontend: de cero a experto'),
  course('CSS: The Complete Guide'),
  course('HTML, CSS y JavaScript desde cero'),
  course('Java: de cero a experto (+150 h)'),
  course('SQL en Oracle: fundamentos desde cero'),
  course('Base de Datos Oracle Database'),
]
