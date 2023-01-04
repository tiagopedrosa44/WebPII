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
      {
        id: 1,
        coordenadas: {
          lat: 41.346347,
          lng: -8.732945,
        },
        utilizacoes: 0,
        vezesRegistado: 0,
        quemAdicionou: 0,
        dataCriacao: "",
        foto: "@/src/assets/imgs/ecoponto/1.png",
      },
      {
        id: 2,
        coordenadas: {
          lat: 41.349786,
          lng: -8.734727,
        },
        utilizacoes: 0,
        vezesRegistado: 0,
        quemAdicionou: 0,
        dataCriacao: "",
        foto: "@/src/assets/imgs/ecoponto/2.png",
      },
      {
        id: 3,
        coordenadas: {
          lat: 41.345106,
          lng: -8.735819,
        },
        utilizacoes: 0,
        vezesRegistado: 0,
        quemAdicionou: 0,
        dataCriacao: "",
        foto: "@/src/assets/imgs/ecoponto/3.png",
      },
      {
        id: 4,
        coordenadas: {
          lat: 41.343483,
          lng: -8.73501,
        },
        utilizacoes: 0,
        vezesRegistado: 0,
        quemAdicionou: 0,
        dataCriacao: "",
        foto: "@/src/assets/imgs/ecoponto/4.png",
      },
      {
        id: 5,
        coordenadas: {
          lat: 41.343439,
          lng: -8.732748,
        },
        utilizacoes: 0,
        vezesRegistado: 0,
        quemAdicionou: 0,
        dataCriacao: "",
        foto: "@/src/assets/imgs/ecoponto/5.png",
      },
      {
        id: 6,
        coordenadas: {
          lat: 41.364282,
          lng: -8.742483,
        },
        utilizacoes: 0,
        vezesRegistado: 0,
        quemAdicionou: 0,
        dataCriacao: "",
        foto: "@/src/assets/imgs/ecoponto/6.png",
      },
      {
        id: 7,
        coordenadas: {
          lat: 41.356952,
          lng: -8.732851,
        },
        utilizacoes: 0,
        vezesRegistado: 0,
        quemAdicionou: 0,
        dataCriacao: "",
        foto: "@/src/assets/imgs/ecoponto/7.png",
      },
      {
        id: 8,
        coordenadas: {
          lat: 41.357018,
          lng: -8.732181,
        },
        utilizacoes: 0,
        vezesRegistado: 0,
        quemAdicionou: 0,
        dataCriacao: "",
        foto: "@/src/assets/imgs/ecoponto/8.png",
      },
    ],
  }),
  getters: {
    getEcopontos: (state) => {
      return state.ecopontos;
    },
  },
});
