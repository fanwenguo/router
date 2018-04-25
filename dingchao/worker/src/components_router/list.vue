<template>
    <div>
        列表页
        <ul>
            <li v-for="i in data" :key="i.id">
                <router-link :to="{ path:'/more',query:{id:i.id} }">
                    <p><span>{{i.id}}</span><span>{{i.name}}</span><span>{{i.addr}}</span></p>
                </router-link>
            </li>
        </ul>
    </div>
  
</template>

<script>
    export default{
        data(){
            return {
                data:null
            }
        },
        beforeCreate(){
            this.axios.get('/api/list').then((data)=>{
                this.data = data.data
                console.log(data.data)
            })
        }
    }
    
</script>