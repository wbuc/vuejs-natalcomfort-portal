<template>
  <div class="mt-4">
    <span class="title">Coming soon!</span>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const db = firebase.firestore();

export default {
  name: "Account",
  data() {
    return {
      userData: null,
    };
  },
  methods: {},
  async created() {
    const { uid } = firebase.auth().currentUser;
    const profileRef = await db.collection("profiles").doc(uid);
    const profile = await profileRef.get();

    console.log(profile.data());
  },
};
</script>

<style>
</style>