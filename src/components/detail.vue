<template>
	
	<scroller 
        ref="my_scroller"
	>
		<div class="movieBox">
			<div class="imgBox">
				<p class="contentLeft">
					<span class="title">{{title}}</span>
					<span class="originalTitle">又名：{{aka}}</span>
					<rater disabled :value="ratingAverage" active-color="#FF9900" :margin="0" :font-size="10"></rater>
					<span>{{ratings_count}}人评价</span>
					<span class="year">{{year}}年/{{type}}/{{directors}}(导演)/{{castsName}}</span>
				</p>
				<img class="contentLeftRight" :src="postUrl"/>
			</div>
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
				<ul>
					<li></li>
				</ul>
			</div>
		</div>
	</scroller>
</template>
<script>
	import { Rater } from 'vux';
	var jsonp = require("jsonp");
    export default {
    	data(){
    		return {
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
    		}
    	},
    	components:{
			Rater,
    	},
    	computed:{
    		castsName:function(){
    			return this.casts.map((a)=>{return a.name}).join("/");
    		}
    	},
    	methods:{
    		getDataById(id){
    			var that = this;
    			jsonp('https://api.douban.com/v2/movie/subject/'+id,null,function(res,data){
					console.log( data );
					that.title = data.title;
					that.aka = data.aka.join("/");
					that.ratingAverage = data.rating.average/2;
					that.ratings_count = data.ratings_count;
					that.year = data.year;
					that.type = data.genres.join("/");
					that.directors = data.directors.map((a)=>{return a.name}).join("/");
					that.casts = data.casts;
//					that.castsName = data.casts.map((a)=>{return a.name}).join("/");
					that.postUrl = data.images.large;
					that.summary = data.summary;
					that.wish_count = data.wish_count;
					that.collect_count = data.collect_count;
				})
    		}
    	},
    	created(){
//  		console.log( this.$route.params.id );
    		this.getDataById( this.$route.params.id );
    	}
    }
</script>
<style>
	.title{
		display: block;
		font:  20px/40px "微软雅黑";
	}
	.originalTitle{
		color: #ccc;
		display: block;
	}
	.movieBox{
		padding: 20px 20px 60px;
		
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
</style>