import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import RepoDetail from '@/components/RepoDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/repo/:username',
      name: 'repoDetail',
      component: RepoDetail
    }
  ]
})
