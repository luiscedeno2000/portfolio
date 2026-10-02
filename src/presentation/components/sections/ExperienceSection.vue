<script setup lang="ts">
import type { Experience } from '@/domain/entities'
import BaseTag from '@/presentation/components/ui/BaseTag.vue'
import SectionHeading from '@/presentation/components/ui/SectionHeading.vue'
import { formatPeriod } from '@/shared/utils/format'

defineProps<{ items: Experience[] }>()
</script>

<template>
  <section id="experiencia" class="section">
    <div class="container">
      <SectionHeading eyebrow="04. Experiencia" title="Trayectoria profesional" />

      <ol class="timeline">
        <li v-for="item in items" :key="`${item.company}-${item.startDate}`" class="entry">
          <p class="period mono">{{ formatPeriod(item.startDate, item.endDate) }}</p>
          <div>
            <h3>{{ item.position }} <span class="company">· {{ item.company }}</span></h3>
            <p class="location">{{ item.location }}</p>
            <ul class="highlights">
              <li v-for="(h, i) in item.highlights" :key="i">{{ h }}</li>
            </ul>
            <ul class="stack">
              <li v-for="tech in item.stack" :key="tech"><BaseTag>{{ tech }}</BaseTag></li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  margin: 0;
  padding: 0;
  list-style: none;
  border-left: 1px solid var(--border);
}

.entry {
  position: relative;
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 24px;
  padding: 0 0 48px 32px;
}

.entry::before {
  content: '';
  position: absolute;
  left: -6px;
  top: 6px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--bg);
  border: 2px solid var(--accent);
}

.period {
  font-size: 0.82rem;
  color: var(--text-muted);
  padding-top: 2px;
}

h3 {
  font-size: 1.1rem;
}

.company {
  color: var(--accent);
  font-weight: 500;
}

.location {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 2px;
}

.highlights {
  display: grid;
  gap: 6px;
  margin: 14px 0;
  padding-left: 18px;
  list-style: disc;
}

.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

@media (max-width: 720px) {
  .entry {
    grid-template-columns: 1fr;
    gap: 6px;
  }
}
</style>
