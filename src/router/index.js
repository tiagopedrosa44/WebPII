import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingView from '../views/LandingPageView.vue'
import RegistoView from '../views/RegistoView.vue'
import LoginView from '../views/LoginView.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/Home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Registo',
      name: 'registo',
      component: RegistoView
    },
    {
      path: '/Login',
      name: 'login',
      component: LoginView
    }
  ]
})

export default router