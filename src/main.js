import Vue from "vue";
import App from "./App.vue";
// import "core-js";

import debug from "debug";
localStorage.debug = 'app:*'
const info = debug("app:info");

info("hi debug");

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
