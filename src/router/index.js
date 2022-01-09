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
    path: '/breed/:breed',
    name: 'Fotos',
    component: () => import('../views/Breed.vue'),
    props: true
  },
  {
    path: '*',
    name: 'no-route',
    component: () => import('../views/NoRoute.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
