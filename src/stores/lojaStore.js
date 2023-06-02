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
    },
    async buyItem(id) {
      try {
        const response = await LojaService.buyItem(id);
        return response;
      } catch (error) {
        throw Error(error);
      }
    },
    async deleteItem(id) {
      try {
        const response = await LojaService.deleteItem(id);
        return response;
      } catch (error) {
        throw Error(error);
      }
    }
  },
  
  
});
