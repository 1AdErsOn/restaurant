import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
const TaskView = () => import('../views/TaskView.vue')

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/task', name: 'Task', component: TaskView },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  },
  { 
    path: '/auth', 
    name: 'Auth', 
    component: () => import('../views/Auth/AuthView.vue')
  },
  { 
    path: '/register', 
    name: 'Register', 
    component: () => import('../views/Auth/RegisterView.vue') 
  },
  { 
    path: '/profile', 
    name: 'Profile', 
    component: () => import('../views/Auth/ProfileView.vue')
  },
  { 
    path: '/user', 
    name: 'User', 
    component: () => import('../views/Auth/UserView.vue') 
  },
  { 
    path: '/product', 
    name: 'Product', 
    component: () => import('../views/Inventory/ProductView.vue') 
  },
  { 
    path: '/received', 
    name: 'Received', 
    component: () => import('../views/Inventory/ReceivedView.vue') 
  },
  {
    path: '/client',
    name: 'Client',
    component: () => import('../views/POS/ClientView.vue'),
  },
  { 
    path: '/daily', 
    name: 'Daily', 
    component: () => import('../views/POS/DailyView.vue') 
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/POS/OrderView.vue')
  },
  {
    path: '/pay',
    name: 'Pay',
    component: () => import('../views/POS/PayView.vue'),
  },
  { 
    path: '/point-sale', 
    name: 'PointSale', 
    component: () => import('../views/POS/PointSaleView.vue') 
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import('../views/Provider/PaymentView.vue')
  },
  { 
    path: '/supplier', 
    name: 'Supplier', 
    component: () => import('../views/Provider/SupplierView.vue') 
  },
  { 
    path: '/admin', 
    name: 'Admin', 
    component: () => import('../views/Setting/AdminView.vue')
  },
  { 
    path: '/stock', 
    name: 'Stock', 
    component: () => import('../views/Setting/StockView.vue') 
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
