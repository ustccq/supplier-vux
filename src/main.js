import Vue from 'vue'
import App from './frame.vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import OrderHeader from './components/OrderHeader.vue'
import OfferHeader from './components/OfferHeader.vue'
import BillHeader from './components/BillHeader.vue'
import PersonalHeader from './components/PersonalHeader.vue'
Vue.use(Router)
Vue.use(VueResource)
Vue.config.devtools = true

// Vue.http.options.emulateJSON = true
// Vue.http.options.emulateHTTP = true
Vue.http.options.header
const router = new Router({
  transitionOnLoad: false
})

// import { sync } from 'vuex-router-sync'
// import store from './vuex/store'

// let history = window.sessionStorage
// history.clear()
// let historyCount = history.getItem('count') * 1 || 0
// history.setItem('/', 0)

// const commit = store.commit || store.dispatch
// router.beforeEach(({ to, from, next }) => {
//   const toIndex = history.getItem(to.path)
//   const fromIndex = history.getItem(from.path)
//   if (toIndex) {
//     if (toIndex > fromIndex) {
//       commit('UPDATE_DIRECTION', 'forward')
//     } else {
//       commit('UPDATE_DIRECTION', 'reverse')
//     }
//   } else {
//     ++historyCount
//     history.setItem('count', historyCount)
//     to.path !== '/' && history.setItem(to.path, historyCount)
//     commit('UPDATE_DIRECTION', 'forward')
//   }
//   commit('UPDATE_LOADING', true)
//   setTimeout(next, 50)
// })
// router.afterEach(() => {
//   commit('UPDATE_LOADING', false)
// })

// sync(store, router)
router.map({
  '/': {
    component: OrderHeader
  },
  '/Order': {
    component: OrderHeader
  },
  '/Offer': {
    component: OfferHeader
  },
  '/Bill': {
    component: BillHeader
  },
  '/Personal': {
    component: PersonalHeader
  }
})

router.start(App, '#app')
