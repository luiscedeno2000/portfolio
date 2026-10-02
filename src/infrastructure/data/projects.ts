import type { Project } from '@/domain/entities'

const FREELANCE_STACK = ['Laravel', 'Vue.js', 'Inertia.js', 'PrimeVue', 'PostgreSQL', 'Tailwind CSS']
const BANK_NOTE =
  'Proyecto desarrollado en Banco Manabí. Por seguridad y confidencialidad no se muestran detalles internos ni código.'

export const projects: Project[] = [
  // ------------------------------------------------------------- Freelance
  {
    slug: 'finance-dashboard',
    title: 'Finance Dashboard',
    summary:
      'Dashboard financiero con histórico de transacciones, ganancias y pérdidas, clientes morosos e insights generados con IA.',
    description:
      'Panel de análisis financiero con datos históricos de transacciones, reportes de ganancias y pérdidas, control de clientes morosos e histórico de ganancias promediadas por fechas, todo con gráficas e indicadores visuales.',
    highlights: [
      'Reportes pesados generados en segundo plano mediante Jobs y colas de Laravel.',
      'Integración con APIs de IA generativa (ChatGPT y Gemini) para insights automatizados.',
      'Gráficas e indicadores visuales para la toma de decisiones.',
    ],
    stack: [...FREELANCE_STACK, 'OpenAI', 'Gemini'],
    category: 'fullstack',
    client: 'Freelance',
    featured: true,
  },
  {
    slug: 'accounts-payable',
    title: 'Cuentas por pagar',
    summary:
      'Gestión de cuentas por pagar, cuentas de caja y presupuesto, con integración a pasarela de pagos.',
    description:
      'Módulo para administrar cuentas por pagar, cuentas de caja y presupuestos: pagos pendientes, edición y cambio de rubro, anulación y descarga de facturas.',
    highlights: [
      'Creación masiva de registros mediante importación de Excel.',
      'Integración con la pasarela de pagos Pronto Pago para procesar pagos.',
      'Control de presupuesto y cuentas de caja.',
    ],
    stack: [...FREELANCE_STACK, 'Pronto Pago'],
    category: 'fullstack',
    client: 'Freelance',
    featured: true,
  },
  {
    slug: 'accounts-receivable',
    title: 'Cuentas por cobrar',
    summary:
      'Administración de cuentas por cobrar con operaciones masivas vía Excel y notificaciones por correo en lote.',
    description:
      'Módulo para gestionar cuentas pendientes de cobro: creación individual, división entre habitantes, edición, anulación y generación de reportes.',
    highlights: [
      'Edición y anulación masiva mediante archivos Excel.',
      'Envío masivo de notificaciones por correo con Jobs que procesan lotes de datos en JSON.',
      'Generación de reportes de cartera.',
    ],
    stack: FREELANCE_STACK,
    category: 'fullstack',
    client: 'Freelance',
    featured: true,
  },
  {
    slug: 'residential-unit-management',
    title: 'Gestión de unidades habitacionales',
    summary:
      'Administración de unidades habitacionales: contactos, parqueaderos, personal, consumos y documentos en AWS S3.',
    description:
      'Módulo para crear, editar y administrar unidades habitacionales con sus contactos, representantes, parqueaderos, componentes y personal contratado, además del control de consumo de servicios y vehículos.',
    highlights: [
      'Almacenamiento de documentos y comprobantes en AWS S3.',
      'Control de consumo de servicios y registro de vehículos.',
      'Gestión de representantes y personal contratado.',
    ],
    stack: [...FREELANCE_STACK, 'AWS S3'],
    category: 'fullstack',
    client: 'Freelance',
    featured: false,
  },
  {
    slug: 'bank-reconciliation',
    title: 'Conciliaciones bancarias',
    summary: 'Conciliación entre los movimientos del banco y los registros de caja y banco del cliente.',
    description:
      'Módulo que compara los movimientos reales del banco con los registros internos de caja y banco del cliente para detectar y resolver diferencias.',
    stack: FREELANCE_STACK,
    category: 'fullstack',
    client: 'Freelance',
    featured: false,
  },
  {
    slug: 'fund-transfers',
    title: 'Transferencias y caja chica',
    summary: 'Transferencias de fondos con impresión, anulación, exportación a Excel y gestión de caja chica.',
    description:
      'Módulo de transferencias de fondos que permite imprimir, anular y exportar a Excel, además de la apertura y reposición de caja chica. Se complementa con el registro y cobro de ingresos de clientes y el pago de egresos a empleados y proveedores.',
    stack: FREELANCE_STACK,
    category: 'fullstack',
    client: 'Freelance',
    featured: false,
  },

  // ---------------------------------------------------------- Banco Manabí
  {
    slug: 'provider-integration-services',
    title: 'Servicios de integración con proveedores',
    summary: 'Servicios Java con arquitectura hexagonal y criptografía asimétrica para consumir proveedores externos.',
    description:
      'Desarrollo de servicios para el consumo de proveedores externos, diseñados con arquitectura hexagonal e implementando seguridad mediante criptografía asimétrica (clave pública/privada).',
    stack: ['Java', 'Spring Boot', 'Arquitectura hexagonal'],
    category: 'backend',
    client: 'Banco Manabí',
    note: BANK_NOTE,
    featured: false,
  },
  {
    slug: 'customer-notifications',
    title: 'Notificaciones a clientes',
    summary: 'Envío de notificaciones por email y móvil con plantillas dinámicas y procesamiento con hilos.',
    description:
      'Mejoras en el componente de envío de notificaciones a clientes (transacciones, códigos de seguridad, cobranzas, alertas y marketing): plantillas provenientes de base de datos con parámetros dinámicos y uso de hilos para maximizar el envío. Incluye la automatización de notificaciones de cobranza mediante procedimientos almacenados y jobs.',
    stack: ['Java', 'PL/SQL', 'Oracle'],
    category: 'backend',
    client: 'Banco Manabí',
    note: BANK_NOTE,
    featured: false,
  },
  {
    slug: 'financial-education-site',
    title: 'Sitio de educación financiera',
    summary: 'Migración de un sitio estático a uno dinámico con gestión de contenido, usuarios, roles y permisos.',
    description:
      'Migración de la página informativa de educación financiera de contenido estático a dinámico, incorporando gestión de contenido, administración de usuarios, roles y permisos.',
    stack: ['Gestión de contenido', 'Roles y permisos'],
    category: 'fullstack',
    client: 'Banco Manabí',
    note: BANK_NOTE,
    featured: false,
  },

  // --------------------------------------------------------------- Académico
  {
    slug: 'objective-test-grader',
    title: 'Revisión automática de pruebas objetivas',
    summary: 'Aplicación Android que califica automáticamente pruebas objetivas. Proyecto de tesis.',
    description:
      'Aplicación móvil desarrollada como trabajo de titulación de Ingeniería en Sistemas Informáticos para automatizar la revisión de pruebas objetivas.',
    stack: ['Kotlin', 'Android Studio'],
    category: 'mobile',
    client: 'Tesis · Universidad Técnica de Manabí',
    featured: false,
  },
]
