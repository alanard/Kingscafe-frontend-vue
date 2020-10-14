import axios from 'axios'
import Router from '../../router/index'

const state = {
  user: {},
  register: {},
  token: localStorage.getItem('token') || null
}

const mutations = {
  setUser (state, payload) {
    state.user = payload
    state.token = payload.token
  },
  setToken (state, payload) {
    state.token = payload
  },
  setRegister (state, payload) {
    state.register = payload
  },
  logout (state) {
    state.token = null
  }
}

const actions = {
  interceptorsResponse (setex) {
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
        this.$swal({
          title: 'EXPIRED :(',
          text: 'your session has ended, please login again',
          icon: 'warning',
          confirmButtonText: 'Login',
          showLoaderOnConfirm: true
        })
      } else if (error.response.status === 401 && error.response.data.result === 'Token Expired') {
        localStorage.removeItem('token')
        setex.commit('setToken', null)
        Router.push('/')
        this.$swal({
          title: 'EXPIRED :(',
          text: 'your session has ended, please login again',
          icon: 'warning',
          confirmButtonText: 'Login',
          showLoaderOnConfirm: true
        })
      }
      return Promise.reject(error)
    })
  },
  interceptorsRequest (setex) {
    axios.interceptors.request.use(function (config) {
      // Do something before request is sent
      config.headers.Authorization = `Bearer ${setex.state.token}`
      return config
    }, function (error) {
      // Do something with request error
      return Promise.reject(error)
    })
  },
  login (setex, payload) {
    console.log(payload)
    return new Promise((resolve, reject) => {
      axios.post(`${process.env.VUE_APP_BASE_URL}api/v1/users/login`, payload)
        .then((res) => {
          console.log(res)
          setex.commit('setUser', res.data.result)
          localStorage.setItem('token', res.data.result.token)
          // axios.defaults.headers.common.Authorization = `Bearer ${setex.state.token}`
          resolve(res.data.result[0])
        }).catch((err) => {
          console.log(err)
          reject(err)
        })
    })
  },
  logout (setex) {
    setex.commit('logout')
    localStorage.removeItem('token')
    Router.push('/')
  },
  register (setex, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${process.env.VUE_APP_BASE_URL}api/v1/users/register`, payload)
        .then((res) => {
          resolve(res.data.result)
        }).catch((err) => {
          reject(err)
        })
    })
  }
}
const getters = {
  isLogin (state) {
    return state.token !== null
  },
  isRegister (state) {
    return state.register
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
