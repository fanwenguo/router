<template>
    <div> 
      
            <ul>
                <li v-for="item in dataList" :key="item.id">
                    <!--<router-link :to="{path:'detail',query:{id:item.id}}">
                        <span>{{item.id}}</span><span>{{item.name}}</span><span>{{item.addr}}</span>
                     </router-link>-->
                     <router-link :to="{name:'detail',params:{id:item.id}}">
                        <span>{{item.id}}</span><span>{{item.name}}</span><span>{{item.addr}}</span>
                     </router-link>
                 </li>
            </ul>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name:"",
        data(){
            return {
                dataList:[]
            }
        },
        beforeCreate(){
            axios.get('/api/list').then((res)=>{
                this.dataList = res.data.list;
            })
        }
    }
</script>
<style scoped>
    ul li span{
        padding:0 10px;
    }
</style>