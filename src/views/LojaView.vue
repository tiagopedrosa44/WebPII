<template>
  <div class="loja">
    <v-container>
      <v-row>
        <v-col>
          <NavBar />
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center">
        <h1 id="tituloLoja">Loja</h1>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col>
        
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.loja {
  background-image: url("src/assets/imgs/Loja.jpg");
  height: 100vh;
  background-size: cover;

}

#tituloLoja {
  color: #FDFCF8;
  font-family: 'Exo';
  font-weight: bold;
}
</style>
