import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/bootstrap-vue'
import App from './App.vue'
Vue.config.productionTip = false
import 'bootstrap';
new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(VueRouter)