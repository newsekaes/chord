import { Component, Prop, Emit } from 'vue-property-decorator'
import * as tsx from 'vue-tsx-support'
import style from './index.module.scss'

interface ToolProps {
  editing?: boolean;
  showAnswer?: boolean;
  show?: boolean;
  showOrder?: boolean;
  sortCategory?: boolean;
}

interface ToolEvents {
  'update:show': boolean;
  'update:editing': boolean;
  'update:showAnswer': boolean;
  'update:sortCategory': boolean;
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

  @Prop({ default: false })
  private showOrder!: boolean

  @Prop({ default: false })
  private sortCategory!: boolean

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

  get __sortCategory (): boolean {
    return this.sortCategory
  }

  set __sortCategory (val: boolean) {
    this.$emit('update:sortCategory', val)
  }

  get __showOrder (): boolean {
    return this.showOrder
  }

  set __showOrder (val: boolean) {
    this.$emit('update:showOrder', val)
  }

  @Emit('replayClick')
  replayClick (): boolean {
    return true
  }

  render () {
    return (
      <van-popup vModel={this.__show} position="bottom">
        <div class={style.editSwitchArea}>
          {/* <img class={style.logo} src={`${this.BASE_URL}favicon.ico`} alt=""/> */}
          <div class={style.editSwitchItem}>
            <van-icon
              class={{ [style.switchItemIcon]: true, [style.iconActive]: this.__showAnswer }}
              nativeOnClick={() => {
                this.__showAnswer = !this.__showAnswer
              }}
              name={this.__showAnswer ? 'eye-o' : 'closed-eye'}/>
            {/* <span>: </span> */}
            {/* <van-switch inactive-color="gray" class={style.switchItemField} vModel={this.__showAnswer}/> */}
          </div>
          <div class={style.editSwitchItem}>
            <van-icon
              class={{ [style.switchItemIcon]: true, [style.iconActive]: this.__showOrder }}
              nativeOnClick={() => {
                this.__showOrder = !this.__showOrder
              }}
              name="exchange"/>
            {/* <span>: </span> */}
            {/* <van-switch inactive-color="gray" class={style.switchItemField} vModel={this.__showAnswer}/> */}
          </div>
          <div class={style.editSwitchItem}>
            <van-icon
              class={{ [style.switchItemIcon]: true, [style.iconActive]: this.__sortCategory }}
              nativeOnClick={() => {
                this.__sortCategory = !this.__sortCategory
              }}
              name="bar-chart-o"/>
            {/* <span>: </span> */}
            {/* <van-switch inactive-color="gray" class={style.switchItemField} vModel={this.__showAnswer}/> */}
          </div>
          <div class={style.editSwitchItem}>
            <van-icon
              class={{ [style.switchItemIcon]: true, [style.iconActive]: this.__editing }}
              nativeOnClick={ () => { this.__editing = !this.__editing } }
              name="edit"/>
            {/* <span>: </span> */}
            {/* <van-switch inactive-color="gray" class={style.switchItemField} vModel={this.__editing}/> */}
          </div>
          <div class={style.editSwitchItem}>
            <van-icon class={style.switchItemIcon} name="replay" nativeOnClick={this.replayClick}/>
          </div>
        </div>
      </van-popup>
    )
  }
}
