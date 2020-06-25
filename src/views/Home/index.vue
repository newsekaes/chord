<template>
  <div class="home">
    <div class="edit-switch-area">
      <div class="edit-switch-item">
        <van-icon class="switch-item-icon" name="edit"/><span>: </span><van-switch inactive-color="gray" class="switch-item-field" v-model="editing"/>
      </div>
      <div class="edit-switch-item">
        <van-icon class="switch-item-icon" name="completed"/><span>: </span><van-switch inactive-color="gray" class="switch-item-field" v-model="showAnswer"/>
      </div>
    </div>
    <div class="chord-card-area">
      <div class="chord-cardBox">
        <ChordCard
          :is-editing="editing"
          :show-answer="showAnswer"
          v-for="(item, index) in keyMaps"
          :key="item.name"
          :answer="item.map[0]"
          :name="item.name"
          @add="addChord"
          @del="delChord(index)"
          @modify="modifyChord(index, $event)"
          class="chord-card"
          ref="chord"
        />
      </div>
      <div class="chord-create-box" v-show="editing">
        <ChordCard class="chord-card" :is-create-box="true" @add="addChord" :key="keyMaps.length + 1"/>
      </div>
    </div>
    <ChordJson :show.sync="showTab"></ChordJson>
    <div class="chord-tab-show" @click="showTab = !showTab">导入/导出</div>
  </div>
</template>

<script>
// @ is an alias to /src
import ChordCard from '@/views/Home/chordCard'
import ChordJson from '@/components/ChordJson'
export default {
  name: 'Home',
  components: {
    ChordCard,
    ChordJson
  },
  data () {
    return {
      keyMaps: [],
      editing: false,
      showAnswer: false,
      showTab: false
    }
  },
  methods: {
    addChord ({ name, keys }) {
      this.$answerStorage.addAnswer({
        name: name,
        map: [keys]
      })
    },
    delChord (index) {
      this.$answerStorage.delAnswer(index)
    },
    modifyChord (index, { name, keys }) {
      this.$answerStorage.modifyAnswer(index, { name, keys })
    },
  },
  created () {
    this.keyMaps = this.$answerStorage.getSavedAnswers()
  }
}
</script>
<style lang="scss">
  .home {
    width: 100%;
    /*padding: 10px;*/
    /*box-sizing: border-box;*/
  }
  .edit-switch-area {
    position: fixed;
    top: 0;
    z-index: 999;
    display: flex;
    justify-content: space-around;
    align-content: center;
    width: 100%;
    padding: 0 20px;
    border-bottom: 1px solid;
    background: #FFF;
    .edit-switch-item {
      padding: 20px 0 20px 20px;
      text-align: left;
      .switch-item-icon {
        font-size: 30px;
        vertical-align: middle;
      }
      .switch-item-field {
        margin-left: 20px;
        vertical-align: middle;
      }
    }
  }
  .chord-card-area {
    margin-top: 100px;
  }
  .chord-cardBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .chord-card {
      flex-shrink: 0;
      flex-grow: 0;
      margin: 20px auto 0;
    }
  }
  .chord-create-box {
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .chord-card {}
  }
  .chord-tab-show {
    cursor: pointer;
    font-size: 12px;
    line-height: 50px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 70px;
    height: 50px;
    border-radius: 25px;
    border: 1px solid #DDD;
    background-color: #42b983;
    color: #ffffff;
  }
</style>
