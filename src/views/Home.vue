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
<!--        <van-field v-model="value" label="文本" placeholder="请输入用户名" />-->

      </div>
    </div>
    <button @click="handleClick">console</button>
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
</style>
