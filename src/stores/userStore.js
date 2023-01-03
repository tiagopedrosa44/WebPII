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
        nivel: 0,
        moedas: 0,
        utilizacoes: 0,
        biografia:""
      },
      {
        id: 1,
        tipo: "user",
        nome: "RicardoSilva",
        email: "user@gmail.com",
        password: "1234",
        pontos: 0,
        nivel: 0,
        moedas: 0,
        utilizacoes: 0,
        biografia:"Sou um educador de enfância e dedico-me a ensinar às pessoas a importância da reciclagem e da conservação do meio ambiente. Sou apaixonado por caminhadas ao ar livre."
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
    getLoggedInUser: (state) => {
      return state.users.find((user) => user.nome == state.logado.nome);
    }
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
      const inputUsername = document.querySelector("#username");
      const inputPassword = document.querySelector("#password");

      function resetBorder() {
        inputUsername.style.border = "none";
        inputPassword.style.border = "none";
        inputPassword.removeEventListener("click", resetBorder);
        inputUsername.removeEventListener("click", resetBorder);
      }

      if (this.users.find((user) => user.nome == username)) {
        if (this.users.find((user) => user.password == password)) {
          localStorage.setItem("userLogado", username);
          localStorage.setItem("logado", true);
          this.logado = { bool: true, nome: username };
          console.log("Login efetuado com sucesso");
          router.push("/home");
        } else {
          document.querySelector("#password").style.border = "3px solid red";
          inputPassword.addEventListener("click", resetBorder);
        }
      } else {
        document.querySelector("#username").style.border = "3px solid red";
        inputUsername.addEventListener("click", resetBorder);
      }
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
          localStorage.setItem("logado", true);
          this.logado = { bool: true, nome: username };
          console.log("Registo efetuado com sucesso");
          router.push("/home");
        }
      }
    },

    logout() {
      this.logado = { bool: false, nome: "" };
      localStorage.setItem("userLogado", "");
      localStorage.setItem("logado", false);
      console.log("Logout efetuado com sucesso");
      router.push("/");
    },
  },
});
