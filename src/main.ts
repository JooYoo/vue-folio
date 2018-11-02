import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// Bootstrap
import jQuery from 'jquery'
declare var global:any
declare var require:any
global.jQuery=jQuery
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'

// BootstrapVue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

// vue-scrollactive
var VueScrollactive = require('vue-scrollactive')
Vue.use(VueScrollactive)

// vue2-scrollspy
import Scrollspy from 'vue2-scrollspy';
Vue.use(Scrollspy)

// vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
