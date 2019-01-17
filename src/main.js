
import Vue from 'vue'
import App from './App'


import router from './router'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import mui from '../lib/mui.min.js'
import '../lib/mui.min.css'
import '../lib/mui.ttf'
Vue.config.productionTip = false

/*mui('body').on('tap','a',function(){document.location.href=this.href;});*/

mui('body').on('click','a',function(){document.location.href=this.href;});

/*
import  Mint  from 'mint-ui'
Vue.use(Mint)


*/
/*import Mint from'mint-ui'

import'mint-ui/lib/style.css'

Vue.use(Mint);*/

import { Header,Swipe, SwipeItem  } from  'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import'mint-ui/lib/style.css'



import  VueResource from 'vue-resource'



new Vue({
  el: '#app',
  render: function(createElement){
    return  createElement(App)
  },

  router
})
