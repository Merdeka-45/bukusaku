import Vue from 'vue'
import Router from 'vue-router'
import vueHeadful from 'vue-headful'
import LandingPage from '@/components/landingpage'
import Admin from '@/components/admin'
import Dashboard from '@/components/dashboard'
import Articles from '@/components/articles'
import NewArticles from '@/components/newarticles'
import Categories from '@/components/categories'
import NewProduct from '@/components/newproduct'
import Product from '@/components/product'
import UserAdmin from '@/components/useradmin'

Vue.component('vue-headful', vueHeadful)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landingpage',
      component: LandingPage
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/articles-list',
      name: 'ListArticles',
      component: Articles
    },
    {
      path: '/articles-new',
      name: 'NewArticles',
      component: NewArticles
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/product-new',
      name: 'NewProduct',
      component: NewProduct
    },
    {
      path: '/product-list',
      name: 'ListProduct',
      component: Product
    },
    {
      path: '/userAdmin',
      name: 'UserAdmin',
      component: UserAdmin
    }
  ]
})
/* eslint-disable no-new */
