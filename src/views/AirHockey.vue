<template>
  <div class="'AirHockey'">
    <h1>Projet Scolaire : Jeu Air Hockey</h1>
    <div id="element">
      <h2>Concept Général</h2>
      Ce projet est un jeu de air hockey crée en équipe de 2 dans le cadre du
      cours IFT-2103 Programmation de jeu video de l'université laval.
    </div>
    <b-container>
      <b-row id="element">
        <b-col sm="8">
          <img alt="gif" src="../assets/audiomanager.png" />
        </b-col>
        <b-col sm="4">
          <h3>Music</h3>
          Le jeu contient des effets sonores lors d'évènement précis du jeu.<br />
          <a
            href="https://github.com/jpbel65/JV-A2019-IFT-2103/blob/master/Assets/Scripts/Sound.cs"
            >Sound.cs</a
          >
          <br />
          <br />
          Tous les sons sont gérés par un audioManager qui est une instance
          unique dans le jeu.<br />
          <a
            href="https://github.com/jpbel65/JV-A2019-IFT-2103/blob/master/Assets/Scripts/AudioManager.cs"
            >AudioManager.cs</a
          >
          <br />
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row id="element">
        <b-col sm="4">
          <h3>Effet de Particule</h3>
          Les particules utilisent un système de "pooling" pour allégé le jeu de
          la création et destruction des objets
          <br /><a
            href="https://github.com/jpbel65/JV-A2019-IFT-2103/blob/master/Assets/Scripts/Pooling.cs"
            >Pooling.cs</a
          ><br /><br />
          Les objets utilisent des ancres pour jouer leur animation sans
          bouger.<br />
          <a
            href="https://github.com/jpbel65/JV-A2019-IFT-2103/blob/master/Assets/Scripts/AncrePool.cs"
            >Ancre.cs</a
          >
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
          <h3>Controle</h3>
          Le joueur peut affecter ses propres contrôles grâce au menu des
          options qui transmet les raccourcis au script de commande.<br />
          <a
            href="https://github.com/jpbel65/JV-A2019-IFT-2103/blob/master/Assets/Scripts/ControlSettingSc.cs"
            >ControlSettingSc.cs</a
          ><br />
        </b-col>
      </b-row>
    </b-container>
    <b-container id="endDoc">
      <b-row id="element" class="text-center">
        <b-col>
          <h3>Lien GitHub:</h3>
          <a href="https://github.com/jpbel65/JV-A2019-IFT-2103"
            ><img alt="github logo" src="../assets/github.png"
          /></a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "AirHockey"
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
