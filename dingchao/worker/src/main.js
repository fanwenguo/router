import Vue from 'vue'
// import ajax from "./tool/ajax"
import App from "./components_router/app.vue"
import router from './router/index.js'
import axios from 'axios'
import VueAxios from 'axios'
// Vue.prototype.$ajax = ajax

Vue.use(VueAxios,axios)
new Vue ({
    el:"#app",
    template:"<App />",
    router,
    components:{
        App
    },
    
})