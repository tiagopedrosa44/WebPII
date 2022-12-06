<template>
  <div id="main">
   <nav>
    <v-toolbar flat app id="nav">
        <v-toolbar-title class="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn text>Home</v-btn>
            <v-btn text>About</v-btn>
            <v-btn text>Contact</v-btn>
        </v-toolbar-items>
    </v-toolbar>
   </nav>

  </div>
</template>

<script>
export default {};
</script>
    
<style>
    #nav{
        border-radius: 10px;
        background-color: #114B5F;
        color: #FDFCF8;
    }
</style>
