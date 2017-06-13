import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'

// import Hello from '@/components/Hello'
import ProfilePage from '../page/profile/profile'
import InfoPage from '../page/profile/children/info'
import FindPage from '../page/find/find'
import BalancePage from '../page/balance/balance'
import BenefitPage from '../page/benefit/benefit'
import PointsPage from '../page/points/points'
import DownloadPage from '../page/download/download'
import ServicePage from '../page/service/serice'
import VipcardPage from '../page/vipcard/vipcard'
import OrderPage from '../page/order/order'
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
                path: '/find', //发现页
                component: FindPage
            },
            {
                path: '/balance', //余额页
                component: BalancePage
            },
            {
                path: '/benefit', //优惠页
                component: BenefitPage
            },
            {
                path: '/points', //积分页
                component: PointsPage
            },
            {
                path: '/download', //下载页
                component: DownloadPage
            },
            {
                path: '/service', //服务中心页
                component: ServicePage
            },
            {
                path: '/vipcard', //会员中心
                component: VipcardPage
            },
            {
                path: '/order', //我的订单页
                component: OrderPage
            }
        ]
    }]
})