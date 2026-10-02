import { validateContactMessage, type ContactMessage, type ContactMessageErrors } from '@/domain/entities'
import type { ContactRepository } from '@/domain/repositories/ContactRepository'

export class ContactValidationError extends Error {
  readonly errors: ContactMessageErrors

  constructor(errors: ContactMessageErrors) {
    super('El mensaje de contacto no es válido')
    this.name = 'ContactValidationError'
    this.errors = errors
  }
}

export class SendContactMessage {
  private readonly repository: ContactRepository

  constructor(repository: ContactRepository) {
    this.repository = repository
  }

  async execute(message: ContactMessage): Promise<void> {
    const errors = validateContactMessage(message)
    if (Object.keys(errors).length > 0) throw new ContactValidationError(errors)

    await this.repository.send({
      name: message.name.trim(),
      email: message.email.trim(),
      message: message.message.trim(),
    })
  }
}
