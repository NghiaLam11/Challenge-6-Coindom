import Home from "./views/HomeView.vue";
import DashBoard from "./views/DashBoardView.vue";
import Coin from "./views/CoinView.vue";
import AboutUs from "./views/AboutUsView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: AboutUs },
  { path: "/coin", component: Coin },
  { path: "/dashboard", component: DashBoard },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
