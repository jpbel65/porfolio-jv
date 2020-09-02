<template>
  <div class="'Design3'">
    <h1>Projet Scolaire : Projet multidisciplinaire de génie logiciel</h1>
    <b-container class="element">
      <h2>Concept Général</h2>
      Ce projet est un robot qui doit effectuer différentes tâches précises.<br />
      <br />
      Un déplacement automatisé sur un aire de jeu. <br />
      Lire un code QR avec une caméra embarquée. <br />Transporter une pièce
      précise d'un point de l'aire de jeu à un autre. <br />Connexion temps réel
      avec une station de base pour obtenir un retour des informations de la
      simulation. <br />
      <br />
      J'ai aussi été désigné par mon équipe pour être le chef d'équipe et de
      m'occuper de la logistique.
    </b-container>
    <b-container class="element">
      <video-embed src="https://youtu.be/wrO-QBCEOWI"></video-embed>
    </b-container>
    <b-container id="endDoc">
      <b-row class="element">
        <b-col>
          <h3>Lien GitHub:</h3>
          <a href="https://github.com/jpbel65/Robot-D3-E9-H2019"
            ><img alt="github logo" src="../assets/github.png"
          /></a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Design3"
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
