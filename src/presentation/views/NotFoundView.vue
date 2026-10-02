<script setup lang="ts">
import BaseButton from '@/presentation/components/ui/BaseButton.vue'
</script>

<template>
  <section class="section">
    <div class="container center">
      <p class="code mono">404</p>
      <h1>Página no encontrada</h1>
      <p>La página que buscas no existe.</p>
      <BaseButton to="/">Volver al inicio</BaseButton>
    </div>
  </section>
</template>

<style scoped>
.center {
  display: grid;
  justify-items: center;
  gap: 16px;
  text-align: center;
  padding-block: 60px;
}

.code {
  font-size: 4rem;
  color: var(--accent);
  line-height: 1;
}
</style>
