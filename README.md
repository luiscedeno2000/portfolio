# Portafolio — Desarrollador Full Stack

Portafolio personal construido con **Vue 3 + TypeScript + Vite** siguiendo **arquitectura limpia**.
Hoy funciona solo con frontend (datos locales); está preparado para conectarse a un backend
(p. ej. Laravel) sin modificar la UI ni la lógica de negocio.

## Scripts

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # type-check + build de producción
npm run preview   # previsualizar el build
```

## Arquitectura

```
src/
├── domain/                  # Núcleo: no depende de nada (ni Vue, ni fetch)
│   ├── entities/            # Modelos y reglas de negocio (Profile, Project, validaciones…)
│   └── repositories/        # Puertos: interfaces que la infraestructura implementa
│
├── application/             # Casos de uso: orquestan el dominio
│   └── use-cases/           # GetProjects, GetSkillsByCategory, SendContactMessage…
│
├── infrastructure/          # Adaptadores: detalles técnicos intercambiables
│   ├── config/env.ts        # Variables de entorno tipadas
│   ├── data/                # Contenido estático del portafolio  ← EDITA AQUÍ TUS DATOS
│   ├── http/HttpClient.ts   # Cliente HTTP (fetch)
│   └── repositories/        # Local*, Api*, Mailto* (implementan los puertos)
│
├── di/container.ts          # Composition root: elige implementaciones e instancia casos de uso
│
├── presentation/            # Capa Vue (UI)
│   ├── components/
│   │   ├── layout/          # Header, Footer, ThemeToggle
│   │   ├── sections/        # Hero, About, Skills, Projects, Experience, Contact
│   │   ├── projects/        # Componentes del módulo de proyectos
│   │   └── ui/              # Componentes base reutilizables (Button, Tag…)
│   ├── composables/         # useContainer, useProfile, useAsync, useTheme
│   ├── layouts/             # DefaultLayout
│   ├── router/              # Rutas: /, /proyectos/:slug, 404
│   ├── styles/              # Tokens de diseño y estilos globales
│   ├── views/               # Páginas
│   └── App.vue
│
├── shared/utils/            # Utilidades puras sin dependencia de capa
└── main.ts                  # Punto de entrada: crea el contenedor y monta la app
```

### Regla de dependencias

```
presentation ──► application ──► domain ◄── infrastructure
        └──────────── di (composition root) ─────┘
```

- `domain` no importa nada de otras capas.
- `application` solo conoce `domain` (entidades e interfaces).
- `infrastructure` implementa las interfaces de `domain`.
- `presentation` usa los casos de uso a través de `useContainer()`; nunca importa repositorios ni datos directamente.
- `di/container.ts` es el único sitio que conoce las clases concretas.

## Personalizar contenido

Edita los archivos de `src/infrastructure/data/`:
`profile.ts`, `skills.ts`, `projects.ts`, `experience.ts`, `education.ts`.
El CV descargable está en `public/CV_Luis_Cedeno_Posligua.pdf`; las imágenes de proyectos también van en `public/`.

## Conectar un backend en el futuro

1. Copia `.env.example` a `.env.local` y define `VITE_API_URL=http://localhost:8000`.
2. El contenedor usará automáticamente `ApiPortfolioRepository` y `ApiContactRepository`.
3. El backend debe exponer estos endpoints (respondiendo con las entidades de `src/domain/entities`):

| Método | Endpoint               | Respuesta      |
| ------ | ---------------------- | -------------- |
| GET    | `/api/profile`         | `Profile`      |
| GET    | `/api/skills`          | `Skill[]`      |
| GET    | `/api/projects`        | `Project[]`    |
| GET    | `/api/projects/{slug}` | `Project`/404  |
| GET    | `/api/experience`      | `Experience[]` |
| GET    | `/api/education`       | `Education[]`  |
| GET    | `/api/certifications`  | `Certification[]` |
| POST   | `/api/contact`         | `204`          |

Opcional: activa el `proxy` en `vite.config.ts` para evitar CORS en desarrollo.
