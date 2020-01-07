/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import RPG2D from "../views/RPG2D";
import AirHockey from "../views/AirHockey";
import Design3 from "../views/Design3";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/rpg2d",
    name: "rpg2d",
    component: RPG2D
  },
  {
    path: "/AirHockey",
    name: "AirHockey",
    component: AirHockey
  },
  {
    path: "/Design3",
    name: "Design3",
    component: Design3
  }
];

const router = new VueRouter({
  routes
});

export default router;
