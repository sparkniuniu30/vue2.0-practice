<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>
      <p>本场比赛得分：{{score}}</p>
      <button @click="plus">加分</button>
      <button @click="minus">减分</button>
      <p>
        <!-- <input type="text" @keyup.enter="onEnter" v-model="scoreInput"> -->
        <input type="text" @keyup.13="onEnter" v-model="scoreInput">
      </p>
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'v-on',
      score:0,
      scoreInput:1
    }
  },
  methods: {
    plus(){
      this.score += parseInt(this.scoreInput) ;
    },
    minus(){
      this.score -= parseInt(this.scoreInput);
    },
    onEnter(){
      this.score += parseInt(this.scoreInput)
    }
  }
}


</script>


<style scoped>

</style>
