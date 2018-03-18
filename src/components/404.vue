<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Error:404'
    }
  },
  created () {
    // destructuring
  function bf(){
    return ['aa','bb','cc'];
  }
  let [a,b,c] = bf();
  console.log(a,b,c);




  // object-destructuring
  /* function bf(){
    return {s1:'aa',s2:'bb',s3:'cc'};
  }
  let {s1:a1,s2:a2,s3:a3} = bf();
  console.log(a1,a2,a3); */


  // template-string
  /* let s1 = 'aa',s2 = 'bb';
  let bf = `他们拼接的结果为
   ${s1} 与 ${s2}`;
  console.log(bf); */


  // tagged-templates
  /* let s1 = 'aa', s2 = 'bb';
  let bf = kitchen `拼接为
  ${s1} 与 ${s2} !`;
  function kitchen (strings,...values) {
    console.log(strings);
    console.log(values);
    let result = '';
    for(let i=0;i<values.length;i++){
      result += strings[i];
      result += values[i];
    }
    result +=  strings[strings.length-1];
    return result;
  }
  console.log(bf); */




  // string-function
  /* let s1 = 'aa', s2 = 'bb';
  let bf = `他们连接的结果是
  ${s1} 与 ${s2} !`;
  console.log(
    // bf.endsWith('!')
    bf.includes('aa')
  ) */




  // function default paramenter
  /* function bf (s1='aa',s2='bb'){
    return `${s1} ${s2}`;
  }
  console.log(
    // bf()
    bf('cc','dd')
  ) */




  // functions spread
  /* let s1 = ['aa','bb'],
      s2 = ['cc',...s1];
  console.log(s1);
  console.log(...s1);
  console.log(s2); */




  // functions rest
  /* function bf(s1,s2,...others){
    // console.log(s1,s2,...foods);
    console.log(s1,s2,others);
  }
  bf('aa','bb','cc','dd'); */



  // destructured parameters
  /* function bf (s1,s2,{s3,s4}={}){
    console.log(s1,s2,s3,s4);
  }
  bf('aa','bb',{s3:'cc',s4:'dd'}); */




  // function name
 /*  let cf = function bf(argument){}
  console.log(
    // bf.name
    cf.name
  ) */



  // arrow function
  /* let bf = (s1,s2) =>{s1+s2;};
  console.log(bf); */


  // object literal
  /* let s1 = 'aa', s2 ='bb';
  let s3 = {
    s1,
    s2,
    bf(){}
  }
  console.log(s3); */



  // object prop name
  /* let s1 = {};
  let hname = 'hot name';
  s1.name = 'aa';
  // s1['hot name'] = 'bb';
  s1[hname] = 'cc'
  console.log(s1); */




  // object is
  /* console.log(Object.is(NaN,NaN));
  console.log(Object.is(+0,-0)); */



  // object assign
  /* let bf = {};
  Object.assign(
    bf,
    {s1:'aa'},
    // {s1:'bb'}
    {s2:'cc'}
  )
  console.log(bf); */



  // setprototypeof
  /* let af = {
    getS1(){
      return 'aa';
    }
  };
  let bf ={
    getS2(){
      return 'bb';
    }
  };
  let cf=Object.create(af);
  console.log(cf.getS1());
  console.log(Object.getPrototypeOf(cf)===af);

  Object.setPrototypeOf(cf,bf);
  console.log(cf.getS2());
  console.log(Object.getPrototypeOf(cf) === bf); */



  // proto
  /* let af = {
    getS1(){
      return 'aa';
    }
  };
  let bf ={
    getS2(){
      return 'bb';
    }
  };
  let cf = {
    __proto__:af
  };
  console.log(cf.getS1());
  console.log(Object.getPrototypeOf(cf) === af);
  cf.__proto__=bf;
  console.log(cf.getS2());
  console.log(Object.getPrototypeOf(cf)===bf); */



  // super
  /* let af = {
    getS1(){
      return 'aa';
    }
  };
  let bf ={
    getS2(){
      return 'bb';
    }
  };
  let cf = {
    __proto__:af,
    getS3(){
      return super.getS1() + 'cc';
    }
  };
  console.log(cf.getS3()); */


  
  
  
  // iterators
  /* function af(s1){
    let i =0;
    return {
      next(){
        let done = (i>=s1.length);
        let value = !done ? s1[i++]:undefined;
        return {
          value:value,
          done:done
        }
      }
    }
  }
  let ss = af(['aa','bb','cc']);
  console.log(ss.next());
  console.log(ss.next());
  console.log(ss.next());
  console.log(ss.next()); */



  // generators
  /* let s1 = function* (pra){
    for(let i=0;i<pra.length;i++){
      yield pra[i];
    }
  }
  let af = s1(['aa','bb']);
  console.log(af.next());
  console.log(af.next());
  console.log(af.next()); */






  // classes
  /* class s1 {
    constructor(food){
      this.food = food;
    }
    cook(){
      console.log(this.food);
    }
  }
  let af = new s1('aa');
  af.cook(); */





  // get set
  /* class s1 {
    constructor(food){
      this.food = food;
      this.dish = [];
    }
    get menu(){
      return this.dish;
    }
    set menu(dish){
      this.dish.push(dish);
    }
    cook(){
      console.log(this.food);
    }
  }
  let af = new s1();
  console.log(af.menu = 'aa');
  console.log(af.menu = 'bb'); */



  // static
  /* class s1 {
    constructor(food){
      this.food = food;
      this.dish = [];
    }
    get menu(){
      return this.dish;
    }
    set menu(dish){
      this.dish.push(dish);
    }
    static cook(food){
      console.log(food);
    }
  }
  s1.cook('aa'); */





  // extends
  /* class Person {
    constructor(name,birthday){
      this.name = name;
      this.birthday = birthday;
    }
    intro(){
      return `${this.name},${this.birthday}`;
    }
  }
  class Chef extends Person {
    constructor(name,birthday){
      super(name,birthday);
    }
  }
  let s1 = new Chef('lillian','2018-08-28');
  console.log(s1.intro()); */




  // set
  /* let desserts = new Set('abc');
  desserts.add('d');
  desserts.add('d');
  console.log(desserts);
  console.log(desserts.size);
  console.log(desserts.has('a'));
  desserts.delete('a');
  console.log(desserts);
  desserts.forEach(dessert => {
    console.log(dessert);
  })
  desserts.clear();
  console.log(desserts); */



  // map
  /* let food = new Map();
  let fruit ={},cook=function(){},dessert='de';
  food.set(fruit,'aa');
  food.set(cook,'bb');
  food.set(dessert,'cc');
  console.log(food);
  console.log(food.size);
  console.log(food.get(fruit));
  console.log(food.get(cook));
  food.delete(dessert);
  console.log(food.has(dessert));
  food.forEach((value,key) => {
    console.log(`${key}=${value}`);
  })
  food.clear();
  console.log(food); */





  // module
  /* import {fruit,dessert} from './modules/chef';
  console.log(fruit,dessert);

  import * as chef from './modules/chef';
  console.log(chef.fruit,chef.dessert); */



  // rename
  /* let fruit = 'aa';
  let dessert = 'bb';
  function dinner(fruit,dessert){
    console.log(`dinner is : ${fruit} and ${dessert}`);
  }
  export {fruit,dessert,dinner as supper}; */





  // export default
  /* let fruit = 'aa';
  let dessert = 'bb';
  export default function dinner(fruit,dessert){
    console.log(`dinner is : ${fruit} and ${dessert}`);
  }


  function dinner(fruit,dessert){
    console.log(`dinner is : ${fruit} and ${dessert}`);
  }
  export {dinner as default}; */


  } 
}
</script>


<style scoped>

</style>
