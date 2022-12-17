<template>
    <div>
        <div class="left">
            <div class="left-content">
                <img src="../assets/imgs/imgPagLogin.png" alt="">
            </div>
            <div class="right">
                <div class="right-content">
                    <div class="right-content-text">
                        <h1>Registo</h1><br><br>
                        <input type="text" placeholder="Utilizador*" v-model="username"><br>
                        <input type="email" placeholder="Email*" v-model="email"><br>
                        <input type="password" placeholder="Password*" v-model="password"><br>
                        <input type="password" placeholder="Confirmar Password*" v-model="password2"><br>
                        <input type="text" placeholder="Referral Code" v-model="referralCode"><br><br>
                        <v-btn text @click="login(user, pass)" id="botaoRegisto">Login</v-btn><br><br>
                        <a @click="$router.push('/login')">Já tem conta? Faça login!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            email: "",
            password: "",
            password2: "",
            referralCode: "",
        }
    },
}
</script>

<style scoped>
h1 {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    color: #FFFFFF;
}

a {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    text-decoration: none;
    cursor: pointer;
}

.left {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: white;
    height: 100vh;
    width: 100vw;
}

.left-content {
    display: flex;
    justify-content: center;
    align-items: center;
}

.left-content img {
    width: 30%;
}

.right {
    display: grid;
    background: linear-gradient(180deg, #1A9360 0%, #00AD79 47.71%, #40DDAE 100%);
    grid-template-rows: 1fr;
    grid-gap: 10px;
}

.right-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.right-content input {
    width: 100%;
    height: 50px;
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 10px;
    margin-top: 20px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    padding-left: 20px;
}

#botaoRegisto {
    width: 100%;
    height: 50px;
    color: white;
    background: #114B5F;
    border: 1px solid #114B5F;
    box-sizing: border-box;
    border-radius: 10px;
    margin-top: 20px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    padding-left: 20px;
}
</style>