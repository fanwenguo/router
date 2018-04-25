<template>
    <div>
        <ul>
            <li>
                <label for="name">姓名：</label>
                <input type="text" id="name" v-list:name="rul" v-model="listData.name">
            </li>
            <li>
                <label for="name">密码：</label>
                <input type="text" id="password" v-list:password="rul" v-model="listData.password">
            </li>
            <li>
                <label for="name">TEL ：</label>
                <input type="text" id="tel" v-list:tel="rul" v-model="listData.tel">
            </li>
            <li>
                <label for="name">邮箱：</label>
                <input type="text" id="email" v-list:email="rul" v-model="listData.email">
            </li>
            <li>
                <button @click="btn">点击</button>
            </li>
        </ul>
        
    </div>
    
</template>

<script>
    
    export default{
        name:'app',
        data(){
            return {
                listData:{
                    name:"",
                    password:"",
                    tel:"",
                    email:""
                },
                rul:{
                    name:{
                        reg:/[\u4e00-\u9fa5]/,
                        msg:"请正确输入您的姓名"
                    },
                    password:{
                        reg:/^[A-Za-z0-9]{6,12}$/,
                        msg:"请正确输入您的密码"
                    },
                    tel:{
                        reg:/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$/,
                        msg:"请正确输入您的电话"
                    },
                    email:{
                        reg:/^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{2,3}$/,
                        msg:"请正确输入您的邮箱"
                    }
                }
            }
        },
        directives:{
            test:{
                inserted(el,binding){
                // 清除dom
                let clearDom=function(){
                    let $el=el.parentNode.getElementsByTagName("b")[0]
                    if($el){
                        el.parentNode.removeChild($el)
                    }
                }
                // 创建节点
                let creatDom=function(msg,state){
                    clearDom()
                    let $el=document.createElement("b")
                    $el.innerHTML=msg
                    if(state){
                        $el.style.color="green"
                    }else{
                        $el.style.color="red"
                    }
                    el.parentNode.appendChild($el)
                }
                el.onchange=()=>{
                    let rulesArg=binding.value[binding.arg]
                    console.log(rulesArg)
                    if(rulesArg.reg.test(el.value)){
                        creatDom("ok",true)
                    }else{
                        creatDom(rulesArg.msg,false)
                    }
                }
                }
            },
            btn(){
                let {name,password,age,email}=this.listData
                if(name&&password&&age&&email){
                    console.log(this.listData)
                }else{
                    alert("请填写")
                }
            }
        }
    }
</script>

<style>
    ul{
        list-style:none;
    }
    ul li{
        margin-top:10px;
    }
</style>

