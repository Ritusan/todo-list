import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const home = () => import('../pages/Home.vue')
const login = () => import('../pages/Login.vue')
const color = () => import('../pages/Color.vue')

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: home,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/color',
    name: 'color',
    component: color,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
