import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

Vue.config.productionTip = false;

// Set Axios Base URL
axios.defaults.baseURL = "http://localhost:5000/api";

// Attach Axios globally (optional)
Vue.prototype.$http = axios;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
