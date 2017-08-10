<template>
	<div class="myfilm">
		<scroller 
        	ref="my_scroller">
			<div>
				<group
					gutter='0px'>
					<cell
						title="我收藏的电影" 
						@click.native = "toggleShow"
						:is-link="!!movieList.length"
						:arrow-direction="showContent?'down':'right'">
					</cell>
				</group>
				<swipeout v-if="showContent">
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
			    <p class="nothing" v-if="!movieList.length"> 暂无收藏  </p>
			</div>
			<div class="height"></div>
		</scroller>	
	</div>
</template>
<script>
	var jsonp = require("jsonp");
	import { Panel, Swipeout, SwipeoutItem, SwipeoutButton, Cell, Group} from 'vux'
    export default {
    	data(){
    		return {
    			showContent:true,
    			movieList : [],
    		}
    	},
    	components:{
    		Panel,
    		Swipeout,
		    SwipeoutItem,
		    SwipeoutButton,
		    Cell,
		    Group,
    	},
    	methods:{
    		del(index,id){
    			this.movieList.splice( index,1 );
    			let data = JSON.parse(localStorage.getItem( "movie" ));
    			data = data.filter( a =>{
//  				console.log( a[id] );
    				return !a[id];
    			} )
    			this.$vux.toast.show({
					text: '取消成功',
					time: 800,
				})
    			localStorage.setItem( "movie",JSON.stringify( data ) );
//  			console.log(  )
    		},
    		toggleShow(){
    			this.showContent = !this.showContent;
    		}
    		
    	},
    	created(){
    		let data = JSON.parse(localStorage.getItem( "movie" )) || [] ;
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
	.nothing{
		text-align: center;
		font: 30px/2 "微软雅黑";
		color: #ccc;
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