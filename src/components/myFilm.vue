<template>
	<div class="myfilm">
		<scroller 
        	ref="my_scroller">
			<div>
				<h2>我收藏的电影</h2>
				<swipeout>
					<swipeout-item v-for="(item , index) in movieList" transition-mode="follow"  key=index>
				        <div slot="right-menu">
				        	<swipeout-button type="warn" @click.native="del(index)">取消收藏</swipeout-button>
				        </div>
				        <div class="box" slot="content">
				        	<img :src="item.src"/>
				        	<div class="rightBox">
				        		<p> {{item.title}} </p>
				        		<p> {{item.castsName}} </p>
				        		<p class="text"> {{item.desc}} </p>
				        	</div>
				        </div>
			    	</swipeout-item>
			    </swipeout>
			</div>
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
    		getDataById(id){
    			var that = this;
    			jsonp('https://api.douban.com/v2/movie/subject/'+id,null,function(res,data){
    				let obj = {};
					obj.title = data.title;
					obj.src = data.images.large;
					obj.desc = data.summary;
					obj.castsName = data.casts.map((a)=>{return a.name}).join("/");
					that.movieList.push( obj );
//					that.aka = data.aka.join("/");
//					that.ratingAverage = data.rating.average/2;
//					that.ratings_count = data.ratings_count;
//					that.year = data.year;
//					that.type = data.genres.join("/");
//					that.directors = data.directors.map((a)=>{return a.name}).join("/");
//					that.casts = data.casts;
////					that.castsName = data.casts.map((a)=>{return a.name}).join("/");
//					that.postUrl = data.images.large;
//					that.summary = data.summary;
//					that.wish_count = data.wish_count;
//					that.collect_count = data.collect_count;
				})
    		},
    	},
    	created(){
    		this.movie = JSON.parse( localStorage.getItem( "movie" ) ) || [];
    		this.movieList = [];
    		this.movie.forEach((item)=>{
    			this.getDataById(item);
    		})
    		console.log( this.movieList );
    	}
    }
</script>
<style lang="less">
	.box{
		overflow: hidden;
		img{
			float: left;
			width: 40%;
		}
		.rightBox{
			width: 50%;
			float: right;
		}
	}
	.text{
		overflow: hidden;
		white-space: nowrap;
		text-overflow:ellipsis;
	}
</style>