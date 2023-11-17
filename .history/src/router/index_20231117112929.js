import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/LoginPage.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/layout/LayOutContainer.vue'),
      redirect: '/home/welcome',
      children: [
        {
          path: '/home/welcome',
          name: 'welcome',
          component: () => import('@/views/home/WelcomePage.vue')
        },
        {
          path: '/home/interface',
          name: 'interface',
          component: () => import('@/views/home/InterfacePage.vue')
        },
        {
          path: '/home/recharge',
          name: 'recharge',
          component: () => import('@/views/home/RechargePage.vue')
        },
        {
          path: '/home/order',
          name: 'recharge',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/home/adminInterface',
          name: 'adminorder',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/home/adminRecharge',
          name: 'adminorder',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/home/adminUser',
          name: 'adminorder',
          component: () => import('../views/AboutView.vue')
        }
      ]
    }
  ]
})

export default router
