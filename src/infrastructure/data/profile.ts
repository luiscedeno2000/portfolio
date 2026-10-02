import type { Profile } from '@/domain/entities'

export const profile: Profile = {
  name: 'Luis Cedeño',
  fullName: 'Luis Antonio Cedeño Posligua',
  role: 'Desarrollador Full Stack',
  headline: 'Ingeniero en Sistemas Informáticos',
  tagline:
    'Construyo aplicaciones web y servicios backend robustos con Laravel, Vue.js y Spring Boot, aplicando arquitectura limpia y DDD.',
  about: [
    'Soy Ingeniero en Sistemas Informáticos y desarrollador de software con experiencia en el sector bancario y en proyectos freelance. He trabajado en aplicaciones web (frontend y backend), aplicaciones de escritorio, aplicaciones Android y microservicios.',
    'En Banco Manabí desarrollé servicios en Java Spring Boot con arquitectura hexagonal y criptografía asimétrica, programé procesos PL/SQL sobre el core bancario y administré bases de datos Oracle, MySQL y PostgreSQL en entornos transaccionales de producción.',
    'Como freelance construyo módulos financieros completos con Laravel, Vue.js e Inertia.js: dashboards, cuentas por cobrar y por pagar, conciliaciones y transferencias, con procesamiento asíncrono mediante colas e integraciones con pasarelas de pago e IA generativa.',
    'Me caracterizo por mi compromiso, responsabilidad y dedicación en cada proyecto, garantizando soluciones robustas y eficientes.',
  ],
  location: 'Guayaquil, Ecuador',
  email: 'antocede5@outlook.com',
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'B2' },
  ],
  resumeUrl: '/CV_Luis_Cedeno_Posligua.pdf',
  available: true,
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/luiscedeno2000', icon: 'linkedin' },
    { label: 'Email', url: 'mailto:antocede5@outlook.com', icon: 'mail' },
  ],
}
