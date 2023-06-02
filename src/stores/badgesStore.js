import { defineStore } from "pinia";
import { BadgeService } from "../services/badge.service";

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
    },  
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