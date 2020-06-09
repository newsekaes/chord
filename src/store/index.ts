import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMobile: 'ontouchstart' in window
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
