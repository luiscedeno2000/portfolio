<script setup lang="ts">
import type { Profile } from '@/domain/entities'
import SectionHeading from '@/presentation/components/ui/SectionHeading.vue'

defineProps<{ profile: Profile }>()
</script>

<template>
  <section id="sobre-mi" class="section">
    <div class="container grid">
      <SectionHeading eyebrow="01. Sobre mí" title="Quién soy" />
      <div class="content">
        <p v-for="(paragraph, i) in profile.about" :key="i">{{ paragraph }}</p>
        <dl class="facts">
          <div>
            <dt>Formación</dt>
            <dd>{{ profile.headline }}</dd>
          </div>
          <div>
            <dt>Ubicación</dt>
            <dd>{{ profile.location }}</dd>
          </div>
          <div>
            <dt>Idiomas</dt>
            <dd>
              <span v-for="(lang, i) in profile.languages" :key="lang.name">
                {{ lang.name }} ({{ lang.level }})<template v-if="i < profile.languages.length - 1"> · </template>
              </span>
            </dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd><a :href="`mailto:${profile.email}`">{{ profile.email }}</a></dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 48px;
}

.content {
  display: grid;
  gap: 18px;
  font-size: 1.05rem;
}

.facts {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px 32px;
  margin: 12px 0 0;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}

dt {
  font-size: 0.8rem;
  color: var(--text-muted);
}

dd {
  margin: 0;
  color: var(--text-strong);
  font-size: 0.95rem;
}

dd a:hover {
  color: var(--accent);
}

@media (max-width: 820px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>
