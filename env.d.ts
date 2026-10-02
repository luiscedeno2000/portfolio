/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL base del backend. Si está vacía, la app usa los datos locales de src/data. */
  readonly VITE_API_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
