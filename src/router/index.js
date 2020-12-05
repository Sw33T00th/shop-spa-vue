import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component:() => import('../views/Main.vue')
  },
  {
    path: '/Products',
    name: 'Products',
    component:() => import('../views/Products.vue')
  },
  {
    path: '/Cart',
    name: 'Cart',
    component:() => import('../views/Cart.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
