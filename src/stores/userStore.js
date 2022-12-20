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
      {
        id: 2,
        tipo: "admin",
        nome: "fabio",
        email: "fabio@gmail.com",
        password: "123",
        pontos: 0,
        moedas: 0,
        utilizacoes: 0,
      },

      {
        id: 3,
        tipo: "admin",
        nome: "daniel",
        email: "daniel@gmail.com",
        password: "123",
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
  actions: {
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
          this.logado = { bool: true, nome: username };
          localStorage.setItem("logado", JSON.stringify(this.logado.bool));
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
          this.logado = { bool: true, nome: username };
          localStorage.setItem("logado", JSON.stringify(this.logado.bool));
          console.log("Registo efetuado com sucesso");
          router.push("/home");
        }
      }
    },

    logout() {
      this.logado = { bool: false, nome: "" };
      localStorage.setItem("logado", JSON.stringify(this.logado.bool));
      console.log("Logout efetuado com sucesso");
      router.push("/");
    },
  },
});
