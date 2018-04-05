<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="content">
     <p>{{count}}</p>
     <!-- <p>${ count }</p> -->
     <button @click="add">add</button>
    </div>
  </div>
</template>

<script>
var extendsObj = {
  updated(){
    console.log('我是扩展的update');
  },
  methods: { // 相同的方法，这里不执行
    add(){
      this.count ++;
      console.log('我是扩展的方法');
    }  
  }
};
export default {
  data () {
    return {
      msg: 'extends',
      count:1
    }
  },
  methods: {
    add(){
      this.count ++;
      console.log('我是原生的方法');
    }  
  },
  updated () {
    console.log('我是原生的update');
  },
  extends:extendsObj,// 扩展只能为一个
  // delimiters: ['${','}']

}

</script>


<style scoped>
.content{
  text-align: left;
}
</style>
