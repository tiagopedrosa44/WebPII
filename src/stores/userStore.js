import { defineStore } from "pinia";
import { router } from "../router";

export const userStore = defineStore("user", {
  state: () => ({
    users: [
      {
        id: 1,
        tipo: "admin",
        nome: "tiago",
        email: "tiago@gmail.com",
        password: "123",
        pontos: 0,
        moedas: 0,
        utilizacoes: 0,
      },
    ],
  }),
  getters: {
    getUserById: (state) => (id) => {
      return state.users.find((user) => user.id == id);
    },
  },
  actions: {
    login(username, password) {
      if (this.users.find((user) => user.nome == username)) {
        if (this.users.find((user) => user.password == password)) {
          localStorage.setItem("userLogado", username);
          console.log("Login efetuado com sucesso");
          router.push("/home");
        } else throw Error("Password incorreta");
      } else throw Error("Utilizador não encontrado");
    },
    registar(username, email, password, password2) {
      if (this.users.find((user) => user.nome == username)) {
        throw Error("Utilizador já existe");
      } else {
        if (password != password2) {
          throw Error("Passwords não coincidem");
        } else {
          this.users.push({
            id: this.users.length + 1,
            tipo: "user",
            nome: username,
            email: email,
            password: password,
            pontos: 0,
            moedas: 0,
            utilizacoes: 0,
          });
          localStorage.setItem("userLogado", username);
          console.log("Registo efetuado com sucesso");
          router.push("/home");
        }
      }
    },
  },
});
