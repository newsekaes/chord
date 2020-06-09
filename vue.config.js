module.exports = {
  // parallel: false, // ts-loader在多线程的时候打包会丢失三方组件样式
  css: {
    requireModuleExtension: true // 开启CSSmodule并保留xxx.module.css后缀
  }
}
