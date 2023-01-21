<template>
  <div class="perfil">
    <v-container>
      <v-row>
        <v-col>
          <NavBar />
        </v-col>
      </v-row>
    </v-container>
    <v-container id="informacoes">
      <div class="responsive-background-image">
        <v-row>
          <v-col cols="1" align="center">
            <v-img
              src="/src/assets/imgs/avatar2.png"
              id="avatar"
              width="83px"
              height="90px"
            ></v-img>
          </v-col>
          <v-col cols="2" id="perfilInfo">
            <p class="user-name">Nome</p>
            <p class="user-level">Nível</p>
            <v-progress-linear
              model-value="50"
              id="progresso"
              class="perfil-info"
            ></v-progress-linear>
          </v-col>
        
          <v-col
            cols="5"
            class="d-flex justify-space-between align-center mb-6 bg-surface-variant "
            id="infos"
          >
            <div id="infosdiv" align="center">
              <p>Ecopontos Registados</p>
            </div>
            
            <div id="infosdiv" align="center">
              <p>Ecopontos Utilizados</p>
            </div>
            
            <div id="infosdiv" align="center">
              <p>Moedas</p>
            </div>
          </v-col>
          <v-col cols="3"></v-col>
        </v-row>
        <v-row class="my-4">
          <v-col cols="9" id="biografia">
            <h3>Biografia</h3>
            <p>uasshfiausfijalsjfalskf.ksafkljaklfjwja</p>
          </v-col>
        </v-row>
        <v-row class="my-10">
          <v-col cols="3">
            <v-btn @click="$router.push('editarPerfil')" id="editar"
              >Editar perfil</v-btn
            >
          </v-col>
        </v-row>
      </div>
    </v-container>
    <v-container>
      <!-- <div class="tk-blob" style="--time: 20s; --amount: 5; --fill: #15795b">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
          <path
            d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"
          ></path>
        </svg>
      </div> -->

      <v-row>
        <v-col class="d-flex justify-center mb-6 bg-surface-variant">
          <h1 id="titleRef">Referral Code</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center mb-6 bg-surface-variant">
          <p id="expRef">
            Compartilhe o referral code abaixo com os seus amigos e ganhem ambos
            moedas virtuais para poderem usar na nossa loja.
          </p>
        </v-col>
      </v-row>
    </v-container>
    <div v-if="width > 1500">
      <v-img
        src="src\assets\imgs\linha_referral.svg"
        width="422.57px"
        heigth="376.5px"
        id="linha"
      ></v-img>
    </div>

    <v-container>
      <v-row>
        <v-col cols="4"></v-col>
        <v-col cols="4" class="d-flex justify-center mb-6 bg-surface-variant">
          <v-card text="37yhh8" id="refCard"></v-card>
        </v-col>
        <v-col cols="4"></v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col class="d-flex justify-center mb-6 bg-surface-variant">
          <h1 id="titleBadge">As minhas Badges</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { userStore } from "../stores/userStore.js";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      store: userStore(),
      user: [],
      width: window.innerWidth,
      height: window.innerHeight,
      length: 3,
      window: 0,
    };
  },
  created() {
    this.user = this.store.getLoggedInUser;
    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      console.log(this.width, this.height);
    });
  },
};
</script>

<style scoped>
.perfil {
  background: linear-gradient(180deg, #1a9360 0%, #00ad79 47.71%, #40ddae 100%);
  min-height: 1080px;
  z-index: -1;
}
.responsive-background-image {
  background-image: url("src/assets/imgs/fundo_div_perfil.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  height: 300px;
}
#informacoes {
  margin-top: 20px;
}
#divavatar {
  border-radius: 10px;
  background-color: #fdfcf8;
  width: 83px;
  height: 90px;
  margin: 10px;
}
#perfilInfo {
  color: #fdfcf8;
  font-family: "Exo";
  font-weight: bold;
}
#titleRef {
  color: #fdfcf8;
  font-family: "Exo";
  font-weight: bold;
  z-index: 1;
}

#titleBadge {
  color: #fdfcf8;
  font-family: "Exo";
  font-weight: bold;
}
#expRef {
  color: #fdfcf8;
  font-family: "Spinnaker";
  z-index: 1;
}

#refCard {
  background-color: #f0cd6e;
  color: #fdfcf8;
}
#linha {
  left: 400px;
  bottom: 10px;
}
.tk-blob {
  --amount: 0.5;
  width: 1000px;
  height: 1000px;
  position: absolute;
  z-index: 0;
}
#editar {
  background-color: #f0cd6e;
  color: #fdfcf8;
  font-family: "Exo";
  font-weight: bold;
}

#biografia h3 {
  color: #f0cd6e;
  font-family: "Exo";
  font-weight: bold;
}
#biografia p {
  color: #fdfcf8;
  font-family: "Spinnaker";
}

#infos p {
  color: #fdfcf8;
  font-family: "Exo";
  font-weight: bold;
}


@media only screen and (max-width: 600px) {
  .tk-blob {
    max-height: calc(
      40vw * 726.7 / 747.2
    ); /* Altura menor para telas até 600px */
    position: absolute;
    z-index: 0;
  }
}
@media only screen and (max-width: 400px) {
  .tk-blob {
    max-height: calc(
      30vw * 726.7 / 747.2
    ); /* Altura menor para telas até 400px */
    position: absolute;
    z-index: 0;
  }
}
</style>
