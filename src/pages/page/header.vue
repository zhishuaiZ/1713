<template>
	<div>
		<div class="header">
			<router-link to="/" class="header-left iconfont icon-qunawanxianjiantouzuo"></router-link>
			<h1 class="header-title">寻找北京的皇城范儿</h1>
		</div>		
	</div>
</template>

<script>
</script>

<style scoped>
	.header{
		position:relative;
		height:.88rem;
		background:#00BCD4;
		z-index:91;
	}
	.header-left{
		position:absolute;
		left:0;
		top:0;
		width:.8rem;
		height:.88rem;
		line-height:.88rem;
		font-size:.36rem;
		color:#fff;
		text-align:center;
	}
	.header-title{
		overflow:hidden;
		margin:0 1rem;
		line-height:.88rem;
		white-space:nowrap;
		text-overflow:ellipsis;
		font-size:.32rem;
		text-align:center;
		color:#fff;
	}
</style>