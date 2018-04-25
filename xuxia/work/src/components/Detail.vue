<template>
    <div>
        {{detail.name}}---{{detail.tit}}
    </div>
</template>
<script>
    export default{
        data(){
            return{
                detail:[]
            }
        },
        beforeCreate(){
            // console.log(this.$route.query.id);
            // console.log(this.$route.params.id);
            // let id=this.$route.query.id;
            // this.$http('/api/detail?id='+id).then((res)=>{
            //     this.detail=res.data[0]
            // })
            let that=this;
            this.bus.$on('getIdEvent',function(id){
                console.log(id,'9999999999')
                that.$http('/api/detail?id='+id).then((res)=>{
                    that.detail=res.data[0]
                })
            })
        }
    }
</script>