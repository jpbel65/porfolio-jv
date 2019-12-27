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
          Le projet contient 4 couches de Tileset pour créer un effet de
          profondeur à la scène.<br /><br />
          Couche:<br />
          Sol: Tuile du sol<br />
          Sous Joueur: Les objets accompagnent le sol<br />
          Dessus le joueur: le sommet de certain objets<br />
          Toit: les toits des maisons<br />
        </b-col>
        <b-col sm="8">
          <img alt="Vue logo" src="../assets/tileset.gif" />
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row id="element">
        <b-col sm="8">
          <img alt="Vue logo" src="../assets/inventory.gif" />
        </b-col>
        <b-col sm="4">
          <h3>Inventaire</h3>
          Le joueur possède un inventaire qui est mis à jour chaque fois qu'il
          ramasse un objet au sol. Il peut équiper des objets pour améliorer ses
          caractéristiques.
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row id="element">
        <b-col sm="4">
          <h3>Monstre</h3>
          L'univers du jeu est peuplé de monstre diverse qui propose différents
          objets lors qu'ils sont tués.
        </b-col>
        <b-col sm="8">
          <img alt="Vue logo" src="../assets/monster.gif" />
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row id="element">
        <b-col sm="8">
          <img alt="Vue logo" src="../assets/sort.gif" />
        </b-col>
        <b-col sm="4">
          <h3>Magie</h3>
          Le joueur possède des sorts qu'il lui permet d'affronter les monstres
          du jeu.
        </b-col>
      </b-row>
    </b-container>
    <b-container id="endDoc">
      <b-row id="element" class="text-center">
        <b-col>
          <h3>Lien GitHub:</h3>
          <a href="https://github.com/jpbel65/RPG-2D"
            ><img alt="Vue logo" src="../assets/github.png"
          /></a>
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
  text-align: center;
}

#endDoc {
  padding-bottom: 75px;
}

#colone {
  text-align: center;
}
</style>
