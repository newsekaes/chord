<template>
  <div class="home">
    <div class="chord-cardBox">
      <div v-for="item in keyMaps" :key="item.name" class="chord-card">
        <h3>{{item.name}}</h3>
        <div class="chord-box">
          <Chord :answer="item.map" ref="chord"></Chord>
        </div>
      </div>
    </div>
    <div class="chord-create-box">
      <div class="chord-card">
        <h3 class="chard-create-title">新建和弦</h3>
        <van-field v-model="newKey.name" label="名称" placeholder="请输入和弦名不可重复" />
        <div class="chord-box">
          <Chord ref="chordAdd"></Chord>
        </div>
        <div class="chard-create-btn" @click="addChord">确定</div>
      </div>
    </div>
<!--    <button @click="handleClick">保存</button>-->
<!--    <button @click="handleAdd">添加</button>-->
  </div>
</template>

<script>
// @ is an alias to /src
import Chord from '@/components/Chord'
export default {
  name: 'Home',
  components: {
    Chord
  },
  data () {
    return {
      keyMaps: [],
      newKey: {
        name: '',
        answer: []
      }
    }
  },
  methods: {
    handleClick () {
      const targets = this.$refs.chord
      console.log(targets.map((item, index) => ({
        name: this.keyMaps[index].name,
        map: item.keys
      })))
    },
    addChord () {
      const target = this.$refs.chordAdd
      if (this.$answerStorage.addAnswer({
        name: this.newKey.name,
        map: [target.keys]
      })) {
        this.newKey.name = ''
      }
    }
  },
  created () {
    this.keyMaps = this.$answerStorage.getSavedAnswers()
  }
}
</script>
<style lang="scss">
  .home {
    width: 100%;
  }
  .chord-cardBox {
    display: flex;
    flex-wrap: wrap;
  }
  .chord-card {
    flex-shrink: 0;
    flex-grow: 0;
    margin-top: 20px;
    margin-left: 20px;
    width: 350px;
    height: 150px;
    overflow: hidden;
    border-radius: 10px;
    border: 2px solid #a1a1a1;
  }
  .chord-box {
    display: flex;
    justify-content: center;
  }
  .chord-create-box {
    margin-bottom: 30px;
    .chard-create-title {
      margin-top: 20px;
    }
    .chord-card {
      height: 240px;
    }
    .chard-create-btn {
      width: 80%;
      margin: 10px auto 0;
      height: 30px;
      border-radius: 4px;
      text-align: center;
      line-height: 30px;
      background: #42b983;
      color: #FFFFFF;
    }
  }
</style>
