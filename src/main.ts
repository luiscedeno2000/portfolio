import { createApp } from 'vue'
import { createContainer } from '@/di/container'
import App from '@/presentation/App.vue'
import { CONTAINER_KEY } from '@/presentation/composables/useContainer'
import router from '@/presentation/router'
import '@/presentation/styles/main.css'

createApp(App).provide(CONTAINER_KEY, createContainer()).use(router).mount('#app')
