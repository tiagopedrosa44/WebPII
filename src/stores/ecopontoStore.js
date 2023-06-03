import { defineStore } from "pinia";
import { EcopontosService } from "../services/ecopontos.service";
import { get } from "mongoose";

export const ecopontoStore = defineStore("ecoponto", {
  state: () => ({
    ecopontos: [],
    ecopontosPendentes: [],
  }),
  getters: {

  },
  actions: {
    async getEcopontos() {
      try {
        const response = await EcopontosService.getEcopontos();
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    async getEcopontoById() {
      try {
        const response = await EcopontosService.getEcopontoById();
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async getEcopontosPorValidar() {
      try {
        const response = await EcopontosService.ecopontosPorValidar();
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },
});