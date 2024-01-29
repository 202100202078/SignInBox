import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/LoginPage.vue')
    }, //home
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
    }, //admin
    {
      path: '/admin',
      name: 'admin-index',
      component: () => import('@/views/admin/layout/SystemPage.vue'),
      redirect: '/admin/index',
      children: [
        {
          path: '/admin/index',
          name: 'index',
          component: () => import('@/views/admin/index/IndexPage.vue'),
          meta: {
            title: '首页'
          }
        },
        {
          path: '/admin/system',
          name: 'admin-system',
          children: [
            {
              path: '/admin/system/menu',
              name: 'admin-system-menu',
              component: () =>
                import('@/views/admin/system/MenuManagement.vue'),
              meta: {
                title: '系统管理'
              }
            },
            {
              path: '/admin/system/user',
              name: 'admin-system-user',
              component: () => import('@/views/admin/system/UserManagement.vue')
            },
            {
              path: '/admin/system/role',
              name: 'admin-system-role',
              component: () => import('@/views/admin/system/RoleManagement.vue')
            }
          ]
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
    // 检查在pinia用户是否有Token并且是否去往login
    !userStore.token &&
    to.name !== 'login'
  ) {
    // 将用户重定向到登录页面
    return { name: 'login' }
  }
})
