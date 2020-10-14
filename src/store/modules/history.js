import axios from 'axios'

const state = {
  history: []
}

const mutations = {
  // History
  setGetHistory (state, payload) {
    // console.log(state.history)
    state.history = payload
  }
}

const actions = {
  // Get Data History
  getHistory (setex) {
    return new Promise((resolve, reject) => {
      axios.get(`${process.env.VUE_APP_BASE_URL}api/v1/histories?orderby=date&sort=desc`)
        .then((res) => {
          console.log(res.data.result)
          setex.commit('setGetHistory', res.data.result)
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
    })
  }
  // getHistoryByDate (setex) {
  //   return new Promise((resolve, reject) => {
  //     axios.get(`${process.env.VUE_APP_BASE_URL}api/v1/histories`)
  //       .then((res) => {
  //         console.log(res)
  //         setex.commit('setHistoryDate', res.data.result[1])
  //         resolve(res)
  //       }).catch((err) => {
  //         reject(err)
  //       })
  //   })
  // }
}
const getters = {
  isSetHistory (state) {
    console.log(state.history)
    return state.history
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
