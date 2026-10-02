import { inject, type InjectionKey } from 'vue'
import type { Container } from '@/di/container'

export const CONTAINER_KEY: InjectionKey<Container> = Symbol('container')

/** Acceso a los casos de uso desde los componentes (inyección de dependencias). */
export function useContainer(): Container {
  const container = inject(CONTAINER_KEY)
  if (!container) throw new Error('El contenedor de dependencias no fue provisto en main.ts')
  return container
}
