import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
const AuthView = () => import('../views/AuthView.vue')
const ProfileView = () => import('../views/ProfileView.vue')
const UserView = () => import('../views/UserView.vue')
const PointSaleView = () => import('../views/PointSaleView.vue')
const ProductView = () => import('../views/ProductView.vue')
const TaskView = () => import('../views/TaskView.vue')
const DailyView = () => import('../views/DailyView.vue')
const AdminView = () => import('../views/AdminView.vue')
const SupplierView = () => import('../views/SupplierView.vue')
const StockView = () => import('../views/StockView.vue')
const ReceivedView = () => import('../views/ReceivedView.vue')
const RegisterView = () => import('../views/RegisterView.vue')

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/auth', name: 'auth', component: AuthView },
  { path: '/profile', name: 'profile', component: ProfileView },
  { path: '/admin', name: 'admin', component: AdminView },
  { path: '/user', name: 'user', component: UserView },
  { path: '/point-sale', name: 'point', component: PointSaleView },
  { path: '/product', name: 'product', component: ProductView },
  { path: '/task', name: 'task', component: TaskView },
  { path: '/daily', name: 'daily', component: DailyView },
  { path: '/supplier', name: 'supplier', component: SupplierView },
  { path: '/stock', name: 'stock', component: StockView },
  { path: '/received', name: 'received', component: ReceivedView },
  { path: '/register', name: 'register', component: RegisterView },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('../views/OrderView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
