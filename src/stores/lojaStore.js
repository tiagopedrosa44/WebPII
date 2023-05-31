import { defineStore } from "pinia";
import { LojaService } from "../services/loja.service";

export const lojaStore = defineStore("loja", {
  state: () => ({
    itens: [
      
    ],
  }),
  getters: {
    getItens: (state) => {
      return state.itens;
    },
  },
  actions: {
    deleteItem(id) {
      this.itens = this.itens.filter((item) => item.idItem !== id);
    },
    async getAllItems() {
      try {
        const response = await LojaService.getAllItems();
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async getItemsUser() {
      try {
        const response = await LojaService.getItemsUser();
        return response;
      } catch (error) {
        console.log(error);
      }
    }
  },
  
  
});
