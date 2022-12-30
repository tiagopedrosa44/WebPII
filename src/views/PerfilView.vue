<template>
    <div id="background">
        <div align="center">
            <nav>
                <NavBar />
            </nav>
        </div>
        <br>
        <br>
        <br>
        <div class="container">
            <div id="perfil">
                <img src="/src/assets/imgs/avatar.png" id="avatar">
                <span id="nome">Ricardo Silva</span>
            </div>
            <h3>Biografia</h3>
            <p>Sou um educador de enfância e dedico-me a ensinar às pessoas a importância da reciclagem e da conservação
                do meio ambiente. Sou apaixonado por caminhadas ao ar livre.</p>
            <button id="editar">Editar perfil</button>
        </div>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { userStore } from "../stores/userStore.js";
export default {
    components: {
        NavBar,
    },
    data() {
        return {
            store: userStore(),
        }
    },
}
</script>

<style>
.container {
    background-color: #114b5f;
    border-radius: 10px;
    color: #fdfcf8;
    margin: 0 auto;
    width: 80%;
    display: grid;
}

/**in perfil, the image and the name must be touching eachother */
#perfil {
    grid-column: 1 / 3;
    grid-row: 1;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 10px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
}

#nome {
    font-weight: bold;
}

h3 {
    grid-column: 1 / 3;
    grid-row: 2;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 20px;
    color: #F0CD6E;
}

p {
    grid-column: 1 / 3;
    grid-row: 3;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 15px;
}

#editar {
    grid-column: 1 / 1;
    grid-row: 4;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: #F0CD6E;
    border: none;
    color: white;
    font-weight: bold;
    font-size: large;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
}
</style>