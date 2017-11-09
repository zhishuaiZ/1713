<template>
	  <swiper :options="swiperOption" id="swiper">
		    <swiper-slide>
			    	<div class="swiper-img-com">
				    		<div class="vessel">
					    			<a href="#">
						    				<div class="category-img-container">
						    						<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png"/>
						    				</div>
					    					<div class="keywords">动植物园</div>
					    			</a>
				    		</div>
			    	</div>
		    </swiper-slide>
		    
		    <swiper-slide>
		    		<div class="swiper-img-com">
				    		<div class="vessel">
					    			<a href="#">
						    				<div class="category-img-container">
						    							<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png"/>
						    				</div>
					    					<div class="keywords">城市观光</div>
					    			</a>
				    		</div>
		    		</div>
		    </swiper-slide>
		    <div class="swiper-pagination swiper-personalize"  slot="pagination"></div>
	  </swiper>
	  
</template>

<script>
	import {swiper, swiperSlide} from "vue-awesome-swiper";
	export default {
	    data() {
		    return {
		        swiperOption: {
			        direction: 'horizontal',
			        autoHeight: true,
			        pagination: '.swiper-pagination',
			        observeParents: true
		        }
		    }
	    },
	    components: {
	    	swiper,
	    	swiperSlide
	    }
	}
</script>

<style scoped>
	#swiper{
		float:left;
		width:100%;
		height:4rem;
		overflow:hidden;
	}
	.swiper-img-com{
		width:100%;
		height:1.3rem;
		float:left;
		padding-top:.3rem;
		text-align:center;
	}
	.vessel{
		width:25%;
		height:1.3rem;
		float:left;
		padding-top:.3rem;
		text-align:center;
	}
	.category-img-container{
		display:inline-block;
		background:#f0f5f8;
		border-radius:20px;
		width:.66rem;
		height:.66rem;
	}
	.category-img-container img{
		width:.66rem;
		height:.66rem;
	}
	.keywords{
		margin-top:.2rem;
		color:#212121;
		font-size:.28rem;
	}

</style>
