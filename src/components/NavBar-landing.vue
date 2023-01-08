<template>
   <v-toolbar rounded color="#114B5F" id="nav">
    <!-- Links da esquerda -->
    <v-btn>Reciclagem</v-btn>
    <v-btn>Começar</v-btn>
    

    <!-- Logo -->
    <v-toolbar-title>
      <v-img src="src\assets\imgs\logo_nav.png" height="91px" width="91px"></v-img>
    </v-toolbar-title>

    <!-- Links da direita -->
    <v-btn @click="$router.push('login')">Login</v-btn>
    <v-btn @click="$router.push('registar')">Registar</v-btn>
    
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
  color: #fdfcf8;
  font-family: "exo";
  font-weight: bold;
}
</style>
