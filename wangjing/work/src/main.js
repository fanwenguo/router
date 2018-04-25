
import Vue from "vue";
import App from './components/app.vue';
// import './direction/index'
import router from './router/index.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
import bus from './tool/bus'
Vue.use(bus)
var vm = new Vue({
    el: "#app",
    template: "<App/>",
    components: {
        App
    },
    router
})