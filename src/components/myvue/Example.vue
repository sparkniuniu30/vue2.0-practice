<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="content">
      <p>{{count}}</p>
      <button @click="reload">刷新</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data () {
    return {
      msg: 'Example',
      count:1
    }
  },
  methods: {
    reload(){
      this.$forceUpdate();
      this.count ++;
      this.$nextTick(()=>{
        console.log('刷新后我被调用了');
      })
    }
  }

}

</script>


<style scoped>
.content{
  text-align: left;
}
</style>
