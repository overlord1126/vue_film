<template>
	<scroller 
		:onRefresh="re"
		:onInfinite="loadMore"
        ref="my_scroller">
		<div id="box">
			<!--{{ this.$route.params.id }}-->
			<!--<panel :header="title" :list="hotList" type="5"></panel>-->
			<swipeout>
				<swipeout-item v-for="(item , index) in hotList" transition-mode="follow"  key=index>
			        <div slot="right-menu">
			        	<swipeout-button type="primary">收藏</swipeout-button>
			        	<swipeout-button type="warn" @click.native="del(index)">不喜欢</swipeout-button>
			        </div>
			        <div slot="content" class="demo-content vux-1px-t">
			        	<panel class="pannel" :list="[hotList[index]]" type="5"></panel>
			        </div>
		    	</swipeout-item>
		    </swipeout>
		</div>
	</scroller>	
</template>
<script>
	var jsonp = require("jsonp");
	import { Panel, Swipeout, SwipeoutItem, SwipeoutButton} from 'vux'
    export default{
    	data(){
    		return {
    			title:"",
    			hotList:[],
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
    		del(index){
//  			alert("删除")
				this.hotList.splice( index,1 );
    		},
    		getData(){
    			var that = this;
	//  		console.log(this.$route.params.id);
				if( this.$route.params.id == "hotList" ){
					this.title = "影院热映";
					jsonp('https://api.douban.com/v2/movie/in_theaters?start='+this.start+'&count='+this.count,null,function(res,data){
						console.log( data );
						that.hotList = data.subjects.map( (item)=>{
							return {
	//						链接
							  url: item.alt,
							  src: item.images.small,
							  title: item.title,
							  desc: "主演："+item.casts.map((a)=>{ return a.name }).join("、")
							}
						} )
					})
				}
    		},
    		re(){
    			this.start = 0;
    			this.count = 10;
    			this.$vux.toast.show({
					text: '刷新完成',
					time: 500,
				})
    			localStorage.clear();
				this.getData();
				this.$refs.my_scroller.finishPullToRefresh();
    		},
    		loadMore(){
//  			console.log(1)
//				this.start += this.count;
//				this.count = 3;
//				console.log( this.start,this.count );
//				this.$refs.my_scroller.finishInfinite();
    		}
    	},
    	created(){
    		this.getData()
    	}
    }
</script>
<style>
	#box .weui-panel__hd{
		font-size: 18px;
	}
	#box .pannel .weui-media-box_appmsg,
	#box .pannel .weui-media-box__hd,
	#box .pannel img{
		height: 80px;
	}
	/*.itemfade-enter,.itemfade-leave-active {
	    opacity: 0;
	    transition: 1s;
	    position: absolute;
	}*/
</style>