import Vue from "vue";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { LayoutPlugin } from "bootstrap-vue";
import { DropdownPlugin, TablePlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);

Vue.use(LayoutPlugin);
Vue.use(DropdownPlugin);
Vue.use(TablePlugin);
