// capture the environment variables the application needs
const {
    VUE_APP_fb_apiKey,
    VUE_APP_fb_authDomain,
    VUE_APP_fb_projectId,
    VUE_APP_fb_storageBucket,
    VUE_APP_fb_messagingSenderId,
    VUE_APP_fb_appId
} = process.env;
console.log(process.env)

// export the configuration information
module.exports = {
    firebase: {
        apiKey: VUE_APP_fb_apiKey,
        authDomain: VUE_APP_fb_authDomain,
        projectId: VUE_APP_fb_projectId,
        storageBucket: VUE_APP_fb_storageBucket,
        messagingSenderId: VUE_APP_fb_messagingSenderId,
        appId: VUE_APP_fb_appId
    }
};
