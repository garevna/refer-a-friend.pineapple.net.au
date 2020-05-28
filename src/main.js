/* eslint-disable */

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import vuetify from './plugins/vuetify'

import '@/sass/fonts.scss'
import '@/sass/variables.scss'

import('@/refer-a-friend.js')
  .then(res => {
    vgo('setAccount', '476138407')
    vgo('setTrackByDefault', true)
    vgo('process')
  })

Vue.config.productionTip = false

const vue = new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
