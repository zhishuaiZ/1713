
<template>
	  <swiper :options="swiperOption" id="swiper">
		    <swiper-slide>
		    	<div class="swiper-img-com">
		    		<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1710/f5/57137c621d75ba02.jpg_640x200_b984ddf7.jpg"/>
		    	</div>
		    </swiper-slide>
		    <swiper-slide>
		    	<div class="swiper-img-com">
		    		<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1711/b3/66f7230d9ad6e002.jpg_640x200_077e61ee.jpg"/>
		    	</div>
		    </swiper-slide>
		    <swiper-slide>
		    	<div class="swiper-img-com">
		    		<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1710/3a/8704ab3273e4c02.jpg_640x200_84d0e205.jpg"/>
		    	</div>
		    </swiper-slide>
		    <swiper-slide>
		    	<div class="swiper-img-com">
		    		<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1710/16/1d7693c6bd8abd02.png_640x200_43c308dd.png"/>
		    	</div>
		    </swiper-slide>
		    <swiper-slide>
		    	<div class="swiper-img-com">
		    		<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1710/a0/293ec6c45ed06b02.jpg_640x200_e3456f78.jpg"/>
		    	</div>
		    </swiper-slide>
		     <swiper-slide>
		    	<div class="swiper-img-com">
		    		<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1703/51/01864a8a35c20402.jpg_640x200_d16dcbcd.jpg"/>
		    	</div>
		    </swiper-slide>
		    <swiper-slide>
		    	<div class="swiper-img-com">
		    		<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1609/15/630b82d932a3c402.jpg_640x200_862e836b.jpg"/>
		    	</div>
		    </swiper-slide>
		    <swiper-slide>
		    	<div class="swiper-img-com">
		    		<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1609/c9/cacbf705c5417e02.jpg_640x200_99b2676a.jpg"/>
		    	</div>
		    </swiper-slide>
		    <swiper-slide>
		    	<div class="swiper-img-com">
		    		<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1609/f3/52a119dbed871902.jpg_640x200_b4573df8.jpg"/>
		    	</div>
		    </swiper-slide>
		    <swiper-slide>
		    	<div class="swiper-img-com">
		    		<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1711/c5/2b4166f592b33202.jpg_640x200_27b41388.jpg"/>
		    	</div>
		    </swiper-slide>
		    <swiper-slide>
		    	<div class="swiper-img-com">
		    		<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1710/16/249e5d9c533f6e02.jpg_640x200_9d63493e.jpg"/>
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
			        autoplay: 3000,
			        direction: 'horizontal',
			        autoHeight: true,
			        pagination: '.swiper-pagination',
			        observeParents: true,
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
		width:100%;
		overflow:hidden;
		left:0;
	}
	.swiper-img-com{
		overflow:hidden;
		width:100%;
		height:0;
		padding-bottom:31.25%;
	}
	.swiper-img{
		width:100%;
	}
	.swiper-personalize .swiper-pagination-bullet{
		background:red;
	}
</style>
