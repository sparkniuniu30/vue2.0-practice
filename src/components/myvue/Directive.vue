<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>
      <div v-mytext="mycolor">{{num}}</div>
      <div>
        <button @click="add">ADD</button>
        <button @click="unbind">解绑</button>
      </div>
    </div>
    
  </div>
</template>



<script>
import Vue from 'vue'
/* Vue.directive('mytext',(el,bingding)=>{
  console.log(el);
  console.log(bingding);
  el.style = 'color:'+bingding.value;
}); */
Vue.directive('mytext',{
  bind(){ //被绑定
    console.log('1 - bind');
  },
  inserted(){ // 绑定到节点
    console.log('2 - inserted');
  },
  update(){ // 组件更新
    console.log('3 - update');
  },
  componentUpdated(){ //组件更新完成
    console.log('4 - componentUpdated');
  },
  unbind(){ // 解绑
    console.log('5 - unbind');
  }
});
export default {
  data () {
    return {
      msg: 'Vue.directive',
      num: 10,
      mycolor:'red'

    }
  },
  methods: {
    add(){
      this.num++;
    },
    unbind(){
      this.$destroy();
    }
    
  }
}

</script>


<style scoped>

</style>
