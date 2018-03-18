import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import MyES6 from '@/components/ES6'
import My404 from '@/components/404'
import Count from '@/components/Count'

Vue.use(Router)

export default new Router({
  // mode:'history',
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index   
    },{
      path:'/MyES6',
      component: MyES6,
      alias: '/alias-to-MyES6',
     /*  beforeEnter: (to,from,next)=> {
        console.log(to);
        console.log(from);
        next();
      } */
    },{
      path:'/redirect-to-Index',
      redirect:'/'
    },{
      path:'*',
      component:My404
    },{
      path:'/count',
      component:Count
    }
  ]
})
