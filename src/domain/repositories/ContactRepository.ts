import type { ContactMessage } from '@/domain/entities'

/** Puerto de envío de mensajes de contacto. */
export interface ContactRepository {
  send(message: ContactMessage): Promise<void>
}
