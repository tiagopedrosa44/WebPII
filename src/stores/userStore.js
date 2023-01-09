import { defineStore } from "pinia";
import { router } from "../router";

export const userStore = defineStore("userStore", {
  state: () => ({
    users: localStorage.users
      ? JSON.parse(localStorage.users)
      : [
        {
          id: 0,
          tipo: "admin",
          nome: "admin",
          email: "admin@gmail.com",
          password: "1234",
          pontos: 1000,
          nivel: 0,
          moedas: 0,
          utilizacoes: 0,
          biografia: "",
          badges: [],
          referral: "",
        },
        {
          id: 1,
          tipo: "user",
          nome: "RicardoSilva",
          email: "user@gmail.com",
          password: "1234",
          pontos: 2000,
          nivel: 0,
          moedas: 0,
          utilizacoes: 0,
          biografia:
            "Sou um educador de enfância e dedico-me a ensinar às pessoas a importância da reciclagem e da conservação do meio ambiente. Sou apaixonado por caminhadas ao ar livre.",
          badges: [],
          referral: "",
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
    getUsers: (state) => state.users,
    getUserById: (state) => (id) => {
      return state.users.find((user) => user.id == id);
    },
    getLoggedInUser: (state) => {
      return state.users.find((user) => user.nome == state.logado.nome);
    },
    getSortedUsers: (state) => {
      return state.users.sort((a,b)=> b.pontos - a.pontos);
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
        nivel: 0,
        moedas: 0,
        utilizacoes: 0,
        biografias: "",
        badges: [],
        referral: "",
      });
      localStorage.setItem("users", JSON.stringify(this.users));
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
    generateReferralCode() {
      let referralCode = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 6; i++) {
        referralCode += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      return referralCode;
    },
    checkReferralCode(referralCode) {
      //verifica se o codigo existe devolve true e o id do user que tiver esse codigo
      if (this.users.find((user) => user.referral == referralCode)) {
        return true;
      } else {
        return false;
      }
    },

    registar(username, email, password, password2, referralCode) {
      if (this.users.find((user) => user.nome == username)) {
        throw Error("Utilizador já existe");
      } else {
        if (password != password2) {
          throw Error("Passwords não coincidem");
        } else {
          if (referralCode != "") {
            if (this.checkReferralCode(referralCode)) {
              //adicionar moedas ao user que tiver esse codigo e ao que se registou
              let referralCodeUser = this.users.find(
                (user) => user.referral == referralCode
              );
              referralCodeUser.moedas += 100;

              let novoReferralCode = this.generateReferralCode();
              while (this.users.find((user) => user.referral == novoReferralCode)) {
                novoReferralCode = this.generateReferralCode();
              }
              this.users.push({
                id: this.users.length + 1,
                tipo: "user",
                nome: username,
                email: email,
                password: password,
                pontos: 0,
                nivel: 0,
                moedas: 100,
                utilizacoes: 0,
                biografia: "",
                badges: [],
                referral: novoReferralCode,
              });
              localStorage.setItem("users", JSON.stringify(this.users));
              localStorage.setItem("userLogado", username);
              localStorage.setItem("logado", true);
              this.logado = {
                bool: true,
                nome: username,
              };
              router.push("/home");
            } else {
              throw Error("Código de referência inválido");
            }
          } else {
            let novoReferralCode = this.generateReferralCode();
            while (this.users.find((user) => user.referral == novoReferralCode)) {
              novoReferralCode = this.generateReferralCode();
            }
            this.users.push({
              id: this.users.length + 1,
              tipo: "user",
              nome: username,
              email: email,
              password: password,
              pontos: 0,
              nivel: 0,
              moedas: 0,
              utilizacoes: 0,
              biografia: "",
              badges: [],
              referral: novoReferralCode,
            });
            localStorage.setItem("users", JSON.stringify(this.users));
            localStorage.setItem("userLogado", username);
            localStorage.setItem("logado", true);
            this.logado = { bool: true, nome: username };
            console.log("Registo efetuado com sucesso");
            router.push("/home");
          }
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
    deleteUser(id) {
      const index = this.users.findIndex((user) => user.id === id);
      this.users.splice(index, 1);
      localStorage.setItem("users", JSON.stringify(this.users));
    },
    editUser(biografia,password){
      let user = this.users.find((user) => user.nome == this.logado.nome);
      user.biografia = biografia;
      user.password = password;
      localStorage.setItem("users", JSON.stringify(this.users));
    }
    
  },

  //save users to local storage
  created() {
    if (localStorage.getItem("users")) {
      this.users = JSON.parse(localStorage.getItem("users"));
    } else {
      localStorage.setItem("users", JSON.stringify(this.users));
    }
    if (localStorage.getItem("logado") == "true") {
      this.logado = {
        bool: true,
        nome: localStorage.getItem("userLogado"),
      };
    } else {
      this.logado = {
        bool: false,
        nome: "",
      };
    }
    if (localStorage.getItem("logado") == "false") {
      this.logado = {
        bool: false,
        nome: "",
      };
    } else {
      this.logado = {
        bool: true,
        nome: localStorage.getItem("userLogado"),
      };
    }
  },
});
