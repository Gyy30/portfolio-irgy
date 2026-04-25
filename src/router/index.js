import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
import Forgot from '../views/Forgot.vue'


const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/login',
    component: Login
  },
  {
  path: '/register',
  component: () => import('../views/Register.vue')
  },
  {
   path: '/services',
   component: Services
  },
  {
   path: '/contact',
   component: Contact
  },
  {
   path: '/forgot',
   component: Forgot
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
