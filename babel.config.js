module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset', {
      jsx: true
    }]
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
