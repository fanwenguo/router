import Vue from 'vue'
import router from './router/index.js'
import App from './components/App.vue'
import tools from './tools/tools.js'
import bus from './bus/bus.js'

Vue.use(tools)
Vue.prototype.bus = bus

new Vue({
    el: "#app",
    template: '<div><App /></div>',
    components: {
        App
    },
    router
})