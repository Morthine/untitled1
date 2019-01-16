import VueRouter from 'vue-router'



import HomeContainer from './components/tabbar/Homecontainer.vue'
import SearchContainer from './components/tabbar/SearchContainer'
import ShopcarContainer from './components/tabbar/ShopcarContainer'
import VipContainer from './components/tabbar/VipContainer'


const router = new VueRouter({
  routes: [
    {path: '/search' ,component: SearchContainer},
    {path: '/home' ,component: HomeContainer},
    {path: '/vip' ,component: VipContainer},
    {path: '/shopcar' ,component: ShopcarContainer}

  ],

  linkActiveClass : "mui-active"

})

export default router

