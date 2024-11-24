<template>
  <div>
    <h1>Vue Login App</h1>
    <UserLogin />
    <UserRegister />
  </div>
</template>

<script>
import UserLogin from "./components/UserLogin.vue";
import UserRegister from "./components/UserRegister.vue";

export default {
  name: "App",
  components: {
    UserLogin,
    UserRegister,
  },
};
</script>
