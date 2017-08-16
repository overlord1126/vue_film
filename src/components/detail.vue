<template>
	<div class="movieBox" v-show="show" >
		<div class="imgBox">
			<p class="contentLeft">
				<span class="title">{{title}}</span>
				<span class="originalTitle">又名：{{aka||"暂无"}}</span>
				<rater disabled :value="ratingAverage" active-color="#FF9900" :margin="0" :font-size="10"></rater>
				<span>{{ratings_count}}人评价</span>
				<span class="year">{{year}}年/{{type}}/{{directors}}(导演)/{{castsName}}</span>
			</p>
			<img class="contentLeftRight" :src="postUrl"/>
		</div>
		<!--<button class="Collection">收藏</button>-->
		<coll-btn :isColl="isCollected" @clickBtn="toggleColl"></coll-btn>
		<div class="summary">
			<p>{{title}} 的剧情简介</p>
			<p class="summaryText">{{showMore?summary.slice(0,60)+"...":summary}}<span class="more" v-if="showMore" @click="showMore=false">(更多)</span></p>
		</div>
		<div class="wishCount">
			<span class="wish">{{wish_count}}人想要看</span>
			<span class="already">{{collect_count}}12人已看过</span>
		</div>
		<div class="casts">
			<h3>演员列表：</h3>
			<div class="xBox">
				<ul :style=listStyle>
					<li v-for="(item,index) in casts" @click="jumpCast( item.id )">
						<img :src="item.avatars ? item.avatars.medium : item.medium" alt=""/>
						<div class="name">{{item.name}}</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import { Rater } from 'vux';
	import CollBtn from "@/components/com/collBtn";
	var jsonp = require("jsonp");
    export default {
    	data(){
    		return {
    			show:false,
    			title:"",
    			aka:"",
    			ratingAverage:0,
    			ratings_count:0,
    			year:0,
    			type:"",
    			directors:"",
//  			castsName:"",
				casts:[],//初始时为一个数组，否则computed计算属性的时候this.casts.map不是函数，报错
    			postUrl:"",
    			summary:"",
    			showMore:true,
    			wish_count:0,
    			collect_count:0,
    			//存储喜欢的电影，在此处解析成数组形式，数据形式为数组中包若干对象，对象中为 id:具体信息的形式
    			movieList : JSON.parse( localStorage.getItem( "movie" ) ) || [],
    		}
    	},
    	components:{
			Rater,
			CollBtn,
    	},
    	computed:{
    		castsName:function(){
    			return this.casts.map((a)=>{return a.name}).join("/");
    		},
    		listStyle:function(){
    			return {width:this.casts.length*100+"px"}
    		},
    		isCollected:function(){
    			let b = this.movieList.find((a)=>{
    				return a[this.$route.params.id]
    			})
    			return b;
    		}
    	},
    	methods:{
    		getDataById(id){
    			var that = this;
    			jsonp('https://api.douban.com/v2/movie/subject/'+id,null,function(res,data){
					console.log( data );
					that.id = data.id;
					that.title = data.title;
					that.aka = data.aka.join("/");
					that.ratingAverage = data.rating.average/2;
					that.ratings_count = data.ratings_count;
					that.year = data.year;
					that.type = data.genres.join("/");
					that.directors = data.directors.map((a)=>{return a.name}).join("/");
					that.casts = data.casts;
					that.castsName = data.casts.map((a)=>{return a.name}).join("/");
					that.postUrl = data.images.large;
					that.summary = data.summary;
					that.wish_count = data.wish_count;
					that.collect_count = data.collect_count;
					that.$vux.loading.hide();
					that.show = true;
				})
    		},
    		jumpCast(a){
    			this.$router.push("/cast/"+a);
    		},
    		toggleColl(){
    			let id = this.$route.params.id; 
    			let b = this.movieList.findIndex((a)=>{
    				return a[this.$route.params.id]
    			})
    			if( b != -1 ){//说明存在
//  				删除，取消收藏
					this.$vux.toast.show({
						text: '取消收藏',
						time: 800,
					})
    				this.movieList.splice( b,1 );
    			}else{
//  				添加,加入收藏
					this.$vux.toast.show({
						text: '加入收藏',
						time: 800,
					})
					let obj = {};
					obj[id] = {};
					obj[id].id = this.id;
					obj[id].title = this.title;
					obj[id].aka = this.aka;
					obj[id].ratingAverage = this.ratingAverage;
					obj[id].ratings_count = this.ratings_count;
					obj[id].year = this.year;
					obj[id].type = this.type;
					obj[id].directors = this.directors;
					obj[id].casts = this.casts;
					obj[id].castsName = this.casts.map((a)=>{return a.name}).join("/");
					obj[id].postUrl = this.postUrl;
					obj[id].summary = this.summary;
					obj[id].wish_count = this.wish_count;
					obj[id].collect_count = this.collect_count;
					
					this.movieList.push( obj );
//					console.log( localStorage );
    			}
    			let str = JSON.stringify( this.movieList );
    			localStorage.setItem( "movie",str );
    			console.log( localStorage );
    		},
    	},
    	created(){
//  		localStorage.clear();
//  		console.log( localStorage );
			this.$vux.loading.show({
				text: 'Loading'
			})
    		this.getDataById( this.$route.params.id );
    		
    	}
    }
</script>
<style>
	ul{
		padding: 0px;
		margin: 0;
		list-style: none;	
	}
	.Collection{
		background: none;
		border: 1px solid orange;
		border-radius: 5px;
		color: orange;
		font-size: 20px;
		padding: 3px 30px; 
	}

	.title{
		display: block;
		font:  20px/40px "微软雅黑";
	}
	.originalTitle{
		color: #ccc;
		display: block;
	}
	.movieBox{
		padding: 70px 20px 60px;
		
	}
	.contentLeft{
		float: left;
		width: 50%;
		font: 14px/30px "微软雅黑";
		color: #666;
	}
	.year{
		display: block;
	}
	.contentLeftRight{
		padding-top: 30px;
		float: right;
		width: 40%;
	}
	.imgBox{
		overflow: hidden;
	}
	.summary{
		padding-top: 20px;
	}
	.summary p{
		word-wrap: break-word;
		color: #999;
		font-size: 16px;
	}
	.summary .summaryText{
		padding-top: 15px;
		color: #000;
		font: 16px/30px "微软雅黑";
	}
	/*._v-container{
		box-sizing: border-box;
		
		padding-top: 46px;
	}	
	._v-content{
		padding-bottom: 50px;
	}*/
	.more{
		float: right;
		color: #09BB07;
	}
	.wishCount{
		padding-top: 15px;
	}
	.wish,
	.already{
		display: inline-block;
		padding: 2px;
		border: 1px solid orange;
		color: orange;
	}
	.casts{
		padding-top: 20px;
	}
	.xBox{
		width: 100%;
		overflow: auto;
	}
	.casts ul{
		
	}
	.casts h3{
		color: #777;
	}
	.casts li{
		width: 100px;
		float: left;
		text-align: center;
		box-sizing: border-box;
		/*border: 1px solid #000;*/
	} 
	.casts img{
		width: 85px;
		height: 121px;
	}
	.xBox li .name{
		font: 14px/1.2 "微软雅黑";
		color: #333;
	}
</style>