<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="flex-box">
      <router-link to="/HelloWord">HelloWord</router-link>
      <router-link to="/IfAndShow">v-if and v-show</router-link>
      <router-link to="/For">v-for</router-link>
      <router-link to="/TextAndHtml">v-text and v-html</router-link>
      <router-link to="/On">v-on</router-link>
      <router-link to="/Model">v-model</router-link>
      <router-link to="/Bind">v-bind</router-link>
      <router-link to="/Other">other</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'MyVue'
    }
  }
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
