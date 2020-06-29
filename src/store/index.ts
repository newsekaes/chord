import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import { answerStorageModule, AnswerStorageState } from './answerStorage'
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
    answerStorage: answerStorageModule
  }
}) as Store<StoreRootState>
