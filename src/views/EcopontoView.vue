<template>
  <div class="home">
    <div align="center">
      <nav>
        <NavBar />
      </nav>
    </div>
    <br />
    <br />
    <br />
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col cols="12" lg="4" class="col-ecopontos">
          <br />
          <div class="title">
            <h1>Ecoponto</h1>
          </div>
          <div id="left">
            <v-container class="grey lighten-5">
              <div id="infoEcoponto">
                <img :src="ecoponto.foto" height="350" width="550" />
                <br />
                <p>
                  <b>{{ ecoponto.morada }}</b>
                </p>
                <p>
                  Coordenadas: {{ ecoponto.coordenadas.lat }},
                  {{ ecoponto.coordenadas.lng }}
                </p>
                <br />
                <v-btn
                  class="botaoAmarelo"
                  @click="$router.push('/registarEcoponto/' + ecoponto.id)"
                  >Registar</v-btn
                >
                <br />
                <v-btn class="botaoAmarelo" @click="$router.push('/home')"
                  >Voltar</v-btn
                >
              </div>
            </v-container>
          </div>
        </v-col>
        <v-col cols="12" lg="8" class="col-mapa" align="center">
          <div id="right">
            <div id="mapa">
              <Mapa />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Mapa from "@/components/Mapa.vue";
import { ecopontoStore } from "../stores/ecopontoStore.js";

export default {
  components: {
    NavBar,
    Mapa,
  },
  data() {
    return {
      id: this.$route.params.id,
      ecopontoStore: ecopontoStore(),
      ecoponto: [],
    };
  },
  created() {
    this.ecoponto = this.ecopontoStore.getEcopontoById(this.id);
    console.log(this.ecoponto);
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        if (toParams.id !== previousParams.id) {
          this.id = toParams.id;
          this.ecoponto = this.ecopontoStore.getEcopontoById(this.id);
        }
      }
    );
  },
};
</script>

<style scoped>
.home {
  background: linear-gradient(180deg, #1a9360 0%, #00ad79 47.71%, #40ddae 100%);
  min-height: 1080px;
}

#left {
  float: left;
  width: 50%;
  height: 100%;
  border-radius: 10px;
  padding: 10px;
}

#right {
  float: right;
  width: 80%;
  height: 100%;
  border-radius: 10px;
  padding: 10px;
}

#infoEcoponto {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 100px;
  width: 200%;
}

.botaoAmarelo {
  background-color: #f0cd6e;
}
</style>
