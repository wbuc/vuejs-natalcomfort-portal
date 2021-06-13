<template>
  <div>
    <v-row align="center" dense nav>
      <!-- <v-col align="center"
        ><v-avatar size="50" :color="user.avatarcolour" class="lighten-1">
          <v-icon dark large>{{ user.avatar }}</v-icon>
        </v-avatar></v-col
      > -->
    </v-row>
    <v-row no-gutters
      ><v-col align="center"
        ><v-list-item-title>Welcome, {{ user.name }} </v-list-item-title>
        <v-list-item-subtitle class="caption">
          <v-icon small left class="mb-1">mdi-home</v-icon
          >{{ user.practice }}</v-list-item-subtitle
        ></v-col
      ></v-row
    >
  </div>
</template>

<script>
export default {
  name: "Base.Drawer.User.Menu",
  props: {
    user: {
      Type: Object,
      default: () => {
        return { name: "", practice: "" };
      },
    },
  },
};
</script>

<style>
</style>