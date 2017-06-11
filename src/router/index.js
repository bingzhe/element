import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'

// import Hello from '@/components/Hello'
import ProfilePage from '../page/profile/profile'
import InfoPage from '../page/profile/children/info'
import FindPage from '../page/find/find'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: App,
        //个人信息页面
        children: [ //二级路由
            {
                path: '/profile',
                component: ProfilePage,
                children: [{
                    path: 'info', //个人信息详情页
                    component: InfoPage
                }]
            },
            {
                path: '/find',
                component: FindPage
            }

        ]
    }]
})