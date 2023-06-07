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
        this.setItems(response);
      } catch (error) {
        console.log(error);
      }
    },
    setItems(items) {
      this.itens = items;
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
    },
    async editItem(id, data) {
      try {
        const response = await LojaService.editItem(id, data);
        return response;
<<<<<<< HEAD
      }
      catch (error) {
=======
      } catch (error) {
>>>>>>> 5c650a4860186447319a8be1e8a31ce0bcdeda21
        throw Error(error);
      }
    }
  },


});
