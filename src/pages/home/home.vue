<template>
	<div class="app">
		<index-header />
		<index-swiper />
		<index-category />
		<index-activity />
		<index-recommend />
		<index-weekend />
		<index-footer />
	</div>
</template>

<script>
	import header from "./header.vue";
	import swiper from "./swiper.vue";
	import category from "./category.vue";
	import activity from "./activity.vue";
	import recommend from "./recommend.vue";
	import weekend from "./weekend.vue";
	import footer from "./footer.vue";
	
	export default {
	  components:{
	  	"index-header" : header,
	  	"index-swiper" : swiper,
	  	"index-category" : category,
	  	"index-activity" : activity,
	  	"index-recommend" : recommend,
	  	"index-weekend" : weekend,
	  	"index-footer" : footer
	  }
	}
</script>

<style scoped>
	.app{
		overflow:hidden;
	}
</style>
