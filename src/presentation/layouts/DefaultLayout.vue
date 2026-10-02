<script setup lang="ts">
import AppFooter from '@/presentation/components/layout/AppFooter.vue'
import AppHeader from '@/presentation/components/layout/AppHeader.vue'
</script>

<template>
  <a class="skip-link" href="#main">Saltar al contenido</a>
  <AppHeader />
  <main id="main">
    <slot />
  </main>
  <AppFooter />
</template>

<style scoped>
main {
  min-height: calc(100vh - var(--header-h));
}

.skip-link {
  position: absolute;
  left: 16px;
  top: -48px;
  z-index: 100;
  padding: 8px 14px;
  border-radius: var(--radius-sm);
  background: var(--accent);
  color: var(--on-accent);
  font-weight: 600;
}

.skip-link:focus {
  top: 12px;
}
</style>
