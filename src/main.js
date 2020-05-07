import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import jQuery from 'jquery'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faVolumeMute,faVolumeUp)
Vue.component('font-awesome-icon', FontAwesomeIcon)
global.$ = jQuery
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
