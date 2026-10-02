import { ref, shallowRef, type Ref } from 'vue'

/**
 * Ejecuta una función asíncrona y expone su estado (datos, carga, error).
 * Útil para consumir la capa de servicios desde los componentes.
 */
export function useAsync<T>(fn: () => Promise<T>, { immediate = true } = {}) {
  const data = shallowRef<T>() as Ref<T | undefined>
  const error = shallowRef<unknown>()
  const loading = ref(false)

  async function run() {
    loading.value = true
    error.value = undefined
    try {
      data.value = await fn()
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }

  if (immediate) void run()

  return { data, error, loading, run }
}
