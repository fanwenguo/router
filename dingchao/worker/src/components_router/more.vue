<template>
    <div>
        
    </div>
  
</template>

<script>
    
    export default{
        data(){
            return {
                name:"zhangsan"
            }
        },
        beforeCreate(){
            this.axios.get('/api/more?id='+this.$route.query.id).then((data)=>{
                console.log(data)
            })
        }
    }
</script>