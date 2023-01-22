<template>
  <v-toolbar rounded color="#114B5F" id="nav" v-if="width > 900">
    <!-- Links da esquerda -->
    <v-btn v-for="link in leftLinks" :key="link.text" :to="link.route">
      {{ link.text }}
    </v-btn>

    <!-- Logo -->
    <v-toolbar-title id="centro">
      <v-img
        src="src\assets\imgs\logo_nav.png"
        height="91px"
        width="91px"
      ></v-img>
    </v-toolbar-title>

    <!-- Links da direita -->
    <v-btn @click="$router.push('desafios')"
      ><v-img
        src="/src/assets/imgs/icones/desafios.svg"
        height="34px"
        width="34px"
      ></v-img
    ></v-btn>
    <v-btn @click="$router.push('perfil')"
      ><v-img
        src="/src/assets/imgs/icones/perfil.svg"
        height="34px"
        width="34px"
      ></v-img
    ></v-btn>
    <v-btn @click="store.logout"
      ><v-img
        src="/src/assets/imgs/icones/Logout.svg"
        height="34px"
        width="34px"
      ></v-img
    ></v-btn>
  </v-toolbar>
  <v-toolbar
    rounded
    color="#114B5F"
    id="nav2"
    v-bind:class="{ expanded: expandNav }"
    v-else="width < 900"
  >
    <v-btn @click="expandNav = !expandNav">
      <v-icon>fa-solid fa-bars</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { userStore } from "../stores/userStore.js";
export default {
  data() {
    return {
      store: userStore(),
      leftLinks: [
        { text: "Home", route: "/home" },
        { text: "Rankings", route: "/rankings" },
        { text: "Loja", route: "/loja" },
        { text: "Faq", route: "/faq" },
      ],
      width: window.innerWidth,
      height: window.innerHeight,
      expandNav: false,
    };
  },
  created() {
    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      console.log(this.width, this.height);
    });
  },
};
</script>
<style>

#nav {
  color: #fdfcf8;
  font-family: "exo";
  font-weight: bold;
}

#centro {
  margin-left: 20%;
  margin-right: 20%;
}
#nav2 {
  transition: height 0.5s ease-in-out;
}
.expanded {
  height: 300px;
  z-index: 10;
  position: absolute;
  width: 100%;
}
</style>
