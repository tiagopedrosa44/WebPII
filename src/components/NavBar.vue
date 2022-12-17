<template>
  <div id="main">
    <nav>
      <v-toolbar flat app id="nav">
        <v-toolbar-title class="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <div id="navLeft">
            <v-btn text @click="$router.push('/home')">Mapa</v-btn>
            <v-btn text>Rankings</v-btn>
            <v-btn text>Loja</v-btn>
          </div>
          <div id="navCenter">
            <v-btn icon="">a</v-btn>
          </div>
          <div id="navRight">
            <v-btn icon="">a</v-btn>
            <v-btn icon="" @click="this.store.logout()">Logout</v-btn>
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
    }
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
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}
#navCenter {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
}
#navRight {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
}
</style>
