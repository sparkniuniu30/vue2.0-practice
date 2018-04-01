<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>
      <p v-pre>{{msg}}</p>
      <p v-cloak>渲染完成后，才显示</p>
      <p v-once>{{test}}</p>
      <p><input type="text" v-model="test"></p>
      <p>{{test}}</p>
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'v-pre, v-clock and v-once',
      test:'hello world'

    }
  },
  computed: {
    
  }
}

</script>


<style scoped>

</style>
