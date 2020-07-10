import { Module } from 'vuex'
import { StoreRootState } from './index'
import { Notify } from 'vant'
import { getKeyMaps } from '@/const'

// Def Interface and Type
export interface Answer {
  name: string;
  map: number[][];
  category?: string ;
}

interface StorageData018 {
  version: '0.1.8';
  answers: Answers;
  category: string[];
}

export type Answers = Answer[]
export interface AnswerStorageState {
  answers: Answers;
  category: string[];
  currentCategory: string;
}
type Errno = '0' | '10001' | '10002' | '20001'

// Def const variable
const storageKey = 'chordAnswer'
const errMap: { [key in Errno]?: string } = {
  10001: '和弦名称不能为空',
  10002: '和弦名称不能有重复',
  20001: '和弦琴键不能为空'
}
const storage = window.localStorage

// Def help function
function checkAnswer (this: Answers, answer: Answer, index: number, needNotice = true): { errno: Errno } | boolean {
  let errno: Errno = '0'
  if (answer.name === '') {
    errno = '10001'
  } else if (!(this[index] && this[index].name === answer.name) &&
    this.some(ans => ans.name === answer.name)) {
    errno = '10002'
  } else if (answer.map[0].every(i => i === 0)) {
    errno = '20001'
  }
  if (needNotice) {
    if (errno === '0') return true
    Notify({ type: 'warning', message: errMap[errno] })
    return false
  } else {
    return { errno }
  }
}

function syncStorage (data: Answers) {
  storage.setItem('chordAnswer', JSON.stringify(data))
}

function getStorage (): Answers {
  return JSON.parse('' + storage.getItem(storageKey)) as unknown as Answers
}

function validate (answers: Answers): boolean {
  const nameArray = answers.map(answer => answer.name)
  // 通过 Set 去重
  return nameArray.length === Array.from(new Set(nameArray)).length
}

function initStorage (): Answers {
  let storageAnswers = getStorage()
  if (!(storageAnswers && storageAnswers.length > 0)) storageAnswers = getKeyMaps()
  return storageAnswers
}

// export module
export const answerStorageModule: Module<AnswerStorageState, StoreRootState> = {
  namespaced: true,
  state: {
    answers: initStorage(),
    category: ['C'],
    currentCategory: 'all'
  },
  getters: {},
  mutations: {
    setAnswers (state, answer) {
      state.answers = answer
    },
    setCategory (state, category) {
      state.category = category
    },
    setCurrentCategory (state, currentCategory) {
      state.currentCategory = currentCategory
    }
  },

  actions: {
    addAnswer ({ state }, [answer, index = state.answers.length]: [Answer, number]): boolean {
      if (checkAnswer.call(state.answers, answer, index)) {
        state.answers.splice(index, 0, answer)
        syncStorage(state.answers)
        Notify({ type: 'success', message: '保存成功' })
        return true
      }
      return false
    },

    delAnswer ({ state }, index: number): void {
      state.answers.splice(index, 1)
      syncStorage(state.answers)
      Notify({ type: 'success', message: '删除成功' })
    },

    modifyAnswer ({ state }, [index, { name, keys }]: [number, { name: string; keys: number[] }]): boolean {
      const answer = { name, map: [keys] }
      if (checkAnswer.call(state.answers, answer, index)) {
        const chordData = state.answers[index]
        chordData.name = name
        chordData.map = [keys]
        Notify({ type: 'success', message: '修改成功' })
        return true
      }
      return false
    },

    changeAnswerOrder ({ state }, [newOrder, oldOrder]: [number, number]) {
      const answer = state.answers.splice(oldOrder, 1)[0]
      state.answers.splice(newOrder, 0, answer)
    },

    loadAnswer ({ state }, newAnswers: Answers): boolean {
      if (validate(newAnswers)) {
        state.answers = newAnswers
        syncStorage(state.answers)
        return true
      } else {
        return false
      }
    },
    async importAnswers ({ dispatch }, answers: Answers) {
      if (await dispatch('loadAnswer', answers)) {
        Notify({ type: 'success', message: '导入成功' })
      } else {
        Notify({ type: 'warning', message: '和弦名称不能有重复' })
      }
    },
    clearStorage () {
      syncStorage([])
    },
    initDefaultAnswers ({ dispatch }) {
      return dispatch('loadAnswer', getKeyMaps())
    }
  }
}
