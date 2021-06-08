<template>
  <v-app>
    <Base-View />
  </v-app>
</template>

<script>
export default {
  name: "BaseLayout.Full",

  components: {
    BaseView: () => import("./View"),
  },
  mounted() {
    this.$vuetify.theme.dark = false;
  },
};
</script>
