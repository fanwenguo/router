<template>
    <div>
        <ul v-for='i in data'>
       <!--  <li >
           query
            <router-link :to="{path:'detail',query:{id:i.id}}">//路径，参数
                {{i.id}}----
                {{i.name}}----
                {{i.addr}}---
            </router-link> 
            </li>
            <li>
            params
            <router-link :to="{name:'detail',params:{id:i.id}}">
                {{i.id}}----
                {{i.name}}----
                {{i.addr}}---
            </router-link>
            </li>
            -->
            <li>
           <!-- 动态路由传参-->
            <router-link :to="{path:'/detail/'+i.id}" @click='fn(i.id)'>
                {{i.id}}----
                {{i.name}}----
                {{i.addr}}---
            </router-link>
            </li>
        </ul>
    </div>
</template>
<script>

  export default {
    data(){
        return {
          data:[]
        }
    },
    beforeCreate(){
      this.axios.get('/api/list').then((data)=>{
        this.data=data.data.list
        console.log(this.data)
      })
    },
	methods:{
		fn(id){
           
			this.bus.emit('up',id)
		}
	}
   
  }

</script>
<style>


</style>