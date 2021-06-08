// Imports
import Vue from 'vue'
import Router from 'vue-router'

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
                    name: 'Home',
                    component: () => import ('@/views/Dashboard.vue')
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

export default router
