import { defineStore } from 'pinia'
import { UtilizacoesService } from '../services/utilizacoes.service'

export const utilizacaoStore = defineStore('utilizacao', {
  state: () => ({
    utilizacoes: localStorage.utilizacoes
      ? JSON.parse(localStorage.utilizacoes)
      : [
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
    async getUtilizacoesPendentes() {
      try{
        const response = await UtilizacoesService.getUtilizacoesPendentes();
        return (response);
      } catch (error) {
        console.log(error);
      }
    },
    
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
    async validarUtilizacao(id, data) {
      try {
        const response = await UtilizacoesService.validarUtilizacao(id, data);
        return response;
      } catch (error) {
        console.log(error);
      }
    }
  },
})
