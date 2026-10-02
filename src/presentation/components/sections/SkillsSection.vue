<script setup lang="ts">
import type { SkillsByCategory } from '@/application/use-cases'
import { SKILL_CATEGORY_LABELS, type SkillCategory } from '@/domain/entities'
import SectionHeading from '@/presentation/components/ui/SectionHeading.vue'

defineProps<{ groups: SkillsByCategory }>()

const categories = Object.keys(SKILL_CATEGORY_LABELS) as SkillCategory[]
</script>

<template>
  <section id="habilidades" class="section">
    <div class="container">
      <SectionHeading
        eyebrow="02. Habilidades"
        title="Stack tecnológico"
        description="Del diseño de la base de datos y la API hasta la interfaz, con foco en arquitectura y seguridad."
      />

      <div class="grid">
        <template v-for="category in categories" :key="category">
          <article v-if="groups[category]?.length" class="card">
            <h3>{{ SKILL_CATEGORY_LABELS[category] }}</h3>
            <ul>
              <li v-for="skill in groups[category]" :key="skill.name">{{ skill.name }}</li>
            </ul>
          </article>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.card {
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  transition: border-color var(--transition);
}

.card:hover {
  border-color: var(--accent);
}

h3 {
  font-size: 1rem;
  margin-bottom: 16px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

li {
  padding: 5px 12px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text-strong);
  font-size: 0.85rem;
}
</style>
