<template>
  <div class="divs">
    <v-btn @click="$router.push('home')" color="primary">Voltar</v-btn>

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

    <h1>Itens da loja</h1>
    <v-divider></v-divider>
    <br>
    <br>
    <v-table fixed-header height="300px" style="width: 80%;">
      <thead>
        <tr>
          <th class="text-left">Id</th>
          <th class="text-left">Nome</th>
          <th class="text-left">Preço</th>
          <th class="text-left">Stock</th>
          <th class="text-left">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in itensLoja">
          <td>{{ item.idItem }}</td>
          <td>{{ item.nome }}</td>
          <td :id="'preco' + item.idItem">{{ item.preço }}</td>
          <td :id="'stock' + item.idItem">{{ item.stock }}</td>
          <td>
            <v-btn color="success" @click="editarItem(item.idItem)" v-if="editar == item.idItem">Guardar</v-btn>
            <v-btn color="primary" @click="editarItem(item.idItem)" :id="'botao' + item.idItem" v-else
              :disabled="editar != null && editar != item.idItem">Editar</v-btn>
            <v-btn color="error" @click="removerItem(item.idItem)" v-if="editar == item.idItem">Cancelar</v-btn>
            <v-btn color="error" @click="removerItem(item.idItem)" v-else :disabled="editar != null">Remover</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <br><br><br><br>
    <h1>Badges</h1>
    <v-divider></v-divider>
    <br>
    <v-table fixed-header height="300px" style="width: 80%;">
      <thead>
        <tr>
          <th class="text-left">Nome</th>
          <th class="text-left">Foto</th>
          <th class="text-left">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="badge in badges">
          <td :id="'nome' + badge.id">{{ badge.nome }}</td>
          <td :id="'foto' + badge.id">{{ badge.foto }}</td>
          <td>
            <v-btn color="success" @click="editarBadge(badge.id)" v-if="editarB == badge.id">Guardar</v-btn>
            <v-btn color="primary" @click="editarBadge(badge.id)" :id="'botaoBadge' + badge.id" v-else
              :disabled="editarB != null && editarB != badge.id">Editar</v-btn>
            <v-btn color="error" @click="apagarBadge(badge.id)" v-if="editarB == badge.id">Cancelar</v-btn>
            <v-btn color="error" @click="apagarBadge(badge.id)" v-else :disabled="editarB != null">Remover</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <br><br><br>
  </div>
  <div class="divs">
    <h1>Utilizações por aprovar</h1>
    <v-divider></v-divider>
    <div v-for="utilizacao in utilizacoes">
      <img :src="utilizacao.foto" width="600" height="300" /><br>
      <p>ID do Ecoponto: {{ utilizacao.idEcoponto }}</p>
      <p>Nome do Utilizador: {{ getUsername(utilizacao.idUser) }}</p>
      <p>Data: {{ utilizacao.data }}</p>
      <v-btn color="success" @click="aprovarUtilizacao(utilizacao.id)">
        Aprovar
      </v-btn>
      <v-btn color="error" @click="rejeitarUtilizacao(utilizacao.id)">
        Rejeitar
      </v-btn>
      <br><br><br><br>
    </div>
  </div>
</template>

<script>
import { userStore } from "../stores/userStore.js";
import { utilizacaoStore } from "../stores/utilizaçãoStore.js";
import { lojaStore } from "../stores/lojaStore.js";
export default {
  data() {
    return {
      userStore: userStore(),
      utilizacaoStore: utilizacaoStore(),
      lojaStore: lojaStore(),
      itensLoja: [],
      editar: null,
      editarB: null,
      precoOriginal: null,
      stockOriginal: null,
      nomeBadgeOriginal: null,
      fotoBadgeOriginal: null,
      badges: [
        {
          id: 0,
          nome: "Medalha 1",
          foto: "foto1"
        },
        {
          id: 1,
          nome: "Medalha 2",
          foto: "foto2",
        }
      ]
    };
  },
  created() {
    this.utilizacoes = this.utilizacaoStore.getUtilizacoesPorAprovar;
    this.itensLoja = this.lojaStore.getItens;
  },
  computed: {
    utilizacoes() {
      return this.utilizacaoStore.getUtilizacoesPorAprovar;
    }
  },
  methods: {
    getUsername(idUser) {
      return this.userStore.getUsers.filter(user => user.id == idUser)[0].nome;
    },
    aprovarUtilizacao(id) {
      let utilizacao = this.utilizacoes.find((utilizacao) => utilizacao.id == id)
      utilizacao.aprovado = true
      this.userStore.addPontos(utilizacao.idUser, 300)
      this.userStore.addMoedas(utilizacao.idUser, 1000)
      this.userStore.addUtilizacao(utilizacao.idUser)
      this.utilizacaoStore.updateLocalStorage()
    },

    rejeitarUtilizacao(id) {
      let utilizacao = this.utilizacoes.find((utilizacao) => utilizacao.id == id)
      utilizacao.rejeitado = true
      this.utilizacaoStore.updateLocalStorage()
    },

    editarItem(id) {
      const linhaPreco = document.getElementById("preco" + id);
      this.precoOriginal = linhaPreco.textContent
      const linhaStock = document.getElementById("stock" + id);
      this.stockOriginal = linhaStock.textContent

      if (this.editar == null) {
        this.editar = id;

        const precoAtual = linhaPreco.textContent;
        const stockAtual = linhaStock.textContent;

        linhaPreco.innerHTML = `<input type="number" style="width:50%" value="${precoAtual}">`;
        linhaStock.innerHTML = `<input type="number" style="width:50%" value="${stockAtual}">`;

      } else {
        this.editar = null;
        const novoPreco = linhaPreco.querySelector("input").value;
        const novoStock = linhaStock.querySelector("input").value;

        linhaPreco.textContent = novoPreco;
        linhaStock.textContent = novoStock;
      }
    },

    removerItem(id) {
      if (this.editar != null) {
        const linhaPreco = document.getElementById("preco" + id);
        const linhaStock = document.getElementById("stock" + id);

        linhaPreco.textContent = this.precoOriginal
        linhaStock.textContent = this.stockOriginal

        this.editar = null;
      }
      else {
        this.lojaStore.deleteItem(id)
        this.itensLoja = this.lojaStore.getItens
      }
    },

    editarBadge(id) {
      const linhaNome = document.getElementById("nome" + id);
      this.nomeBadgeOriginal = linhaNome.textContent
      const linhaFoto = document.getElementById("foto" + id);
      this.fotoBadgeOriginal = linhaFoto.textContent

      if (this.editarB == null) {
        this.editarB = id;

        const nomeAtual = linhaNome.textContent;
        const fotoAtual = linhaFoto.textContent;

        linhaNome.innerHTML = `<input type="text" style="width:50%" value="${nomeAtual}">`;
        linhaFoto.innerHTML = `<input type="text" style="width:50%" value="${fotoAtual}">`;
      }
      else {
        this.editarB = null;
        const novoNome = linhaNome.querySelector("input").value;
        const novaFoto = linhaFoto.querySelector("input").value;

        linhaNome.textContent = novoNome;
        linhaFoto.textContent = novaFoto;
      }
    },

    apagarBadge(id) {
      if (this.editarB != null) {
        const linhaNome = document.getElementById("nome" + id);
        const linhaFoto = document.getElementById("foto" + id);

        linhaNome.textContent = this.nomeBadgeOriginal
        linhaFoto.textContent = this.fotoBadgeOriginal

        this.editarB = null;
      }
      else {
        this.badges = this.badges.filter((badge) => badge.id != id)
      }
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
