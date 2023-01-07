<template>
  <div>
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
        <tr v-for="user in store.getUsers">
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
            <v-btn color="error" @click="store.deleteUser(user.id)"
              >Remover</v-btn
            >
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import { userStore } from "../stores/userStore.js";
export default {
  data() {
    return {
      store: userStore(),
    };
  },
};
</script>

<style scoped>
  h1{
    color: black;
  }
</style>
