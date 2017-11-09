<template>
	<div>
		<div class="price-desc">
			<div class="price-desc-info">
				<span class="price-desc-highlight">票面价</span>
				是指通过景区指定窗口售卖的纸质门票上标注的价格
			</div>
		</div>
		
		<div class="qn_footer">
			<div class="main_nav_wrapper">
				<ul class="main_nav">
					<li>
						<a href="">
							<i class="icon iconfont icon-jipiao"></i>
							<span>机票</span>
						</a>
					</li>
					<li>
						<a href="">
							<i class="iconfont icon-huochepiao"></i>
							<span>火车票</span>
						</a>
					</li>
					<li>
						<a href="">
							<i class="iconfont icon-jiudian"></i>
							<span>酒店</span>
						</a>
					</li>
					<li>
						<a href="">
							<i class="iconfont icon-gongyu"></i>
							<span>公寓</span>
						</a>
					</li>
				</ul>
			</div>
			<ul class="footer_nav">
				<li>
					<a href="">登录</a>
				</li>
				<li>
					<a href="">我的订单</a>
				</li>
				<li>
					<a href="">个人中心</a>
				</li>
				<li>
					<a href="">最近浏览</a>
				</li>
				<li>
					<a href="">关于我们</a>
				</li>
			</ul>
			<ul class="mobile_pc">
				<li>
					<a href="">触屏版</a>
				</li>
				<li>
					<a href="">电脑版</a>
				</li>
			</ul>
			<div class="copyright">
				<span>Qunar 京ICP备05021087</span>
				<a href="">意见反馈</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  
	}
</script>

<style>
	.price-desc{
		margin-top:.1rem;
		padding:.14rem .1rem;
		font-size:.24rem;
		line-height:.32rem;
		background:#fff;
		color:#616161;
	}
	.price-desc-info{
		text-align:center;
	}
	.price-desc-highlight{
		font-weight:bold;
	}
	.qn_footer{
		background:#f3f3f3;
	}
	.main_nav_wrapper{
		margin:0 auto;
	}
	.qn_footer .main_nav{
		position:relative;
		padding-top:0.15rem;
		overflow:hidden;
		width:100%;
		height:0.3rem;
	}
	.qn_footer .main_nav li{
		margin:0px;
		padding-left:0.1rem;
		float:left;
		position:relative;
		background:none;
		width:65px;
		height:35px;
	}
	.qn_footer .main_nav li a{
		display:block;
		height:22px;
		width:100%;
		font-size:12px;
		color:#9E9E9E;
	}
	.qn_footer .main_nav .icon{
		background-position:0 0;
		float:left;
		width:22px;
		height:22px;
		
	}
	.footer_nav{
		width:100%;
		height:39px;
		margin-top:0.3rem;
		border-top:5px solid #CACACA;
		border-bottom:1px solid #CACACA;
	}
	.footer_nav li{
		float:left;
		padding-left:.2rem;
	}
	.footer_nav li a{
		position:relative;
		line-height:39px;
		color:#25a4dd;
		font-size:14px;
	}
	.mobile_pc{
		padding:10px 0 0 0;
		text-align:center;
	}
	.mobile_pc li{
		display:inline-block;
		margin:0 15px;
	}
	.mobile_pc li:nth-of-type(1) a{
		color:#000000;
	}
	.copyright{
		padding:10px;
		text-align:center;
		color:#9E9E9E;
		font-size:14px;
	}
	.copyright a{
		color:#9E9E9E;
		height:33px;
	}
</style>