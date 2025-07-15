import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Callback from '../views/Callback.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/home', component: Home },
  { path: '/callback', component: Callback}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
