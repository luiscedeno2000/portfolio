<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
}>()
</script>

<template>
  <header class="heading">
    <p class="eyebrow mono">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="description" class="description">{{ description }}</p>
  </header>
</template>

<style scoped>
.heading {
  margin-bottom: 48px;
  max-width: 640px;
}

.eyebrow {
  color: var(--accent);
  font-size: 0.85rem;
  margin-bottom: 8px;
}

h2 {
  font-size: clamp(1.8rem, 4vw, 2.4rem);
}

.description {
  margin-top: 12px;
}
</style>
