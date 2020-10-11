import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/watch'
  },
  {
    path: '/watch/:username?',
    name: 'Watch',
    component: () => import('../views/Watch.vue')
  },
  {
    path: '/translit',
    name: 'Translit',
    component: () => import('../views/Translit.vue')
  },
  {
    path: '/alphabet',
    name: 'Alphabet',
    component: () => import('../views/Alphabet.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
