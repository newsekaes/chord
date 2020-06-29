import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueKonva from 'vue-konva'

import '@/style/index.scss'
import '@/components'

Vue.use(VueKonva, { prefix: 'Konva' })

Vue.config.productionTip = false

// (function () {
//   const baseSize = 16
//   // 设置根节点的font-size大小函数
//   function setRem () {
//     // 375为设计稿页面宽度，如为750，把375改为750
//     const scale = document.documentElement.clientWidth / 375
//     // 设置页面根节点字体大小
//     document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
//   }
//   // 初始化
//   setRem()
//   // 改变窗口大小时重新设置根节点的font-size大小
//   window.onresize = function () {
//     setRem()
//   }
// })()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
