<template>
	<div class="btnBox">
		<button :class="classList" @click="click">{{text}}</button>
	</div>
</template>
<script>
    export default{
    	props:["isColl"],
    	methods:{
    		click(){
    			this.$emit("clickBtn");
    		}
    	},
    	computed:{
    		text:function(){
    			return this.isColl ? "已收藏" : "收藏";
    		},
    		classList:function(){
    			return this.isColl ? "collected" : "normal";
    		}
    	}
    }
</script>
<style scoped>
	button{
		outline: none;
		background: none;
		border: 1px solid orange;
		border-radius: 5px;
		color: orange;
		font-size: 20px;
		padding: 3px 30px; 
	}
	.collected{
		background-color: orange;
		color: #fff; 
	}
	.normal{
		background-color: none;
		color: orange; 
	}
</style>