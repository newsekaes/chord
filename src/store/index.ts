import Vue from 'vue'
import Vuex from 'vuex'
import { answerStorageModule } from './answerStorage'
Vue.use(Vuex)
export interface StoreRootState {
  isMobile: boolean;
}
export default new Vuex.Store({
  state: {
    isMobile: 'ontouchstart' in window
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    answerStorageModule
  }
})
