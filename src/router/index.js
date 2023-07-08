import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import ProfileView from '../views/ProfileView.vue'
import AdminView from '../views/AdminView.vue'
import UserView from '../views/UserView.vue'
import PointSaleView from '../views/PointSaleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    },
    {
      path: '/user',
      name: 'user',
      component: UserView
    },
    {
      path: '/point-sale',
      name: 'point',
      component: PointSaleView
    }
  ]
})

export default router
