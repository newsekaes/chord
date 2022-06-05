# Chord

基于 TypeScript 环境，使用 Vue2 全家桶制作的和弦练习小工具。供学习参考和小娱乐  
[在线浏览](https://newsekaes.github.io/chord/)

> 基于 `Vue3` 的重构版本: [chord-vue3](https://github.com/newsekaes/chord-vue3)

## intro

使用 vue-cli3 创建项目， 目录结构如下

```markdown
│  
├─ babel.config.js
├─ package.json
├─ postcss.config.js
├─ README.md
├─ tsconfig.json
├─ vue.config.js
│
├─.github
│  └─workflows
│          main.yml
├─public
│
└─src
    │  App.tsx
    │  main.ts
    │  shims-tsx.d.ts
    │  shims-vue.d.ts
    │
    ├─assets
    ├─components
    ├─const
    ├─router
    ├─store
    ├─style
    ├─utils
    └─views

```

### 工具栈

#### Typescript 支持
`vue-class-component`, `vue-property-decorator`, 'vuex-class'

#### JSX/TSX 支持
`vue-tsx-support`

##### konva-vue
 基于 `canvas` 工具库 `konva`，集成为 vue 组件

#### Vant 2
基于 Vue 2.0 的 UI 组件库

#### github workflows
使用 `github/Actions` 提供的 `workflows` 功能，此项目用来监听 `master` 分支的提交，并自动构建部署到 git-page 站点（即 [在线浏览](https://newsekaes.github.io/chord/) ）  
也可以用来进行各种自动化测试

### 日志
#### 1. 开发进度一览
- 完成keyboard交互 [完成]
- 完成和弦存取体系搭建 [完成大部分]
- 完成mobile和PC适配
- 增加MIDI支持
- 增加guitar交互
- 增加五线谱交互
> 后续开发目标视情况而定
---
#### 2. 阶段性开发日志
- 2020-06-09 项目初始化，完成keyboard基础交互，和弦体系的搭建进行中  
- 2020-06-20 存储保存系统初始化开发  
- 2020-06-21 新建和弦的UI
- 2020-06-22 TS重构部分组件; UI和存储结合完毕
- 2020-06-23 UI优化；添加批量编辑和显示答案
- 2020-06-26 添加导入导出所有和弦数据功能
- 2020-06-29 存储系统弃用vue-plugin，改用vuex-store
- 2020-07-01 页面全tsx化改造
- 2020-07-02 tool工具栏UI优化
- 2020-07-05 UI調整優化; 增加排序功能; 增加初始化功能
- 2020-07-10 添加分类属性
