import { shallowRef } from 'vue'
import type { Profile } from '@/domain/entities'
import { useContainer } from './useContainer'

// El perfil lo usan varias partes (header, hero, footer…): se carga una sola vez.
const profile = shallowRef<Profile>()
const error = shallowRef<unknown>()
let pending: Promise<void> | null = null

export function useProfile() {
  const { getProfile } = useContainer()

  pending ??= getProfile
    .execute()
    .then((p) => {
      profile.value = p
    })
    .catch((e) => {
      error.value = e
      pending = null // permite reintentar en el próximo uso
    })

  return { profile, error }
}
