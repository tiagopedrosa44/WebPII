<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col>
          <NavBar />
        </v-col>
      </v-row>
    </v-container>
    <br /><br /><br /><br /><br />
    <div id="container">
      <v-container id="containerAzul">
        <span id="voltar" @click="$router.go(-1)"><b>X</b></span>
        <h1 align="center" id="titulo">Registar utilização do ecoponto</h1>
        <br /><br />
        <input type="file" accept="image/*" ref="foto" style="display: none" />
        <img src="../assets/imgs/adFoto.png" id="adFoto" @click="uploadFoto()" />
        <br />
        <v-btn style="background-color: #f0cd6e"
          @click="registarUtilizacao(this.ecoponto)">Registar</v-btn>
      </v-container>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { userStore } from "../stores/userStore.js";
import { utilizacaoStore } from "../stores/utilizacaoStore.js";
import jwtDecode from "jwt-decode";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      userStore: userStore(),
      utilizacaoStore: utilizacaoStore(),
      ecoponto: this.$route.params.id,
      userAtual: "",
      filePath: "",
      userId: null,
    };
  },
  methods: {
    uploadFoto() {
      this.$refs.foto.click();
      this.$refs.foto.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          this.filePath = e.target.result;
          console.log(this.filePath);
        }

        document.getElementById("adFoto").src = URL.createObjectURL(file);
      };
    },
    getUserId() {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user.accessToken;

      if (token) {
        const decoded = jwtDecode(token);
        this.userId = decoded.id;
      }
    },
    async registarUtilizacao(id) {
      try {
        await this.utilizacaoStore.registarUtilizacao(id, {
          idUser: this.userId,
          foto: this.filePath
        })
      }
      catch (error) {
        console.log(error);
      }
    },
  },
  async mounted() {
    this.getUserId();
    console.log(this.userId);
    console.log(this.ecoponto);
  },
};

</script>

<style scoped>
.home {
  background: linear-gradient(180deg, #1a9360 0%, #00ad79 47.71%, #40ddae 100%);
  min-height: 1080px;
}

#containerAzul {
  background-color: #114b5f;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#container {
  display: block;
  margin: auto;
}

#adFoto {
  border-radius: 10px;
  width: 60%;
  height: 60%;
}

#voltar {
  color: white;
  font-size: 30px;
  cursor: pointer;
  align-self: flex-end;
  margin-right: 20px;
}
#titulo{
  color: #FDFCF8;
  font-family: 'exo';
  font-weight: bold;
}
</style>
