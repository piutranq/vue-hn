import Vue from 'vue'
import Vuex from 'vuex'

import hndata from './hndata'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    hndata
  }
})
