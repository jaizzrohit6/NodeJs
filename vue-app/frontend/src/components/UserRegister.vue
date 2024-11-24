<template>
    <div>
      <h2>User Register</h2>
      <form @submit.prevent="register">
        <input v-model="username" type="text" placeholder="Username" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <p v-if="error" style="color: red;">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "UserRegister",
    data() {
      return { username: "", password: "", error: null };
    },
    methods: {
      async register() {
        try {
          await axios.post("/auth/register", {
            username: this.username,
            password: this.password,
          });
          this.error = null;
          alert("Registration successful!");
        } catch (err) {
          this.error = err.response.data.error;
        }
      },
    },
  };
  </script>
  