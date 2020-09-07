import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Router from '../router/index'

Vue.use(Vuex)

// axios.defaults.headers.common.Authorization = `Bearer ${store.state.token}`

export default new Vuex.Store({
  state: {
    user: {},
    register: {},
    token: localStorage.getItem('token') || null,
    products: [],
    postProduct: {},
    history: [],
    carts: []
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      state.token = payload.token
    },
    setToken(state, payload) {
      state.token = payload
    },
    setRegister(state, payload) {
      state.register = payload
    },
    setProducts(state, payload) {
      state.products = payload
    },
    // History
    setGetHistory(state, payload) {
      state.history = payload
    },
    // Carts
    setAddToCart(state, payload) {
      const isCart = state.carts.find((item) => {
        return item.id === payload.id
      })
      if (!isCart) {
        const item = payload
        item.count = 1
        state.carts.push(item)
      } else {
        state.carts = state.carts.filter((item) => {
          return item.id !== payload.id
        })
      }
    },
    setPlus(state, payload) {
      const isPlus = state.carts.map((item) => {
        return item.id === payload.id
      })
      if (isPlus) {
        const item = payload
        item.count = 1
        state.carts.push(item)
      } else {

      }
    }
  },
  actions: {
    interceptorsResponse(setex) {
      axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response
      }, function (error) {
        console.log(error)
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.log(error.response)
        if (error.response.status === 401 && error.response.data.result === 'Invalid Token') {
          localStorage.removeItem('token')
          setex.commit('setToken', null)
          Router.push('/')
          alert('Invalid Token')
        } else if (error.response.status === 401 && error.response.data.result === 'Token Expired') {
          localStorage.removeItem('token')
          setex.commit('setToken', null)
          Router.push('/')
          alert('Maaf Session Sudah Habis Silahkan Login Kembali')
        }
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
        axios.post(`${process.env.VUE_APP_BASE_URL}api/v1/users/login`, payload)
          .then((res) => {
            if (res.data.status_code !== 200) {
              alert('email or password not correct')
            } else {
              console.log(res)
              setex.commit('setUser', res.data.result)
              localStorage.setItem('token', res.data.result.token)
              // axios.defaults.headers.common.Authorization = `Bearer ${setex.state.token}`
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
        axios.post(`${process.env.VUE_APP_BASE_URL}api/v1/users/register`, payload)
          .then((res) => {
            resolve(res.data.result)
          }).catch((err) => {
            reject(err)
          })
      })
    },
    getProducts(setex) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}api/v1/products`)
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
        axios.get(`${process.env.VUE_APP_BASE_URL}api/v1/products?orderby=name&sort=asc`)
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
    getProductsByNameDesc(setex) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}api/v1/products?orderby=name&sort=desc`)
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
    getProductsByPriceMin(setex) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}api/v1/products?orderby=price&sort=asc`)
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
    getProductsByPricePlus(setex) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}api/v1/products?orderby=price&sort=desc`)
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
    handleSearch(setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}api/v1/products?search=${payload}`)
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
    postProducts(setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}api/v1/products`, payload)
          .then((res) => {
            console.log(res)
            resolve(res.data.result)
          }).catch((err) => {
            reject(err)
          })
      })
    },
    // Update Product
    patchProduct(setex, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(`${process.env.VUE_APP_BASE_URL}api/v1/products/` + payload.id, payload.data)
          .then((res) => {
            console.log(res)
            resolve(res.data.result)
          }).catch((err) => {
            reject(err)
          })
      })
    },
    // Get Data History
    getHistory(setex) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}api/v1/histories`)
          .then((res) => {
            setex.commit('setGetHistory', res.data.result)
            resolve(res)
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
    getCart(state) {
      console.log(state.carts)
      return state.carts
    },
    countCart(state) {
      return state.carts.length
    },
    isSetHistory(state) {
      return state.history
    }
  },
  modules: {}
})
