<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col>
          <NavBar />
        </v-col>
      </v-row>
    </v-container>

    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col cols="12" lg="4" class="col-ecopontos">
          <div class="title" align="center">
            <h1>Ecopontos</h1>
          </div>

          <br />
          <div class="ecopontos" @scroll="showEcopontos">
            <br />
            <br />
            <div
              v-for="(ecoponto, index) in store.getEcopontos"
              :key="ecoponto.id"
              class="ecoponto"
              v-if="index < 4"
              @click="mostrarEcoponto(index)"
            >
              <v-container>
                <v-row>
                  <v-col cols="2" id="ecoimg">
                    <v-img
                      src="src/assets/imgs/ecoponto.png"
                      width="40px"
                      height="40px"
                    ></v-img>
                  </v-col>
                  <v-col>
                    <p id="morada">{{ ecoponto.morada }}</p>
                  </v-col>
                </v-row>
              </v-container>
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
body::-webkit-scrollbar {
  width: 3px; /* width of the entire scrollbar */
}
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
  height: 450px;
  overflow: scroll;
  cursor: pointer;
}

.ecoponto {
  margin-bottom: 30px;
  position: relative;
  left: 20px;
  top: -20px;
  color: #fdfcf8;
  background-color: #114b5f;
  border-radius: 10px;
}

.ecoponto:hover {
  background-color: #0c3745;
  border-radius: 10px;
  color: #fdfcf8;
}

#morada {
  position: relative;
  top: 10px;
}

@media (max-width: 700px) {
  .col-ecopontos,
  .col-mapa {
    max-width: 100%;
  }
}
</style>
