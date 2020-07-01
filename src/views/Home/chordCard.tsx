import { Prop, Component, Emit, Watch } from 'vue-property-decorator'
import * as tsx from 'vue-tsx-support'
import style from './chordCard.module.scss'
import Chord from '@/components/Chord'
import { Field } from 'vant'
interface ChordCardProps {
  name?: string;
  answer?: number[];
  isCreateBox?: boolean;
  isEditing?: boolean;
  showAnswer?: boolean;
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
  private name = ''

  @Prop()
  private answer: number[] = []

  @Prop()
  private isCreateBox = false

  @Prop({
    default () {
      return false
    }
  })
  private isEditing = false

  @Prop()
  private showAnswer = false

  @Emit('add')
  private addChord (): {name: string; keys: number[] } {
    const chordNode = this.$refs.chordCreate as Chord
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

  // @Watch('isEditing', {
  //   immediate: false
  // })
  // private isEditingWatcher (newVal: boolean, oldVal: boolean) {
  //   if (newVal !== oldVal) {
  //     if (!this.isCreateBox) {
  //       if (newVal) {
  //         (this.$refs.chord as Chord).showAnswer()
  //       } else {
  //         (this.$refs.chord as Chord).clear()
  //       }
  //     }
  //   }
  // }

  @Watch('showAnswer', {
    immediate: false
  })
  private showAnswerWatcher (newVal: boolean, oldVal: boolean) {
    if (newVal !== oldVal) {
      if (this.answer) {
        if (newVal) {
          (this.$refs.chord as Chord).showAnswer()
        } else {
          (this.$refs.chord as Chord).clear()
        }
      }
    }
  }

  private async initEdit () {
    this.editStatus = 1
    this.nameModel = this.name
    await this.$nextTick();
    (this.$refs.nameField as Field).focus()
  }

  private initDel () {
    this.editStatus = 2
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
        <div class={[style.chordCard, style.chordCardCreate]}>
          <h3 class={style.chordCreateTitle}>新建和弦</h3>
          <van-field class={style.chordNameField} vModel={this.nameModel} label="" placeholder="请输入和弦名(不可重复)" input-align="center" clearable />
          <div class={style.chordBox}>
            <Chord ref="chordCreate"/>
          </div>
          <div class={style.chordBtnGroup}>
            <div class={[style.chordBtnConfirm, style.chordBtn]} onClick={this.addChord}>
              <van-icon class={style.chordBtnIcon} name="success"/>
            </div>
          </div>
        </div>
      )
    }
    // 普通和弦的UI
    return (
      <div class={[style.chordCard, this.isEditing && style.chordCardEditing]}>
        { this.editStatus === 1
          ? <van-field class={style.chordNameField} vModel={this.nameModel} label="" placeholder="请输入和弦名(不可重复)" ref="nameField" input-align="center" clearable />
          : <h3 class={style.chordName}>{this.name}</h3>
        }
        <div class={style.chordBox}>
          <Chord answer={ this.answer } ref="chord"/>
        </div>
        {
          this.isEditing &&
          (this.editStatus === 0
            ? <div class={style.chordBtnGroup}>
              <div class={`${style.chordBtn} ${style.chordBtnDel}`} onClick={this.initDel}>
                <van-icon class={style.chordBtnIcon} name="delete"/>
              </div>
              <div class={`${style.chordBtn} ${style.chordBtnModify}`} onClick={this.initEdit}>
                <van-icon class={style.chordBtnIcon} name="edit"/>
              </div>
            </div>
            : <div class={style.chordBtnGroup}>
              <div class={`${style.chordBtn} ${style.chordBtnCancel}`} onClick={this.editClear}>
                <van-icon class={style.chordBtnIcon} name="cross"/>
              </div>
              {
                this.editStatus === 1
                  ? <div class={`${style.chordBtn} ${style.chordBtnConfirm}`} onClick={this.editDone}>
                    <van-icon class={style.chordBtnIcon} name="success" />
                  </div>
                  : <div class={`${style.chordBtn} ${style.chordBtnDel}`} onClick={this.editDone}>
                    <van-icon class={style.chordBtnIcon} name="delete" />
                  </div>
              }
            </div>)
        }
      </div>
    )
  }
}
