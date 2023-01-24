<template>
  <div class="divs">
    <h1>Utilizadores</h1>
    <v-divider></v-divider>
    <br>
    <br>
    <v-table fixed-header height="300px" style="width: 80%;">
      <thead>
        <tr>
          <th class="text-left">Id</th>
          <th class="text-left">Tipo</th>
          <th class="text-left">Nome</th>
          <th class="text-left">Email</th>
          <th class="text-left">Password</th>
          <th class="text-left">Pontos</th>
          <th class="text-left">Nível</th>
          <th class="text-left">Moedas</th>
          <th class="text-left">Utilizações</th>
          <th class="text-left">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userStore.getUsers">
          <td>{{ user.id }}</td>
          <td>{{ user.tipo }}</td>
          <td>{{ user.nome }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.password }}</td>
          <td>{{ user.pontos }}</td>
          <td>{{ user.nivel }}</td>
          <td>{{ user.moedas }}</td>
          <td>{{ user.utilizacoes }}</td>
          <td>
            <v-btn color="error" @click="store.deleteUser(user.id)">Remover</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
  <div class="divs">
    <h1>Utilizações por aprovar</h1>
    <v-divider></v-divider>
    <div v-for="utilizacao in utilizacoes">
      <img :src="utilizacao.foto" width="600" height="300" /><br>
      <p>ID do Ecoponto: {{ utilizacao.idEcoponto }}</p>
      <p>Nome do Utilizador: {{ getUsername(utilizacao.idUser) }}</p>
      <p>Data: {{ utilizacao.data }}</p>
      <v-btn color="success" @click="utilizacaoStore.aprovarUtilizacao(utilizacao.id)">
        Aprovar
      </v-btn>
      <v-btn color="error" @click="utilizacaoStore.rejeitarUtilizacao(utilizacao.id)">
        Rejeitar
      </v-btn>
      <br><br><br><br>
    </div>
  </div>
</template>

<script>
import { userStore } from "../stores/userStore.js";
import { utilizacaoStore } from "../stores/utilizaçãoStore.js";
export default {
  data() {
    return {
      userStore: userStore(),
      utilizacaoStore: utilizacaoStore(),
    };
  },
  created() {
    this.utilizacoes = this.utilizacaoStore.getUtilizacoesPorAprovar;
    console.log(this.utilizacoes);
  },
  computed: {
    utilizacoes() {
      return this.utilizacaoStore.getUtilizacoesPorAprovar;
    }
  },
  methods: {
    getUsername(idUser) {
      return this.userStore.getUsers.filter(user => user.id == idUser)[0].nome;
    }
  },
};
</script>

<style scoped>
h1 {
  color: black;
}

.divs {
  margin-left: 10px;
}
</style>
