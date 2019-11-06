import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Login from '@/components/Login'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/blog/list',
      name: 'Index',
      component: Index
    },
    {
      path: '/user/login-test',
      name: 'Login',
      component: Login
    }
  ]
})
