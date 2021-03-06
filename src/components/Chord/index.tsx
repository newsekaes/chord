import { Prop, Component } from 'vue-property-decorator'
import * as tsx from 'vue-tsx-support'
import style from './index.module.scss'
import Konva from 'konva'
const whiteKeyRect = {
  width: 20,
  height: 83,
  fill: 'white'
}
const blackKeyRect = {
  width: 13,
  height: 47,
  fill: 'black'
}

interface ChordProps {
  answer?: number[];
}

@Component
export default class Chord extends tsx.Component<ChordProps> {
  @Prop()
  private answer?: number[]

  private configKonva = {
    width: whiteKeyRect.width * 14 + 10,
    height: whiteKeyRect.height + 5,
    offsetX: -5,
    offsetY: -2.5
  }

  private keys: number[] = new Array(24).fill(0)
  private hoverIndex: null | number = null
  private whiteKeyRect = whiteKeyRect
  private blackKeyRect = blackKeyRect
  private get resultRight () {
    if (this.answer) {
      return this.keys.toString() === this.answer.toString()
    }
    return false
  }

  private render () {
    return (<div class={style.chordItemCpn}>
      <konva-stage config={this.configKonva} ref="stage" style={this.whiteKeyRect.width * 14 + 20}>
        <konva-layer>
          <konva-group>
            {
              this.keys.map((i, index) => {
                return <konva-rect
                  onMouseenter={this.handleMouseEnter.bind(this, index)}
                  onMouseleave={this.handleMouseLeave}
                  onClick={this.handleClick.bind(this, index)}
                  onTap={this.handleClick.bind(this, index)}
                  config={this.getKeyRect(index, i, this.hoverIndex)}
                  key={index}/>
              })
            }
          </konva-group>
        </konva-layer>
      </konva-stage>
      <div class={style.chordItem__result}>
        <span><img style={{ visibility: this.resultRight ? 'visible' : 'hidden' }} width="24" height="24" src={require('@/assets/right.png')} alt="right"/></span>
      </div>
    </div>)
  }

  private getKeyRect (index: number, i: number, hoverIndex: number | null) {
    const key = index % 12
    const part = Math.floor(index / 12)
    const rect: Konva.ShapeConfig = {
      stroke: 'black',
      strokeWidth: 2,
      fill: '#ffffff'
    }
    if (key < 7) {
      Object.assign(rect, whiteKeyRect)
      rect.x = key * whiteKeyRect.width + part * 7 * whiteKeyRect.width
      rect.y = 0
    } else {
      Object.assign(rect, blackKeyRect)
      rect.x = ((key - 7) < 2 ? (key - 7) : (key - 6)) * whiteKeyRect.width + whiteKeyRect.width - blackKeyRect.width / 2 + part * 7 * whiteKeyRect.width
      rect.y = 0
    }
    if (hoverIndex === index) rect.fill = 'gray'
    if (i !== 0) rect.fill = '#ffb8b8'
    return rect
  }

  private handleClick (index: number) {
    this.keys = this.keys.map((i, j) => {
      if (index === j) {
        return i === 0 ? 1 : 0
      } else {
        return i
      }
    })
    this.$emit('change', this.keys)
  }

  private handleMouseEnter (index: number) {
    this.hoverIndex = index
    const stage = (this.$refs.stage as unknown as Konva.Transformer).getStage()
    if (stage) stage.container().style.cursor = 'pointer'
  }

  private handleMouseLeave () {
    this.hoverIndex = null
    const stage = (this.$refs.stage as unknown as Konva.Transformer).getStage()
    if (stage) stage.container().style.cursor = 'pointer'
  }

  public getKeys (): number[] {
    return this.keys
  }

  public showAnswer (): void {
    if (this.answer) {
      this.keys = this.answer
    }
  }

  public clear () {
    this.keys = new Array(24).fill(0)
  }
}
