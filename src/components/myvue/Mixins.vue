<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="content">
      <p>{{count}}</p>
      <button @click="add">add</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
var addConsole = {
  updated () {
    console.log('数据发生变化，变化成了' + this.count);
  }
};

/* Vue.mixin({
  updated(){
    console.log('我是全局的混入');
  }
}); */
export default {
  data () {
    return {
      msg: 'mixins',
      count:1
    }
  },
  methods: {
    add(){
      this.count ++;
    }
  },
  updated(){
    console.log('我是原生的update');
  },
  mixins: [addConsole]
}

</script>


<style scoped>
.content{
  text-align: left;
}
</style>
