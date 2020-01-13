import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import JQuery from "jquery";
window.$ = require("jquery");
window.JQuery = require("jquery");
import "popper.js";
import "bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "./assets/sass/custom.scss";

Vue.config.productionTip = false;

// importation global de component
Vue.component("Navbar", require("./components/Navbar.vue").default);

new Vue({
  router,
  store,
  JQuery,
  render: h => h(App)
}).$mount("#app");
