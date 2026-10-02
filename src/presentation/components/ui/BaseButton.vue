<script setup lang="ts">
import { computed } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'ghost'
    href?: string
    to?: RouteLocationRaw
    type?: 'button' | 'submit'
    disabled?: boolean
  }>(),
  { variant: 'primary', type: 'button' },
)

const isExternal = computed(() => !!props.href && /^https?:\/\//.test(props.href))
</script>

<template>
  <RouterLink v-if="to" :to="to" class="btn" :class="`btn--${variant}`">
    <slot />
  </RouterLink>
  <a
    v-else-if="href"
    :href="href"
    class="btn"
    :class="`btn--${variant}`"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </a>
  <button v-else :type="type" :disabled="disabled" class="btn" :class="`btn--${variant}`">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 20px;
  border-radius: var(--radius-sm);
  border: 1px solid transparent;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition:
    background-color var(--transition),
    border-color var(--transition),
    transform var(--transition);
}

.btn:hover:not(:disabled) {
  transform: translateY(-1px);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn--primary {
  background: var(--accent);
  color: var(--on-accent);
}

.btn--primary:hover:not(:disabled) {
  background: var(--accent-strong);
}

.btn--ghost {
  background: transparent;
  border-color: var(--border);
  color: var(--text-strong);
}

.btn--ghost:hover {
  border-color: var(--accent);
}
</style>
