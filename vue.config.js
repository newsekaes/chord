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
  publicPath: process.env.DEPLOY_ENV === 'gh-page'
    ? '/chord/'
    : '/'
}
