// Imports
import Vue from 'vue'
import Router from 'vue-router'
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: (to, from, savedPosition) => {
        if (to.hash) 
            return {selector: to.hash}


        


        if (savedPosition) 
            return savedPosition


        


        return {x: 0, y: 0}
    },
    routes: [
        {
            path: '/',
            component: () => import ('@/layouts/base/Index.vue'),
            children: [
                {
                    path: 'old',
                    name: 'HomeOLD',
                    component: () => import ('@/views/home/Index.vue')
                }, {
                    path: '',
                    name: 'home',
                    component: () => import ('@/views/Dashboard.vue'),
                    meta: {
                        requireAuth: true
                    }
                }, {
                    path: '/account',
                    name: 'account',
                    component: () => import ('@/views/Account.vue'),
                    meta: {
                        requireAuth: true
                    }
                },
            ]
        }, {
            path: '/',
            component: () => import ('@/layouts/base/Full.vue'),
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: () => import ('@/views/Login.vue')
                }, {
                    path: 'register',
                    name: 'register',
                    component: () => import ('@/views/Register.vue')
                },
            ]
        },
    ]
})


router.beforeEach((to, from, next) => {
    document.title = 'Portal';
    const requiresAuth = to.matched.some(record => record.meta.requireAuth);
    const isAuthenticated = firebase.auth().currentUser;


    if (requiresAuth && ! isAuthenticated) {

        next({name: 'login'});
    } else {
        next();
    }

    console.log(from.name);
    console.log(isAuthenticated);

})

export default router
