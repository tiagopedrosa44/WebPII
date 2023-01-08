<template>
    <div class="home">
        <div align="center">
            <nav>
                <NavBar />
            </nav>
        </div>
        <br>
        <br>
        <br>
        <v-container class="grey lighten-5">
            <v-row no-gutters>
                <v-col cols="12" lg="4" class="col-ecopontos">
                    <div class="title" align="center">
                        <h1>Ecoponto</h1>
                    </div>

                    <br>
                    <div id="left">
                        <img :src="ecoponto.foto">
                    </div>

                </v-col>
                <v-col cols="12" lg="8" class="col-mapa" align="center">
                    <div id="right">
                        <Mapa :id="ecoponto.id"/>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
  
<script>
import NavBar from "@/components/NavBar.vue";
import Mapa from "@/components/Mapa.vue";
import { ecopontoStore } from "../stores/ecopontoStore.js";

export default {
    components: {
        NavBar,
        Mapa,
    },
    data() {
        return {
            id: this.$route.params.id,
            ecopontoStore: ecopontoStore(),
            ecoponto: [],
        };
    },
    created() {
        this.ecoponto = this.ecopontoStore.getEcopontoById(this.id);
        console.log(this.ecoponto);
    },
};
</script>
  

<style scoped>
#left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
}

#right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: 100%;
}
</style>