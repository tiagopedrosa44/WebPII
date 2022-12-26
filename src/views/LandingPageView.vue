<template>
    <div>
        <nav>
            <NavBar />
        </nav>
        <v-container>
            <v-row>
                <v-col cols="12" sm="6" md="6">
                    <div id="main">
                        <h1 id="title">Venha</h1>
                        <h1 id="title2">Reciclar!</h1>
                    </div>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                    <div id="main">
                        <img id="img" src="src/assets/imgs/imagem1.png" alt="landing">
                    </div>
                </v-col>
                <v-col cols="12">
                    <h1>O que é a reciclagem</h1>
                </v-col>
            </v-row>
        </v-container>
        
    </div>
</template>

<script>
import NavBar from "@/components/NavBar-landing.vue";
export default {
    components: {
        NavBar,
    },
}
</script>

<style scoped>
body {
    background-image: url('src/assets/imgs/background-landing.png');
    background-size: cover;
    height: 4709px;
}

nav {
    position: fixed;
    z-index: 2;
    width: 100%;
}

#title {
    font-family: "exo";
    font-size: 90px;
    color: #FDFCF8;
    position: absolute;
    left: 180px;
    top: 293px;
}

#title2 {
    position: absolute;
    font-family: 'Exo';
    font-style: Bold;
    font-size: 140px;
    color: #114B5F;
    left: 180px;
    top: 394px;
    z-index: 1;

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