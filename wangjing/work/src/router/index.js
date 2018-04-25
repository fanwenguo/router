import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Index from '../component_router/index.vue'
import List from '../component_router/list.vue'
import Detail from '../component_router/detail.vue'
export default new VueRouter({
    routes:[
        {
            name:'index',
            path:'/',
            component:Index
        },
        {
            name:'list',
            path:'/list',
            component:List
        },
        {
            name:'detail',
            path:'/detail',
            component:Detail
        },
        {
            name:'detail',
            path:'/detail/:id',
            component:Detail
        }
    ]

});



