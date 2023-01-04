import { defineStore } from "pinia";

export const ecopontoStore = defineStore("ecoponto", {
  state: () => ({
    ecopontos: [
      {
        id: 0,
        coordenadas: {
          lat: 41.366709,
          lng: -8.738114,
        },
        utilizacoes: 0,
        vezesRegistado: 0,
        quemAdicionou: 0,
        dataCriacao: "",
        foto: "@/src/assets/imgs/ecoponto/0.png",
      },
    ],
  }),
  getters: {
    getEcopontos: (state) => {
      return state.ecopontos;
    },
  },
});
