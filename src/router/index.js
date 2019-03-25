import Vue from 'vue'
import Router from 'vue-router'
import app from '@/components/app'
import instruct from '@/components/instruct'
import event from '@/components/event'
import cycle from '@/components/life-cycle'
import computed from '@/components/computed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: app
    },
    {
      path: '/instruct',
      name: 'instruct',
      component: instruct
    },
    {
      path: '/event',
      name: 'event',
      component: event
    },
    {
      path: '/cycle',
      name: 'cycle',
      component: cycle
    },
    {
      path: '/computed',
      name: 'computed',
      component: computed
    }
  ]
})
