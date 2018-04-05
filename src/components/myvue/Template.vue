<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="content">
      <template>
        <h2 style="color:red">我是标签template</h2>
      </template>
      
    </div> 
  </div>
</template>

<!-- 
<script type="x-template" id="dd3">
  <h2 style="color:red">我是script标签template</h2>
</script>
-->

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      msg: 'template'
    }
  },
  // template:`<h2 style="color:red">我是选项template</h2>`,
  methods: {
    
  }
 

}

</script>


<style scoped>
.content{
  text-align: left;
}
</style>
