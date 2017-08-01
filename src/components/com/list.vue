<template>
	<div id="box">
		<group class="group">
			<cell :title="title" :value="rightTitle"></cell>
		</group>
		<ul id="hot">
			<li v-for="( item,index ) in list">
				<img :src="item.imgM"/>
				<span class="title">{{item.title.slice(0,5)}}</span>
				<!--<span>{{item.rating}}</span>-->
				<group class="ratingGroup" v-show="item.rating!==0">
					<!--评分-->
				    <rater disabled :value="item.rating/2" active-color="#FF9900" :margin="0" :font-size="10"></rater>
				    <!--数字-->
				    <span class="ratingNum">{{item.rating}}</span>
				</group>
				<span class="tempNo" v-show="item.rating === 0">暂无评分</span>
			</li>
		</ul>
	</div>
</template>
<script>
	import { Cell, Group, Rater } from 'vux'
    export default{
    	props:["list","title","rightTitle"],
    	components : {
			Cell, 
			Group,
			Rater,
		},
    }
</script>
<style>
	#box .weui-cell__ft{
		font-size: 14px;
		color: yellowgreen;
	}
</style>