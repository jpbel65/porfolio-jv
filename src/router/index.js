/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import RPG2D from "../views/RPG2D";
import AirHockey from "../views/AirHockey";
import Design3 from "../views/Design3";
import Fika from "../views/Fika";
import Summer2020 from "../views/Summer2020";
import Rabbit from "../views/Rabbit";
import Ubisoft2020 from "../views/Ubisoft2020";

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
  },
  {
    path: "/Fika",
    name: "Fika",
    component: Fika
  },
  {
    path: "/Summer2020",
    name: "Summer2020",
    component: Summer2020
  },
  {
    path: "/ProjetRabbIt",
    name: "Rabbit",
    component: Rabbit
  },
  {
    path: "/Ubisoft2020",
    name: "Ubisoft2020",
    component: Ubisoft2020
  }
];

const router = new VueRouter({
  routes
});

export default router;
