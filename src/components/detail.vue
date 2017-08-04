<template>
	
	<scroller 
        ref="my_scroller"
	>
		<div class="movieBox">
			<div class="imgBox">
				<p class="contentLeft">
					<span class="title">{{title}}</span>
					<rater disabled :value="ratingAverage" active-color="#FF9900" :margin="0" :font-size="10"></rater>
					<span>{{ratings_count}}人评价</span>
					<span class="year">{{year}}年/{{type}}/{{directors}}(导演)/{{casts}}</span>
				</p>
				<img class="contentLeftRight" :src="postUrl"/>
			</div>
			<div class="summary">
				<p>{{title}} 的剧情简介</p>
				<p class="summaryText">{{showMore?summary.slice(0,60)+"...":summary}}<span class="more" v-if="showMore" @click="showMore=false">(更多)</span></p>
				
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
    			ratingAverage:0,
    			ratings_count:0,
    			year:0,
    			type:"",
    			directors:"",
    			casts:"",
    			postUrl:"",
    			summary:"",
    			showMore:true,
    		}
    	},
    	components:{
			Rater,
    	},
    	methods:{
    		getDataById(id){
    			var that = this;
    			jsonp('https://api.douban.com/v2/movie/subject/'+id,null,function(res,data){
					console.log( data );
					that.title = data.title;
					that.ratingAverage = data.rating.average/2;
					that.ratings_count = data.ratings_count;
					that.year = data.year;
					that.type = data.genres.join("/");
					that.directors = data.directors.map((a)=>{return a.name}).join("/");
					that.casts = data.casts.map((a)=>{return a.name}).join("/");
					that.postUrl = data.images.large;
					that.summary = data.summary;
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
</style>