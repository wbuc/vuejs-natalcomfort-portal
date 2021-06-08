<template>
  <v-container fluid fill-height :style="{ background: '#1f212e' }">
    <v-layout align-center justify-center class="Register">
      <div>
        <Register></Register>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import Register from "@/components/Register";
export default {
  name: "Register-view",
  components: { Register },
};
</script>

<style lang="sass">
</style>