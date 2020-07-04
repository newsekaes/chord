import { Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import * as tsx from 'vue-tsx-support'
import { Answer, Answers } from '@/store'

import ChordJson from '@/components/ChordJson'
import ChordCard from './ChordCard'
import Tool from './Tool'

import style from './index.module.scss'
const answerStorage = namespace('answerStorage')
const BASE_URL = process.env.BASE_URL

@Component
export default class Home extends tsx.Component<{}> {
  private editing = false
  private showAnswer = false
  private showPopup = false
  private showTab = false
  private showOrder = false
  private BASE_URL: string = BASE_URL

  @answerStorage.State('answers') answers!: Answers

  @answerStorage.Action('addAnswer') addAnswer!: ([answer, index]: [Answer, number?]) => boolean
  @answerStorage.Action('delAnswer') delAnswer!: (index: number) => void
  @answerStorage.Action('modifyAnswer') modifyAnswer!: ([index, { name, keys }]: [number, { name: string; keys: number[] }]) => boolean
  @answerStorage.Action('changeAnswerOrder') changeAnswerOrder!: ([newIndex, oldIndex]: [number, number]) => void

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
        <div class={style.chordCardArea}>
          <div class={style.chordCardBox}>
            {
              this.answers.map((answer, index) => (
                <ChordCard
                  index={index}
                  isEditing={this.editing}
                  showAnswer={this.showAnswer}
                  showOrder={this.showOrder}
                  key={answer.name}
                  answer={answer.map[0]}
                  name={answer.name}
                  onAdd={this.addChord}
                  onDel={this.delChord.bind(this, index)}
                  onModify={(e: { name: string; keys: number[] }) => { this.modifyChord.bind(this, index, e) }}
                  onOrderChange={
                    (direction: 'up' | 'down') => {
                      const cardSplitDis = document.querySelectorAll('.' + style.chordCard)[0].getBoundingClientRect().height + 20
                      const scrollTop = document.documentElement.scrollTop
                      this.changeAnswerOrder([index + (direction === 'down' ? 1 : -1), index])
                      this.$nextTick(() => { document.documentElement.scrollTop = scrollTop + (direction === 'down' ? cardSplitDis : -cardSplitDis) })
                    }
                  }
                  class={style.chordCard}
                  ref="chord"
                />
              ))
            }
          </div>
          <div class={style.chordCreateBox} vShow={this.editing}>
            <ChordCard index={this.answers.length} class={style.chordCard} is-create-box={true} onAdd={this.addChord} key={this.answers.length + 1}/>
          </div>
        </div>
        <ChordJson show={this.showTab} {...{ on: { 'update:show': (val: boolean) => { this.showTab = val } } }}/>
        <Tool
          show={this.showPopup}
          editing={this.editing}
          showAnswer={this.showAnswer}
          showOrder={this.showOrder}
          on={{
            replayClick: () => { this.showPopup = false; this.showTab = true },
            'update:show': (val: boolean) => { this.showPopup = val },
            'update:editing': (val: boolean) => { this.editing = val },
            'update:showAnswer': (val: boolean) => { this.showAnswer = val },
            'update:showOrder': (val: boolean) => { this.showOrder = val }
          }}
        />
        <div class={style.chordTabShow} onClick={() => { this.showPopup = !this.showPopup }}><van-icon name="ellipsis" class={style.chordTabShowIcon}/></div>
      </div>
    )
  }
}
