import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import Embed from "v-video-embed";

Vue.config.productionTip = false;
Vue.use(Embed);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
