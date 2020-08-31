import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    register: {},
    token: localStorage.getItem('token') || null,
    products: [],
    postProduct: {}
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      state.token = payload.token
    },
    setRegister(state, payload) {
      state.register = payload
    },
    setProducts(state, payload) {
      state.products = payload
    },
    setProductsByName(state, payload) {
      state.products = payload
    },
    setProductsByNameDesc(state, payload) {
      state.products = payload
    },
    setProductsByPriceMin(state, payload) {
      state.products = payload
    },
    setProductsByPricePlus(state, payload) {
      state.products = payload
    },
    postProduct(state, payload) {
      state.postProduct = payload
    }
  },
  actions: {
    interceptorsResponse() {
      axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response
      }, function (error) {
        console.log(error)
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error)
      })
    },
    interceptorsRequest(setex) {
      axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        config.headers.Authorization = `Bearer ${setex.state.token}`
        return config
      }, function (error) {
        // Do something with request error
        return Promise.reject(error)
      })
    },
    login(setex, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:4100/api/v1/users/login', payload)
          .then((res) => {
            if (res.data.status_code !== 200) {
              alert('email or password not correct')
            } else {
              console.log(res)
              setex.commit('setUser', res.data.result)
              localStorage.setItem('token', res.data.result.token)
              resolve(res.data.result[0])
            }
          }).catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    register(setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:4100/api/v1/users/register', payload)
          .then((res) => {
            resolve(res.data.result)
          }).catch((err) => {
            reject(err)
          })
      })
    },
    getProducts(setex) {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:4100/api/v1/products')
          .then((res) => {
            // console.log(res)
            setex.commit('setProducts', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getProductsByName(setex) {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:4100/api/v1/products?orderby=name&sort=asc')
          .then((res) => {
            // console.log(res)
            setex.commit('setProductsByName', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getProductsByNameDesc(setex) {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:4100/api/v1/products?orderby=name&sort=desc')
          .then((res) => {
            // console.log(res)
            setex.commit('setProductsByNameDesc', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getProductsByPriceMin(setex) {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:4100/api/v1/products?orderby=price&sort=asc')
          .then((res) => {
            // console.log(res)
            setex.commit('setProductsByPriceMin', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getProductsByPricePlus(setex) {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:4100/api/v1/products?orderby=price&sort=desc')
          .then((res) => {
            // console.log(res)
            setex.commit('setProductsByPricePlus', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    postProduct(setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:4100/api/v1/products', payload)
          .then((res) => {
            resolve(res.data.result)
          }).catch((err) => {
            reject(err)
          })
      })
    }
  },
  getters: {
    isLogin(state) {
      return state.token !== null
    },
    isRegister(state) {
      return state.register
    },
    products(state) {
      return state.products
    },
    isPostProducts(state) {
      return state.postProduct
    },
    isSetProductsByName(state) {
      return state.products
    },
    isSetProductsByNameDesc(state) {
      return state.products
    },
    isSetProductsByPriceMin(state) {
      return state.products
    },
    isSetProductsByPricePlus(state) {
      return state.products
    }
  },
  modules: {}
})
