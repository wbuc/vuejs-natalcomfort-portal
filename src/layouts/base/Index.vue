<template>
  <v-app>
    <base-drawer />

    <base-view />
  </v-app>
</template>

<script>
export default {
  name: "BaseLayout",

  components: {
    //BaseAppBar: () => import('./AppBar'),
    BaseView: () => import("./View"),
    BaseDrawer: () => import("./Drawer"),
  },
};
</script>
