<template>
  <div id="background">
    <div align="center">
      <nav>
        <NavBar />
      </nav>
    </div>
    <br>
    <br>
    <br>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col cols="12" lg="4" class="col-ecopontos">
          <div class="title" align="center">
            <h1>Ecopontos</h1>
          </div>

          <br>
          <div>
            <div class="ecopontos">
            </div>
            <br>
            <div class="ecopontos">
            </div>
          </div>

        </v-col>
        <v-col cols="12" lg="8" class="col-mapa" align="center">
          <div>
            <Mapa :markers="markers" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Mapa from "@/components/Mapa.vue";

export default {
  components: {
    NavBar,
    Mapa,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
body {
  background: linear-gradient(180deg, #1a9360 0%, #00ad79 47.71%, #40ddae 100%);
  min-height: 1080px;
}

.title {
  font-family: 'Exo';
  color: #FDFCF8;
}

.col-mapa {
  max-width: 100%;
  max-height: 550px;
  overflow: hidden
}

.ecopontos {
  background-color: #114b5f;
  border-radius: 10px;
  width: 90%;
  height: 84px;
}

@media (max-width: 700px) {
  .col-ecopontos,
  .col-mapa {
    max-width: 100%;
  }
}

@media (max-width: 576px) {
  nav {
    width: 97%;
  }
}

@media (max-width: 768px) {
  nav {
    width: 97%;
  }
}

@media (min-width: 992px) {
  nav {
    width: 97%;
  }
}

@media (max-width: 1200px) {
  nav {
    width: 97%;
  }
}

@media (min-width: 1400px) {
  nav {
    width: 88%;
  }
}
</style>
