<template>
    <div>
        <h3>头搁这儿呢！！！ </h3>
        <p>
            <router-link :to = "{ path:'list' }">点此查看列表</router-link>
        </p>
    </div>
  
</template>

<script>
    export default{
        data(){
            return {
                name:"zhangsan"
            }
        }
    }
</script>
