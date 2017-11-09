<template>
	<div class="app">
		<index-header />
		<index-swiper :swiperInfo="swiperInfo"/>
		<index-category :category="category"/>
		<index-activity />
		<index-recommend />
		<index-weekend />
		<index-footer />
	</div>
</template>

<script>
	import header from './header.vue';
	import swiper from './swiper.vue';
	import category from './category.vue';
	import activity from './activity.vue';
	import recommend from './recommend.vue';
	import weekend from './weekend.vue';
	import footer from './footer.vue';
	import axios from 'axios';
	
	export default {
	  components:{
	  	"index-header" : header,
	  	"index-swiper" : swiper,
	  	"index-category" : category,
	  	"index-activity" : activity,
	  	"index-recommend" : recommend,
	  	"index-weekend" : weekend,
	  	"index-footer" : footer
	  },
	  data() {
	  	return {
	  		swiperInfo: [],
	  		category: []
	  	}
	  },
	  mounted() {
	  	this.getHomeData();
	  },
	  methods: {
	  	getHomeData() {
	  		axios.get('/static/home/swiper.json?city=北京')
	  			.then(this.handleGetDataSucc.bind(this))
	  			.catch(this.handleGetDataError.bind(this));
	  	},
	  	
	  	handleGetDataSucc(response) {
	  		const res = response.data
	  		const data = res.data;
	  		this.swiperInfo = data.swiperInfo;
	  		this.category = data.category;
	  	},
	  	handleGetDataError(err) {
			
	  	}
	  }
	}
</script>

<style scoped>
	.app{
		overflow:hidden;
	}
</style>
