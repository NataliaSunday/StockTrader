import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Stocks from '../views/Stocks.vue'

export const routes = [
  { path: '', component: Home },
  { path: '/Portfolio', component: Portfolio },
  { path: '/Stocks', component: Stocks }
]
