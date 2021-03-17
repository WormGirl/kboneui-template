import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import(/* webpackChunkName: "Home" */'@/pages/index/index.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/(home|index)?',
    name: 'Index',
    component: Index,
  }, {
    path: '/index.html',
    name: 'IndexHtml',
    component: Index,
  }],
})
