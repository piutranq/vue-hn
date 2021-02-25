import Vue from 'vue'
import Vuex from 'vuex'

import hndata from './hndata'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    hndata
  }
})

export default store
