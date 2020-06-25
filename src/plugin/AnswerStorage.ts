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
type Errno = '0' | '10001' | '10002' | '20001'
const errMap: { [key in Errno]?: string } = {
  10001: '和弦名称不能为空',
  10002: '和弦名称不能有重复',
  20001: '和弦琴键不能为空'
}
export class AnswerStorage {
  private data: Answers = []
  private storage: Storage
  constructor (options: AnswerStoragePLOptions = { default: [] }) {
    this.storage = window.localStorage
    let storageAnswers = JSON.parse('' + this.storage.getItem(storageKey)) as unknown as Answers
    if (!(storageAnswers && storageAnswers.length > 0)) storageAnswers = options.default
    this.$load(storageAnswers)
  }

  public addAnswer (answer: Answer, index: number = this.data.length): boolean {
    // eslint-disable-next-line
    if (this.checkAnswer(answer, index)) {
      this.data.splice(index, 0, answer)
      this.syncStorage()
      Notify({ type: 'success', message: '保存成功' })
      return true
    }
    return false
  }

  public delAnswer (index: number): void {
    this.data.splice(index, 1)
    this.syncStorage()
    Notify({ type: 'success', message: '删除成功' })
  }

  public modifyAnswer (index: number, { name, keys }: { name: string; keys: number[] }): boolean {
    const answer = { name, map: [keys] }
    if (this.checkAnswer(answer, index)) {
      const chordData = this.data[index]
      chordData.name = name
      chordData.map = [keys]
      Notify({ type: 'success', message: '修改成功' })
      return true
    }
    return false
  }

  public loadAnswers (answers: Answers) {
    if (this.$load(answers)) {
      Notify({ type: 'success', message: '导入成功' })
    } else {
      Notify({ type: 'warning', message: '和弦名称不能有重复' })
    }
  }

  public getSavedAnswers (): Answers {
    return this.data
  }

  public clearStorage () {
    this.storage.setItem(storageKey, '[]')
  }

  private checkAnswer (answer: Answer, index: number, needNotice?: false): { errno: Errno }
  private checkAnswer (answer: Answer, index: number, needNotice = true): { errno: Errno } | boolean {
    let errno: Errno = '0'
    if (answer.name === '') {
      errno = '10001'
    } else if (!(this.data[index] && this.data[index].name === answer.name) &&
      this.data.some(ans => ans.name === answer.name)) {
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

  private validate (answers: Answers): boolean {
    const nameArray = answers.map(answer => answer.name)
    // 通过 Set 去重
    return nameArray.length === Array.from(new Set(nameArray)).length
  }

  private syncStorage () {
    this.storage.setItem('chordAnswer', JSON.stringify(this.data))
  }

  private $load (answers: Answers) {
    if (this.validate(answers)) {
      this.data = answers
      this.syncStorage()
      return true
    } else {
      return false
    }
  }
}
const AnswerStoragePlugin: Vue.PluginObject<AnswerStoragePLOptions> = {
  install (vue, options) {
    vue.prototype.$answerStorage = new AnswerStorage(options)
  }
}
export default AnswerStoragePlugin
