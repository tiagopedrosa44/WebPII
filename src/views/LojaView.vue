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
        <v-col v-for="item in items" cols="3">
          <v-card width="247px" height="290px" color="#114B5F" id="cardItem">
            <v-img
              :src="item.foto" 
              width="247px"
              height="229px"
              class="white--text align-end"
            >
              
            </v-img>
            <v-card-text id="titulo">{{ item.nome }}</v-card-text>
            <v-card-text id="pontos">{{ item.preço }}</v-card-text>
            <v-card-actions>
              <v-btn icon="fa-solid fa-cart-shopping" id="btncomprar"></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import {lojaStore} from "../stores/lojaStore.js";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      store: lojaStore(),
      items:[]
    }
  },
  created () {
    this.items = this.store.getItens;
    console.log(this.items);
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
  color: #fdfcf8;
  font-family: "Exo";
  font-weight: bold;
}
#cardItem {
  border-radius: 10px;
}
#titulo {
  font-family: "Exo";
  font-weight: bold;
  font-size: 15px;
  color:#FDFCF8;
  position: relative;
  top: 0px;
}
#pontos {
  font-family: "Exo";
  font-weight: regular;
  color: #FDFCF8;
  font-size: 15px;
  position: relative;
  top: -30px;
}

#btncomprar {
  position: relative;
  top: -105px;
  left: 190px;
  color: #FDFCF8;
}

#btncomprar:hover {
  color: #F0CD6E;
}
</style>
