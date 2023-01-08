<template>
  <v-toolbar rounded color="#114B5F" id="nav">
    <!-- Links da esquerda -->
    <v-btn v-for="link in leftLinks" :key="link.text" :to="link.route">
      {{ link.text }}
    </v-btn>

    <!-- Logo -->
    <v-toolbar-title>
      <v-img src="src\assets\imgs\logo_nav.png" height="91px" width="91px"></v-img>
    </v-toolbar-title>

    <!-- Links da direita -->
    <v-btn>Desafios</v-btn>
    <v-btn @click="$router.push('perfil')">Perfil</v-btn>
    <v-btn @click="store.logout">Logout</v-btn>
    
  </v-toolbar>
</template>

<script>
import {userStore} from '../stores/userStore.js'
export default {
  data() {
    return {
      store:userStore(),
      leftLinks: [
        { text: "Home", route: "/home" },
        { text: "Rankings", route: "/rankings" },
        { text: "Loja", route: "/loja" },
        { text: "Faq", route: "/faq" },
      ],
    };
  },
};
</script>
<style>
#nav {
  color: #fdfcf8;
  font-family: "exo";
  font-weight: bold;
}
</style>
