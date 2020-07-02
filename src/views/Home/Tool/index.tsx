import { Component, Prop, Emit } from 'vue-property-decorator'
import * as tsx from 'vue-tsx-support'
import style from './index.module.scss'

interface ToolProps {
  editing?: boolean;
  showAnswer?: boolean;
  show?: boolean;
}

interface ToolEvents {
  'update:show': boolean;
  'update:editing': boolean;
  'update:showAnswer': boolean;
  'replayClick': boolean;
}

@Component
export default class Tool extends tsx.Component<ToolProps, ToolEvents> {
  @Prop({ default: false })
  private editing!: boolean

  @Prop({ default: false })
  private showAnswer!: boolean

  @Prop({ default: false })
  private show!: boolean

  get __show (): boolean {
    return this.show
  }

  set __show (val) {
    this.$emit('update:show', val)
  }

  get __editing (): boolean {
    return this.editing
  }

  set __editing (val: boolean) {
    this.$emit('update:editing', val)
  }

  get __showAnswer (): boolean {
    return this.showAnswer
  }

  set __showAnswer (val: boolean) {
    this.$emit('update:showAnswer', val)
  }

  @Emit('replayClick')
  replayClick (): boolean {
    return true
  }

  render () {
    return (
      <van-popup vModel={this.__show} position="bottom">
        <div class={style.editSwitchArea}>
          <div class={style.editSwitchItem}>
            <van-icon class={style.switchItemIcon} name="replay" nativeOnClick={ this.replayClick }/>
          </div>
          {/* <img class={style.logo} src={`${this.BASE_URL}favicon.ico`} alt=""/> */}
          <div class={style.editSwitchItem}>
            <van-icon class={style.switchItemIcon} name="edit"/>
            <span>: </span>
            <van-switch inactive-color="gray" class={style.switchItemField} vModel={this.__editing}/>
          </div>
          <div class={style.editSwitchItem}>
            <van-icon class={style.switchItemIcon} name="completed"/>
            <span>: </span>
            <van-switch inactive-color="gray" class={style.switchItemField} vModel={this.__showAnswer}/>
          </div>
        </div>
      </van-popup>
    )
  }
}
