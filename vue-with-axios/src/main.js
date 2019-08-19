import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";

import axios from "axios";

axios.defaults.baseURL = "https://vuejs-auth-1af7d.firebaseio.com";
axios.defaults.headers.common["Authorization"] = "test";
axios.defaults.headers.get["Accept"] = "application/json";

//interceptors
// const requestInterceptor = axios.interceptors.request.use(config => {
//   console.log("Request interceptor", config);
//   return config;
// });
// const responseInterceptor = axios.interceptors.response.use(res => {
//   console.log("Response Interceptor", res);
//   return res;
// });

// axios.interceptors.request.eject(requestInterceptor);
// axios.interceptors.response.eject(responseInterceptor);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
