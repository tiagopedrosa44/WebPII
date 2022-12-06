<template>
  <div id="nav">
    <NavBar />
  </div>
  <HomeView />
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import HomeView from "./views/HomeView.vue";
</script>

<style>
body {
  background: linear-gradient(180deg, #1a9360 0%, #00ad79 47.71%, #40ddae 100%);
}
</style>
