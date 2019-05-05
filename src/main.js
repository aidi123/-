// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import YDUI from 'vue-ydui'/* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css'
import  VueAwesomeSwiper from 'vue-awesome-swiper'
import  'swiper/dist/css/swiper.css'
import store from './store'
import common from './common/wxapi.js'
Vue.use(VueAwesomeSwiper)
Vue.use(MintUI)
Vue.use(YDUI)
//字体图标
import './iconfont/iconfont.css'
import './iconfont/iconfont.ttf'
//引入vue-preview
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})
//引入时间格式话插件
import moment from 'moment'
//定义全局过滤器
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
  //return moment() 当前时间
  return moment(dataStr).format(pattern)
})
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.interceptors.push((request, next)=>{
  // 获取token 值
  let token = localStorage.getItem('mytoken')
  // console.log(token,123)
  request.headers.set('deviceId','1834406466639');
  // request.headers.set('Content-Type','application');
  if(token){
    request.headers.set('Authorization',token);
   
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   store,
//   common,
//   components: { App },
//   template: '<App/>'
// })
// document.addEventListener('deviceready', function() {
  new Vue({
    el: '#app',
      router,
      store,
      common,
      components: { App },
      template: '<App/>'
  })
//   window.navigator.splashscreen.hide()
// }, false);


