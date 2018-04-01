<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <div class="flex-box">
      <!-- <router-link to="/">Index</router-link> -->
      <router-link to="/MyES6">MyES6</router-link>
      <router-link to="/Count">Vuex-Count</router-link>
      <router-link to="/MyVue">MyVue</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to My Index'
    }
  },
  created () {}
}
</script>


<style scoped>
.flex-box{
  display: flex;
  justify-content: space-evenly;
  background: #efeded;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 20px 0;
}
</style>
