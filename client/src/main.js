// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './assets/css/common.scss'
// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.
import {
  Loading,
  Input,
} from 'cube-ui'
import App from './App'
import router from './router'

Vue.use(Loading)
Vue.use(Input)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
