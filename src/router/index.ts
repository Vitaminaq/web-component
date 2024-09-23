import type { RouteRecordRaw } from 'vue-router'
import { createRouter as _createRouter } from 'vue-router'
import { routerHistory } from '@/utils/config'

const Home = () => import('@/views/HomeView.vue')
const About = () => import('@/views/AboutView.vue')

const routes: RouteRecordRaw[] = [
  /**
   * 首页 - 新
   */
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

export function createRouter() {
  return _createRouter({
    history: routerHistory(),
    routes
  })
}
