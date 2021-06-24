import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home";
import Product from "../components/Product";
import About from "../components/About";
import Error from "../components/Error";

const routes = [
  { path: "/", component: Home },
  { path: "/Product", component: Product },
  { path: "/About", component: About },
  { path: "/:pathMatch(.*)*", component: Error },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
