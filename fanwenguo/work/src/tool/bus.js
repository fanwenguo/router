let bus = {
    cbArr: {},
    $emit(event, ...arg) {
        if (this.cbArr[event]) {
            this.cbArr[event].forEach((i) => {
                i(...arg);
            })
        }
    },
    $on(event, cb) {
        if (this.cbArr.hasOwnProperty(event)) {
            this.cbArr[event].push(cb);
        } else {
            let obj = {
                [event]: [cb]
            };
            Object.assign(this.cbArr, obj);
        }
    },
    $destory(event) {
        delete this.cbArr[event];
    }
}
export default bus;