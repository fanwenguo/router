let bus={
	cbArr:{},
	$emit(event,...arg){
		this.cbArr[event].forEach(function(i){
			i(...arg)
		},this)
		
	},
	$on(event,cb){
		if(this.cbArr.hasOwnProperty(event)){
			this.cbArr[event].push(cb)
		}else{
			let obj={
				[event]:[cb]
			}
			Object.assign(this.cbArr,obj)
		}
	},
	$destory(event){
		delete this.cbArr[event]
	}
}
export default {
	install(vm){
		vm.prototype.bus=bus
	}
}