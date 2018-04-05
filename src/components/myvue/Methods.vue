<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="content">
      <p>{{count}}</p>
      <button @click="add(10,$event)">add-num</button>
      <button @click="add()">add-1</button>
      <p>
        <btn  @click.native="add(2)"></btn>
      </p>
    </div>
  </div>
</template>

<script>
var btn = {
  template:`<button>组件ADD</button>`
};
export default {
  data () {
    return {
      msg: 'methods',
      count:1
    }
  },
  components: {
    'btn': btn
  },
  methods: {
    add(num,event){
      if(num){
        this.count += num;
      } else{
        this.count++;
      }
      console.log(event);
    }
  }
}

</script>


<style scoped>
.content{
  text-align: left;
}
</style>
