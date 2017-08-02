<template>
	<div>
		<!--{{ this.$route.params.id }}-->
		<panel :header="title" :list="hotList" type="5"></panel>
	</div>
</template>
<script>
	var jsonp = require("jsonp");
	import { Panel } from 'vux'
    export default{
    	data(){
    		return {
    			title:"",
    			hotList:[],
    		}
    	},
    	components:{
    		Panel,
    	},
    	created(){
    		var that = this;
//  		console.log(this.$route.params.id);
			if( this.$route.params.id == "hotList" ){
				this.title = "影院热映";
				jsonp('https://api.douban.com/v2/movie/in_theaters?count=12',null,function(res,data){
					console.log( data );
					that.hotList = data.subjects.map( (item)=>{
						return {
						  url: item.alt,
						  src: item.images.small,
						  title: item.title,
						  desc: "主演："+item.casts.map((a)=>{ return a.name }).join("、")
						}
					} )
					
				})
			}
    	}
    }
</script>
<style>
	
</style>