import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import config from "@/config/env";
import './plugins'
import firebase from "firebase/app";

Vue.config.productionTip = false

Vue.prototype.$axios = axios;
console.log(config);
// Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyBzVYqPA6-aT8pmhUGjEL9QTwewHCgVa88",
//     authDomain: "vuejs-natalcomfort-portal.firebaseapp.com",
//     projectId: "vuejs-natalcomfort-portal",
//     storageBucket: "vuejs-natalcomfort-portal.appspot.com",
//     messagingSenderId: "443121193774",
//     appId: "1:443121193774:web:f1d10693ef5947b620a0bf"
// };

var firebaseConfig = {
    apiKey: config.firebase.apiKey,
    authDomain: config.firebase.authDomain,
    projectId: config.firebase.projectId,
    storageBucket: config.firebase.storageBucket,
    messagingSenderId: config.firebase.messagingSenderId,
    appId: config.firebase.appId

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Ensures logged in user is set before the app loads
let app;
firebase.auth().onAuthStateChanged(user => {
    console.log(user);
    if (! app) {
        app = new Vue({
            router,
            store,
            vuetify,
            render: h => h(App)
        }).$mount('#app')
    }

});
