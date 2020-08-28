<template>
  <div class="'Rabbit'">
    <h1>Projet Rabb It</h1>
    <div id="element">
      <h2>Concept Général</h2>
      Ce projet est une application python qui permet à plusieurs personne de
      regerder des vidéo youtube syncronisée.
    </div>
    <b-container>
      <b-row id="element">
        <b-col sm="4">
          <h3>Tkinter</h3>
          L'application est construite avec tkinter pour gérer l'ouverture et la
          fermeture de certain panneau avec facilité.
        </b-col>
        <b-col sm="8">
          <img alt="gif" src="../assets/pooling.gif" />
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row id="element">
        <b-col sm="8">
          <img alt="gif" src="../assets/control.gif" />
        </b-col>
        <b-col sm="4">
          <h3>Playlist</h3>
          Tous les utilisateurs peuvent ajouter des url youtube à l'application
          pour les ajouter à la playlist.<br />
        </b-col>
      </b-row>
    </b-container>
    <b-container id="endDoc">
      <b-row id="element" class="text-center">
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
#element {
  padding-top: 50px;
  text-align: center;
}

#endDoc {
  padding-bottom: 75px;
}
</style>
