<template>
  <div id="app">
    <nav-menu></nav-menu>
    <router-view id="router"></router-view>
  </div>
</template>

<script>
import Navigation from "../src/components/Navigation";

export default {
  name: "app",
  components: {
    "nav-menu": Navigation
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  color: #2c3e50;
  background: lightgray;
}
#router {
  padding-top: 70px;
}
</style>
