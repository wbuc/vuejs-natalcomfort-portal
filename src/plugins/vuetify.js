// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
// import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            name: 'default',
            light: {
                primary: '#1985a1',
                secondary: '#2A617D',
                accent: '#da4167',
                success: '#00B389',
                info: '#1a73e8',
                warning: '#FB8C00',
                error: '#e71d36'
            },
            dark: {
                primary: '#1a73e8',
                secondary: '#2A617D',
                accent: '#00B389',
                success: '#00B389',
                info: '#2196F3',
                warning: '#FB8C00',
                error: '#FF5252'
            }
        }
    }
})
