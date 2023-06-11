import { defineStore } from "pinia";
import { EcopontosService } from "../services/ecopontos.service";

export const ecopontoStore = defineStore("ecoponto", {
  state: () => ({
    ecopontos: [],
    ecopontosPendentes: [],
  }),
  getters: {
    getAllEcopontos: (state) => state.ecopontos,
  },
  actions: {
    async getEcopontos() {
      try {
        const response = await EcopontosService.getEcopontos();
        this.setEcopontos(response);
      } catch (error) {
        console.log(error);
      }
    },
    setEcopontos(ecopontos) {
      this.ecopontos = ecopontos;
    },
    async getEcopontosPorValidar() {
      const response = await EcopontosService.ecopontosPorValidar();
      return response;
    },
    async getEcopontoById(id) {
      try {
        const response = await EcopontosService.getEcopontoById(id);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async validarEcoponto(id, data) {
      try {
        const response = await EcopontosService.validarEcoponto(id, data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async adicionarEcoponto(data) {
      try {
        const response = await EcopontosService.adicionarEcoponto(data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
