import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// import ''
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
Vue.prototype.axios=axios

// var url = "http://localhost:3000"
// axios.get(url + '/api')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

Vue.config.productionTip = false

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
