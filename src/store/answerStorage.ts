import { Module } from 'vuex'
import { StoreRootState } from './index'
interface AnswerStorageState {
  maps: number[][];
}
export const answerStorageModule: Module<AnswerStorageState, StoreRootState> = {
  state: {
    maps: []
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  }
}
