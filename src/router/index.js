import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VideoComponent from '@/components/VideoComponent.vue'
import TabelaComponent from '@/components/TabelaComponent.vue'
import ImagensComponent from '@/components/ImagensComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/videos",
      name: "videos",
      component: VideoComponent
    },
    {
      path: "/tabela",
      name: "tabela",
      component: TabelaComponent
    },
    {
      path: "/imagens",
      name: "imagens",
      component: ImagensComponent
    }
  ]
})

export default router
