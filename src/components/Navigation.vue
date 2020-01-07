<template>
  <b-navbar type="dark" variant="dark" fixed="top">
    <b-navbar-nav style="width: 100%" align="center">
      <b-nav-item to="/" href="#">Home</b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Projet d'école">
        <b-dropdown-item to="/AirHockey">Jeu Air Hockey</b-dropdown-item>
        <b-dropdown-item to="/Design3">Robot autonome</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="Projet personnel">
        <b-dropdown-item to="/rpg2d">RPG 2D</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style scoped></style>
