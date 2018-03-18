<template>
  <div>
      <h2>{{msg}}</h2>
      <!-- <h3>{{$store.state.count}} 等同于 {{count}}</h3> -->
      <h3>{{count}}---{{getcount}}</h3>
      <p>
          <!-- <button @click="$store.commit('add',10)">+</button> -->
          <!-- <button @click="$store.commit('reduce')">-</button> -->
          <button @click="add(10)">+</button>
          <button @click="reduce">-</button>
      </p>
      <p>
          <button @click="addAction">+</button>
          <button @click="reduceAction">-</button>
      </p>
  </div>
</template>
<script>
import store from '@/vuex/store'
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
    data(){
        return{
            msg:'Hello Vuex'
        }
    },
    /* computed: {
      count(){
          return this.$store.state.count;
      }  
    }, */
    computed: /*  mapState({
            count:state => state.count
    }) */

    // mapState(['count'])
    {
        ...mapState(['count']),
        /* count(){
            return this.$store.getters.count;
        } */
        ...mapGetters(['getcount'])
    }
    ,
    methods:
    // mapMutations(['add','reduce'])
    {
        ...mapMutations(['add','reduce']),
        ...mapActions(['addAction','reduceAction'])
    }
    ,

    store
  
}
</script>
