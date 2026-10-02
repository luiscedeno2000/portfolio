<script setup lang="ts">
import { watch } from 'vue'
import { PROJECT_CATEGORY_LABELS } from '@/presentation/components/projects/labels'
import BaseButton from '@/presentation/components/ui/BaseButton.vue'
import BaseTag from '@/presentation/components/ui/BaseTag.vue'
import { useAsync } from '@/presentation/composables/useAsync'
import { useContainer } from '@/presentation/composables/useContainer'

const props = defineProps<{ slug: string }>()

const { getProjectBySlug } = useContainer()
const { data: project, loading, run } = useAsync(() => getProjectBySlug.execute(props.slug))

watch(() => props.slug, run)
</script>

<template>
  <section class="section">
    <div class="container narrow">
      <RouterLink :to="{ path: '/', hash: '#proyectos' }" class="back mono">← Volver a proyectos</RouterLink>

      <p v-if="loading" class="state">Cargando…</p>

      <article v-else-if="project">
        <p class="meta mono">
          {{ project.client }} · {{ PROJECT_CATEGORY_LABELS[project.category] }}
          <template v-if="project.year"> · {{ project.year }}</template>
        </p>
        <h1>{{ project.title }}</h1>
        <p class="summary">{{ project.summary }}</p>

        <img v-if="project.imageUrl" :src="project.imageUrl" :alt="`Captura de ${project.title}`" class="cover" />

        <p class="description">{{ project.description }}</p>

        <template v-if="project.highlights?.length">
          <h2>Puntos clave</h2>
          <ul class="highlights">
            <li v-for="(h, i) in project.highlights" :key="i">{{ h }}</li>
          </ul>
        </template>

        <h2>Tecnologías</h2>
        <ul class="stack">
          <li v-for="tech in project.stack" :key="tech"><BaseTag>{{ tech }}</BaseTag></li>
        </ul>

        <p v-if="project.note" class="note">{{ project.note }}</p>

        <div v-if="project.demoUrl || project.repoUrl" class="actions">
          <BaseButton v-if="project.demoUrl" :href="project.demoUrl">Ver demo</BaseButton>
          <BaseButton v-if="project.repoUrl" :href="project.repoUrl" variant="ghost">Código fuente</BaseButton>
        </div>
      </article>

      <div v-else class="state">
        <h1>Proyecto no encontrado</h1>
        <p>El proyecto que buscas no existe o fue movido.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.narrow {
  max-width: 760px;
}

.back {
  display: inline-block;
  margin-bottom: 40px;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.back:hover {
  color: var(--accent);
}

.meta {
  font-size: 0.78rem;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 8px;
}

h1 {
  font-size: clamp(2rem, 5vw, 3rem);
}

h2 {
  font-size: 1.05rem;
  margin: 36px 0 14px;
}

.summary {
  margin-top: 12px;
  font-size: 1.15rem;
}

.cover {
  margin-top: 32px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
}

.description {
  margin-top: 32px;
}

.highlights {
  display: grid;
  gap: 8px;
  padding-left: 18px;
  list-style: disc;
}

.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.note {
  margin-top: 32px;
  padding: 14px 16px;
  border-left: 3px solid var(--accent);
  border-radius: var(--radius-sm);
  background: var(--accent-soft);
  font-size: 0.9rem;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 36px;
}

.state {
  color: var(--text-muted);
}

.state h1 {
  margin-bottom: 12px;
}
</style>
