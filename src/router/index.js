import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingView from '../views/LandingPageView.vue'
import RegistoView from '../views/RegistoView.vue'
import LoginView from '../views/LoginView.vue'
import { userStore } from "../stores/userStore.js";

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

router.beforeEach((to, from, next) => {
  const paginasAbertas = ['/', '/Registo', '/Login'];
  const requerLogin = !paginasAbertas.includes(to.path);
  const logado = userStore.utilizadorLogado;

  if (requerLogin && !logado) {
    return next('/Login');
  }

  next();
})

export default router