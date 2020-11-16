import Vue from 'vue'
import VueRouter from 'vue-router'
/* import { component } from 'vue/types/umd' */
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Stocks from '../views/Stocks.vue'

Vue.use(VueRouter)

export const routes = [
  { path: '', component: Home },
  { path: '/Portfolio', component: Portfolio },
  { path: '/Stocks', component: Stocks }
]
