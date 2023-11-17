import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/AboutView.vue'),
      redirect: '/home/welcome',
      children: [
        {
          path: '/home/welcome',
          name: 'welcome',
          component: () => import('../views/AboutView.vue')
        },
        {}
      ]
    }
  ]
})

export default router
