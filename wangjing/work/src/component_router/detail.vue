<template>
    <div>
       {{data}}
    </div>
</template>
<script>
  export default {
    data(){
        return {
          data:null
        }
    },
    beforeCreate(){
      //第一种传参方式  query
     /*  console.log(this.$route.query.id)
      this.axios.get('api/detail?id='+this.$route.query.id).then((data)=>{
        console.log(data)
        this.data=data.data[0].content
      }) */

      //第二种传参方式  params
     /*  console.log(this.$route.params.id)
      this.axios.get('api/detail?id='+this.$route.params.id).then((data)=>{
        console.log(data)
        this.data=data.data[0].content
      }) */

		//动态路由
      /* console.log(this.$route.params.id)
      this.axios.get('api/detail?id='+this.$route.params.id).then((data)=>{
          console.log(data)
          this.data=data.data[0].content
      }) */
		
		this.bus.$on('up',(data)=>{
				console.log(data)
		  
		})
		
    }
   
  }

</script>
<style>


</style>