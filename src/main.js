import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "./plugins/element.js";
import routes from "./routes"

Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({
  hashbang: true,
  history: true,
  base: __dirname,
  saveScrollPosition: true,
  suppressTransitionError: true,
  routes
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
