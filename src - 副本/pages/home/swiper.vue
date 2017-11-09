
<template>
	  <swiper :options="swiperOption" id="swiper">
		    <swiper-slide v-for="item in swiperInfo" :key="item.id">
		    	<router-link :to="item.link">
			    	<div class="swiper-img-com">
			    		<img class="swiper-img" :src="item.src"/>
			    	</div>
		    	</router-link>
		    </swiper-slide>
		    <div class="swiper-pagination swiper-personalize"  slot="pagination"></div>
	  </swiper>
</template>

<script>
	
	import {swiper, swiperSlide} from "vue-awesome-swiper";
	
	export default {
			props: ['swiperInfo'],
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
