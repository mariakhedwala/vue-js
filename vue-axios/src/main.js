import Vue from 'vue'
import App from './App.vue'
import axios from "axios"

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vue-axios-dd16b.firebaseio.com'
// axios.defaults.headers.common['Authorization'] = 'someToken'
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInter = axios.interceptors.request.use(config => {
  console.log('request inter', config)
  return config
})
const resInter = axios.interceptors.response.use(res => {
  console.log('response inter', res)
  return response
})
axios.interceptors.request.eject(reqInter)  //eject is used to remove the headers
axios.interceptors.response.eject(resInter)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
