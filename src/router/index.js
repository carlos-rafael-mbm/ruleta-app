import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home-view" */ '@/views/HomeView.vue')
    },
    {
      path: '/game',
      name: 'game-view',
      component: () => import(/* webpackChunkName: "game-view" */ '@/views/GameView.vue')
    }
  ]
})

export default router
