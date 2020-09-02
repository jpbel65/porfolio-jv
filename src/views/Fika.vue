<template>
  <div class="'Fika'">
    <h1>Projet de génie logiciel avec Fika Productions</h1>
    <div class="element">
      <h2>Concept Général</h2>
      Ce projet est une idée soumise dans le cadre du cours projet de génie
      logiciel en hiver 2020 par Fika Productions.<br />
      Il avait comme but de construire une librairie de communication en ligne.
    </div>
    <b-container>
      <b-row class="element">
        <b-col sm="8">
          <img alt="gif" src="../assets/Jeu.png" width="500" height="281.25" />
        </b-col>
        <b-col sm="4">
          <h3>Jeu : Fais-moi un dessin</h3>
          Le projet contenait un prototype sous forme de jeu qui permet de faire
          une démo technique.
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row class="element">
        <b-col sm="4">
          <h3>Interface mobile/bureau</h3>
          Le projet contient aussi une plateforme web pour les joueurs.
        </b-col>
        <b-col sm="8">
          <img
            alt="gif"
            src="../assets/Interface.png"
            width="500"
            height="281.25"
          />
        </b-col>
      </b-row>
    </b-container>
    <br />
    <b-container id="endDoc">
      <video-embed src="https://youtu.be/NhdokeTP7LU"></video-embed>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Fika"
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
