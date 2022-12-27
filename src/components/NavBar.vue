<template>
  <div id="main">
    <nav>
      <v-toolbar flat app id="nav">
        <v-toolbar-title class="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <div id="navLeft">
            <v-btn text @click="$router.push('/home')">Mapa</v-btn>
            <v-btn text @click="$router.push('/rankings')" >Rankings</v-btn>
            <v-btn text>Loja</v-btn>
            <v-btn text>Faq</v-btn>
          </div>
          <div id="navCenter">
          </div>
          <div id="navRight">
            <v-btn text>Perfil</v-btn>
            <v-btn text>Desafios</v-btn>
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
}


#navLeft {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1px;
}
#navCenter {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  
}
#navRight {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-left: 700px;
}

</style>
