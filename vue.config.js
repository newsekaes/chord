// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

// npm 自定义参数
function getNpmConfig (name) {
  // 解析指令参数
  // npm指令需要读取 process.env.npm_config_argv
  const argv = JSON.parse(process.env.npm_config_argv)
  const config = {}
  // 获取自定义参数
  let idx = 2
  const cooked = argv.cooked
  const length = argv.cooked.length
  while ((idx += 2) <= length) {
    config[cooked[idx - 2]] = cooked[idx - 1]
  }
  return config[name]
}

process.env.DEPLOY_ENV = getNpmConfig('--dp-env') || 'default'

module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Chord和弦图',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      css: {
        // 注意：以下配置在 Vue CLI v4 与 v3 之间存在差异。
        // Vue CLI v3 用户可参考 css-loader v1 文档
        // https://github.com/webpack-contrib/css-loader/tree/v1.0.1
        modules: {
        },
        localsConvention: 'camelCaseOnly'
      },
      scss: {
        additionalData: '@import "~@/style/variables.scss";'
      }
    }
  },
  publicPath: process.env.DEPLOY_ENV === 'gh-page'
    ? '/chord/'
    : '/'
}
