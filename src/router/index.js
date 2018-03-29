import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/views/welcome/welcome'
import Home from '@/views/home/home'
import Current from '@/views/product/current'
import Login from '@/views/login/login'
import { isLogin } from 'utils/account'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/welcome'
    },
    {
      path: '/login',
      name: '登录页',
      component: Login
    },
    {
      path: '/welcome',
      name: '欢迎页',
      component: Home,
      redirect: '/welcome/welcome',
      children: [
        {
          path: 'welcome',
          name: '欢迎页',
          component: Welcome
        }
      ]
    },
    {
      path: '/product',
      name: '产品数据',
      component: Home,
      redirect: '/product/current',
      children: [
        {
          path: 'current',
          name: '活期产品',
          component: Current,
          meta: {requiresAuth: true}
        }
      ]
    }
  ]
})
// 路由钩子，路由开始前操作
router.beforeEach((to, from, next) => {
  // 登录权限路由验证
  // debugger;
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (isLogin()) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})
export default router
