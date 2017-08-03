<template>
  <div style="height:100%;">

  	
  	<!--<view-box id="viewBox" ref="viewBox">-->
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
			  <tabbar-item>
			    <img slot="icon" src="">
			    <span slot="label">前端</span>
			  </tabbar-item>
			</tabbar>
			
				<!--</view-box>-->
  </div>
</template>

<script>
import { ViewBox, XHeader, Tabbar, TabbarItem  } from 'vux'

export default {
  data(){
  	return {
  		isShowBack : false,
  	}
  },
  methods:{
//	re(){
//		console.log(1);
//	}
  },
  components: {
    XHeader ,
    Tabbar,
    TabbarItem,
    ViewBox
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


</style>
