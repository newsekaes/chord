import { Prop, Component, Emit, Watch } from 'vue-property-decorator'
import * as tsx from 'vue-tsx-support'
import style from './index.module.scss'
import Chord from '@/components/Chord'
import { Field, Picker } from 'vant'
import { namespace } from 'vuex-class'

const answerStorageModule = namespace('answerStorage')

interface ChordCardProps {
  name?: string;
  answer?: number[];
  isCreateBox?: boolean;
  isEditing?: boolean;
  showAnswer?: boolean;
  showOrder?: boolean;
  sortCategory?: boolean;
  category?: string;
  index: number;
}
interface ChordCardEvent {
  onAdd: number[];
  onDel: string;
  onModify: { name: string; keys: number[] };
  onCategoryChange: string;
}

interface PickColumn {
  value: string;
  text: string;
}

@Component
export default class ChordCard extends tsx.Component<ChordCardProps, ChordCardEvent> {
  private editStatus: 0 | 1 | 2 = 0 // 0: 不编辑；1：再编辑；2：删除
  private nameModel = ''

  @Prop({
    default: ''
  })
  private name!: string

  @Prop({
    default: () => []
  })
  private answer!: number[]

  @Prop({
    default: false
  })
  private isCreateBox!: boolean

  @Prop({
    default: false
  })
  private isEditing!: boolean

  @Prop({
    default: false
  })
  private showAnswer!: boolean

  @Prop({
    default: false
  })
  private sortCategory!: boolean

  @Prop({
    default: false
  })
  private showOrder!: boolean

  @Prop()
  private index!: number

  @Prop({
    default: '无'
  })
  private category!: string

  get columns (): PickColumn[] {
    return [
      { text: '无', value: 'all' },
      ...this.categories.map(c => ({ text: c, value: c }))
    ]
  }

  @answerStorageModule.State('categories')
  private categories!: string[]

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

  @Emit('orderChange')
  private chordOrderChange (direction: 'up' | 'down') {
    return direction
  }

  @Emit('categoryChange')
  private categorySelected (val: string) {
    return val
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
          : <h3 class={style.chordName}><span class={style.chordIndex}>{this.index + 1}: </span>{this.name}</h3>
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
        <div class={[style.chordOrder, style.chordOrderUp]} onClick={() => this.chordOrderChange('up')} vShow={this.showOrder}>
          <van-icon class={style.chordArrow} name="down"/>
        </div>
        <div class={[style.chordOrder, style.chordOrderDown]} onClick={() => this.chordOrderChange('down')} vShow={this.showOrder}>
          <van-icon class={style.chordArrow} name="down"/>
        </div>
        <div class={[style.chordCategory]} vShow={this.sortCategory}>
          <van-picker
            title={`${this.name}：选择分类`}
            showToolbar={true}
            defaultIndex={this.columns.map(c => c.text).indexOf(this.category)}
            columns={this.columns}
            visibleItemCount={3}
            onConfirm={(column: PickColumn) => {
              this.categorySelected(column.value)
            }}/>
        </div>
      </div>
    )
  }
}
