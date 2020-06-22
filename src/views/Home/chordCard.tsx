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
  private addChord (): {name: string; keys: number[] } {
    const chordNode = this.$refs.chord as Chord
    return {
      name: this.nameModel,
      keys: chordNode.getKeys()
    }
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
    this.editClear()
  }

  private editClear () {
    this.editStatus = 0
    this.nameModel = ''
  }

  render () {
    if (this.isCreateBox) {
      // 新建和弦的UI
      return (
        <div class={`${style.chordCard} ${style.chordCardCreate}`}>
          <h3 class={style.chordCreateTitle}>新建和弦</h3>
          <van-field vModel={this.nameModel} label="名称" placeholder="请输入和弦名不可重复" />
          <div class={style.chordBox}>
            <Chord ref="chord"/>
          </div>
          <div class={style.chordBtnGroup}>
            <div class={[style.chordBtnConfirm, style.chordBtn]} onClick={this.addChord}>确定</div>
          </div>
        </div>
      )
    }
    // 普通和弦的UI
    return (
      <div class={style.chordCard}>
        { this.editStatus === 1
          ? <van-field vModel={this.nameModel} label="名称" placeholder="请输入和弦名不可重复" />
          : <h3 class={style.chordName}>{this.name}</h3>
        }
        <div class={style.chordBox}>
          <Chord answer={ this.answer } ref="chord"/>
        </div>
        {
          this.editStatus === 0
            ? <div class={style.chordBtnGroup}>
              <div class={`${style.chordBtn} ${style.chordBtnDel}`} onClick={() => { this.editStatus = 2 }}>删除</div>
              <div class={`${style.chordBtn} ${style.chordBtnModify}`} onClick={() => { this.editStatus = 1; this.nameModel = this.name }}>修改</div></div>
            : <div class={style.chordBtnGroup}>
              <div class={`${style.chordBtn} ${style.chordBtnCancel}`} onClick={this.editClear}>取消</div>
              {
                this.editStatus === 1
                  ? <div class={`${style.chordBtn} ${style.chordBtnConfirm}`} onClick={this.editDone}>确定</div>
                  : <div class={`${style.chordBtn} ${style.chordBtnDel}`} onClick={this.editDone}>删除</div>
              }
            </div>
        }
      </div>
    )
  }
}
