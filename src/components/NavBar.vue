<template>
  <div id="main">
    <nav>
      <v-toolbar flat app id="nav">
        <v-toolbar-title class="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <div id="navLeft">
            <v-btn text @click="$router.push('/home')">Mapa</v-btn>
            <v-btn text @click="$router.push('/rankings')">Rankings</v-btn>
            <v-btn text>Loja</v-btn>
            <v-btn text @click="$router.push('/faq')">Faq</v-btn>
          </div>
          <div id="navCenter">
            <v-btn text @click="$router.push('/home')">
              <v-img src="src\assets\imgs\logo_nav.png"></v-img>
            </v-btn>
          </div>
          <div id="navRight">
            <v-btn text>Desafios</v-btn>
            <v-btn text @click="$router.push('/perfil')">Perfil</v-btn>
            <v-btn text @click="this.store.logout()">Logout</v-btn>
          </div>
        </v-toolbar-items>
      </v-toolbar>
    </nav>
  </div>
</template>

<script>
import { userStore } from "../stores/userStore.js";
export default {
  data() {
    return {
      store: userStore(),
    };
  },
};
</script>

<style>
#nav {
  display: grid;
  border-radius: 10px;
  background-color: #114b5f;
  color: #fdfcf8;
  margin: 0 auto;
}
#navLeft,
#navCenter,
#navRight {
  display: grid;
  grid-gap: 10px; /* adiciona espaço de 10px entre as colunas */
}
#navLeft {
  grid-template-columns: 90px 90px 90px 90px;
}
#navCenter {
  grid-template-columns: 1fr;
}
#navRight {
  grid-template-columns: 90px 90px 90px 90px;
  justify-self: end;
  margin-right: 10px;
}


</style>
