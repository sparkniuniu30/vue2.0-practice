<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(item, key) in sortItems" :key="key">{{item}}</li>
    </ul>
    <ul>
      <li v-for="(student, key) in sortStudents" :key="key">
        {{key+1}}:{{student.name}}-{{student.age}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'v-for',
      items:[53,23,7,14,54,36,28],
      students:[
        {name:'li1',age:20},
        {name:'li2',age:22},
        {name:'li3',age:24},
        {name:'li4',age:16}
      ]
    }
  },
  computed: {
    sortItems(){
      // return this.items.sort((a,b)=>{return a-b;});
      return this.items.sort(sortNum);
    },
    sortStudents(){
      return sortByKey(this.students, "age");
    }
  }
}

function sortNum(a,b){
  return a-b;
}
function sortByKey(array,key){
  return array.sort((a,b)=>{
    let x = a[key];
    let y = b[key];
    return ((x<y)? -1:((x>y)?1:0));
  })
}
</script>


<style scoped>
ul{
  text-align: left;
}
</style>
