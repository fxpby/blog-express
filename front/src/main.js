import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

var url = "http://localhost:3000"
axios.get(url + '/api/blog/list')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
