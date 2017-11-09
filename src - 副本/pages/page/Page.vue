<template>
	<div>
		<page-header />
		<page-main />
	</div>
</template>

<script>
	import header from "./header.vue";
	import main from "./main.vue";
	
	export default {
		components:{
		  	"page-header" : header,
		  	"page-main" : main,
		}
	}
</script>

<style scoped>
	
</style>
