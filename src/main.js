import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Custom Directive
Vue.directive('custom', {
  bind(el, binding) {
    if (binding.value === 'ThisIsDropdown') { el.style.color = '#333333' }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
