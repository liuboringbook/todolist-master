import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index.vue'
import LifeCycle from '@/components/lifecycle.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/lifecycle',
      name: 'LifeCycle',
      component: LifeCycle
    }
  ]
})
