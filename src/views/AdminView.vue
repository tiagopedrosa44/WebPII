<template>
  <div class="divs">
    <v-btn @click="$router.push('home')" color="primary">Voltar</v-btn>

    <h1>Utilizadores</h1>
    <v-divider></v-divider>
    <br />
    <br />
    <v-table fixed-header height="300px" style="width: 80%">
      <thead>
        <tr>
          <th class="text-left">Id</th>
          <th class="text-left">Tipo</th>
          <th class="text-left">Nome</th>
          <th class="text-left">Email</th>
          <th class="text-left">Pontos</th>
          <th class="text-left">Nível</th>
          <th class="text-left">Moedas</th>
          <th class="text-left">Utilizações</th>
          <th class="text-left">Ecopontos registados</th>
          <th class="text-left">Referral</th>
          <th class="text-left">ReferredBy</th>
          <th class="text-left">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td>{{ user._id }}</td>
          <td>{{ user.tipo }}</td>
          <td>{{ user.nome }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.pontos }}</td>
          <td>{{ user.nivel }}</td>
          <td>{{ user.moedas }}</td>
          <td>{{ user.numUsoEcopontos }}</td>
          <td>{{ user.ecopontosRegistados }}</td>
          <td>{{ user.referral }}</td>
          <td>{{ user.referredBy }}</td>

          <td>
            <v-btn color="error" @click="deleteUser(user._id)">Remover</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>

    <h1>Itens da loja</h1>
    <v-divider></v-divider>
    <br />
    <br />
    <v-table fixed-header height="300px" style="width: 80%">
      <thead>
        <tr>
          <th class="text-left">Id</th>
          <th class="text-left">Nome</th>
          <th class="text-left">Stock</th>
          <th class="text-left">Preço</th>
          <th class="text-left">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in itensLoja">
          <td>{{ item._id }}</td>
          <td>{{ item.nome }}</td>
          <td :id="'stock' + item._id">{{ item.stock }}</td>
          <td :id="'preco' + item._id">{{ item.preco }}</td>
          <td>
            <v-btn color="success" @click="editarItem(item._id)" v-if="editar == item._id">Guardar</v-btn>
            <v-btn color="primary" @click="editarItem(item._id)" :id="'botao' + item._id" v-else
              :disabled="editar != null && editar != item._id">Editar</v-btn>
            <v-btn color="error" @click="remover(item._id)" v-if="editar == item._id">Cancelar</v-btn>
            <v-btn color="error" @click="deleteItem(item._id)" v-else :disabled="editar != null">Remover</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <br /><br /><br /><br />
    <h1>Badges</h1>
    <v-divider></v-divider>
    <br />
    <v-table fixed-header height="300px" style="width: 80%">
      <thead>
        <tr>
          <th class="text-left">Nome</th>
          <th class="text-left">Foto</th>
          <th class="text-left">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="badge in badges">
          <td :id="'nome' + badge._id">{{ badge.nome }}</td>
          <td :id="'foto' + badge._id">{{ badge.foto }}</td>
          <td>
            <v-btn color="success" @click="editBadge(badge._id)" v-if="editarB == badge._id">Guardar</v-btn>
            <v-btn color="primary" @click="editBadge(badge._id)" :id="'botaoBadge' + badge._id" v-else
              :disabled="editarB != null && editarB != badge._id">Editar</v-btn>
            <v-btn color="error" @click="apagarBadge(badge._id)" v-if="editarB == badge._id">Cancelar</v-btn>
            <v-btn color="error" @click="deleteBadge(badge._id)" v-else :disabled="editarB != null">Remover</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <br /><br /><br />
  </div>

  <div class="divs">
    <h1>Utilizações por aprovar</h1>
    <v-divider></v-divider>
    <div v-for="utilizacao in utilizacoes">
      <img :src="utilizacao.foto" width="600" height="300" /><br>
      <p>ID do Ecoponto: {{ utilizacao.idEcoponto }}</p>
      <p>Nome do Utilizador: {{ utilizacao.idUser }}</p>
      <p>Data: {{ utilizacao.data }}</p>
      <v-btn color="success" @click="validarUtilizacao(utilizacao._id)">
        Aprovar
      </v-btn>
      <v-btn color="error" @click="rejeitarUtilizacao(utilizacao._id)">
        Rejeitar
      </v-btn>
      <br><br><br><br>
    </div>
  </div>

  <div class="divs">
    <h1>Ecopontos por aprovar</h1>
    <v-divider></v-divider>
    <div v-for="ecoponto in ecopontos">
      <img :src="ecoponto.foto" width="600" height="300" /><br>
      <p>ID do Ecoponto: {{ ecoponto._id }}</p>
      <p>Nome do Utilizador: {{ ecoponto.userId }}</p>
      <p>Data: {{ ecoponto.dataCriacao }}</p>
      <v-btn color="success" @click="validarEcoponto(ecoponto._id)">
        Aprovar
      </v-btn>
      <v-btn color="error" @click="rejeitarEcoponto(ecoponto._id)">
        Rejeitar
      </v-btn>
      <br><br><br><br>
    </div>
  </div>
  <v-snackbar ref="snackbar" v-model="snackbar" :timeout="2000" color="error">
    {{ snackbarMessage }}
  </v-snackbar>
  <v-snackbar ref="snackbar2" v-model="snackbar2" :timeout="2000" color="success" @input="handleSnackbarClose">
    {{ snackbarMessage2 }}
  </v-snackbar>
