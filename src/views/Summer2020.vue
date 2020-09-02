<template>
  <div class="'Summer2020'">
    <h1>Projet Personelle : Summer2020</h1>
    <div class="element">
      <h2>Concept Général</h2>
      Ce jeu est un roguelike qui est développé sur enreal engine.
    </div>
    <b-container>
      <b-row class="element">
        <b-col sm="4">
          <h3>Génération procédurale</h3>
          À chaque partie, l'environnement est généré procéduralement à l'aide
          de morceau de terrain préfabriqué.
        </b-col>
        <b-col sm="8">
          <img alt="gif" src="../assets/SummerLevel.gif" />
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row class="element">
        <b-col sm="8">
          <img
            alt="img"
            src="../assets/MenuSummer.png"
            height="281.25"
            width="500"
          />
        </b-col>
        <b-col sm="4">
          <h3>Progression personalisé</h3>
          Grace à une monnaie ramassé lorsque les monstres meurent, le joueur
          pourra améliorer son arsenal ou ses caractéristiques pour pouvoir
          affronter des difficultés plus élever.<br />
        </b-col>
      </b-row>
    </b-container>
    <b-container class="element">
      <video-embed src="https://youtu.be/HPSA8kh3KsU"></video-embed>
    </b-container>
    <b-container id="endDoc">
      <b-row class="element">
        <b-col>
          <h3>Lien GitHub:</h3>
          <a href="https://github.com/jpbel65/Summer2020">
            <img alt="github logo" src="../assets/github.png"
          /></a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Summer2020"
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
