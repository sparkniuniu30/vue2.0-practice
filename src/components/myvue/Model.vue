<template>
  <div>
    <h1>{{ msg }}</h1>
    <div  class="text-center">
      <p>原始文本{{message}}</p>
      <p>文本框：</p>
      <div>
        <p>
          v-model:<input type="text" v-model="message">
        </p>
        <p>
          v-model.lazy
          <input type="text" v-model.lazy="message">
        </p>
        <p>
          v-model.number
          <input type="text" v-model.number="message">
        </p>
        <p>
          v-model.trim
          <input type="text" v-model.trim="message">
        </p>
      </div>
      <p>文本域：</p>
      <textarea cols="30" rows="10" v-model="message"></textarea>
      <p>多选框绑定一个指：</p>
      <input type="checkbox" id="myCheckbox" v-model="isTrue">
      <label for="myCheckbox">{{isTrue}}</label>
      <p>多选框绑定数组</p>
      <p v-show="webNames.length!=0">{{webNames}}</p>
      <input type="checkbox" id="myCheckbox1" value="lili1" v-model="webNames">
      <label for="myCheckbox1">lili1</label>
      <input type="checkbox" id="myCheckbox2" value="lili2" v-model="webNames">
      <label for="myCheckbox2">lili2</label>
      <input type="checkbox" id="myCheckbox3" value="lili3" v-model="webNames">
      <label for="myCheckbox3
      ">lili3</label>
      <p>单选框绑定</p>
      <input type="radio" id="one" v-model="sex" value="man">
      <label for="one">man</label>
      <input type="radio" id="two" v-model="sex" value="woman">
      <label for="two">woman</label>
      <p>您选择的性别是：{{sex}}</p>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'v-model',
      message:'hello word',
      isTrue:false,
      webNames:[],
      sex:'man'
    }
  },
  methods: {
  
  }
}


</script>


<style scoped>
.text-center{
  text-align: left;
}
</style>
