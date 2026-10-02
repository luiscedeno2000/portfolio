<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Project, ProjectCategory } from '@/domain/entities'
import ProjectCard from '@/presentation/components/projects/ProjectCard.vue'
import { PROJECT_CATEGORY_LABELS } from '@/presentation/components/projects/labels'
import SectionHeading from '@/presentation/components/ui/SectionHeading.vue'

const props = defineProps<{ projects: Project[] }>()

type Filter = ProjectCategory | 'all'

const active = ref<Filter>('all')

// Solo se muestran los filtros de categorías que tienen proyectos.
const filters = computed(() => {
  const present = new Set(props.projects.map((p) => p.category))
  const categories = (Object.keys(PROJECT_CATEGORY_LABELS) as ProjectCategory[]).filter((c) => present.has(c))
  return [
    { label: 'Todos', value: 'all' as Filter },
    ...categories.map((c) => ({ label: PROJECT_CATEGORY_LABELS[c], value: c as Filter })),
  ]
})

const visible = computed(() =>
  active.value === 'all' ? props.projects : props.projects.filter((p) => p.category === active.value),
)
</script>

<template>
  <section id="proyectos" class="section">
    <div class="container">
      <SectionHeading
        eyebrow="03. Proyectos"
        title="Proyectos destacados"
        description="Módulos financieros desarrollados como freelance, soluciones para el sector bancario y mi proyecto de tesis."
      />

      <div class="filters" role="group" aria-label="Filtrar proyectos">
        <button
          v-for="f in filters"
          :key="f.value"
          type="button"
          :class="{ active: active === f.value }"
          :aria-pressed="active === f.value"
          @click="active = f.value"
        >
          {{ f.label }}
        </button>
      </div>

      <div class="grid">
        <ProjectCard v-for="project in visible" :key="project.slug" :project="project" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
}

.filters button {
  padding: 6px 16px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: transparent;
  font-size: 0.88rem;
  cursor: pointer;
  transition: all var(--transition);
}

.filters button:hover {
  border-color: var(--accent);
}

.filters button.active {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--on-accent);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

@media (max-width: 420px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
