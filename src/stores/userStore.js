import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state: () => ({
    users: [
      {
        id: 0,
        tipo: "",
        nome: "",
        email: "",
        password: "",
        pontos: 0,
        moedas: 0,
        utilizacoes: 0,
      }
    ],
  }),
})