</template>

<script>
import { userStore } from "../stores/userStore.js";
import { utilizacaoStore } from "../stores/utilizaçãoStore.js";
import { lojaStore } from "../stores/lojaStore.js";
import { badgeStore } from "../stores/badgesStore.js";
import { ecopontoStore } from "../stores/ecopontoStore.js";
import { EcopontosService } from "../services/ecopontos.service";

export default {
  data() {
    return {
      users: [],
      store: userStore(),
      utilizacaoStore: utilizacaoStore(),
      lojaStore: lojaStore(),
      badgeStore: badgeStore(),
      ecopontoStore: ecopontoStore(),
      ecopontoService: EcopontosService,
      itensLoja: [],
      snackbar: false,
      snackbarMessage: "",
      snackbar2: false,
      snackbarMessage2: "",
      editar: null,
      editarB: null,
      precoOriginal: null,
      stockOriginal: null,
      nomeBadgeOriginal: null,
      fotoBadgeOriginal: null,
      badges: [],
      ecopontos: [],
      utilizacoes: [],
    };
  },

  async mounted() {
    await this.getUsersList();
    await this.getAllItems();
    await this.getBadges();
    await this.getEcopontos();
    await this.getUtilizacoesPendentes();
  },
  methods: {
    async getUsersList() {
      try {
        await this.store.getALlUsers();
        this.users = this.store.getUsers;
      } catch (error) {
        console.log(error);
      }
    },
    async getEcopontos() {
      try {
        const ecopontos = await this.ecopontoStore.getEcopontosPorValidar();
        this.ecopontos = ecopontos;
        console.log(ecopontos);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteUser(id) {
      try {
        await this.store.deleteUserById(id);
        this.users = this.users.filter((user) => user._id !== id);
        this.snackbar2 = true;
        this.snackbarMessage2 = "Utilizador removido com sucesso!";
      } catch (error) {
        this.snackbar = true;
        this.snackbarMessage = error;
      }
    },
    async deleteItem(id) {
      try {
        await this.lojaStore.deleteItem(id);
        this.itensLoja = this.itensLoja.filter((item) => item._id !== id);
        this.snackbar2 = true;
        this.snackbarMessage2 = "Item removido com sucesso!";
      } catch (error) {
        this.snackbar = true;
        this.snackbarMessage = error;
      }
    },
    async deleteBadge(id) {
      try {
        await this.badgeStore.deleteBadge(id);
        this.badges = this.badges.filter((badge) => badge._id !== id);
        this.snackbar2 = true;
        this.snackbarMessage2 = "Badge removida com sucesso!";
      } catch (error) {
        this.snackbar = true;
        this.snackbarMessage = error;
      }
    },

    async editBadge(id) {
      const linhaNome = document.getElementById("nome" + id);
      this.nomeBadgeOriginal = linhaNome.textContent;
      const linhaFoto = document.getElementById("foto" + id);
      this.fotoBadgeOriginal = linhaFoto.textContent;

      if (this.editarB == null) {
        this.editarB = id;

        const nomeAtual = linhaNome.textContent;
        const fotoAtual = linhaFoto.textContent;

        linhaNome.innerHTML = `<input type="text" style="width:50%" value="${nomeAtual}">`;
        linhaFoto.innerHTML = `<input type="text" style="width:50%" value="${fotoAtual}">`;
      } else {
        this.editarB = null;
        const novoNome = linhaNome.querySelector("input").value;
        const novaFoto = linhaFoto.querySelector("input").value;

        linhaNome.textContent = novoNome;
        linhaFoto.textContent = novaFoto;

        try {
          await this.badgeStore.editBadge(id, {
            nome: novoNome,
            foto: novaFoto,
          });
          this.snackbar2 = true;
          this.snackbarMessage2 = "Badge editada com sucesso!";
        } catch (error) {
          this.snackbar = true;
          this.snackbarMessage = error;
        }
      }
    },

    async getAllItems() {
      try {
        await this.lojaStore.getAllItems();
        this.itensLoja = this.lojaStore.getItens;
      } catch (error) {
        console.log(error);
      }
    },
    async getBadges() {
      try {
        await this.badgeStore.getBadges();
        this.badges = this.badgeStore.getAllBadges;
      } catch (error) {
        console.log(error);
      }
    },
    async validarEcoponto(id) {
      try {
        await this.ecopontoStore.validarEcoponto(id, {
          ecopontoAprovado: true
        });
      } catch (error) {
        console.log(error);
      }
    },
    async rejeitarEcoponto(id) {
      try {
        await this.ecopontoStore.validarEcoponto(id, {
          ecopontoAprovado: false
        });
      } catch (error) {
        console.log(error);
      }
    },
    async validarUtilizacao(id) {
      try {
        await this.utilizacaoStore.validarUtilizacao(id, {
          utilizacaoAprovada: true
        });
      } catch (error) {
        console.log(error);
      }
    },
    async rejeitarUtilizacao(id) {
      try {
        await this.utilizacaoStore.validarUtilizacao(id, {
          utilizacaoAprovada: false
        });
      } catch (error) {
        console.log(error);
      }
    },


    async getUtilizacoesPendentes() {
      try {
        const utilizacoes = await this.utilizacaoStore.getUtilizacoesPendentes();
        this.utilizacoes = utilizacoes;
      } catch (error) {
        console.log(error);
      }
    },

    getUsername(idUser) {
      return this.userStore.getUsers.filter((user) => user.id == idUser)[0]
        .nome;
    },

    async editarItem(id) {
      const linhaPreco = document.getElementById("preco" + id);
      this.precoOriginal = linhaPreco.textContent;
      const linhaStock = document.getElementById("stock" + id);
      this.stockOriginal = linhaStock.textContent;

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

        try {
          await this.lojaStore.editItem(id, {
            stock: novoStock,
            preco: novoPreco,
          });
          this.snackbar2 = true;
          this.snackbarMessage2 = "Item editado com sucesso!";
        } catch (error) {
          this.snackbar = true;
          this.snackbarMessage = error;
        }
      }
    },

    removerItem(id) {
      if (this.editar != null) {
        const linhaPreco = document.getElementById("preco" + id);
        const linhaStock = document.getElementById("stock" + id);

        linhaPreco.textContent = this.precoOriginal;
        linhaStock.textContent = this.stockOriginal;

        this.editar = null;
      } else {
        this.lojaStore.deleteItem(id);
        this.itensLoja = this.lojaStore.getItens;
      }
    },

    /*     editarBadge(id) {
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
    }, */

    apagarBadge(id) {
      if (this.editarB != null) {
        const linhaNome = document.getElementById("nome" + id);
        const linhaFoto = document.getElementById("foto" + id);

        linhaNome.textContent = this.nomeBadgeOriginal;
        linhaFoto.textContent = this.fotoBadgeOriginal;

        this.editarB = null;
      } else {
        this.badges = this.badges.filter((badge) => badge.id != id);
      }
    },
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
