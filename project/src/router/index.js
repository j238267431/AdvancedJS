import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue'),
  },
  {
    path: '/men',
    name: 'Men',
    component: () => import('../views/Men.vue'),
  },
  {
    path: '/women',
    name: 'Women',
    component: () => import('../views/Women.vue'),
  },
  {
    path: '/shippingcart',
    name: 'shippingcart',
    component: () => import('../views/shippingCart.vue'),
  },
  {
    path: '/singlepage/:id',
    name: 'singlepage',
    component: () => import('../views/singlePage.vue'),
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/Checkout.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
