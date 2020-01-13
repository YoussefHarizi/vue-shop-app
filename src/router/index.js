import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import admin from "../views/admin.vue";
import Overview from "../views/Overview.vue";
import Product from "../views/Product.vue";
import Orders from "../views/Orders.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/admin",
    name: "admin",
    component: admin,
    children: [
      {
        path: "overview",
        name: "overview",
        component: Overview
      },
      {
        path: "product",
        name: "product",
        component: Product
      },
      {
        path: "orders",
        name: "orders",
        component: Orders
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
