import { Prop, Component } from 'vue-property-decorator'
import * as tsx from 'vue-tsx-support'
import style from './index.module.scss'
import CMenu from '@/components/CMenu'

@Component
export default class CHeader extends tsx.Component<{}> {
  private showMenu = false

  private menuToggle () {
    this.showMenu = !this.showMenu
  }

  render () {
    return (
      <header class={style.chordHeaderCpn}>
        <div class={style.headerLeftBox}>
          <van-icon class={style.headerIcon} name="wap-nav" nativeOnClick={this.menuToggle} />
        </div>
        <div class={style.headerMiddleBox}>
          <span>和弦练习图</span>
        </div>
        <div class={style.headerRightBox}>
          <van-icon class={style.headerIcon} name="share" />
        </div>
        <CMenu vModel={this.showMenu} />
      </header>
    )
  }
}
