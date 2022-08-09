import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { urlPath } from '@/utils/index'

const routes = [
  {
    path: urlPath.HOME.path,
    component: HomeView
  },
  {
    path: urlPath.ABOUT.path,
    component: () => import('../views/AboutView.vue')
  },
  {
    path: urlPath.DETAIL.path,
    component: () => import('../views/DetailView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
