import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Setup service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .catch(e => {
        console.log('[SW] registration failed: ', e)
      })
  })
}

// Setup Vue
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
