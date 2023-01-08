<template>
  <v-toolbar :fluid="false" rounded color="#114B5F" id="nav">
    <!-- Links da esquerda -->
    <v-btn v-for="link in leftLinks" :key="link.text" :to="link.route">
      {{ link.text }}
    </v-btn>

    <!-- Logo -->
    <v-toolbar-title>Logo</v-toolbar-title>

    <!-- Links da direita -->
    <v-btn v-for="link in rightLinks" :key="link.text" :to="link.route">
      {{ link.text }}
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      leftLinks: [
        { text: "Home", route: "/home" },
        { text: "Rankings", route: "/rankings" },
        { text: "Loja", route: "/loja" },
        { text: "Faq", route: "/faq" },
      ],
      rightLinks: [
        { text: "Desafios", route: "/link-5" },
        { text: "Perfil", route: "/perfil" },
        { text: "Logout", route: "/link-7" },
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
