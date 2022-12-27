import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingView from '../views/LandingPageView.vue'
import LoginView from '../views/LoginView.vue'
import RegistoView from '../views/RegistoView.vue'
import RankingsView from '../views/RankingsView.vue'
//import { userStore } from "../stores/userStore.js";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/registar',
      name: 'registar',
      component: RegistoView,
    },
    {
      path: '/rankings',
      name: 'rankings',
      component: RankingsView,

    }
  ]
})


//navigation guard
router.beforeEach((to, from, next) => {
  const paginasAbertas = ['/', '/registo', '/login'];
  const requerLogin = !paginasAbertas.includes(to.path);

  if (requerLogin && localStorage.getItem("logado") == "false") {
    return next('/login')
  }
  next();
})

export default router