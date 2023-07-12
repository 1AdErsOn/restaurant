import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import ProfileView from '../views/ProfileView.vue'
import UserView from '../views/UserView.vue'
import PointSaleView from '../views/PointSaleView.vue'
import ProductView from '../views/ProductView.vue'
import TaskView from '../views/TaskView.vue'
import DailyView from '../views/DailyView.vue'
const AdminView = () => import('../views/AdminView.vue')
const SupplierView = () => import('../views/SupplierView.vue')

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
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView
    },
    {
      path: '/task',
      name: 'task',
      component: TaskView
    },
    {
      path: '/daily',
      name: 'daily',
      component: DailyView
    },
    {
      path: '/supplier',
      name: 'supplier',
      component: SupplierView
    }
  ]
})

export default router
