<template>
	<div id="box">
		<group class="group">
			<cell title="影院热映" value="更多"></cell>
		</group>
		<ul id="hot">
			<li v-for="( item,index ) in hotList"
				
			>
				<img :src="item.imgM"/>
				<span>{{item.title}}</span>
			</li>
		</ul>
	</div>	
</template>
<script>
	var jsonp = require("jsonp");
	import { Cell, Group } from 'vux'
	export default{
		data(){
			return {
				hotList:[],
//				list1:[],
//				list1:[],
			}
		},
		components : {
			Cell, 
			Group,
		},
		created(){
			var that = this;
			jsonp('https://api.douban.com/v2/movie/in_theaters?count=6',null,function(res,data){
				console.log(data);
				that.hotList = data.subjects.map( (item)=>{
					return {
					  url: 'javascript:',
					  imgL: item.images.large,
					  imgM: item.images.medium,
					  title: item.title
					}
				} )
			});
		}
	}

</script>
<style>
	ul{
		padding: 0;
		margin: 0;
	}
	li{
		list-style: none;
	}
	/*weui-cells*/
	#box .weui-cells{
		margin: 0;
	}
	#hot li{
		background-color: pink;
		text-align: center;
		float: left;
		width: 33.333%;
		padding-top: 20px;
	}
	
	#hot li img{
		width: 90px;
		height: 130px;
	}
	
	#hot span{
		display: block;
		font: 12px/12px "微软雅黑";
	}
</style>