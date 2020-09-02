<template>
  <div class="'Rabbit'">
    <h1>Projet Rabb It</h1>
    <div class="element">
      <h2>Concept Général</h2>
      Ce projet est une application python qui permet à plusieurs personnes de
      regarder des vidéos youtube synchronisées.
    </div>
    <b-container>
      <b-row class="element">
        <b-col sm="4">
          <h3>Tkinter</h3>
          L'application est construite avec tkinter pour gérer l'ouverture et la
          fermeture de certains panneaux avec facilité.
        </b-col>
        <b-col sm="8">
          <img src="../assets/Tkinter.png" height="126" width="303" alt="img" />
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row class="element">
        <b-col sm="8">
          <img
            src="../assets/Playlist.png"
            height="245"
            width="583"
            alt="img"
          />
        </b-col>
        <b-col sm="4">
          <h3>Playlist</h3>
          Tous les utilisateurs peuvent ajouter des urls youtube à l'application
          pour les ajouter à la playlist.<br />
        </b-col>
      </b-row>
    </b-container>
    <b-container id="endDoc">
      <b-row class="element">
        <b-col>
          <h3>Lien GitHub:</h3>
          <a href="https://github.com/jpbel65/ProjetRabbit">
            <img alt="github logo" src="../assets/github.png"
          /></a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Rabbit"
};
</script>

<style scoped>
.element {
  padding-top: 50px;
  text-align: center;
}

#endDoc {
  padding-bottom: 75px;
}
</style>
