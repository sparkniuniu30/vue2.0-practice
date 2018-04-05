<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="content">
      <p>{{newPrice}}</p>
      <ul>
        <li v-for="(item,index) in reverseNews" :key="index">
          {{item.title}} - {{item.data}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'computed',
      price: 100,
      newsList: [
        {title:'清明，为了祭奠，更为了前行',data:'2018/4/5'},
        {title:'向先烈致敬！习近平的这些话饱含深情',data:'2018/4/6'},
        {title:'两会后非洲领导人接连访华 习近平这样描绘中非关系',data:'2018/4/6'},
        {title:'清明忆先烈 习近平这样传承“红色基因”',data:'2018/4/7'}
      ]
    }
  },
  computed: {
   newPrice(){
     return this.price = '￥'+ this.price + '元';
   },
   reverseNews(){
     return this.newsList.reverse();
   }
  }
}

</script>


<style scoped>
.content{
  text-align: left;
}
</style>
