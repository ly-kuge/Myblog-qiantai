import Vue from 'vue'
import axios from 'axios'
import config from './config'

axios.defaults.baseURL = config.api;
axios.defaults.timeout = 2000;
axios.defaults.withCredentials=true;

axios.interceptors.request.use(function (config) {
  // console.log(config);
  return config;
})

Vue.prototype.$http = axios;
