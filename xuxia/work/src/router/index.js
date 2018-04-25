import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import List from '../components/List.vue'
import Detail from '../components/Detail.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/list",
            name: "list",
            component: List
        },
        {
            path: "/detail",
            name: "detail",
            component: Detail
        }
    ]
})