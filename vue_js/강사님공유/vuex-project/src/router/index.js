import Vue from 'vue'
import VueRouter from 'vue-router'

import mainPage from '../components/main_page'
import subPage from '../components/sub_page'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: mainPage
  },
  {
    path: '/main',
    name: 'main_page',
    component: mainPage
  },
  {
    path: '/sub',
    name: 'sub_page',
    component: subPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
