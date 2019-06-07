import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";

Vue.use(VueResource);

Vue.http.options.root = "https://vuejs-htttp.firebaseio.com/data.json";
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  request.method = "PUT";
});

new Vue({
  el: "#app",
  render: h => h(App)
});
