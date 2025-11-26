import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tentang-kami',
      name: 'about',
      component: () => import('../views/AboutUsView.vue'),
    },
    {
      path: '/galeri',
      name: 'galeri',
      component: () => import('../views/GaleryView.vue'),
    },
    {
      path: '/tiket',
      name: 'tiket',
      component: () => import('../views/TicketView.vue'),
    },
  ],
})

export default router
