import axios from 'axios'

const state = {
  products: [],
  postProduct: {},
  carts: []
}

const mutations = {
  setProducts (state, payload) {
    state.products = payload
  },
  // Carts
  setAddToCart (state, payload) {
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
  setClearAllCart (state) {
    state.carts = []
  },
  setMinPlus (state, payload) {
    const data = [...state.carts]

    if (payload.symbol === '+') {
      data[payload.index].count++
    } else {
      if (data[payload.index].count > 1) {
        data[payload.index].count--
      }
    }
    state.carts = data
  }
}

const actions = {
  getProducts (setex) {
    return new Promise((resolve, reject) => {
      axios.get(`${process.env.VUE_APP_BASE_URL}api/v1/products?orderby=createdAt&sort=desc`)
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
  getProductsByName (setex) {
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
  getProductsByNameDesc (setex) {
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
  getProductsByPriceMin (setex) {
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
  getProductsByPricePlus (setex) {
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
  handleSearch (setex, payload) {
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
  postProducts (setex, payload) {
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
  patchProduct (setex, payload) {
    return new Promise((resolve, reject) => {
      axios.patch(`${process.env.VUE_APP_BASE_URL}api/v1/products/` + payload.id, payload.data)
        .then((res) => {
          console.log(res)
          resolve(res.data.result)
        }).catch((err) => {
          reject(err)
        })
    })
  }
}
const getters = {
  products (state) {
    return state.products
  },
  isPostProducts (state) {
    return state.postProduct
  },
  getCart (state) {
    console.log(state.carts)
    return state.carts
  },
  countCart (state) {
    return state.carts.length
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
