import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import Vuelidate from 'vuelidate'

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.use(VueSweetalert2)
Vue.config.productionTip = false
Vue.use(Vuelidate)

// Custom Directive
Vue.directive('custom', {
  bind (el, binding) {
    if (binding.value === 'ThisIsDropdown') { el.style.color = '#333333' }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
