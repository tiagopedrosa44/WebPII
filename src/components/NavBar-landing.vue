<template>
  <div id="main">
    <nav>
      <v-toolbar flat app id="nav">
        <v-toolbar-title class="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <div id="navLeft">
            <v-btn text>Reciclagem</v-btn>
            <v-btn text>Começar</v-btn>
            <v-img src="src\assets\imgs\logo_nav.png"></v-img>
          </div>
          <div id="navCenter">
          
          </div>
          <div id="navRight">
            <v-btn text id="login" @click="$router.push('login')">Login</v-btn>
            <v-btn text id="registar" @click="$router.push('registar')">Registar</v-btn>
          </div>
        </v-toolbar-items>
      </v-toolbar>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
  justify-self: end;
  margin-right: 10px;
}
</style>
