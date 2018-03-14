import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import MyES6 from '@/components/ES6'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      components: {
        default: Index,
        MyES6: MyES6
      }
     
    }
  ]
})
