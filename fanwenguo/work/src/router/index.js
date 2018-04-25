import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Home from '../componentRouter/Home';
import List from '../componentRouter/list';
import Detail from '../componentRouter/detail';
export default new VueRouter({
    routes: [{
            name: 'home',
            path: '/',
            component: Home
        },
        {
            name: 'list',
            path: '/list',
            component: List
        },
        {
            name: 'detail',
            path: '/detail',
            component: Detail
        }
    ]
})