import { Vue, Component } from 'vue-property-decorator'
import CHeader from '@/components/CHeader'

@Component
export default class App extends Vue {
  render () {
    return (
      <div id="app" class="app">
        <CHeader class="app-header" />
        <router-view class="app-main" />
      </div>
    )
  }
}
