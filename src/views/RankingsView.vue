<template>
  <div class="Ranking">
    <div align="center">
      <nav>
        <NavBar />
      </nav>
    </div>
    <br>
    <br>
    <br>

    <div align="center">
      <h1>Leaderboard</h1>
    </div>

    
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
    components: {
        NavBar,
    },
    data() {
        return {
            
        }
    },
};
</script>

<style scoped>
.Ranking {
  background: linear-gradient(180deg, #1a9360 0%, #00ad79 47.71%, #40ddae 100%);
  height: 100vh;
  width: 100vw;
}
</style>
