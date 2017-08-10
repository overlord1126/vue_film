<template>
	<div class="box" v-show="show">
		<header>
			{{name}}
		</header>
		<div class="detailBox">
			<div class="left">
				<div>性别：{{gender}}</div>
				<!--<div>出生日期：11111</div>-->
				<div>出生地：{{born_place}}</div>
				<div>英文名：{{name_en}}</div>
			</div>
			<img :src="photoUrl" alt="" />
		</div>
		<button class="Collection">收藏</button>
		<div class="works">
			<ul class="listBox" :style=listStyle>
				<li v-for="(item,index) in works" @click="jump(item.subject.id)">
					<img :src="item.subject.images.medium"/>
					<div>{{item.subject.original_title}}</div>
					<div>{{item.subject.year}}年</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	var jsonp = require("jsonp");
    export default {
    	data(){
    		return {
    			show:false,
    			name:"",
    			gender:"",
    			born_place:"",
    			name_en:"",
    			photoUrl:"",
    			works:[],
    		}
    	},
    	computed:{
    		listStyle:function(){
    			return {width: this.works.length*150 +"px"}
    		},
    	},
    	methods:{
    		getDataById(id){
    			var that = this;
    			jsonp('https://api.douban.com/v2/movie/celebrity/'+id,null,function(res,data){
					console.log(data)
					that.name = data.name;
					that.gender = data.gender;
					that.born_place = data.born_place;
					that.name_en = data.name_en;
					that.photoUrl = data.avatars.medium;
					that.works = data.works;
//					隐藏loading
					that.$vux.loading.hide();
					that.show = true;
				})
    		},
    		jump(a){
    			this.$router.push( "/detail/"+a );
    		},
    	},
    	created(){
    		this.$vux.loading.show({
				text: 'Loading'
			})
    		this.getDataById(this.$route.params.id);
    	}
    }
</script>
<style lang="less">
	ul{
		padding: 0;
		margin: 0;
	}
	li{
		list-style: none;
	}
	.box{
		padding: 46px 20px 50px;
		header{
			font: 30px/2 "微软雅黑";
		}
		span{
			color: green;
		}
		.detailBox{
			color: #999;
			line-height: 40px;
			overflow: hidden;
			.left{
				float: left;
				width: 50%;
				padding-top:15px;
			}
			img{
				float: right;
				width: 40%;
			}
		}
		.Collection{
			background: none;
			border: 1px solid orange;
			border-radius: 5px;
			color: orange;
			font-size: 20px;
			padding: 3px 30px; 
		}
		.works{
			padding-top: 50px;
			overflow: auto;
			.listBox{
				overflow: hidden;
				li{
					float: left;
					width: 150px;
					text-align: center;
					img{
						width: 120px;
						height: 170px;
					}
				}
			}
		}
	}
</style>