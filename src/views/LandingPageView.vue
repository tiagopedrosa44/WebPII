<template>
  <div>
    <nav>
      <NavBar />
    </nav>
  </div>
  <main>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="6" responsive>
          <div id="main">
            <h1 id="title" class="v-title">Venha</h1>
            <h1 id="title2" class="v-title">Reciclar!</h1>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="6" responsive>
          <div id="main">
            <v-img id="img" src="src/assets/imgs/imagem1.png" ></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div id="tittle3">
            <h1>O que é a reciclagem?</h1>
          </div>
        </v-col>
      </v-row>
      <v-row id="cards">
        <v-col cols="12" lg="4" id="reduzir">
          <v-card class="mx-auto" max-width="344" id="Card">
            <v-card-title>
              Reduzir
              <v-btn
                :icon="showReduzir ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="showReduzir = !showReduzir"
              ></v-btn>
            </v-card-title>

            <v-expand-transition>
              <div v-show="showReduzir">
                <v-card-text>
                  Reduzir consiste em ações que reduzam o consumo de bens e
                  serviços, visando à diminuição da geração de resíduos e
                  consequente redução do desperdício.
                </v-card-text>
                <v-img src="src\assets\imgs\reduzir.png" height="200px"></v-img>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col cols="12" lg="4" id="reutilizar">
          <v-card class="mx-auto" max-width="344" id="Card">
            <v-card-title>
              Reutilizar
              <v-btn
                :icon="showReutilizar ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="showReutilizar = !showReutilizar"
              ></v-btn
            ></v-card-title>

            <v-expand-transition>
              <div v-show="showReutilizar">
                <v-card-text>
                  Reduzir consiste em ações que reduzam o consumo de bens e
                  serviços, visando à diminuição da geração de resíduos e
                  consequente redução do desperdício.
                </v-card-text>
                <v-img src="src\assets\imgs\reduzir.png" height="200px"></v-img>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col cols="12" lg="4" id="reciclar">
          <v-card class="mx-auto" max-width="344" id="Card">
            <v-card-title>
              Reciclar
              <v-btn
                color="white"
                :icon="showReciclar ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="showReciclar = !showReciclar"
              ></v-btn>
            </v-card-title>

            <v-expand-transition>
              <div v-show="showReciclar">
                <v-card-text>
                  Reduzir consiste em ações que reduzam o consumo de bens e
                  serviços, visando à diminuição da geração de resíduos e
                  consequente redução do desperdício.
                </v-card-text>
                <v-img src="src\assets\imgs\reduzir.png" height="200px"></v-img>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <div id="tittle4">
            <h1>Como Começar?</h1>
          </div>
        </v-col>
      </v-row>
      <v-row id="number1">
        <v-col cols="12" lg="8">
            <h1>Cria uma conta para começares o teu progresso</h1>
            <p>Vê todo o teu progresso no teu perfil.</p>
        </v-col>
        <v-col cols="12" lg="4">
            <v-img src="src\assets\imgs\img_perfil.png" width="215px" height="239px" ></v-img>
        </v-col>
      </v-row>
      <v-row id="number2">
        <v-col cols="12" lg="4">
            <v-img src="src\assets\imgs\img_map.png" width="240px" height="208px" ></v-img>
        </v-col>
        <v-col cols="12" lg="8">
            <h1>Abre o mapa e vê os ecopontos perto de ti</h1>
            <p>Seleciona o ecoponto para obteres o caminho até ele.</p>
        </v-col>
      </v-row>
      <v-row id="number3">
        <v-col cols="12" lg="8">
            <h1>Cria uma conta para começares o teu progresso</h1>
            <p>Vê todo o teu progresso no teu perfil.</p>
        </v-col>
        <v-col cols="12" lg="4">
            <v-img src="src\assets\imgs\img_perfil.png" width="215px" height="239px" ></v-img>
        </v-col>
      </v-row>
      <v-img id="começar" src="src\assets\imgs\Group 15.png"></v-img>
    </v-container>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar-landing.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      showReduzir: false,
      showReutilizar: false,
      showReciclar: false,
    };
  },
};
</script>

<style>
body {
  background-image: url("src/assets/imgs/background-landing.png");
  background-size: cover;
  height: 4709px;
}

nav {
  position: fixed;
  z-index: 2;
  width: 100%;
}

#Card {
  background-color: #093427;
  color: #fdfcf8;
  font-family: "Exo";
  border-radius: 10px;
}

#cards {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1100px;
}

#title {
  font-family: "exo";
  font-size: 90px;
  color: #fdfcf8;
  position: absolute;
  left: 180px;
  top: 293px;
}

#title2 {
  position: absolute;
  font-family: "Exo";
  font-style: Bold;
  font-size: 140px;
  color: #114b5f;
  left: 180px;
  top: 394px;
  z-index: 1;
}

#tittle3 {
  position: absolute;
  top: 1000px;
  left: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fdfcf8;
  font-family: "Exo";
  font-style: Bold;
}
#tittle4 {
  position: absolute;
  top: 1700px;
  left: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fdfcf8;
  font-family: "Exo";
  font-style: Bold;
}

#number1{
    position: absolute;
    top: 1930px;
    left: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fdfcf8;
    font-family: "Exo";
    font-style: Bold;
}
#number2{
    position: absolute;
    top: 2680px;
    left: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fdfcf8;
    font-family: "Exo";
    font-style: Bold;
}

#number3{
    position: absolute;
    top: 3400px;
    left: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fdfcf8;
    font-family: "Exo";
    font-style: Bold;
}



#começar{
    top: 700px;
    width: 1090px;
    height: 1703px;
    z-index: -1;
}



#img {
  position: absolute;
  left: 546px;
  top: 185px;
  width: 720.73px;
  height: 521px;
  object-fit: contain;
}
</style>
