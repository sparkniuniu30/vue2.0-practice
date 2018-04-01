<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>
      <p><img :src="imgSrc"></p>
      <p><a :href="webSrc" target="_blank">百度</a></p>
      <p :class="className">1.绑定class</p>
      <p :class="{classA:isOK}">2.绑定class中的判断</p>
      <p :class="[styleA,styleB]">3.绑定class中的数组</p>
      <p :class="isOK?styleA:styleB">4.绑定class中的三元运算</p>
      <div>
        <input type="checkbox" id="isOK" v-model="isOK">
        <label for="isOK">isOK-{{isOK}}</label>
      </div>
      <div :style="{color:'red',fontSize:'30px'}">5.绑定style</div>
      <div :style="{color:color,fontSize:font}">5.绑定style</div>
      <div :style="styleObj">6.对象绑定style</div>
      
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'v-bind',
      imgSrc:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3779500948,1727915183&fm=175&app=12&f=JPEG?w=218&h=146&s=BBB666815E70FFCC1C1DCC9E030050D3',
      webSrc:'https://www.baidu.com/',
      className:'classA',
      isOK: false,
      styleA:'classA',
      styleB:'classB',
      color:'red',
      font:'30px',
      styleObj:{
        color:'green',
        fontSize:'30px'
      }
    }
  },
  computed: {
   
  }
}

</script>


<style scoped>
ul{
  text-align: left;
}
.classA{
  color: red;
}
.classB{
  font-size: 150%;
}
</style>
