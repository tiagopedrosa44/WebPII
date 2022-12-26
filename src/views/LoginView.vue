<template>
  <div>
    <form>
      <v-text-field label="Username" v-model="username" />
      <v-text-field label="Password" v-model="password" type="password" />
      <v-btn @click="login">Login</v-btn>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("login");
    },
  },
};
</script>

<style scoped>
input {
  border: 1px solid #114b5f;
}
</style>
