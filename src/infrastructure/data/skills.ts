import type { Skill, SkillCategory } from '@/domain/entities'

const group = (category: SkillCategory, names: string[]): Skill[] =>
  names.map((name) => ({ name, category }))

export const skills: Skill[] = [
  ...group('languages', ['PHP', 'Java', 'JavaScript', 'Kotlin', 'Visual Basic']),
  ...group('backend', ['Laravel', 'Spring Boot', 'Node.js', '.NET', 'Django', 'APIs RESTful', 'Jobs y colas']),
  ...group('frontend', ['Vue.js', 'Angular', 'Inertia.js', 'PrimeVue', 'Tailwind CSS', 'HTML5', 'CSS3']),
  ...group('mobile', ['Flutter', 'Android (Kotlin)']),
  ...group('database', ['Oracle', 'PL/SQL', 'PostgreSQL', 'MySQL', 'MongoDB']),
  ...group('architecture', [
    'Arquitectura limpia',
    'DDD',
    'Arquitectura hexagonal',
    'Microservicios',
    'MVC',
  ]),
  ...group('security', [
    'Criptografía simétrica y asimétrica',
    'Policies y middleware',
    'Sesiones, roles y permisos',
    'Excepciones personalizadas',
  ]),
  ...group('cloud', ['AWS S3', 'Laravel Vapor', 'Git y GitHub', 'Postman', 'Shell', 'FTP']),
  ...group('integrations', ['Pasarela de pagos (Pronto Pago)', 'API de ChatGPT', 'API de Gemini']),
]
