import { Prop, Component, Emit } from 'vue-property-decorator'
import * as tsx from 'vue-tsx-support'
import style from './index.module.scss'
import { Notify } from 'vant'
import { Answers } from '@/store/answerStorage'
import { namespace } from 'vuex-class'

interface ChordJsonProps {
  show: boolean;
}

const AnswerStorageModule = namespace('answerStorage')

@Component
export default class ChordJson extends tsx.Component<ChordJsonProps> {
  @Prop()
  private show!: boolean

  private text = ''
  private tabActive = 0
  @AnswerStorageModule.State('answers') answers!: Answers

  get copyValue () {
    const answers = this.answers
    return JSON.stringify(answers)
  }

  private stopPropagation (event: Event) {
    event.stopPropagation()
  }

  @Emit('import')
  private importJson () {
    const answers: Answers = JSON.parse(this.text)
    this.importAnswers(answers)
  }

  @AnswerStorageModule.Action('importAnswer') importAnswers!: (answers: Answers) => boolean

  public hideOverlay () {
    this.$emit('update:show', false)
  }

  private copy (): void {
    const transfer = document.createElement('input')
    transfer.style.position = 'fixed'
    transfer.style.visibility = 'hidden'
    document.body.appendChild(transfer)
    transfer.value = this.copyValue // 这里表示想要复制的内容
    transfer.focus()
    transfer.select()
    if (document.execCommand('copy')) {
      document.execCommand('copy')
    }
    transfer.blur()
    document.body.removeChild(transfer)
    Notify({ type: 'success', message: '复制成功, 请妥善保存' })
  }

  render () {
    return (
      <van-overlay show={this.show} onClick={this.hideOverlay}>
        <div class={style.wrapper}>
          <van-tabs class={style.block} vModel={this.tabActive} nativeOnClick={this.stopPropagation}>
            <van-tab title="导入">
              <div class={style.wrapperContent}>
                <van-field
                  v-model={this.text}
                  label=""
                  placeholder="请输入导入数据"
                  autosize={true}
                  type="textarea"
                  rows="1"
                />
              </div>
              <div class={style.btnGroup}>
                <div class={style.btn} onClick={this.importJson}>确定</div>
              </div>
            </van-tab>
            <van-tab title="导出">
              <div class={style.wrapperContent}>
                <van-field
                  value={this.copyValue}
                  label=""
                  placeholder="请输入导入数据"
                  autosize={true}
                  type="textarea"
                  rows="1"
                  readonly={true}
                />
              </div>
              <div class={style.btnGroup}>
                <div class={style.btn} onClick={this.copy}>复制到剪贴板</div>
              </div>
            </van-tab>
          </van-tabs>
        </div>
      </van-overlay>
    )
  }
}
