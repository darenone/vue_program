import Vue from 'vue'
import Router from 'vue-router'
import homepage from '../view/homepage/index.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '',
      name: 'homepage',
      component: homepage
    }
  ]
})
