<template>
  <span class="tag mono"><slot /></span>
</template>

<style scoped>
.tag {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent);
  font-size: 0.75rem;
  white-space: nowrap;
}
</style>
