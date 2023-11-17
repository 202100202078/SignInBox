import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home/welcome'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
