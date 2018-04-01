<template>
  <div id="app">
    <img src="./assets/logo.png">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition> 
    <div class="btn-div">
      <button @click="goBack">后退</button>
      <button @click="goAhead">前进</button>
      <button @click="goHome">返回首页</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    goAhead(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/');
    }

  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding:0 50px 30px;
}
.btn-div{
  position: fixed;
  bottom: 20px;
  right: 20px;
}
.fade-enter{
  opacity:0;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave{
  opacity:1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s;
}
</style>
