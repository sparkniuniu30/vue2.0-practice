<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>
      <div id="author"></div>
      <author></author>
    </div> 
  </div>
</template>



<script>
import Vue from 'vue'
var authorExtend = Vue.extend({
  template: "<p><a :href='authorUrl'>{{authorName}}</a></p>",
  data(){
    return {
      authorName:'baidu',
      authorUrl:'https://www.baidu.com/'
    }
  }
});
new authorExtend().$mount('#author');
new authorExtend().$mount('author');

export default {
  data () {
    return {
      msg: 'Vue.extend'


    }
  }
}

</script>


<style scoped>

</style>
