import { defineStore } from 'pinia'

export const utilizacaoStore = defineStore('utilizacao', {
  state: () => ({
    utilizacoes: [
      {
        idUser: 0,
        idEcoponto: 0,
        data: "",
        foto:"",
      }
    ],
  }),
})
