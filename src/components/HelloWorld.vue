<template>
  <b-container>
    <h1>CV de Jean-philippe Bélanger</h1>
    <h2>Bienvenue</h2>
    <b-row id="element">
      <b-col sm="4">
        Je suis étudiant en 3eme année en génie logiciel à l'université Laval.
        Je suis une personne débrouillard, social et investit dans son travail.
        Je suis passionné de jeu vidéo et de culture vidéo-ludique. Je cherche à
        agrandir mes connaissances dans le métier de la production de jeu
        vidéo.<br />
        <br />
        Je me spécialise dans la programmation gameplay. Cependant, je
        m'intéresse aussi la programmation d'outil et en programmation de réseau
        en ligne.<br />
        <br />
        <a
          href="https://drive.google.com/file/d/1Dhx7zsXDTPVBMs60rUnym5xgp89yPYP6/view?usp=sharing"
          >Curriculum Vitae</a
        ><br />
        <a
          href="https://drive.google.com/file/d/1bmF34my206LsUx1kE1neelIuMrxWhwCj/view?usp=sharing"
          >Relever Note Automne 2019</a
        >
      </b-col>
      <b-col sm="8">
        <img
          src="../assets/IMG_20191225_150844.jpg"
          width="400"
          height="300"
          style="transform: rotate(90deg)"
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
