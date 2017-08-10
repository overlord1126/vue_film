<template>
	<scroller v-show="show"
		:onRefresh="re"
		:on-infinite="loadMore"
        ref="my_scroller">
		<div id="box">
			<p class="title">{{title}}</p>
	        <div @click="jump(item.id)" class="demo-content vux-1px-t" v-for="(item , index) in list">
	        	<panel class="pannel" :list="[list[index]]" type="5"></panel>
	        </div>
		</div>
	</scroller>	
</template>
<script>
	var jsonp = require("jsonp");
	import { Panel, Swipeout, SwipeoutItem, SwipeoutButton} from 'vux'
    export default{
    	data(){
    		return {
    			show:false,
    			title:"",
    			list:[],
    			start:0,
    			count:10,
    		}
    	},
    	components:{
    		Panel,
    		Swipeout,
		    SwipeoutItem,
		    SwipeoutButton,
    	},
    	methods:{
    		jump(id){
//  			alert(id);
				this.$router.push({path:"/detail/"+id})
    		},
    		getData(){
    			var that = this;
	//  		console.log(this.$route.params.id);
				let keyWord,target;
				if( this.$route.params.id == "hotList" ){
					keyWord = "in_theaters";
					this.title = "影院热映";
				}
				if( this.$route.params.id == "comingList" ){
					keyWord = "coming_soon";
					this.title = "即将上映";
				}
					jsonp('https://api.douban.com/v2/movie/'+ keyWord +'?start='+this.start+'&count='+this.count,null,function(res,data){
						console.log( data );
						that.list = data.subjects.map( (item)=>{
							return {
	//						链接
//								url: item.alt,
								id:item.id,
								src: item.images.large,
								title: item.title,
								desc: "主演："+item.casts.map((a)=>{ return a.name }).join("、")
							}
						} );
						console.log( that.list );
						that.$vux.loading.hide();
						that.show = true;
					})
    		},
    		re(){
    			this.start = 0;
    			this.count = 10;
    			this.$vux.toast.show({
					text: '刷新完成',
					time: 1000,
				})
    			localStorage.clear();
				this.getData();
				this.$refs.my_scroller.finishPullToRefresh();
    		},
    		loadMore:function(done){
//  			console.log(1)
				this.start += this.count;
				this.count = 3;
//				console.log( this.start,this.count );
				this.$refs.my_scroller.finishInfinite(function(){
					console.log(1)
				})
//				done()
    		}
    	},
    	created(){
    		this.$vux.loading.show({
				text: 'Loading'
			})
    		this.getData();
    	}
    }
</script>
<style scoped>
	.title{
		text-indent: 20px;
		font: 20px/2 "微软雅黑";
	}
	.weui-media-box__hd{
		width: 100px !important;
		height: 130px !important;
	}
</style>