import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import Auth from './modules/auth'
import Product from './modules/product'
import History from './modules/history'
Vue.use(Vuex)

// axios.defaults.headers.common.Authorization = `Bearer ${store.state.token}`

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    Auth,
    Product,
    History
  }
})
