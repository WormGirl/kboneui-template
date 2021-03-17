import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import KBoneUI from 'kbone-ui/wx-components' // 只引入内置组件

KBoneUI.register({
  style: {
    'wx-input': '.green {color: green;}', // 注入给 placeholder-class 使用
    'wx-textarea': '.green {color: green;}', // 注入给 placeholder-class 使用
  }
})

Vue.config.productionTip = false

sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
