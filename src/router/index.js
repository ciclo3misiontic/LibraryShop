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
    path: '/Profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/News',
    name: 'News',
    component: () => import('../views/News.vue')
  },
  {
    path: '/Team',
    name: 'Team',
    component: () => import('../views/Team.vue')
  },
  {
    path: '/Books',
    name: 'Books',
    component: () => import('../views/Books.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
