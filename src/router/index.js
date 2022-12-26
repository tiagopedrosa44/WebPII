import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingView from '../views/LandingPageView.vue'
<<<<<<< HEAD
import LoginView from '../views/LoginView.vue'
import RegistoView from '../views/RegistoView.vue'
=======
import RegistoView from '../views/RegistoView.vue'
import LoginView from '../views/LoginView.vue'
import { userStore } from "../stores/userStore.js";
>>>>>>> 7acbd910148223c82142058367319cce07a437d3

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
<<<<<<< HEAD
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path:'/registar',
      name:'registar',
      component: RegistoView,
    }

    
=======
      path: '/registo',
      name: 'registo',
      component: RegistoView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
>>>>>>> 7acbd910148223c82142058367319cce07a437d3
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