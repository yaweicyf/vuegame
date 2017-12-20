import Vue from 'vue'
import Router from 'vue-router'
//import VueResource from 'vue-resource'
import Index from '@/components/index'
import Game from '@/components/game'
import UserCenter from '@/components/usercenter'
import Latest from '@/components/latest'
import Rank from '@/components/rank'
import Detail from '@/components/detail'

Vue.use(Router)
//Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name:'/Index',
      component: Index,
    },
    {
    	path:'/Index',
    	name:'Index',
    	component:Index
    },
    {
    	path:'/Game',
    	name:'Game',
    	component:Game,
      children:[
        {
          path:'Latest',
          name:'Latest',
          component:Latest
        },
        {
          path:'Rank',
          name:'Rank',
          component:Rank
        }
      ]
    },
    {
    	path:'/UserCenter',
    	name:'UserCenter',
    	component:UserCenter
    },
    {
      path:'/Detail/:i',
      name:'Detail',
      component:Detail

    }

  ]
})
