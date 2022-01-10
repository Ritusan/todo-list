import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const home = () => import('../pages/Home.vue')
const todolist = () => import('../pages/TodoList.vue')
const login = () => import('../pages/Login.vue')
const color = () => import('../pages/Color.vue')
const music = () => import('../pages/Music.vue')

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/todolist' },
  {
    path: '/home',
    name: 'home',
    component: home,
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: todolist,
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
  {
    path: '/music',
    name: 'music',
    component: music,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
