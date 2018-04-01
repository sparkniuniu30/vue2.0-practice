<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>
      <p>{{textValue}}</p>
      <p v-text="textValue"></p>
      <p>{{dodo}}</p>
      <p v-html="dodo"></p>
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'v-test and v-html',
      textValue:'hello my text and my html',
      dodo:"<h2>i am dodo</h2>"
    }
  }
}


</script>


<style scoped>

</style>
