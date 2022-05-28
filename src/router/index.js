import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import PcView from "../views/PcView.vue";
import LaptopView from "../views/LaptopView.vue";
import KeyboardView from "../views/KeyboardView.vue";
import MouseView from "../views/MouseView.vue";
import GearView from "../views/GearView.vue";
import MonitorView from "../views/MonitorView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/pc",
    name: "pc",
    component: PcView,
  },
  {
    path: "/laptop",
    name: "laptop",
    component: LaptopView,
  },
  {
    path: "/keyboard",
    name: "keyboard",
    component: KeyboardView,
  },
  {
    path: "/mouse",
    name: "mouse",
    component: MouseView,
  },
  {
    path: "/gear",
    name: "gear",
    component: GearView,
  },
  {
    path: "/monitor",
    name: "monitor",
    component: MonitorView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
