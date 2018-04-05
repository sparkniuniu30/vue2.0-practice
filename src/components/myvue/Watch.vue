<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="content">
      <p>今日温度：{{temperature}}</p>
      <p>穿衣建议：{{currentCoat}}</p>
      <button @click="rise">升高温度</button>
      <button @click="reduce">降低温度</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'watch',
      temperature:14,
      coat:['T恤短袖','夹克长裙','棉衣羽绒服'],
      currentCoat:'夹克长裙'
    }
  },
  methods: {
    rise(){
      this.temperature += 5;
    },
    reduce(){
      this.temperature -= 5;
    }
  },
  watch: {
    temperature(newVal,oldVal){
      if(newVal >= 26){
        this.currentCoat = this.coat[0];
      } else if(newVal > 0){
        this.currentCoat = this.coat[1];
      } else {
        this.currentCoat = this.coat[2];
      }
    }
  }
}

/* app.$watch('temperature',(newVal,oldVal)=>{
   if(newVal >= 26){
      this.currentCoat = this.coat[0];
    } else if(newVal > 0){
      this.currentCoat = this.coat[1];
    } else {
      this.currentCoat = this.coat[2];
    }
}) */

</script>


<style scoped>
.content{
  text-align: left;
}
</style>
