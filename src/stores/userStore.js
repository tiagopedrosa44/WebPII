import { defineStore } from "pinia";
import { router } from "../router";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";
import { leaderboardService } from "../services/leaderboard.service";

export const userStore = defineStore("userStore", {
  state: () => ({
    users: [],
    loggedUser: null,
    loggedIn: false,
  }),

  getters: {
    getUsers: (state) => state.users,
  },

  actions: {
    async register(user) {
      const response = await AuthService.register(user);
      if (response) {
        router.push("/login");
      }
    },

    async login(user) {
      const response = await AuthService.login(user);
      if (response.accessToken) {
        localStorage.setItem("user", JSON.stringify(response));
        this.loggedIn = true;
      }
    },
    logout() {
      AuthService.logout();
      this.loggedIn = false;
      router.push("/");
    },
    async getLeaderboardPoints() {
      try {
        const response = await leaderboardService.getLeaderboardPoints();
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async getLeaderboardEcopontos() {
      try {
        const response = await leaderboardService.getLeaderboardEcopontos();
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async getALlUsers() {
      try {
        const response = await UserService.getALlUsers();
        this.setUsers(response);
      } catch (error) {
        console.log(error);
      }
    },
    setUsers(users) {
      this.users = users;
    },
    async deleteUserById(id) {
      try {
        const response = await UserService.deleteUserById(id);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    async getUserByID(id) {
      try {
        const response = await UserService.getUserByID(id);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async editUser(id, data) {
      try {
        const response = await UserService.updateUserById(id, data);
        if (response) {
          return response;
        }
      } catch (error) {
        throw Error(error);
      }
    },
    async getBadgesUser(id) {
      try {
        const response = await UserService.getBadgesUser(id);
        return response;
      } catch (error) {
        throw Error(error);
      }
    },
    async getUtilizacoesUser(id) {
      try {
        const response = await UserService.getUtilizacoesUser(id);
        return response;
      } catch (error) {
        throw Error(error);
      }
    },
    
   /*  updateLocalStorage() {
      localStorage.setItem("users", JSON.stringify(this.users));
    },
    updateLevel(userId, points) {
      // Find the user by id
      let user = this.users.find((user) => user._id == userId);

      // calculate the new level based on the points
      let newLevel = Math.floor(points / 1000);

      //update the user level
      user.nivel = newLevel;
    }, */

    /* login(username, password) {
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
          router.push("/home");
        } else {
          document.querySelector("#password").style.border = "3px solid red";
          inputPassword.addEventListener("click", resetBorder);
        }
      } else {
        document.querySelector("#username").style.border = "3px solid red";
        inputUsername.addEventListener("click", resetBorder);
      }
    }, */
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

    /* registar(username, email, password, password2, referralCode) {
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
              while (
                this.users.find((user) => user.referral == novoReferralCode)
              ) {
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
                ecopontosRegistados: 0,
                biografia: "",
                badges: [],
                referral: novoReferralCode,
              });
              this.updateLocalStorage();
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
            while (
              this.users.find((user) => user.referral == novoReferralCode)
            ) {
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
              ecopontosRegistados: 0,
              biografia: "",
              badges: [],
              referral: novoReferralCode,
            });
            this.updateLocalStorage();
            localStorage.setItem("userLogado", username);
            localStorage.setItem("logado", true);
            this.logado = { bool: true, nome: username };
            router.push("/home");
          }
        }
      }
    }, */

    /* logout() {
      this.logado = { bool: false, nome: "" };
      localStorage.setItem("userLogado", "");
      localStorage.setItem("logado", false);
      router.push("/");
    }, */
    deleteUser(id) {
      const index = this.users.findIndex((user) => user.id === id);
      this.users.splice(index, 1);
      this.updateLocalStorage();
    },
    /* editUser(idUser, biografia, password) {
      let user = this.users.find((user) => user.id == idUser);
      user.biografia = biografia;
      user.password = password;
      this.updateLocalStorage();
    }, */
    calculateProgress(currentPoints) {
      console.log(currentPoints);
      return parseInt((currentPoints % 1000) / 10);
    },
    addPontos(idUser, pontos) {
      let user = this.users.find((user) => user.id == idUser);
      user.pontos += pontos;
      this.updateLocalStorage();
    },
    addMoedas(idUser, moedas) {
      let user = this.users.find((user) => user.id == idUser);
      user.moedas += moedas;
      this.updateLocalStorage();
    },
    addUtilizacao(idUser) {
      let user = this.users.find((user) => user.id == idUser);
      user.utilizacoes += 1;
      this.updateLocalStorage();
      this.verificarMedalha(user);
    },
    verificarMedalha(user) {
      if (user.utilizacoes == 10) {
        user.badges.push("Utilizador Regular");
      }
      if (user.utilizacoes == 50) {
        user.badges.push("Utilizador Experiente");
      }
      if (user.utilizacoes == 100) {
        user.badges.push("Utilizador Veterano");
      }
    },
  },

  //save users to local storage
  created() {
    if (localStorage.getItem("users")) {
      this.users = JSON.parse(localStorage.getItem("users"));
    } else {
      this.updateLocalStorage();
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
