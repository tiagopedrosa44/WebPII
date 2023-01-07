import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingView from '../views/LandingPageView.vue'
import LoginView from '../views/LoginView.vue'
import RegistoView from '../views/RegistoView.vue'
import RankingsView from '../views/RankingsView.vue'
import faqView from '../views/faqView.vue'
import PerfilView from '../views/PerfilView.vue'
import AdminView from '../views/AdminView.vue'
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

    },
    {
      path: '/faq',
      name: 'faq',
      component: faqView,
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: PerfilView,
    },
    {
      path:'/admin',
      name:'admin',
      component: AdminView,
    }
  ]
})


//navigation guard
router.beforeEach((to, from, next) => {
  const paginasAbertas = ['/', '/registar', '/login'];
  const requerLogin = !paginasAbertas.includes(to.path);

  if (requerLogin && localStorage.getItem("logado") == "false") {
    return next('/login')
  }
  next();
})

export default router