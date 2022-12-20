<template>
  <div id="main">
    <nav>
      <v-toolbar flat app id="nav">
        <v-toolbar-title class="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <div id="navLeft">
            <v-btn text >Reciclagem</v-btn>
            <v-btn text @click="$router.push('/login')">Começar</v-btn>
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
}
</style>