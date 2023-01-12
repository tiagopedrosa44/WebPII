<template>
  <div class="home">
    <div align="center">
      <nav>
        <NavBar />
      </nav>
    </div>
    <br /><br /><br /><br /><br />
    <div id="container">
      <v-container id="containerAzul">
        <span id="voltar" @click="$router.go(-1)"><b>X</b></span>
        <h1 align="center">Registar utilização do ecoponto</h1>
        <br /><br />
        <input type="file" accept="image/*" ref="foto" style="display: none" />
        <img
          src="../assets/imgs/adFoto.png"
          id="adFoto"
          @click="uploadFoto()"
        />
        <br />
        <v-btn style="background-color: #f0cd6e">Registar</v-btn>
      </v-container>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      key: 0,
    };
  },
  methods: {
    uploadFoto() {
      this.$refs.foto.click();
      this.$refs.foto.onchange = (e) => {
        const file = e.target.files[0];
        document.getElementById("adFoto").src = URL.createObjectURL(file);
      };
    },
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
</style>
