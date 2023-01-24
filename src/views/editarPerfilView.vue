<template>
  <div class="editarPerfil" align="center">
    <div align="center">
      <nav>
        <NavBar />
      </nav>
    </div>
    <br />
    <br />
    <br />
    <br />
    <div class="blue-background">
      <v-container>
        <v-row>
          <v-col cols="12" md="6" id="textfields">
            <v-text-field
              label="Biografia"
              v-model="biografia"
              multi-line
            ></v-text-field>
            <v-text-field
              label="Nova Senha"
              v-model="novaSenha"
              type="password"
            ></v-text-field>
            <v-text-field
              label="Confirmar nova senha"
              v-model="confirmarSenha"
              type="password"
            ></v-text-field>
            <v-btn
              id="alterarDados"
              @click="store.editUser(biografia, novaSenha)"
            >
              Alterar dados
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import { userStore } from "../stores/userStore.js";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      store: userStore(),
      biografia: "",
      novaSenha: "",
      confirmarSenha: "",
      color: "primary",
    };
  },
};
</script>

<style>
.editarPerfil {
  background: linear-gradient(180deg, #1a9360 0%, #00ad79 47.71%, #40ddae 100%);
  min-height: 1080px;
  font-family: "exo";
}
.blue-background {
  background-color: #114b5f;
  border-radius: 10px;
  width: 80%;
}
#alterarDados {
  background-color: #f0cd6e;
  color: #fdfcf8;
  font-family: "exo";
}

#textfields {
  color: #f0cd6e;
  font-family: "exo";
}
</style>
