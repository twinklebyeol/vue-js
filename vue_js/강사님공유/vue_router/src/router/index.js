import Vue from 'vue'
import VueRouter from 'vue-router'

import main_page from '../components/main_page.vue'
import sub_page from '../components/sub_page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'main',
    component: main_page
  },
  {
    path: '/sub',
    name: 'sub',
    component: sub_page
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
