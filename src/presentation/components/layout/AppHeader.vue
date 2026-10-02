<script setup lang="ts">
import { ref } from 'vue'
import { useProfile } from '@/presentation/composables/useProfile'
import ThemeToggle from './ThemeToggle.vue'

const { profile } = useProfile()
const open = ref(false)

const links = [
  { label: 'Sobre mí', hash: '#sobre-mi' },
  { label: 'Habilidades', hash: '#habilidades' },
  { label: 'Proyectos', hash: '#proyectos' },
  { label: 'Experiencia', hash: '#experiencia' },
  { label: 'Formación', hash: '#formacion' },
  { label: 'Contacto', hash: '#contacto' },
]
</script>

<template>
  <header class="header">
    <nav class="container nav" aria-label="Principal">
      <RouterLink to="/" class="brand mono" @click="open = false">
        &lt;{{ profile?.name.split(' ')[0] ?? 'dev' }} /&gt;
      </RouterLink>

      <button
        class="menu-btn"
        type="button"
        :aria-expanded="open"
        aria-controls="nav-links"
        aria-label="Abrir menú"
        @click="open = !open"
      >
        <span /><span /><span />
      </button>

      <ul id="nav-links" class="links" :class="{ open }">
        <li v-for="link in links" :key="link.hash">
          <RouterLink :to="{ path: '/', hash: link.hash }" @click="open = false">
            {{ link.label }}
          </RouterLink>
        </li>
        <li><ThemeToggle /></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  height: var(--header-h);
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.nav {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  color: var(--text-strong);
  font-weight: 700;
}

.links {
  display: flex;
  align-items: center;
  gap: 22px;
  font-size: 0.9rem;
}

.links a {
  transition: color var(--transition);
}

.links a:hover {
  color: var(--accent);
}

.menu-btn {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  background: none;
  border: 0;
  cursor: pointer;
}

.menu-btn span {
  width: 22px;
  height: 2px;
  background: var(--text-strong);
}

@media (max-width: 960px) {
  .menu-btn {
    display: flex;
  }

  .links {
    position: absolute;
    top: var(--header-h);
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    padding: 24px 20px;
    background: var(--bg-elevated);
    border-bottom: 1px solid var(--border);
    display: none;
  }

  .links.open {
    display: flex;
  }
}
</style>
