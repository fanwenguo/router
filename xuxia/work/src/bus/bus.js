let bus = {
    eventObj: {},
    $emit(event, ...arg) {
        sessionStorage.setItem(event, arg);
        if (this.eventObj[event]) {
            this.eventObj[event].forEach(function(item) {
                item(arg)
            }, this);
        }
    },
    $on(event, callback) {
        var val = sessionStorage.getItem(event);
        console.log(val, '66666666666')
        if (this.eventObj.hasOwnProperty(event)) {
            this.eventObj[event].push(callback(val))
        } else {
            let obj = {
                [event]: [callback(val)]
            }
            Object.assign(this.eventObj, obj)
        }
    },
    $destory(event) {
        delete this.eventObj[event] //注销
    }
};
module.exports = bus

// bus.$emit('up', 'xuxia11111')

// bus.$on('up', function(name) {
//     console.log(name, '777777')
// })


// bus.$emit('up', 'xuxia2222222')


// let bus = {
//     eventObj: {},
//     $emit(event, ...arg) {
//         if (this.eventObj[event]) {
//             this.eventObj[event].forEach(function(item) {
//                 item(arg)
//             }, this);
//         } 
//     },
//     $on(event, callback) {
//         if (this.eventObj.hasOwnProperty(event)) {
//             this.eventObj[event].push(callback)
//         } else {
//             let obj = {
//                 [event]: [callback]
//             }
//             Object.assign(this.eventObj, obj)
//         }
//     },
//     $destory(event) {
//         delete this.eventObj[event] //注销
//     }
// };