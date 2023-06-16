import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import HomeView from "../components/main_page.vue";
import mainPage from "../components/main_page";
import subPage from "../components/sub_page";
import sub2Page from "../components/sub2_page";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: mainPage,
  },
  {
    path: "/main",
    name: "main_page",
    component: mainPage,
  },

  {
    path: "/sub",
    name: "sub_page",
    component: subPage,
  },
  {
    path: "/sub2",
    name: "sub2_page",
    component: sub2Page,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
