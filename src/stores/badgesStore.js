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
    async getBadges() {
        try{
            const response = await BadgeService.getBadges();
            return response;
        } catch (error) {
            console.log(error);
        }
    }
  },
  
  
});