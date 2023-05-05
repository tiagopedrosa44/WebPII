import { defineStore } from "pinia";

export const ecopontoStore = defineStore("ecoponto", {
  state: () => ({
    ecopontos: [
      {
        id: 0,
        morada:"R. Dom Sancho I",
        coordenadas: {
          lat: 41.366709,
          lng: -8.738114,
        },
        utilizacoes: 0,
        vezesRegistado: 0,
        quemAdicionou: 0,
        dataCriacao: "",
        foto: "../src/assets/imgs/ecopontos/0.png",
      },
      {
        id: 1,
        morada:"R. das Figueiras",
        coordenadas: {
          lat: 41.346347,
          lng: -8.732945,
        },
        utilizacoes: 0,
        vezesRegistado: 0,
        quemAdicionou: 0,
        dataCriacao: "",
        foto: "../src/assets/imgs/ecopontos/1.png",
      },
      {
        id: 2,
        morada:'Azurara, Porto',
        coordenadas: {
          lat: 41.349786,
          lng: -8.734727,
        },
        utilizacoes: 0,
        vezesRegistado: 0,
        quemAdicionou: 0,
        dataCriacao: "",
        foto: "../src/assets/imgs/ecopontos/2.png",
      },
      {
        id: 3,
        morada:'R. Nossa Sra. da Conceição',
        coordenadas: {
          lat: 41.345106,
          lng: -8.735819,
        },
        utilizacoes: 0,
        vezesRegistado: 0,
        quemAdicionou: 0,
        dataCriacao: "",
        foto: "../src/assets/imgs/ecopontos/3.png",
      },
      {
        id: 4,
        morada:'R. Padre Serafim das Neves',
        coordenadas: {
          lat: 41.343483,
          lng: -8.73501,
        },
        utilizacoes: 0,
        vezesRegistado: 0,
        quemAdicionou: 0,
        dataCriacao: "",
        foto: "../src/assets/imgs/ecopontos/4.png",
      },
      {
        id: 5,
        morada:'R. Cimo da Vila',
        coordenadas: {
          lat: 41.343439,
          lng: -8.732748,
        },
        utilizacoes: 0,
        vezesRegistado: 0,
        quemAdicionou: 0,
        dataCriacao: "",
        foto: "../src/assets/imgs/ecopontos/5.png",
      },
      {
        id: 6,
        morada:'R. Eng. Eça Guimarães',
        coordenadas: {
          lat: 41.364282,
          lng: -8.742483,
        },
        utilizacoes: 0,
        vezesRegistado: 0,
        quemAdicionou: 0,
        dataCriacao: "",
        foto: "../src/assets/imgs/ecopontos/6.png",
      },
      {
        id: 7,
        morada:'R. Casalinho',
        coordenadas: {
          lat: 41.356952,
          lng: -8.732851,
        },
        utilizacoes: 0,
        vezesRegistado: 0,
        quemAdicionou: 0,
        dataCriacao: "",
        foto: "../src/assets/imgs/ecopontos/7.png",
      },
      {
        id: 8,
        morada:'R. João de Deus',
        coordenadas: {
          lat: 41.357018,
          lng: -8.732181,
        },
        utilizacoes: 0,
        vezesRegistado: 0,
        quemAdicionou: 0,
        dataCriacao: "",
        foto: "../src/assets/imgs/ecopontos/8.png",
      },
    ],
  }),
  getters: {
    getEcopontos: (state) => {
      return state.ecopontos;
    },
    getEcopontoById: (state) => (id) => {
      return state.ecopontos.find((ecoponto) => ecoponto.id == id);
    }
  },
  actions: {
    addEcoponto(ecoponto) {
      //this.ecopontos.push(ecoponto);
      console.log(ecoponto);
    }
  }
});
