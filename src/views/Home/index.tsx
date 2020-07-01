import { Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import * as tsx from 'vue-tsx-support'
import { Answer, Answers } from '@/store'

import ChordCard from '@/views/Home/chordCard'
import ChordJson from '@/components/ChordJson'
import style from './index.module.scss'
const answerStorage = namespace('answerStorage')
const BASE_URL = process.env.BASE_URL

@Component
export default class Home extends tsx.Component<{}> {
  private editing = false
  private showAnswer = false
  private showTab = false
  private BASE_URL: string = BASE_URL

  @answerStorage.State('answers') answers!: Answers

  @answerStorage.Action('addAnswer') addAnswer!: ([answer, index]: [Answer, number?]) => boolean
  @answerStorage.Action('delAnswer') delAnswer!: (index: number) => void
  @answerStorage.Action('modifyAnswer') modifyAnswer!: ([index, { name, keys }]: [number, { name: string; keys: number[] }]) => boolean
  private addChord ({ name, keys }: { name: string; keys: number[]}) {
    this.addAnswer([{
      name: name,
      map: [keys]
    }])
  }

  delChord (index: number) {
    this.delAnswer(index)
  }

  modifyChord (index: number, { name, keys }: { name: string; keys: number[]}) {
    this.modifyAnswer([index, { name, keys }])
  }

  render () {
    return (
      <div class={style.home}>
        <div class={style.editSwitchArea}>
          <img class={style.logo} src={`${this.BASE_URL}favicon.ico`} alt=""/>
          <div class={style.editSwitchItem}>
            <van-icon class={style.switchItemIcon} name="edit"/><span>: </span><van-switch inactive-color="gray" class={style.switchItemField} vModel={this.editing}/>
          </div>
          <div class={style.editSwitchItem}>
            <van-icon class={style.switchItemIcon} name="completed"/><span>: </span><van-switch inactive-color="gray" class={style.switchItemField} vModel={this.showAnswer}/>
          </div>
        </div>
        <div class={style.chordCardArea}>
          <div class={style.chordCardBox}>
            {
              this.answers.map((answer, index) => (
                <ChordCard
                  isEditing={this.editing}
                  showAnswer={this.showAnswer}
                  key={answer.name}
                  answer={answer.map[0]}
                  name={answer.name}
                  onAdd={this.addChord}
                  onDel={this.delChord.bind(this, index)}
                  onModify={(e: { name: string; keys: number[] }) => { this.modifyChord.bind(this, index, e) }}
                  class={style.chordCard}
                  ref="chord"
                />
              ))
            }
          </div>
          <div class={style.chordCreateBox} vShow={this.editing}>
            <ChordCard class={style.chordCard} is-create-box={true} onAdd={this.addChord} key={this.answers.length + 1}/>
          </div>
        </div>
        <ChordJson show={this.showTab} {...{ on: { 'update:show': (val: boolean) => { this.showTab = val } } }}/>
        <div class={style.chordTabShow} onClick={() => { this.showTab = !this.showTab }}><van-icon name="replay" /></div>
      </div>
    )
  }
}
