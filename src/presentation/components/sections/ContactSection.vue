<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ContactValidationError } from '@/application/use-cases'
import type { ContactMessage, ContactMessageErrors } from '@/domain/entities'
import BaseButton from '@/presentation/components/ui/BaseButton.vue'
import SectionHeading from '@/presentation/components/ui/SectionHeading.vue'
import { useContainer } from '@/presentation/composables/useContainer'

const { sendContactMessage } = useContainer()

const form = reactive<ContactMessage>({ name: '', email: '', message: '' })
const errors = ref<ContactMessageErrors>({})
const status = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')

async function submit() {
  status.value = 'sending'
  errors.value = {}
  try {
    await sendContactMessage.execute({ ...form })
    status.value = 'sent'
    Object.assign(form, { name: '', email: '', message: '' })
  } catch (e) {
    if (e instanceof ContactValidationError) {
      errors.value = e.errors
      status.value = 'idle'
    } else {
      status.value = 'error'
    }
  }
}
</script>

<template>
  <section id="contacto" class="section">
    <div class="container narrow">
      <SectionHeading
        eyebrow="06. Contacto"
        title="¿Trabajamos juntos?"
        description="Estoy abierto a nuevas oportunidades laborales y proyectos freelance. Cuéntame sobre tu propuesta."
      />

      <form class="form" novalidate @submit.prevent="submit">
        <div class="row">
          <label>
            <span>Nombre</span>
            <input v-model="form.name" name="name" autocomplete="name" :aria-invalid="!!errors.name" />
            <small v-if="errors.name">{{ errors.name }}</small>
          </label>
          <label>
            <span>Email</span>
            <input v-model="form.email" type="email" name="email" autocomplete="email" :aria-invalid="!!errors.email" />
            <small v-if="errors.email">{{ errors.email }}</small>
          </label>
        </div>
        <label>
          <span>Mensaje</span>
          <textarea v-model="form.message" name="message" rows="5" :aria-invalid="!!errors.message" />
          <small v-if="errors.message">{{ errors.message }}</small>
        </label>

        <div class="footer">
          <BaseButton type="submit" :disabled="status === 'sending'">
            {{ status === 'sending' ? 'Enviando…' : 'Enviar mensaje' }}
          </BaseButton>
          <p v-if="status === 'sent'" class="feedback ok" role="status">¡Gracias! Tu mensaje está listo para enviarse.</p>
          <p v-if="status === 'error'" class="feedback err" role="alert">No se pudo enviar. Inténtalo de nuevo.</p>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.narrow {
  max-width: 760px;
}

.form {
  display: grid;
  gap: 18px;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

label {
  display: grid;
  gap: 6px;
  font-size: 0.88rem;
}

label > span {
  color: var(--text-strong);
  font-weight: 500;
}

input,
textarea {
  width: 100%;
  padding: 12px 14px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  background: var(--surface);
  resize: vertical;
  transition: border-color var(--transition);
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--accent);
}

[aria-invalid='true'] {
  border-color: #f87171;
}

small {
  color: #f87171;
}

.footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
}

.feedback {
  font-size: 0.9rem;
}

.ok {
  color: var(--accent);
}

.err {
  color: #f87171;
}

@media (max-width: 640px) {
  .row {
    grid-template-columns: 1fr;
  }
}
</style>
