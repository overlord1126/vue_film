<template>
	<div class="box">
		<span>
			{{this.$route.params.id}}
		</span>
	</div>
</template>
<script>
	var jsonp = require("jsonp");
    export default {
    	methods:{
    		getDataById(id){
    			var that = this;
    			jsonp('https://api.douban.com/v2/movie/celebrity/'+id,null,function(res,data){
					console.log(data)
				})
    		},
    	},
    	created(){
    		this.getDataById(this.$route.params.id);
    	}
    }
</script>
<style lang="less">
	.box{
		padding-top: 46px;
		background-color: yellow;
		span{
			color: green;
		}
	}
</style>