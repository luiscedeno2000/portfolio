import type { ContactMessage } from '@/domain/entities'
import type { ContactRepository } from '@/domain/repositories/ContactRepository'

/** Modo solo frontend: abre el cliente de correo del visitante con el mensaje ya escrito. */
export class MailtoContactRepository implements ContactRepository {
  private readonly recipient: string

  constructor(recipient: string) {
    this.recipient = recipient
  }

  async send({ name, email, message }: ContactMessage): Promise<void> {
    const subject = encodeURIComponent(`Contacto desde el portafolio: ${name}`)
    const body = encodeURIComponent(`${message}\n\n${name} <${email}>`)
    window.location.href = `mailto:${this.recipient}?subject=${subject}&body=${body}`
  }
}
