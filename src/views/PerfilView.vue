<template>
  <div class="perfil">
    <div align="center">
      <nav>
        <NavBar />
      </nav>
    </div>
    <br />
    <br />
    <br />
    <v-layout wrap>
      <v-flex xs12 md12>
        <div class="container">
          <div id="perfil">
            <div id="divavatar">
              <v-img
                src="/src/assets/imgs/avatar2.png"
                id="avatar"
                width="83px"
                height="90px"
              ></v-img>
            </div>

            <span id="nome">{{ user.nome }}</span>
            <v-progress-linear
              model-value="50"
              id="progresso"
              class="perfil-info"
            ></v-progress-linear>
            <p class="perfil-info">Nivel: {{ user.nivel }}</p>
          </div>
          <h3>Biografia</h3>
          <p>{{ user.biografia }}</p>
          <v-btn @click="$router.push('editarPerfil')" id="editar">Editar perfil</v-btn>
        </div>
      </v-flex>
    </v-layout>
    <div>
      <v-container>
        <v-row>
          <v-col align="center">
            <h1>Referral code</h1>
            <p>
              Compartilhe o referral code abaixo com os seus amigos e ganhem
              ambos moedas virtuais para poderem usar na nossa loja.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div>
      <v-container>
        <v-layout wrap>
          <v-flex xs12 md6>
            <h1>As minhas badges</h1>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script scoped>
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
    };
  },
  created() {
    this.user = this.store.getLoggedInUser;
  },
};
</script>

<style>
.perfil {
  background: linear-gradient(180deg, #1a9360 0%, #00ad79 47.71%, #40ddae 100%);
  min-height: 1080px;
}

.container {
  background-image: url("src/assets/imgs/fundo_div_perfil.jpg");
  border-radius: 10px;
  color: #fdfcf8;
  margin: 0 auto;
  width: 80%;
  display: grid;
}

#divavatar {
  border-radius: 10px;
  background-color: #fdfcf8;
  width: 83px;
  height: 90px;
}

#avatar {
  border-radius: 10px;
}

/**in perfil, the image and the name must be touching eachother */
#perfil {
  grid-column: 1 / 3;
  grid-row: 1;
  display: grid;
  grid-template-columns: 0.2fr 2fr;
  grid-gap: 0px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
}

#nome {
  font-weight: bold;
}

h3 {
  grid-column: 1 / 3;
  grid-row: 2;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 20px;
  color: #f0cd6e;
}
h1 {
  color: #fdfcf8;
}

p {
  grid-column: 1 / 3;
  grid-row: 3;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 15px;
  color: #fdfcf8;
}

#editar {
  grid-column: 1 / 1;
  grid-row: 4;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #f0cd6e;
  border: none;
  color: white;
  font-weight: bold;
  font-size: large;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 10px;
}

#background {
  background-image: url("src/assets/imgs/fundo_perfil.jpg");
  background-position: center;
  background-size: cover;
  min-height: 100%;
}

.perfil-info {
  grid-row: 2;
}
</style>
