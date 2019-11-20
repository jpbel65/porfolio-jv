<template>
  <div class="'RPG2D'">
    <h1>Projet Personel : RPG2D</h1>
    <div id="element">
      <h2>Concept Général</h2>
      Ce projet est un RPG d'aventure qui reprend des concept classique de Zelda
      1 The legend Of Zelda et des jeux de style RPG maker.
    </div>
    <b-container>
      <b-row id="element">
        <b-col sm="4">
          <h3>Tileset</h3>
          Le projet contient 4 couche de Tileset pour crée un effet de
          profondeur à la scene.
        </b-col>
        <b-col sm="8">
          <img alt="Vue logo" src="../assets/logo.png" />
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row id="element">
        <b-col sm="8">
          <img alt="Vue logo" src="../assets/logo.png" />
        </b-col>
        <b-col sm="4">
          <h3>Inventaire</h3>
          Le joueur possède un inventaire static qui est mit à jour chaque fois
          qu'il rammase un objet au sol. Il peut équier des objets amélio
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row id="element">
        <b-col sm="4">
          <h3>Monstre</h3>
          Le projet contient 4 couche de Tileset pour crée un effet de
          profondeur à la scene.
        </b-col>
        <b-col sm="8">
          <img alt="Vue logo" src="../assets/logo.png" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "RPG2D"
};
</script>

<style scoped>
#element {
  padding-top: 50px;
}
</style>
