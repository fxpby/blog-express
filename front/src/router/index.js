import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Login from '@/components/Login'
import Detail from '@/components/Detail'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/blog/list',
      name: 'App',
      component: App
    },
    {
      path: '/user/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/blog/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
