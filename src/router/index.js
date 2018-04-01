import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import MyES6 from '@/components/ES6'
import My404 from '@/components/404'
import Count from '@/components/Count'
import MyVue from '@/components/MyVue'

import HelloWord from '@/components/myvue/HelloWord'
import IfAndShow from '@/components/myvue/IfAndShow'
import For from '@/components/myvue/For'
import TextAndHtml from '@/components/myvue/TextAndHtml'
import On from '@/components/myvue/On'
import Model from '@/components/myvue/Model'
import Bind from '@/components/myvue/Bind'
import Other from '@/components/myvue/Other'

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
      path:'/Count',
      component:Count
    },{
      path:'/MyVue',
      component:MyVue
    },{
      path:'/HelloWord',
      component:HelloWord
    },{
      path:'/IfAndShow',
      component:IfAndShow
    },{
      path:'/For',
      component:For
    },{
      path:'/TextAndHtml',
      component:TextAndHtml
    },{
      path:'/On',
      component:On
    },{
      path:'/Model',
      component:Model
    },{
      path:'/Bind',
      component:Bind
    },{
      path:'/Other',
      component:Other
    }
  ]
})
