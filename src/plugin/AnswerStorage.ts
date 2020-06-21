import Vue from 'vue'
import { Notify } from 'vant'
export interface Answer {
  name: string;
  map: number[][];
}
export type Answers = Answer[]
interface AnswerStoragePLOptions {
  default: Answers;
}
const storageKey = 'chordAnswer'
class AnswerStorage {
  private data: Answers = []
  private storage: Storage
  constructor (options: AnswerStoragePLOptions = { default: [] }) {
    this.storage = window.localStorage
    let storageAnswers = JSON.parse('' + this.storage.getItem(storageKey)) as unknown as Answers
    if (!(storageAnswers && storageAnswers.length > 0)) storageAnswers = options.default
    this.loadAnswers(storageAnswers)
  }

  public addAnswer (answer: Answer, index: number = this.data.length) {
    // eslint-disable-next-line
    if (this.checkAnswer(answer)) {
      this.data.splice(index, 0, answer)
      this.syncStorage()
      Notify({ type: 'success', message: '保存成功' })
      return true
    } else {
      Notify({ type: 'warning', message: '和弦名称不能重复' })
      return false
    }
  }

  public delAnswer (index: number) {
    this.data.splice(index, 1)
    this.syncStorage()
    Notify({ type: 'success', message: '删除成功' })
  }

  public loadAnswers (answers: Answers) {
    if (this.validate(answers)) {
      this.data = answers
      this.syncStorage()
      Notify({ type: 'success', message: '导入成功' })
    } else {
      Notify({ type: 'warning', message: '和弦名称不能有重复' })
    }
  }

  syncStorage () {
    this.storage.setItem('chordAnswer', JSON.stringify(this.data))
  }

  public getSavedAnswers (): Answers {
    return this.data
  }

  public clearStorage () {
    this.storage.setItem(storageKey, '[]')
  }

  private checkAnswer (answer: Answer) {
    return !this.data.some(ans => ans.name === answer.name)
  }

  private validate (answers: Answers): boolean {
    const nameArray = answers.map(answer => answer.name)
    // 通过 Set 去重
    return nameArray.length === Array.from(new Set(nameArray)).length
  }
}
const AnswerStoragePlugin: Vue.PluginObject<AnswerStoragePLOptions> = {
  install (vue, options) {
    vue.prototype.$answerStorage = new AnswerStorage(options)
  }
}

export default AnswerStoragePlugin
