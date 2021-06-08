import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './plugins'
import firebase from "firebase/app";

Vue.config.productionTip = false


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBzVYqPA6-aT8pmhUGjEL9QTwewHCgVa88",
    authDomain: "vuejs-natalcomfort-portal.firebaseapp.com",
    projectId: "vuejs-natalcomfort-portal",
    storageBucket: "vuejs-natalcomfort-portal.appspot.com",
    messagingSenderId: "443121193774",
    appId: "1:443121193774:web:f1d10693ef5947b620a0bf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
