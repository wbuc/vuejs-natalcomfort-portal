<template>
  <div>
    <v-fade-transition :hide-on-leave="config.hideOnLeave">
      <v-card class="login elevation-5 pa-8" style="width: 440px">
        <v-card-title class="mb-10">
          <Base-Brand-Logo large color="blue-grey--text "></Base-Brand-Logo>
        </v-card-title>
        <v-card-subtitle class style="text-align: center">
          <span class="justify-center font-weight-light title">Welcome!</span>
        </v-card-subtitle>
        <v-form @submit.prevent="submit">
          <v-card-text>
            <Base-Error-Message :errors="error"></Base-Error-Message>
            <v-text-field
              label="Email address"
              name="login"
              type="text"
              autocomplete="off"
              outlined
              v-model="form.email"
              flat
              hide-details
              class="mb-4"
            ></v-text-field>

            <v-text-field
              id="password"
              label="Password"
              name="password"
              type="password"
              autocomplete="off"
              outlined
              v-model="form.password"
              flat
              hide-details
            ></v-text-field>
            <div class="font-weight-light text-right pt-1 d-none">
              <a @click="showForgotPassword">Forgot password?</a>
            </div>
          </v-card-text>
          <v-card-actions class="px-4 pb-4 pt-0">
            <v-spacer></v-spacer>
            <v-btn
              class="text-capitalize"
              block
              type="submit"
              color="success"
              x-large
            >
              <span>Sign In</span>
            </v-btn>
          </v-card-actions>
          <v-card-text>
            <div class="font-weight-light">
              New to NatalComfort?
              <a @click="showRegister">Create an account.</a>
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

export default {
  name: "Login",
  data() {
    return {
      form: {
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
        const data = await firebase
          .auth()
          .signInWithEmailAndPassword(this.form.email, this.form.password);
        console.log(data);

        this.$router.replace({ name: "home" });
      } catch (err) {
        this.error.push(err.message);
      }
    },
    showRegister() {
      this.$router.push({ name: "register" });
    },
    showForgotPassword() {
      //   this.activeWindow = "resetPassword";
      //   this.resetRequestSuccess = false;
      //   this.resetPageState();
    },
  },
};
</script>