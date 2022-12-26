<template>
  <div>
    <form>
      <v-text-field label="Username" v-model="username" />
      <v-text-field label="Email" v-model="email" />
      <v-text-field label="Password" v-model="password" type="password" />
      <v-btn @click="registar">Registar</v-btn>
    </form>
  </div>
</template>

<script>
import { userStore } from "@/stores/userStore.js";
export default {
  data() {
    return {
      store: userStore(),
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    registar() {
        this.store.addUser(this.username, this.email, this.password)
    },
  },
};
</script>

<style scoped></style>
