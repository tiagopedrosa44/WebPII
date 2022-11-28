import { defineStore } from 'pinia'

export const ecopontoStore = defineStore('ecoponto', {
  state: () => ({
    ecopontos: [
      {
        id: 0,
        coordenadas: "",
        utilizacoes: 0,
        vezesRegistado: 0,
        quemAdicionou: 0,
        dataCriacao: "",
        foto: "",
      }
    ],
  }),
})
