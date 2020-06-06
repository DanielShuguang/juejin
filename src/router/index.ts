import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/pages/Home/Home.vue')
  },
  {
    path: '/pins',
    component: () => import('@/pages/Pins/Pins.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
