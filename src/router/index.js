import Vue from 'vue'
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
Vue.use(Router)
const routes = [{
    path: '/',
    name: 'Main',
    component: resolve => require(['@/views/Main'], resolve)
}, {
    path: '/dashBoard',
    name: 'DashBoard',
    component: resolve => require(['@/views/DashBoard'], resolve)
}
]
const router = new Router({
    routes: routes
})
export default router;