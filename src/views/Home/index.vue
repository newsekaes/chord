<template>
  <div class="home">
    <div class="chord-cardBox">
      <ChordCard v-for="item in keyMaps" :key="item.name" :answer="item.map" :name="item.name" class="chord-card"></ChordCard>
    </div>
    <div class="chord-create-box">
      <ChordCard class="chord-card" :is-create-box="true" @add="addChord"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ChordCard from '@/views/Home/chordCard'
export default {
  name: 'Home',
  components: {
    ChordCard
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
    addChord (keys) {
      if (this.$answerStorage.addAnswer({
        name: this.newKey.name,
        map: keys
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
    /*padding: 10px;*/
    /*box-sizing: border-box;*/
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
</style>
