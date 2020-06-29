<template>
  <div class="home">
    <div class="edit-switch-area">
      <img class="logo" :src="`${BASE_URL}favicon.ico`" alt="">
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
          v-for="(item, index) in answers"
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
        <ChordCard class="chord-card" :is-create-box="true" @add="addChord" :key="answers.length + 1"/>
      </div>
    </div>
    <ChordJson :show.sync="showTab"></ChordJson>
    <div class="chord-tab-show" @click="showTab = !showTab"><van-icon name="replay" /></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex'
import ChordCard from '@/views/Home/chordCard'
import ChordJson from '@/components/ChordJson'
// import { Answers } from '@/store/answerStorage'
const BASE_URL = process.env.BASE_URL
export default {
  name: 'Home',
  components: {
    ChordCard,
    ChordJson
  },
  data () {
    return {
      editing: false,
      showAnswer: false,
      showTab: false,
      BASE_URL
    }
  },
  computed: {
    ...mapState('answerStorage', ['answers'])
  },
  methods: {
    ...mapActions('answerStorage', [
      'addAnswer',
      'delAnswer',
      'modifyAnswer'
    ]),
    addChord ({ name, keys }) {
      this.addAnswer([{
        name: name,
        map: [keys]
      }])
    },
    delChord (index) {
      this.delAnswer(index)
    },
    modifyChord (index, { name, keys }) {
      this.modifyAnswer([index, { name, keys }])
    }
  }
}
</script>
<style lang="scss">
  .home {
    width: 100%;
    /*padding: 10px;*/
    /*box-sizing: border-box;*/
  }
  .logo {
    height: 50px;
    width: 50px;
    padding: 5px;
  }
  .edit-switch-area {
    position: fixed;
    top: 0;
    z-index: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
    font-size: 20px;
    font-weight: bold;
    line-height: 50px;
    position: fixed;
    bottom: 20px;
    right: 10px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: #42b983;
    color: #ffffff;
  }
</style>
