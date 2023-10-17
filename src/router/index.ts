import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/AppHome.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (!router.hasRoute(to.name!)) {
    next({ path: to.path, replace: true })
  } else {
    next()
  }
})

export default router
