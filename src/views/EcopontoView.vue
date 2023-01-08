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
                    <div>
                    </div>

                </v-col>
                <v-col cols="12" lg="8" class="col-mapa" align="center">
                    <div>
                        <Mapa />
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
  
<script>
import NavBar from "@/components/NavBar.vue";
import Mapa from "@/components/Mapa.vue";

export default {
    components: {
        NavBar,
        Mapa,
    },
    data() {
        return {
        };
    },
};
</script>
  

<style lang="scss" scoped>

</style>