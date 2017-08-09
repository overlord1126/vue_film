<template>
	<div class="myfilm">
		<scroller 
        	ref="my_scroller">
			<div>
				<h2 class="title">我收藏的电影</h2>
				<swipeout>
					<swipeout-item v-for="(item , index) in movieList" transition-mode="follow"  key=index>
				        <div slot="right-menu">
				        	<swipeout-button type="warn" @click.native="del(index,item.id)">取消收藏</swipeout-button>
				        </div>
				        <div class="box" slot="content">
				        	<img :src="item.postUrl"/>
				        	<div class="rightBox">
				        		<p class="rightBoxTitle"> {{item.title}} </p>
				        		<p> {{item.castsName}} </p>
				        		<p class="text">简介： {{item.summary}} </p>
				        	</div>
				        </div>
			    	</swipeout-item>
			    </swipeout>
			</div>
			<div class="height"></div>
		</scroller>	
	</div>
</template>
<script>
	var jsonp = require("jsonp");
	import { Panel, Swipeout, SwipeoutItem, SwipeoutButton} from 'vux'
    export default {
    	data(){
    		return {
    			movieList : [],
    		}
    	},
    	components:{
    		Panel,
    		Swipeout,
		    SwipeoutItem,
		    SwipeoutButton,
    	},
    	methods:{
    		
    	},
    	created(){
    		let data = JSON.parse(localStorage.getItem( "movie" ));
//  		console.log( this.movieList );
			this.movieList = [];
			data.forEach( a=>{
				for(var id in a){
					console.log( a[id] )
					this.movieList.push( a[id] );
				}
			} )
//			console.log( this.movieList );
    	}
    }
</script>
<style lang="less" scoped>
	._v-container{
		/*padding-bottom: 50px;*/
	}
	.myfilm{
		/*height: 100%;
		box-sizing: border-box;
		padding-bottom: 50px;*/
	}
	.box{
		padding: 5px 20px;
		box-sizing: border-box;
		overflow: hidden;
		img{
			float: left;
			width: 112px;
			height: 156px;
		}
		.rightBox{
			width: 50%;
			float: right;
			.rightBoxTitle{
				font: 20px/2 "微软雅黑";
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
			p{
				font: 16px/20px "微软雅黑";
				color: #333;
			}
			
		}
	}
	.title{
		text-indent: 10px;
	}
	.text{
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		padding-top: 15px;
	}
	.height{
		height: 53px;
	}
</style>