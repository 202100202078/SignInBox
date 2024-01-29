import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores'

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
          name: 'order',
          component: () => import('@/views/home/OrderPage.vue')
        },
        {
          path: '/home/user',
          name: 'user',
          component: () => import('@/views/home/UserPage.vue')
        },
        {
          path: '/admin/interface',
          name: 'adminInterface',
          component: () => import('@/views/admin/InterfacePage.vue')
        },
        {
          path: '/admin/recharge',
          name: 'adminRecharge',
          component: () => import('@/views/admin/RechargePage.vue')
        },
        {
          path: '/admin/user',
          name: 'adminUser',
          component: () => import('@/views/admin/UserPage.vue')
        }
      ]
    },
    {
      path: '/system',
      name: 'system',
      component: () => import('@/views/system/SystemPage.vue'),
      redirect: '/system/index',
      children: [
        {
          path: '/system/index',
          name: 'index',
          component: () => import('@/views/system/IndexPage.vue')
        },
        {
          path: '/system/usermanagement',
          name: 'usermanagement',
          component: () => import('@/views/system/UserManagement.vue')
        },
        {
          path: '/system/rolemanagement',
          name: 'rolemanagement',
          component: () => import('@/views/system/RoleManagement.vue')
        },
        {
          path: '/system/menumanagement',
          name: 'menumanagement',
          component: () => import('@/views/system/MenuManagement.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('@/views/Else/ElsePage.vue')
    }
  ]
})

export default router

router.beforeEach((to) => {
  const userStore = useUserStore()
  if (
    // 检查用户是否有Token// 避免无限重定向
    !userStore.token &&
    to.name !== 'login'
  ) {
    // 将用户重定向到登录页面
    return { name: 'login' }
  }
})
