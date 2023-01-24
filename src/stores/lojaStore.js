import { defineStore } from "pinia";

export const lojaStore = defineStore("loja", {
  state: () => ({
    itens: [
      {
        idItem: 0,
        nome: "Sacos de reciclagem",
        preço: "10000",
        foto: "src/assets/imgs/imagensLoja/Sacos de Reciclagem.png",
      },
      {
        idItem: 1,
        nome: "Caixotes de reciclagem",
        preço: "20000",
        foto: "src/assets/imgs/imagensLoja/Caixotes.png",
      },
      {
        idItem: 2,
        nome: "Sacos reutilizáveis",
        preço: "5000",
        foto: "src/assets/imgs/imagensLoja/Sacos.png",
      },
      {
        idItem: 3,
        nome: "Caixas de compostagem",
        preço: "40000",
        foto: "src/assets/imgs/imagensLoja/CaixoteCompostagem.png",
      },
    ],
  }),
  getters: {
    getItens: (state) => {
      return state.itens;
    },
  },
});
