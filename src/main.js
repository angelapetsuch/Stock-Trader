import Vue from "vue";
import VueRouter from "vue-router";
import "./plugins/vuetify";
import App from "./App.vue";
import routes from "./router";
import store from "./store/store";
import VueResource from "vue-resource";

import "vuetify/dist/vuetify.min.css";

Vue.use(VueRouter);
Vue.use(VueResource);
// setup access to firebase DB
Vue.http.options.root = "https://vue-stock-trader-91eb3.firebaseio.com/";

// create a new global filter to be used throughout project
Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
