<script setup lang="ts">
import AboutSection from '@/presentation/components/sections/AboutSection.vue'
import ContactSection from '@/presentation/components/sections/ContactSection.vue'
import EducationSection from '@/presentation/components/sections/EducationSection.vue'
import ExperienceSection from '@/presentation/components/sections/ExperienceSection.vue'
import HeroSection from '@/presentation/components/sections/HeroSection.vue'
import ProjectsSection from '@/presentation/components/sections/ProjectsSection.vue'
import SkillsSection from '@/presentation/components/sections/SkillsSection.vue'
import { useAsync } from '@/presentation/composables/useAsync'
import { useContainer } from '@/presentation/composables/useContainer'
import { useProfile } from '@/presentation/composables/useProfile'

const { getSkillsByCategory, getProjects, getExperience, getEducation } = useContainer()
const { profile } = useProfile()

const { data, error } = useAsync(async () => {
  const [skills, projects, experience, education] = await Promise.all([
    getSkillsByCategory.execute(),
    getProjects.execute(),
    getExperience.execute(),
    getEducation.execute(),
  ])
  return { skills, projects, experience, education }
})
</script>

<template>
  <template v-if="profile && data">
    <HeroSection :profile="profile" />
    <AboutSection :profile="profile" />
    <SkillsSection :groups="data.skills" />
    <ProjectsSection :projects="data.projects" />
    <ExperienceSection :items="data.experience" />
    <EducationSection :education="data.education" />
    <ContactSection />
  </template>

  <p v-else-if="error" class="container state" role="alert">
    No se pudo cargar el contenido. Recarga la página para intentarlo de nuevo.
  </p>
  <p v-else class="container state">Cargando…</p>
</template>

<style scoped>
.state {
  padding-block: 120px;
  text-align: center;
  color: var(--text-muted);
}
</style>
