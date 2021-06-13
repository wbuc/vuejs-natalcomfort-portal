<template>
  <v-card>
    <v-navigation-drawer v-model="drawer" app clipped>
      <Base-Brand-Logo position="center" class="my-6"></Base-Brand-Logo>
      <Base-Drawer-Menu :user="user"></Base-Drawer-Menu>
      <v-list dense>
        <template v-for="(link, index) in routes">
          <v-divider v-if="link.divider" :key="index" class="my-3"></v-divider>
          <v-list-item
            v-else
            :to="link.routeUrl"
            link
            :key="index"
            active-class="primary--text"
          >
            <v-list-item-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
      <template v-slot:append>
        <v-layout class="pb-3">
          <v-spacer></v-spacer>
          <v-btn
            :ripple="config.ripple"
            justify-end
            @click="signOut"
            plain
            color=""
            class="text-capitalize"
            ><v-icon>mdi-exit-to-app</v-icon></v-btn
          >
        </v-layout>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
//import { mapGetters } from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const db = firebase.firestore();
export default {
  name: "Layout.Drawer",
  props: { drawer: { default: true } },
  computed: {
    // ...mapGetters(["user", "isTrial"]),
  },
  methods: {
    async signOut() {
      const data = await firebase.auth().signOut();
      console.log(data);
      this.$router.replace({ name: "login" });
    },
  },
  data() {
    return {
      loggedIn: false,
      user: null,
      routes: [
        {
          text: "Dashboard",
          icon: "mdi-view-dashboard-outline",
          color: "success--text text--lighten-1",
          routeUrl: "/",
        },
        {
          text: "Account",
          icon: "mdi-cog",
          color: "",
          routeUrl: "/account",
        },
      ],
      config: {
        ripple: false,
        miniVariant: false,
      },
    };
  },
  async created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.loggedIn = !!user;
    });

    const { uid } = firebase.auth().currentUser;
    const profileRef = await db.collection("profiles").doc(uid);
    const profile = await profileRef.get();
    this.user = profile.data();
    console.log(profile.data());
  },
  mounted: function () {
    // this.$vuetify.theme.dark = this.user.theme === "dark" ? true : false;
  },
};
</script>

<style>
</style>