<template>
  <v-container fluid fill-height :style="{ background: '#1f212e' }">
    <v-layout align-center justify-center class="login">
      <div>
        <Login></Login>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import Login from "@/components/Login";
export default {
  name: "Login-view",
  components: { Login },
};
</script>

<style lang="sass">
</style>