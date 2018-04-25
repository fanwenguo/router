<template>
    <div>
       <ul>
            <li>
                <label for="name">姓名</label>
                <input type="text" id="name" v-test:name="rules" v-model="formData.name"/>
            </li>
            <li>
                <label for="pwd">密码</label>
                <input type="text" id="pwd"  v-test:pwd="rules" v-model="formData.pwd"/>
            </li>
            <li>
                <label for="age">年龄</label>
                <input type="text" id="age" v-test:age="rules"  v-model="formData.age"/>
            </li>
            <li>
                <label for="email">邮箱</label>
                <input type="text" id="email" v-test:email="rules" v-model="formData.email" />
            </li>
            <li>
                <button class="btn" @click="submit">点击</button>
            </li>
        </ul>
    </div>
   
</template>

<script>
    export default{
        name:"",
        data(){
            return {
                formData:{
                    name:"",
                    pwd:"",
                    age:"",
                    email:""
                },
                rules:{
                    name:{
                        reg:/[\u4e00-\u9fa5]/,
                        msg:"请输入正确的姓名"
                    },
                     pwd:{
                        reg:/^[A-Za-z0-9]{6,12}$/,
                        msg:"请输入正确的密码"
                    },
                     age:{
                        reg:/^[0-9]*$/,
                        msg:"请输入正确的年龄"
                    },
                    email:{
                        reg:/^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/,
                        msg:"请输入正确的邮箱"
                    }
                }
            }
        },
        methods:{
            submit(){
                let {name,pwd,age,email} = this.formData;
                if(name&&pwd&&age&&email){
                   console.log(this.formData);
                }else{
                    alert('请重新填写');
                }
                
            }
        },
        directives:{
            test:{
                bind(el,binding){
                    let clearStyle = ()=>{
                        let $el = el.parentNode.getElementsByTagName("b")[0];
                        if($el){
                            el.parentNode.removeChild($el);
                        }
                    }
                    let createDom = (msg,state)=>{
                        clearStyle();
                        let $el = document.createElement('b');
                         $el.innerHTML = msg;
                        if(state){
                             $el.style.color="green";
                        }else{
                            $el.style.color="red";
                        }
                        el.parentNode.appendChild($el);
                    }
                    el.onchange = ()=>{
                        let rulesArg=binding.value[binding.arg];
                        if(rulesArg.reg.test(el.value)){
                            createDom("ok",true);
                        }else{
                            createDom(rulesArg.msg,false);
                        }
                    }
                }
            }
        }
    }
</script>
<style scoped>
    
</style>