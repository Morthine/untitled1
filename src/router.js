import VueRouter from 'vue-router'



import HomeContainer from './components/tabbar/Homecontainer.vue'
import SearchContainer from './components/tabbar/SearchContainer'
import ShopcarContainer from './components/tabbar/ShopcarContainer'
import VipContainer from './components/tabbar/VipContainer'


import NewList from './components/news/NewList'


const router = new VueRouter({
  routes: [
    {path: '/' ,component: HomeContainer},
    {path: '/search' ,component: SearchContainer},
    {path: '/home' ,component: HomeContainer},
    {path: '/vip' ,component: VipContainer},
    {path: '/shopcar' ,component: ShopcarContainer},
    {path:'/home/newslist',component: NewList}

  ],

  linkActiveClass : "mui-active"

})

export default router

