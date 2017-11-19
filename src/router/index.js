import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

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
      path: '/album',
      name: 'Album',
      component: require('../components/Album.vue')
    },
    {
      path: '/vote',
      name: 'Vote',
      component: require('../components/Vote.vue')
    }
  ]
})
