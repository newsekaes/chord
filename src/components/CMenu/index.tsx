import { Prop, Component, Emit } from 'vue-property-decorator'
import * as tsx from 'vue-tsx-support'
import style from './index.module.scss'
import { namespace } from 'vuex-class'

const AnswerStorageModule = namespace('answerStorage')

interface CMenuProps {
  show?: boolean;
}

interface CMenuItem {
  text: string;
  // 导航名称右上角徽标，2.5.6 版本开始支持
  badge?: number;
  // 是否在导航名称右上角显示小红点
  dot?: boolean;
  // 导航节点额外类名
  className?: string;
  id?: number | string;
  disabled?: boolean;
  children?: CMenuItem[];
}

@Component({
  model: {
    prop: 'show',
    event: 'showMenu'
  }
})
export default class CMenu extends tsx.Component<CMenuProps> {
  @Prop({
    default: false
  })
  private show!: boolean

  private activeIndex = 0

  private activeId = 'all'

  @AnswerStorageModule.State('category')
  category!: string[]

  get navItem (): CMenuItem[] {
    return [
      {
        text: '分组',
        className: style.menuTreeDeep1,
        children: [
          { text: '全部', id: 'all', className: style.menuTreeDeep2 },
          ...this.category.map(name => ({ text: name, id: name, className: style.menuTreeDeep2 }))
        ]
      }
    ]
  }

  @Emit('showMenu')
  private showMenu (val: boolean) {
    return val
  }

  @AnswerStorageModule.Mutation('setCurrentCategory') setCurrentCategory!: (currentCategory: string) => void

  set modelShow (val: boolean) {
    this.showMenu(val)
  }

  get modelShow () {
    return this.show
  }

  render () {
    return (
      <van-popup
        class={style.chordMenuCpn}
        vModel={this.modelShow}
        get-container="#app"
        position="left">
        <van-tree-select
          class={style.menuTree}
          items={this.navItem}
          activeId={this.activeId}
          mainActiveIndex={this.activeIndex}
          height="100%"
          on={{
            'update:active-id': (val: string) => { this.activeId = val },
            'update:main-active-index': (val: number) => { this.activeIndex = val },
            'click-item': () => { this.setCurrentCategory(this.activeId) }
          }}
        />
      </van-popup>
    )
  }
}
