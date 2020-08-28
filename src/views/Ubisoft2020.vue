<template>
  <div class="'Ubisoft2020'">
    <h1>Concours : Ubisoft Année 2020</h1>
    <div class="element">
      <h2>Concept Général</h2>
      Ce projet est le jeu présenté lors du concours universitaire d'ubisoft
      durant l'année 2020. <br />Le jeu doit contenir certain élément qui
      démontre la présence de trois pillier : <br />
      La génération, la coopération et la progression.
    </div>
    <b-container>
      <b-row class="element">
        <b-col sm="8">
          <img src="../assets/Generation.gif" alt="gif" />
        </b-col>
        <b-col sm="4">
          <h3>Génération</h3>
          Ce pillier est représenté par la génération des énigmes à résoudre.
          <br />
          <br />Chaque énigme est choisie aléatoirement à chaque fois que la
          scène est généré.
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row class="element">
        <b-col sm="4">
          <h3>Coopération</h3>
          Pour la coopération, il est obligatoire de travailler en équipe pour
          résoudre les différentes égnimes.
        </b-col>
        <b-col sm="8">
          <img
            alt="gif"
            src="../assets/TwoPlayer.png"
            height="321"
            width="500"
          />
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row class="element">
        <b-col sm="8">
          <img
            src="../assets/Progression1.gif"
            alt="gif"
            height="202.5"
            width="360"
          />
          <img
            src="../assets/Porgression2.gif"
            alt="gif"
            height="202.5"
            width="360"
          />
        </b-col>
        <b-col sm="4">
          <h3>Progression</h3>
          Au fil est égnime les joueurs pourront amélioré leur pouvoir
          respectif. Commme porté des objets plus lourds ou pouvoir faire
          plusieurs saut de suite.
        </b-col>
      </b-row>
    </b-container>
    <b-container class="element">
      <video-embed src="https://youtu.be/xceUeLyrJxA"></video-embed>
    </b-container>
    <b-container id="endDoc">
      <b-row class="element">
        <b-col>
          <h3>Lien GitHub:</h3>
          <a href="https://github.com/jpbel65/ConcoursUbisoft2020">
            <img alt="github logo" src="../assets/github.png"
          /></a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Ubisoft2020"
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
