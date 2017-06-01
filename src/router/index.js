import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'

// import Hello from '@/components/Hello'
import ProfilePage from '../page/profile/profile'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '/profile',
          component: ProfilePage
        }

      ]
    }
  ]
})
