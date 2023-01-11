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
            <h1>Ecoponto</h1>
          </div>

          <br />
          <div id="left">
            <img :src="ecoponto.foto" />
          </div>
        </v-col>
        <v-col cols="12" lg="8" class="col-mapa" align="center">
          <div id="right">
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
/**id left aligned to the left and id right aligned to the right */
#left {
  float: left;
  width: 50%;
}
#right {
  float: right;
  width: 50%;
}
</style>
