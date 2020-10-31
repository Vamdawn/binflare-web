import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "./plugins/element.js";

import HelloWorld from "./components/HelloWorld";

Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({
  hashbang: true,
  history: true,
  base: __dirname,
  saveScrollPosition: true,
  suppressTransitionError: true,
  routes: [
    {
      path: "/hello/:msg",
      component: HelloWorld,
      props: true,
    },
  ],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
