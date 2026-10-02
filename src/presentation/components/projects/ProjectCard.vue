<script setup lang="ts">
import type { Project } from '@/domain/entities'
import BaseTag from '@/presentation/components/ui/BaseTag.vue'
import { PROJECT_CATEGORY_LABELS } from './labels'

defineProps<{ project: Project }>()
</script>

<template>
  <article class="card">
    <div class="top">
      <span class="client mono">{{ project.client }}</span>
      <span class="category mono">{{ PROJECT_CATEGORY_LABELS[project.category] }}</span>
    </div>

    <h3>
      <RouterLink :to="{ name: 'project', params: { slug: project.slug } }" class="stretched">
        {{ project.title }}
      </RouterLink>
    </h3>
    <p>{{ project.summary }}</p>

    <ul class="stack">
      <li v-for="tech in project.stack.slice(0, 4)" :key="tech"><BaseTag>{{ tech }}</BaseTag></li>
      <li v-if="project.stack.length > 4" class="more mono">+{{ project.stack.length - 4 }}</li>
    </ul>
  </article>
</template>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  transition:
    border-color var(--transition),
    transform var(--transition),
    box-shadow var(--transition);
}

.card:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: var(--shadow);
}

.top {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.client {
  color: var(--accent);
}

.category {
  color: var(--text-muted);
  white-space: nowrap;
}

h3 {
  font-size: 1.2rem;
}

/* Toda la tarjeta es clicable sin anidar enlaces */
.stretched::after {
  content: '';
  position: absolute;
  inset: 0;
}

p {
  flex: 1;
  font-size: 0.95rem;
}

.stack {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
}

.more {
  font-size: 0.75rem;
  color: var(--text-muted);
}
</style>
