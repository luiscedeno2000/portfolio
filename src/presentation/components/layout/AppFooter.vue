<script setup lang="ts">
import SocialIcon from '@/presentation/components/ui/SocialIcon.vue'
import { useProfile } from '@/presentation/composables/useProfile'

const { profile } = useProfile()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container inner">
      <p>© {{ year }} {{ profile?.name }}. Hecho con Vue y TypeScript.</p>
      <ul class="socials">
        <li v-for="social in profile?.socials" :key="social.url">
          <a :href="social.url" :aria-label="social.label" target="_blank" rel="noopener noreferrer">
            <SocialIcon :name="social.icon" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding-block: 28px;
  font-size: 0.88rem;
  color: var(--text-muted);
}

.inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.socials {
  display: flex;
  gap: 16px;
}

.socials a:hover {
  color: var(--accent);
}
</style>
