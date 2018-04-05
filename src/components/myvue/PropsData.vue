<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="content">
      <header></header>
      
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
var header_a = Vue.extend({
  template:`<p>{{text}}-{{a}}</p>`,
  data(){
    return {
      text: 'hello , i am header!'
    }
  },
  props:['a']
});
// new header_a({propsData:{a:12}}).$mount('header');
export default {
  data () {
    return {
      msg: 'propsData'
    }
  },
  computed: {
   
  }
}

</script>


<style scoped>
.content{
  text-align: left;
}
</style>
