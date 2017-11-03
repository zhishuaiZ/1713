<template>
	<div>
		<ul class="listitem-con">
			<li class="listentrance-item">
				<i class="iconfont icon-o"></i>
				定位失败
			</li>
			<li class="listentrance-item">
				<a href="">
					<i class="iconfont icon-icon3"></i>
					5折泡温泉
				</a>
			</li>
		</ul>
		<div class="blank"></div>
		<ul class="activity-con">
			<li class="activity-con-left"><a href="#"></a></li>
			<li class="activity-con-right"><a href="#"></a></li>
		</ul>
	</div>
	
</template>

<script>
	export default {
	  
	}
</script>

<style>
	.listitem-con{
		float:left;
		width:100%;
		border-top:1px solid #E4E7EA;
		background-color:#fff;
	}
	.listentrance-item{
		width:50%;
		overflow:hidden;
		height:.98rem;
		float:left;
		font-size:.28rem;
		color:#212121;
		line-height:.98rem;
		text-align:center;
	}
	.listentrance-item i{
		margin-right:0.05rem;
		color:#616161;
		font-size:.32rem;
	}
	.listentrance-item a{
		border-left:1px solid #E4E7EA;
		display:block;
		color:#212121;
	}
	.blank{
		width:100%;
		height:0.2rem;
		float:left;
		background:#E4E7EA;
	}
	.activity-con{
		width:100%;
		height:1.4rem;
		margin-top:.2rem;
		background-color:#fff;
	}
	.activity-con-left{
		float:left;
		position:relative;
		width:50%;
		height:1.4rem;
		line-height:1.4rem;
		color:#212121;
		font-size:.28rem;
		background:url(http://img1.qunarzz.com/piao/fusion/1710/a2/e395615b16fb1302.png) center center no-repeat;
		background-size:auto 100%; 
	}
	.activity-con-right{
		float:left;
		position:relative;
		width:50%;
		height:1.4rem;
		line-height:1.4rem;
		color:#212121;
		font-size:.28rem;
		background:url(http://img1.qunarzz.com/piao/fusion/1710/54/1685d2108b652302.png) center center no-repeat;
		background-size:auto 100%;
	}
</style>