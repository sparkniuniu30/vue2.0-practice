<template>
  <div>
    <h1>{{ msg }}</h1>
    <div v-if="isLogin">hello, lillian</div>
    <div v-else>please login</div>
    <div v-show="isLogin">hello, lillian</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'v-if and v-show',
      isLogin: true
    }
  }
}
</script>


<style scoped>

</style>
