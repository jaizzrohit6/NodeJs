<template>
  <div>
    <h2>User Login</h2>
    <form @submit.prevent="login">
      <input v-model="username" type="text" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <p v-if="error" style="color: red;">{{ error }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserLogin",
  data() {
    return { username: "", password: "", error: null };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("/auth/login", {
          username: this.username,
          password: this.password,
        });
        localStorage.setItem("token", response.data.token);
        this.error = null;
        alert("Login successful!");
      } catch (err) {
        this.error = err.response.data.error;
      }
    },
  },
};
</script>
