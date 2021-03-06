// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Util from './util'

Vue.use(Util)
Vue.config.productionTip = false

//所有的静态资源都放在这里
import "./assets/js/jquery-1.11.3.js"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
