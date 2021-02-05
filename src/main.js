import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import bulma from 'bulma'

window.api = axios.create({
  baseURL: 'https://tools.sopress.net/iut/coop/api/',
  params : {
    token : false
  },
  headers: { Authorization: '616fb17187b0bf7f9eebac11b3b34753d334fb48' }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
