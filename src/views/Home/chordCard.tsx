import { Prop, Component, Emit } from 'vue-property-decorator'
import * as tsx from 'vue-tsx-support'
import style from './chordCard.module.scss'
import Chord from '@/components/Chord'
interface ChordCardProps {
  name: string;
  answer: number[];
  isCreateBox: boolean;
}
interface ChordCardEvent {
  onAdd: number[];
  onDel: string;
  onModify: { name: string; keys: number[] };
}

@Component
export default class ChordCard extends tsx.Component<ChordCardProps, ChordCardEvent> {
  private editStatus: 0 | 1 | 2 = 0 // 0: 不编辑；1：再编辑；2：删除
  private nameModel = ''
  @Prop()
  private name!: string

  @Prop()
  private answer!: number[]

  @Prop()
  private isCreateBox!: boolean

  @Emit('add')
  private addChord (): number[] {
    const chordNode = this.$refs.chord as Chord
    return chordNode.getKeys()
  }

  @Emit('del')
  private delChord (): string {
    return this.name
  }

  @Emit('modify')
  private modifyChord (): { name: string; keys: number[] } {
    const chordNode = this.$refs.chord as Chord
    return {
      name: this.nameModel,
      keys: chordNode.getKeys()
    }
  }

  private editDone () {
    if (this.editStatus === 1) {
      this.modifyChord()
    } else if (this.editStatus === 2) {
      this.delChord()
    }
    this.editStatus = 0
  }

  render () {
    if (this.isCreateBox) {
      // 新建和弦的UI
      console.log(<div>1</div>)
      return (
        <div class={`${style.chordCard} ${style.chordCardCreate}`}>
          <h3 class={style.chordCreateTitle}>新建和弦</h3>
          <van-field VModel="newKey.name" label="名称" placeholder="请输入和弦名不可重复" />
          <div class={style.chordBox}>
            <Chord ref="chord"/>
          </div>
          <div class={style.chordCreateBtn} onClick={this.addChord}>确定</div>
        </div>
      )
    }
    // 普通和弦的UI
    return (
      <div class={style.chordCard}>
        { this.editStatus === 1
          ? <van-field VModel="newKey.name" label="名称" placeholder="请输入和弦名不可重复" />
          : <h3>{this.name}</h3>
        }
        <div class={style.chordBox}>
          <Chord answer={ this.answer } ref="chord"/>
        </div>
        <div class={style.chordBtnGroup}>
          {
            this.editStatus === 0
              ? (<template>
                <div class={style.chordBtn} onClick={() => { this.editStatus = 2 }}>删除</div>
                <div class={style.chordBtn} onClick={() => { this.editStatus = 1 }}>修改</div>
              </template>)
              : <div class={style.chordCreateBtn} onClick={this.editDone}>确定</div>
          }
        </div>
      </div>
    )
  }
}
