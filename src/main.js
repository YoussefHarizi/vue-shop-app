import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
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
  render: h => h(App)
}).$mount("#app");
