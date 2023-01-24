import { defineStore } from 'pinia'
import { userStore } from './userStore.js'

export const utilizacaoStore = defineStore('utilizacao', {
  state: () => ({
    utilizacoes: localStorage.utilizacoes
      ? JSON.parse(localStorage.utilizacoes)
      : [
        /* {
          id: 0,
          idUser: 0,
          idEcoponto: 0,
          foto: "",
          data: "",
          aprovado: false,
          rejeitado: false,
        } */
      ],
  }),
  getters: {
    getUtilizacoes: (state) => state.utilizacoes,

    getUtilizacaoById: (state) => (id) => {
      return state.utilizacoes.find((utilizacao) => utilizacao.id == id)
    },

    getUtilizacoesPorAprovar: (state) => {
      return state.utilizacoes.filter((utilizacao) => utilizacao.aprovado == false && utilizacao.rejeitado == false)
    },
  },
  actions: {
    updateLocalStorage() {
      localStorage.setItem("utilizacoes", JSON.stringify(this.utilizacoes))
    },

    registarUtilizacao(username, idEcoponto, foto) {
      let idUser
      const users = JSON.parse(localStorage.getItem("users"))
      users.forEach(user => {
        if (user.nome == username) idUser = user.id;
      });
      try {
        this.utilizacoes.push({
          id: this.utilizacoes.length,
          idUser: idUser,
          idEcoponto: idEcoponto,
          foto: foto,
          data: new Date().toLocaleDateString(),
          aprovado: false,
          rejeitado: false,
        })
        this.updateLocalStorage()
        console.log("Utilização registada com sucesso");
      } catch (error) {
        throw error
      }
    },

    aprovarUtilizacao(id) {
      let utilizacao = this.utilizacoes.find((utilizacao) => utilizacao.id == id)
      utilizacao.aprovado = true
      console.log(utilizacao);
      //dar pontos ao user e moedas ao user
      userStore.addPontos(utilizacao.idUser, 10)
      userStore.addMoedas(utilizacao.idUser, 10)
      //this.updateLocalStorage()
      //userStore.updateLocalStorage()
    },

    rejeitarUtilizacao(id) {
      let utilizacao = this.utilizacoes.find((utilizacao) => utilizacao.id == id)
      console.log(utilizacao);
      utilizacao.rejeitado = true
      console.log(utilizacao);
      //this.updateLocalStorage()
    }
  },
})
