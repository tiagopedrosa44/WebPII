import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => ({
    users: [
      {
        id: 0,
        tipo: "admin",
        nome: "admin",
        email: "admin@gmail.com",
        password: "1234",
        pontos: 0,
        moedas: 0,
        utilizacoes: 0,
      },
      {
        id: 1,
        tipo: "user",
        nome: "user",
        email: "user@gmail.com",
        password: "1234",
        pontos: 0,
        moedas: 0,
        utilizacoes: 0,
      },
    ],
    currentUser: "",
  }),

  getters: {
    getUserById: (state) => (id) => {
      return state.users.find((user) => user.id == id);
    },
  },

  actions: {
    addUser(username, email, password) {
      if (
        this.users.find((user) => user.email == email) ||
        this.users.find((user) => user.username == username)
      ) {
        return console.log("utilizador já registado");
      }
      this.users.push({
        id: this.users.length,
        username: username,
        email: email,
        password: password,
        pontos: 0,
        moedas: 0,
        utilizacoes: 0,
      });
    },

    login(username, password) {
      const user = this.users.find(
        (user) => user.username == username && user.password == password
      );
      if (user) {
        this.currentUser = user;
        return true;
      }
      return false;
    },
  },
});
