import type { Experience } from '@/domain/entities'

export const experience: Experience[] = [
  {
    company: 'Banco Manabí',
    position: 'Analista de Desarrollo',
    startDate: '2024-09',
    endDate: '2025-07',
    location: 'Guayaquil, Ecuador',
    highlights: [
      'Desarrollo de servicios en Java Spring Boot con arquitectura hexagonal, con seguridad mediante criptografía asimétrica para el consumo de proveedores externos.',
      'Programación PL/SQL sobre el core bancario para los procesos de apertura de cuentas de la aplicación eBanks.',
      'Mejora del sistema de notificaciones a clientes (email y móvil) con plantillas dinámicas desde base de datos y envío optimizado mediante hilos.',
      'Desarrollo de aplicaciones de escritorio para procesos transaccionales, con procedimientos almacenados, servicios y encriptación de datos.',
      'Automatización del envío de notificaciones de cobranza mediante procedimientos almacenados y jobs programados.',
      'Migración del sitio de educación financiera de contenido estático a dinámico, con gestión de contenido, usuarios, roles y permisos.',
      'Administración y soporte de bases de datos Oracle, MySQL y PostgreSQL en entornos transaccionales de producción.',
    ],
    stack: ['Java', 'Spring Boot', 'PL/SQL', 'Oracle', 'MySQL', 'PostgreSQL'],
  },
]
