import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Main/Home/Home.vue'
import History from '../views/Main/History/History.vue'
// import Main from '../views/Main/index.vue'
import Product from '../views/Main/Product/Product.vue'
import LandingPage from '../views/LandingPage/index.vue'
import Login from '../views/Auth/Login/Login.vue'
import Register from '../views/Auth/Register/Register.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [ //
  {
    path: '/',
    name: 'landingpage',
    component: LandingPage,
    meta: { requiresVisitor: true }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresVisitor: true }
  },
  {
    path: '/product',
    name: 'product',
    component: Product
  },
  {
    path: '/history',
    name: 'history',
    component: History
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/home'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
