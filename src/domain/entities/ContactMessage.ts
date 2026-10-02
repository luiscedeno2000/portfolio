export interface ContactMessage {
  name: string
  email: string
  message: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export type ContactMessageErrors = Partial<Record<keyof ContactMessage, string>>

/** Reglas de negocio del mensaje de contacto (independientes de la UI). */
export function validateContactMessage(msg: ContactMessage): ContactMessageErrors {
  const errors: ContactMessageErrors = {}
  if (msg.name.trim().length < 2) errors.name = 'Escribe tu nombre.'
  if (!EMAIL_PATTERN.test(msg.email.trim())) errors.email = 'Escribe un email válido.'
  if (msg.message.trim().length < 10) errors.message = 'El mensaje debe tener al menos 10 caracteres.'
  return errors
}
