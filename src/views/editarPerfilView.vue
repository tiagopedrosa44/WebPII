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
              color="primary"
              @click="updateUser(userId, biografia, password)"
            >
              Alterar dados
            </v-btn>
          </v-col>
          <v-col cols="12" md="6">
            <v-avatar size="120" v-bind:color="color">
              <template v-slot:placeholder>
                <v-icon>mdi-camera</v-icon>
              </template>
            </v-avatar>
            <v-btn color="primary" @click="alterarImagem">
              Alterar imagem
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <input type="file" accept="image/*" ref="foto" style="display: none" />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import { userStore } from "../stores/userStore.js";
import jwtDecode from "jwt-decode";

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
      userId: "",
    };
  },
  methods: {
    getUserId() {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user.accessToken;

      if (token) {
        const decoded = jwtDecode(token);
        this.userId = decoded.id;
      }
    },
    async updateUser(id) {
      console.log(this.novaSenha);
      
      try {
        await this.store.editUser(id, {
          biografia: this.biografia,
          password: hashednovaSenha,
        });
      } catch (error) {
        console.log(error);
      }
    },
    alterarImagem() {
      this.$refs.foto.click();
      this.$refs.foto.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          this.filePath = e.target.result;
          console.log(this.filePath);
        };
      };
    },
  },
  mounted() {
    this.getUserId();
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
