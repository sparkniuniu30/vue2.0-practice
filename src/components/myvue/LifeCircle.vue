<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="content">
      <p>{{count}}</p>
      <button @click="add">add</button>
      <button @click="mydestroy">销毁</button>
    </div> 
  </div>
</template>



<script>
import Vue from 'vue'
export default {
  data () {
    return {
      msg: 'Vue生命周期',
      count: 1
    }
  },
  methods: {
    add(){
      this.count  ++;
    },
    mydestroy(){
      this.$destroy();
    }
  },
  beforeCreate () {
    console.log('1-beforeCreate 初始化之前');
  },
  created () {
    console.log('2 - created 创建完成');
  },
  beforeMount () {
    console.log('3 - beforeMount 挂载之前');
  },
  mounted () {
    console.log('4 - mounted 被挂载之后');
  },
  beforeUpdate () {
    console.log('5 - beforeUpdate 数据更新前');
  },
  updated () {
    console.log('6 - update 被更新后');
  },
  activated () {
    console.log('7 - activated ');
  },
  deactivated () {
    console.log('8 - deactivated');
  },
  beforeDestroy () {
    console.log('9 - beforeDestroy 销毁之前');
  },
  destroyed () {
    console.log('10 - destroyed 销毁之后');
  }

}

</script>


<style scoped>
.content{
  text-align: left;
}
</style>
