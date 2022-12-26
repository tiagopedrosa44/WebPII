import { defineStore } from "pinia";
import { router } from "../router";

export const userStore = defineStore("userStore", {
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

    logado: [
      {
        bool: false,
        nome: "",
      },
    ],
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
      if (this.users.find((user) => user.nome == username)) {
        if (this.users.find((user) => user.password == password)) {
          localStorage.setItem("userLogado", username);
          this.logado = { bool: true, nome: username };
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
          this.logado = { bool: true, nome: username };
          console.log("Registo efetuado com sucesso");
          router.push("/home");
        }
      }
    },

    logout() {
      this.logado = { bool: false, nome: "" };
      console.log("Logout efetuado com sucesso");
      router.push("/");
    },
  },
});
