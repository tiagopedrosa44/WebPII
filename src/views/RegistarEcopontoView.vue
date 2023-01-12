<template>
  <div class="home">
    <div align="center">
      <nav>
        <NavBar />
      </nav>
    </div>
    <br><br><br><br><br>
    <div id="container">
      <v-container id="containerAzul">
        <h1 align="center">Registar utilização do ecoponto</h1>
        <br><br>
        <v-img></v-img>
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
}

#container{
    display: block;
    margin: auto;
}
</style>
