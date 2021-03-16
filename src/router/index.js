import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/botiga',
    name: 'Botiga',
    component: () => import(/* webpackChunkName: "botiga" */ '../views/Botiga.vue')
  },
  {
    path: '/clients',
    name: 'Clients',
    component: () => import(/* webpackChunkName: "clients" */ '../views/Clients.vue')
  },
  {
    path: '/magatzem',
    name: 'Magatzem',
    component: () => import(/* webpackChunkName: "magatzem" */ '../views/Magatzem.vue')
  },
  {
    path: '/proveidors',
    name: 'Proveidors',
    component: () => import(/* webpackChunkName: "proveidors" */ '../views/Proveidors.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
