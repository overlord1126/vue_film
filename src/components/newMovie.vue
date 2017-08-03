<template>
	
	<scroller 
		:onRefresh="re"
        ref="my_scroller">
		<div id="box">
			<list :list="hotList" :title="title1" :rightTitle="rightTitle" @clickTitle="jupm('hotList')"></list>
			<list :list="comingList" :title="title2" :rightTitle="rightTitle" @clickTitle="jupm('comingList')"></list>
		</div>
	</scroller>
</template>
<script>
	var jsonp = require("jsonp");
	import List from '@/components/com/list'
	export default{
		data(){
			return {
				hotList:[],
				rightTitle:"更多",
				title1:"影院热映",
				comingList:[],
				title2:"即将上映",
			}
		},
		components : {
			List,
		},
		methods: {
			jupm(target){
//				带参数跳转到more页面
				this.$router.push({path:"/more/"+target})
			},
			re(){
				localStorage.clear();
				this.$vux.toast.show({
					text: '刷新完成',
					time: 500,
				})
				this.getData();
				this.$refs.my_scroller.finishPullToRefresh();
			},
			getData(){
				var that = this;
				
	//			判断如果有对应的hotList在本地存储中
				if( !localStorage.getItem("hotList") ){
	//			if( 1 ){
					console.log(1111)
					jsonp('https://api.douban.com/v2/movie/in_theaters?count=6',null,function(res,data){
						console.log( data );
						that.hotList = data.subjects.map( (item)=>{
							return {
							  url: 'javascript:',
							  imgL: item.images.large,
							  imgM: item.images.medium,
							  title: item.title,
							  rating: item.rating.average,
							}
						} )
						localStorage.setItem("hotList",JSON.stringify( that.hotList ));
					})
				}else{
					that.hotList = JSON.parse( localStorage.getItem("hotList") );
				}
				
				if( !localStorage.getItem("comingList") ){
					console.log(2222)
					jsonp('https://api.douban.com/v2/movie/coming_soon?count=6',null,function(res,data){
						that.comingList = data.subjects.map( (item)=>{
							return {
							  url: 'javascript:',
							  imgL: item.images.large,
							  imgM: item.images.medium,
							  title: item.title,
							  rating: item.rating.average,
							}
						} )
						localStorage.setItem("comingList",JSON.stringify( that.comingList ));
					})
				}else{
					this.comingList = JSON.parse( localStorage.getItem("comingList") );
				}
				
			}
		},
		created(){
			this.getData();
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
	
	.rater.weui-cell{
		padding: 0;
		text-align: center;
	}
		
	#box .weui-cells{
		margin: 0;
	}
	#hot {
		overflow: hidden;
	}
		
	#hot .weui-cells{
		font-size: 0px;
	}
	#hot li{
		text-align: center;
		float: left;
		width: 33.333%;
		height: 180px;
		padding-top: 10px;
		/*background-color: #0ff;*/
		
		/*border: 1px solid #000;*/
		/*box-sizing: border-box;*/
	}
	
	#hot li img{
		width: 90px;
		height: 130px;
	}
	#hot .weui-cells__title{
		display: inline-block;
		padding: 0;
	}
	#hot .weui-cells__title{
		margin: 0;
	}
	#hot .title{
		display: block;
		/*background-color: #f00;*/
		font: 14px/16px "微软雅黑";
	}
	#hot .tempNo{
		margin-top: 3px;
		font-size: 12px;
		display: inline-block;
		color: #ccc;
	}
	#hot .weui-cells.vux-no-group-title:before,
	#hot .weui-cells.vux-no-group-title:after{
		display: none;
	}
	.ratingGroup {
		font-size: 0;
		margin-top: 5px;
	}
	.ratingNum{
		font-size: 12px;
	}
</style>
