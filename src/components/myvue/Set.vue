<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="content">
      <p>{{count}}</p>
      <ul>
        <li v-for="(item, index) in arr" :key="index">{{item}}</li>
      </ul>
      <p>
        <button @click="change">change</button>
      </p>
    </div> 
  </div>
</template>



<script>
import Vue from 'vue'
export default {
  data () {
    return {
      msg: 'Vue.set',
      count:1,
      arr:['aaa','bbb','ccc']
    }
  },
  methods: {
    change(){
      // this.count++;
      // this.arr[1] = 'ddd';

      Vue.set(this.arr,1,'ddd');
    }
  }
}

</script>


<style scoped>
.content{
  text-align: left;
}
</style>
