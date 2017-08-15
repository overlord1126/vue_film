<template>
	
	<div id="search">
		<div class="searchBox">
			<input type="search" class="searchInp" v-model="text" placeholder="请输入电影名或者人名"/>
			<input type="button" class="searchBtn" value="搜索" @click="searchFn" />
		</div>
		<scroller
	        ref="my_scroller">
				<ul class="showList">
					<li v-for="(item,index) in list" :key="index" @click="jump(item.id)">
						<img :src="item.imgs"/>
						<div class="right">
							<p class="title">{{item.name||"未知"}}</p>
							<p class="year">年份：{{item.year||"未知"}}</p>
							<p class="cast">演员：{{item.castsName||"未知"}}</p>
						</div>
					</li>
				</ul>
			<div class="height"></div>
		</scroller>
	</div>
</template>
<script>
	var jsonp = require("jsonp");
	export default{
		data(){
			return {
				text:"",
				list:[],
			}
		},
		methods:{
			searchFn(){
				var that = this;
				that.$vux.loading.show({
					text:"正在获取"
				})
				jsonp('https://api.douban.com//v2/movie/search?q='+that.text+"&count=20",null,function(res,data){
					console.log(data);
					let arr = data.subjects;
					that.list = arr.map((item)=>{
						return {
							id:item.id,
							name:item.title,
							imgs:item.images.large,
							year:item.year,
							castsName:item.casts.map( (a)=>{return a.name} ).join("/")
						}
					})
					that.$vux.loading.hide();
					that.$vux.toast.show({
						text:"获取成功"
					});
					
				})
			},
			jump(a){
				this.$router.push( {path:"/detail/"+a} );
			}
		},
		created(){
			//测试用
//			this.searchFn();
		}
	}
</script>
<style lang="less" scoped>
	#search{
		padding-top: 46px;
	}
	._v-container{
		padding-top: 86px;
	}
	.height{
		height: 53px;
	}
	.searchBox {
		background-color: #fff;
		width: 100%;
		position: relative;
		z-index: 999;
		padding-top: 10px;
		padding-bottom: 10px;
		text-align: center;
		input {
			vertical-align: middle;
			outline: none;
			border-radius: 3px;
			height: 30px;
		}
		.searchInp {
			width: 70%;
			border: 1px solid #000;
			text-indent: 20px;
		}
		.searchBtn {
			width: 25%;
			background-color: yellowgreen;
			border: none;
		}
	} 
	.showList{
		padding: 10px;
		li {
			overflow: hidden;
			list-style: none;
			margin-bottom: 10px;
		}
		img {
			width: 35%;
			display: inline-block;
			vertical-align: middle;
		}
		.right {
			width: 45%;
			display: inline-block;
			vertical-align: middle;
			margin-left: 20px;
			p {
				line-height: 30px;
			}
			.title{
				font-size: 20px;
			}
			.year{
				color: #999;
			}
		}
	}
</style>
