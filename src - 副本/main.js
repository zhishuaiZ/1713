import Vue from 'vue'
import App from './app/App'
import router from './router'
import FastClick from 'fastclick';


FastClick.attach(document.body);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
