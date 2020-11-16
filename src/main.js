import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import Home from './views/Home.vue'
import Portfolio from './views/Portfolio.vue'
import Stocks from './views/Stocks.vue'
Vue.use(VueRouter)

const routes = [
  { path: '', component: Home },
  { path: '/Portfolio', component: Portfolio },
  { path: '/Stocks', component: Stocks }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
