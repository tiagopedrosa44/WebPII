<template>
  <div class="Ranking">
    <div align="center">
      <nav>
        <NavBar />
      </nav>
    </div>
    <br />
    <br />
    <br />

    <div align="center">
      <h1 class="text-xs-h6 text-md-h3 text-lg-h2" id="titulo">Leaderboard</h1>
    </div>
    <div id="table" align="center">
      <v-table fixed-header style="width: 80%">
        <thead class="thead-light">
          <tr>
            <th class="text-left">Posição</th>
            <th class="text-left">Nome</th>
            <th class="text-left">Pontos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in store.getSortedUsers">
            <td>{{ index + 1 }}</td>
            <td>{{ user.nome }}</td>
            <td>{{ user.pontos }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { userStore } from "../stores/userStore.js";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      store: userStore(),
    };
  },
};
</script>

<style scoped>
.Ranking {
  background: linear-gradient(180deg, #1a9360 0%, #00ad79 47.71%, #40ddae 100%);
  height: 100vh;
  width: 100vw;
}
#titulo {
  font-family: "exo-bold";
  font-weight: bold;
}
#table {
  margin-top: 5%;
  border-radius: 10px;
}
.v-table {
  background-color: #114b5f;
  background: #114b5f;
  color: #fdfcf8;
}
</style>
