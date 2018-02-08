import Vue from 'vue'
import Router from 'vue-router'
import homepage from '../view/homepage/index.vue'
import detail from '../view/detail/index.vue'
import DetailAnaPage from './../view/detail/analysis.vue'
import DetailCouPage from './../view/detail/count.vue'
import DetailForPage from './../view/detail/forecast.vue'
import DetailPubPage from './../view/detail/publish.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/detail',
      component: detail,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'analysis',
          component: DetailAnaPage
        },
        {
          path: 'count',
          component: DetailCouPage
        },
        {
          path: 'forecast',
          component: DetailForPage
        },
        {
          path: 'publish',
          component: DetailPubPage
        }
      ]
    }
  ]
})
