<template>
  <div>
    <v-fade-transition :hide-on-leave="config.hideOnLeave">
      <v-card class="signup elevation-5 pa-8" style="width: 440px">
        <v-card-title class="mb-10">
          <Base-Brand-Logo large color="blue-grey--text"></Base-Brand-Logo>
          <!-- <span class="font-weight-light" style="border-bottom: solid 3px;">Dynam</span>
               <span style="border-bottom: solid 3px;">ext</span>-->
        </v-card-title>
        <v-card-subtitle class style="text-align: center">
          <span class="justify-center font-weight-light title">Welcome!</span>
        </v-card-subtitle>
        <v-form @submit.prevent="submit">
          <v-card-text>
            <Base-Error-Message :errors="error"></Base-Error-Message>
            <v-text-field
              label="Name"
              name="Name"
              class="mb-4"
              outlined
              type="text"
              autocomplete="off"
              v-model="form.name"
              flat
              hide-details
            ></v-text-field>
            <v-text-field
              label="Practice"
              name="Practice"
              class="mb-4"
              outlined
              type="text"
              autocomplete="off"
              v-model="form.practice"
              flat
              hide-details
            ></v-text-field>

            <v-text-field
              label="Email address"
              name="email"
              type="text"
              class="mb-4"
              outlined
              autocomplete="off"
              v-model="form.email"
              flat
              hide-details
            ></v-text-field>

            <v-text-field
              id="password"
              label="Password"
              name="password"
              type="password"
              outlined
              autocomplete="off"
              v-model="form.password"
              flat
              hide-details
            ></v-text-field>
          </v-card-text>
          <v-card-actions class="px-4 pb-4">
            <v-spacer></v-spacer>

            <v-btn
              class="text-capitalize"
              type="submit"
              color="success"
              block
              x-large
              width="150px"
              large
            >
              <span>Sign Up</span>
            </v-btn>
          </v-card-actions>
          <v-card-text>
            <div class="font-weight-light">
              Already have an account? <a @click="showLogin">Log in</a>
            </div>
          </v-card-text>
        </v-form>
      </v-card>
    </v-fade-transition>
  </div>
</template>


<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const db = firebase.firestore();

export default {
  name: "Register",
  data() {
    return {
      form: {
        name: "",
        practice: "",
        email: "",
        password: "",
      },
      config: {
        hideOnLeave: true,
      },
      error: [],
    };
  },
  methods: {
    async submit() {
      try {
        const { user } = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.form.email, this.form.password);

        await db
          .collection("profiles")
          .doc(user.uid)
          .set({ name: this.form.name, practice: this.form.practice, role: 2 });

        console.log(user);

        this.$router.replace({ name: "home" });
      } catch (err) {
        this.error.push(err.message);
      }
    },
    showLogin() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>

