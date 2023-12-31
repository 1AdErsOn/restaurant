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
    path: '/pay-user',
    name: 'PayUser',
    component: () => import('../views/Auth/PayUserView.vue')
  },
  {
    path: '/pay-user/:id',
    name: 'EditPay',
    component: () => import('../views/Auth/EditPayView.vue'),
    props: true
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Auth/RegisterView.vue')
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: () => import('../views/Auth/ProfileView.vue'),
    props: true
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
    path: '/receipt',
    name: 'Receipt',
    component: () => import('../views/Inventory/ReceiptView.vue')
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: () => import('../views/Inventory/DeliveryView.vue')
  },
  {
    path: '/client',
    name: 'Client',
    component: () => import('../views/POS/ClientView.vue')
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
    component: () => import('../views/POS/PayView.vue')
  },
  {
    path: '/point-sale',
    name: 'PointSale',
    component: () => import('../views/POS/PointSaleView.vue')
  },
  {
    path: '/return',
    name: 'Return',
    component: () => import('../views/Provider/ReturnView.vue')
  },
  {
    path: '/return/:id',
    name: 'ReturnId',
    component: () => import('../views/Provider/EditReturnView.vue'),
    props: true
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import('../views/Provider/PaymentView.vue')
  },
  {
    path: '/payment/:id',
    name: 'PaymentId',
    component: () => import('../views/Provider/EditPaymentView.vue'),
    props: true
  },
  {
    path: '/provider/:id',
    name: 'Supplier',
    component: () => import('../views/Provider/EditProviderView.vue'),
    props: true
  },
  {
    path: '/provider',
    name: 'Provider',
    component: () => import('../views/Provider/ProviderView.vue')
  },
  {
    path: '/purchase',
    name: 'Purchase',
    component: () => import('../views/Provider/PurchaseView.vue')
  },
  {
    path: '/purchase/:id',
    name: 'PurchaseId',
    component: () => import('../views/Provider/EditPurchaseView.vue'),
    props: true
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
