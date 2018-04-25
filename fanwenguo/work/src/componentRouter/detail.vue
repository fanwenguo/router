<template>
    <div>
       {{this.data}}
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name:"",
        data(){
            return {
                data:[]
            }
        },
        beforeCreate(){
            let idd = this.$route.params.id;
            //console.log(idd);
            axios.get('/api/detail?id='+idd).then((res)=>{
               this.data = res.data[0].infomation;
            })
        }
    }
</script>
<style scoped>
</style>