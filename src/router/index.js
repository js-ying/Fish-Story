import Vue from 'vue'
import Router from 'vue-router'
import Popover from 'vue-js-popover'

Vue.use(Router)
Vue.use(Popover)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  base: '/Fish-Story/',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: require('../components/Index.vue')
    },
    {
      path: '/new',
      name: 'New',
      component: require('../components/New.vue')
    },
    {
      path: '/singer',
      name: 'Singer',
      component: require('../components/Singer.vue')
    },
    {
      path: '/classic',
      name: 'Classic',
      component: require('../components/Classic.vue')
    },
    {
      path: '/albums',
      name: 'Albums',
      component: require('../components/Albums.vue')
    },
    {
      path: '/vote',
      name: 'Vote',
      component: require('../components/Vote.vue')
    }
  ]
})
