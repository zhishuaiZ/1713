import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Page from '@/pages/page/Page'
import Particulars from '@/pages/particulars/Particulars'
Vue.use(Router)

export default new Router({
	  routes: [
		    {
		      path: '/',
		      name: 'Home',
		      component: Home
		    },{
		      path: '/Page',
		      name: 'page',
		      component: Page
		    },{
		      path: '/Particulars',
		      name: 'particulars',
		      component: Particulars
		    }
	  ]
})
