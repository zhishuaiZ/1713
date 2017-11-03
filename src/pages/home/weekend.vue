<template>
	<div class="weekend">
		<h2 class="modtitle">周末去哪儿</h2>
		<div>
			<div class="product-item" v-for="list in lists" :key="list.id">
				<a class="fulllink">
					<div class="product-imgcontainer">
						<img :src="list.src" alt="" />
					</div>
					<div class="product-info">
						<p class="product-name">{{list.name}}</p>
						<p class="product-desc">{{list.article}}</p>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  	data(){
	  		return {
	  			lists:[{
	  				id:1,
	  				src: "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
	  				name: "北京温泉排行榜",
	  				article: "细数北京温泉，温暖你的冬天"
	  			},{
	  				id:2,
	  				src: "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
	  				name: "寻找北京的皇城范儿",
	  				article: "数百年的宫廷庙宇，至今依旧威严霸气"
	  			},{
	  				id:3,
	  				src: "http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
	  				name: "北京必游TOP10",
	  				article: "来北京必去的景点非这些地方莫属"
	  			},{
	  				id:4,
	  				src: "http://img1.qunarzz.com/sight/source/1509/81/0412da9c4db66a.jpg_r_640x214_8e23871e.jpg",
	  				name: "登高望远秋色佳",
	  				article: "山顶满眼彩色，此情此景醉了"
	  			},{
	  				id:5,
	  				src: "http://img1.qunarzz.com/sight/source/1509/28/1bb74b851279e6.jpg_r_640x214_64ebf0ee.jpg",
	  				name: "秋高气爽去礼佛",
	  				article: "秋风伴着美妙经声，品尝秋的另一番滋味"
	  			},]
	  		}
	  	}
	}
</script>

<style>
	.weekend{
		float:left;
		width:100%;
		border-bottom:.2rem solid #E4E7EA;
	}
	.product-item{
		position:relative;
		margin-bottom:.1rem;
		background:#fff;
	}
	.fulllink{
		display:block;
		width:100%;
		height:100%;
	}
	.product-imgcontainer{
		overflow:hidden;
		height:0;
		padding-bottom:37.4%;
		background:none !important;
	}
	.product-imgcontainer img{
		opacity:1;
		width:100%;
	}
	.product-info{
		position:relative;
		padding:.14rem .2rem .2rem .2rem;
	}
	.product-name{
		overflow:hidden;
		padding-right:1.4rem;
		color:#212121;
		font-size:.28rem;
		line-height:.48rem;
		white-space:nowrap;
		text-overflow:ellipsis;
	}
	.product-desc{
		overflow:hidden;
		padding-right:1.4rem;
		white-space:nowrap;
		text-overflow:ellipsis;
		line-height:.42rem;
		color:#616161;
		font-size:.24rem;
	}
	
</style>