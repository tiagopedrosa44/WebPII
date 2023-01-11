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
          <div class="title" align="center">
            <h1>Ecopontos</h1>
          </div>

          <br />
          <div class="ecopontos" @scroll="showEcopontos">
            <div
              v-for="(ecoponto, index) in store.getEcopontos"
              :key="ecoponto.id"
              class="ecoponto"
              v-if="index < 4"
              @click="mostrarEcoponto(index)"
            >
              <v-img
                src="src\assets\imgs\ecoponto.png"
                width="50px"
                height="50px"
              ></v-img>
              <p>{{ ecoponto.morada }}</p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="8" class="col-mapa" align="center">
          <div>
            <Mapa />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Mapa from "@/components/Mapa.vue";
import { ecopontoStore } from "../stores/ecopontoStore";

export default {
  components: {
    NavBar,
    Mapa,
  },
  data() {
    return {
      store: ecopontoStore(),
      index: 0,
    };
  },
  methods: {
    showEcopontos() {
      this.showEcopontos = true;
    },
    mostrarEcoponto(index) {
      this.$router.push("/ecoponto/" + index);
    },
  },
};
</script>

<style scoped>
.home {
  background: linear-gradient(180deg, #1a9360 0%, #00ad79 47.71%, #40ddae 100%);
  min-height: 1080px;
}

.title {
  font-family: "Exo";
  color: #fdfcf8;
}

.col-mapa {
  max-width: 100%;
  max-height: 550px;
  overflow: hidden;
}

.ecopontos {
  background-color: #114b5f;
  border-radius: 10px;
  width: 90%;
  height: 450px;
  overflow-y: scroll;
}

.ecoponto {
  margin-bottom: 30px;
  display: flex;
  flex: start;
}

@media (max-width: 700px) {
  .col-ecopontos,
  .col-mapa {
    max-width: 100%;
  }
}
</style>
