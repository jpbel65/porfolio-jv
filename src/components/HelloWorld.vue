<template>
  <b-container>
    <h1>CV de Jean-philippe Bélanger</h1>
    <h2>Bienvenue</h2>
    <b-row id="element">
      <b-col sm="4">
        Je suis étudiant en 4eme année en génie logiciel à l'université Laval.
        Je suis débrouillard, social et investit dans mon travail. Je suis
        passionné de jeu vidéo et de culture vidéo-ludique. Je cherche à
        agrandir mes connaissances dans le métier de la production de jeu
        vidéo.<br />
        <br />
        Je suis à la recherche d'un stage pour l'hiver 2021. Je souhaite
        partager mon savoir-faire et mes connaissances dans le domaine du jeu
        vidéo avec le plus grand nombre de personne.<br />
        <br />
        <a
          href="https://drive.google.com/file/d/1Dhx7zsXDTPVBMs60rUnym5xgp89yPYP6/view?usp=sharing"
          >Curriculum Vitae</a
        ><br />
        <a
          href="https://drive.google.com/file/d/1ZEVjSB2aDCAvXl6bwiU1BDxGzsrQi9_q/view?usp=sharing"
          >Relever Note Automne 2020</a
        >
      </b-col>
      <b-col sm="8">
        <img
          src="../assets/IMG_20191225_150844.jpg"
          width="400"
          height="300"
          style="transform: rotate(270deg)"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#element {
  padding-top: 50px;
  text-align: center;
}
</style>
