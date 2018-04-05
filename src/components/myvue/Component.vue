<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="content">
      <mycomponent></mycomponent>
      <!-- <mycomponent1 here="China"></mycomponent1> -->
      <!-- <mycomponent1 from-here="China"></mycomponent1> -->
      <mycomponent1 :from-here="country"></mycomponent1>

      <mycomponent2></mycomponent2>
    </div> 
    <div class="content change-div">
      <component :is="which"></component>
      <button @click="changeComponent">changeComponent</button>
    </div>
  </div>
</template>



<script>
import Vue from 'vue'
Vue.component('mycomponent',{
  template:`<div style="color: red">我是全局的mycomponent组件</div>`
});

var mycomponent3 = {
  template:`<div style="color: green">我是嵌套在mycomponent2里面的mycomponent3 </div>`
};

var mycomponent2 = {
  template:`<div>
    <p style="color: red">我是局部的mycomponent2 </p>
    <mycomponent3></mycomponent3>
  </div>`,
  components: {
    'mycomponent3': mycomponent3
  }
};

export default {
  data () {
    return {
      msg: 'component',
      country: 'China',
      which:'mycomponent2'
    }
  },
  components:{
    'mycomponent1': {
      /* template:`<div style="color: green">mycomponent1 from {{here}}</div>`,
      props:['here'] */
      template:`<div style="color: green">mycomponent1 from {{fromHere}}</div>`,
      props:['fromHere']
    },
    'mycomponent2':mycomponent2
  },
  methods: {
    changeComponent(){
      if(this.which == "mycomponent2"){
        this.which = 'mycomponent1';
      } else {
        this.which = 'mycomponent2';
      }
    }  
  }
 

}

</script>


<style scoped>
.content{
  text-align: left;
}
.change-div{
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px 0;
}
.change-div button{
  margin-top: 20px;
}
</style>
