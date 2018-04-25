import Vue from "vue";
import App from './components/app';
import router from './router/index';
import axios from 'axios';
import vueAxios from 'vue-axios';
Vue.use(vueAxios, axios);
var vm = new Vue({
    el: "#app",
    router,
    template: "<App/>",
    components: {
        App
    }
})