import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import router from '../components_router/router.vue'
import List from '../components_router/list.vue'
import more from '../components_router/more.vue'

export default new VueRouter({
    routes:[
        {
            name:'router',
            path:"/",
            component:router
        },
        {
            name:'List',
            path:"/list",
            component:List
        },
        {
            name:'more',
            path:"/more",
            component:more
        }
    ]
})