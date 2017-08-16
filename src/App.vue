<template>
  <div style="height:100%;" >

  	
  	<!--<view-box id="viewBox" ref="viewBox">-->
  		<div v-show="show">
		    <x-header
		    	slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"
		    	:left-options={showBack:isShowBack}	
		    >主页</x-header>
		    
		    	<router-view></router-view>
		    <!--<p v-for=" i in 40 ">{{i}}</p>-->
				
				<tabbar id="tabbar" 
				style="width:100%;position:fixed;left:0;bottm:0;z-index:100;">
				  <tabbar-item 
				  	:show-dot="false"
						selected		
						link="/newMovie"
				  >
				    <img slot="icon" src="">
				    <span slot="label">
				    	新电影
				    </span>
				  </tabbar-item>
				  <tabbar-item link="/myFilm">
				    <img slot="icon" src="">
				    <span slot="label">
				    	我的
				    </span>
				  </tabbar-item>
				  <tabbar-item link="/search">
				    <img slot="icon" src="">
				    <span slot="label">搜索</span>
				  </tabbar-item>
				  <tabbar-item @click.native="clear">
				    <img slot="icon" src="">
				    <span slot="label">清除缓存</span>
				  </tabbar-item>
				</tabbar>
			</div>
				<!--</view-box>-->
			<!--<img class="img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502791374406&di=a333a1a8c9ed6ec30bd89875b875a41d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F9c16fdfaaf51f3defb13b4439eeef01f3a297977.jpg"/>-->
  </div>
</template>

<script>
import { ViewBox, XHeader, Tabbar, TabbarItem  } from 'vux'

export default {
  data(){
  	return {
  		isShowBack : true,
  		show:false,
  	}
  },
  methods:{
  	clear(){
			localStorage.clear();
			
			this.$vux.toast.show({
				text:"清除缓存",
				time:1000
			})
  	}
  },
  components: {
    XHeader ,
    Tabbar,
    TabbarItem,
    ViewBox
  },
  created(){
		if( location.hash == "#/newMovie"){
			this.isShowBack = false
		}
  },
  mounted(){
//	console.log( document.querySelectorAll(".img")[0],2	);
//		let img = document.querySelectorAll(".img")[0];
//		img.style.width = window.innerWidth+"px";
//		img.style.height = window.innerHeight+"px";
		var that = this;
//		img.onload = function(){
//			img.classList.add( "blurClass" );
//			setTimeout(()=>{
//				img.style.display = "none";
				that.show = true;
				that.$router.push("/newMovie");
//			},2000)
//		}
  }
  
}
</script>
<style lang="less">
	@import '~vux/src/styles/reset.less';
</style>
<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
._v-container{
	box-sizing: border-box;
	
	padding-top: 46px;
}	
._v-content{
	padding-bottom: 50px;
}
#tabbar {
	background-color: #000;
}
#tabbar:before{
	display: none;
}
.img{
	position: absolute;
	z-index: 9999;
}
.blurClass{
	animation: blur 2s linear;
}
@keyframes blur{
	from{
		filter: blur(0px) opacity(1);
	}
	to{
		filter: blur(30px) opacity(.3);
	}
}
</style>
