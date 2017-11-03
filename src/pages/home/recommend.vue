<template>
	<div class="lazy-load">
		<h2 class="modtitle">热销推荐</h2>
		<div class="hot-con">
			<ul>
				<li class="hot-prod" v-for="list in lists" :key="list.id">
					<a>
						<div class="hotlist-img">
							<img :src="list.img" alt=""/>
						</div>
						<div class="hotlist-infos">
							<div class="hotlist-title">{{list.title}}</div>
							<div class="hotlist-desc">{{list.explain}}</div>
						</div>
						<div class="hotlist-price">
							¥
							<em class="price-num">{{list.price}}</em>
							<span class="prive-text">起</span>
						</div>
					</a>
				</li>
			</ul>
			<div class="more">
				<a>查看所有产品</a>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from "vue";
	export default {
	  	data() {
	  		return {
	  			lists:[{
	  				img: "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
	  				title: "故宫",
	  				explain: "东方宫殿建筑代表，世界宫殿建筑典范",
	  				price: 65,
	  				id:1
	  			},{
	  				img: "http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_140x140_97813766.jpg",
	  				title: "八达岭长城",
	  				explain: "不到长城非好汉",
	  				price: 25,
	  				id:2
	  			},{
	  				img: "http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_140x140_e20be8e0.jpg",
	  				title: "颐和园",
	  				explain: "保存完整的一座皇城行宫御苑",
	  				price: 1,
	  				id:3
	  			},{
	  				img: "http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_140x140_b05eb1df.jpg",
	  				title: "欢乐谷",
	  				explain: "七大主题园区带你畅想北京欢乐谷",
	  				price: 11,
	  				id:4
	  			},{
	  				img: "http://img1.qunarzz.com/sight/p0/1708/2b/2b6378fd3b2e1d86a3.img.jpg_140x140_eae81520.jpg",
	  				title: "慕天峪长城",
	  				explain: "秀美长城，关键是人少",
	  				price: 19.1,
	  				id:5
	  			}
	  			]
	  		}
	  	}
	}
</script>

<style>
	.lazy-load{
		float:left;
		width:100%;
	}
	.modtitle{
		padding-left:.26rem;
		background:#E4E7EA;
		width:100%;
		height:.8rem;
		line-height:.8rem;
		color:#212121;
	}
	.hot-con{
		background-color:#fff;
	}
	.hot-prod{
		position:relative;
		overflow:hidden;
		height:1.4rem;
		padding:.24rem;
		border-bottom:1px solid #E4E7EA;
	}
	.hotlist-img{
		position:absolute;
		top:.24rem;
		left:.24rem;
		background:none !important;
		width:1.4rem;
		height:1.4rem;
	}
	.hotlist-img img{
		opacity:1;
		vertical-align:top;
		width:1.4rem;
		height:1.4rem;
	}
	.hotlist-infos{
		margin-left:1.6rem;
	}
	.hotlist-title{
		overflow:hidden;
		margin-top:.04rem;
		margin-bottom:.1rem;
		color:#212121;
		font-size:.3rem;
		white-space:nowrap;
		text-overflow:ellipsis;
	}
	.hotlist-desc{
		overflow:hidden;
		margin-bottom:.1rem;
		height:.4rem;
		line-height:.4rem;
		color:#9e9e9e;
		white-space:nowrap;
		text-overflow:ellipsis;
	}
	.hotlist-price{
		margin-left:1.6rem;
		color:#ff8300;
	}
	.hotlist-price .price-num{
		font-size:.36rem;
		padding:0 .04rem;
	}
	.prive-text{
		color:#9e9e9e;
		font-size:.24rem;
	}
	.more{
		margin-top:-.02rem;
		height:.88rem;
		color:#00afc7;
		line-height:.88rem;
		text-align:center;
	}

</style>