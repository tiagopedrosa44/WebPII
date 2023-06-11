import { defineStore } from "pinia";
import { UtilizacoesService } from "../services/utilizacoes.service";

export const utilizacaoStore = defineStore("utilizacao", {
  state: () => ({
    utilizacoes: localStorage.utilizacoes
      ? JSON.parse(localStorage.utilizacoes)
      : [],
  }),
  getters: {
    getUtilizacoes: (state) => state.utilizacoes,

    getUtilizacaoById: (state) => (id) => {
      return state.utilizacoes.find((utilizacao) => utilizacao.id == id);
    },

    getUtilizacoesPorAprovar: (state) => {
      return state.utilizacoes.filter(
        (utilizacao) =>
          utilizacao.aprovado == false && utilizacao.rejeitado == false
      );
    },
  },
  actions: {
    async getUtilizacoesPendentes() {
      const response = await UtilizacoesService.getUtilizacoesPendentes();
      return response;
    },
    async registarUtilizacao(id, data) {
      try {
        const response = await UtilizacoesService.registarUtilizacao(id, data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    updateLocalStorage() {
      localStorage.setItem("utilizacoes", JSON.stringify(this.utilizacoes));
    },

    async validarUtilizacao(id, data) {
      try {
        const response = await UtilizacoesService.validarUtilizacao(id, data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
