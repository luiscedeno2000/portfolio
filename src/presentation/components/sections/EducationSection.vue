<script setup lang="ts">
import type { EducationSummary } from '@/application/use-cases'
import SectionHeading from '@/presentation/components/ui/SectionHeading.vue'
import { formatPeriod } from '@/shared/utils/format'

defineProps<{ education: EducationSummary }>()
</script>

<template>
  <section id="formacion" class="section">
    <div class="container">
      <SectionHeading eyebrow="05. Formación" title="Educación y certificaciones" />

      <div class="grid">
        <div class="column">
          <article v-for="degree in education.degrees" :key="degree.degree" class="card">
            <p class="period mono">{{ formatPeriod(degree.startDate, degree.endDate) }}</p>
            <h3>{{ degree.degree }}</h3>
            <p class="institution">{{ degree.institution }} · {{ degree.location }}</p>
            <p v-if="degree.thesis" class="thesis"><strong>Tesis:</strong> {{ degree.thesis }}</p>
          </article>

          <article v-if="education.certificates.length" class="card">
            <h3 class="small">Certificados</h3>
            <ul class="certs">
              <li v-for="cert in education.certificates" :key="cert.name">
                <span class="name">{{ cert.name }}</span>
                <span class="issuer">{{ cert.issuer }}</span>
              </li>
            </ul>
          </article>
        </div>

        <article v-if="education.courses.length" class="card">
          <h3 class="small">Cursos</h3>
          <ul class="courses">
            <li v-for="course in education.courses" :key="course.name">
              <span>{{ course.name }}</span>
              <span class="issuer mono">{{ course.issuer }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: start;
}

.column {
  display: grid;
  gap: 20px;
}

.card {
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
}

.period {
  font-size: 0.8rem;
  color: var(--accent);
  margin-bottom: 6px;
}

h3 {
  font-size: 1.15rem;
}

h3.small {
  font-size: 1rem;
  margin-bottom: 14px;
}

.institution {
  margin-top: 4px;
  font-size: 0.92rem;
  color: var(--text-muted);
}

.thesis {
  margin-top: 14px;
  font-size: 0.92rem;
}

.thesis strong {
  color: var(--text-strong);
  font-weight: 600;
}

.certs li {
  display: grid;
  gap: 2px;
}

.name {
  color: var(--text-strong);
  font-size: 0.95rem;
}

.issuer {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.courses {
  display: grid;
}

.courses li {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
  font-size: 0.92rem;
}

.courses li:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.courses li:first-child {
  padding-top: 0;
}

@media (max-width: 820px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
