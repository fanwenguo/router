import axios from 'axios'
import Vue from 'vue'

const tools = {
    install() {
        Object.defineProperty(Vue.prototype, '$http', {
            value: axios
        })
    }
}
export default tools