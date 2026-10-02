<script setup lang="ts">
import type { Profile } from '@/domain/entities'
import BaseButton from '@/presentation/components/ui/BaseButton.vue'
import SocialIcon from '@/presentation/components/ui/SocialIcon.vue'

defineProps<{ profile: Profile }>()
</script>

<template>
  <section class="hero">
    <div class="container">
      <p v-if="profile.available" class="status mono">
        <span class="dot" aria-hidden="true" /> Disponible para nuevas oportunidades
      </p>
      <h1>
        Hola, soy {{ profile.name }}.<br />
        <span class="role">{{ profile.role }}</span>
      </h1>
      <p class="headline mono">{{ profile.headline }} · {{ profile.location }}</p>
      <p class="tagline">{{ profile.tagline }}</p>

      <div class="actions">
        <BaseButton :to="{ path: '/', hash: '#proyectos' }">Ver proyectos</BaseButton>
        <BaseButton v-if="profile.resumeUrl" :href="profile.resumeUrl" variant="ghost">
          Descargar CV
        </BaseButton>
      </div>

      <ul class="socials">
        <li v-for="social in profile.socials" :key="social.url">
          <a :href="social.url" :aria-label="social.label" target="_blank" rel="noopener noreferrer">
            <SocialIcon :name="social.icon" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-block: clamp(96px, 16vh, 160px) 96px;
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  padding: 6px 14px;
  border: 1px solid var(--border);
  border-radius: 999px;
  font-size: 0.8rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 4px var(--accent-soft);
}

h1 {
  font-size: clamp(2.4rem, 7vw, 4.4rem);
  letter-spacing: -0.035em;
}

.role {
  color: var(--text-muted);
}

.headline {
  margin-top: 20px;
  font-size: 0.9rem;
  color: var(--accent);
}

.tagline {
  max-width: 600px;
  margin-top: 16px;
  font-size: 1.15rem;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 36px;
}

.socials {
  display: flex;
  gap: 20px;
  margin-top: 48px;
}

.socials a {
  color: var(--text-muted);
  transition: color var(--transition);
}

.socials a:hover {
  color: var(--accent);
}
</style>
