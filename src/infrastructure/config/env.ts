/**
 * Variables de entorno tipadas. Es el único lugar que lee import.meta.env.
 */
const apiUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, '') ?? ''

export const env = {
  apiUrl,
  /** true cuando hay un backend configurado */
  useApi: apiUrl.length > 0,
} as const
