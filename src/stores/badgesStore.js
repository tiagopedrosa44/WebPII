import { defineStore } from "pinia";
import { badgeService } from "../services/loja.service";

export const badgeStore = defineStore("badge", {
  state: () => ({
    badges: [
      
    ],
  }),
  getters: {
    
  },
  actions: {
    async deleteBadge() {
      try {
        const response = await BadgeService.deleteBadge(id);
        return response;
      } catch (error) {
        throw Error(error);
      }
    }
  },
  
  
});