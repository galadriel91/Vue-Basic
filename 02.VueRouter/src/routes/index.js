import Vue from 'vue';
import VueRouter from 'vue-router';

import WebpackPage from 'Pages/WebpackPage'
import VuexPage from 'Pages/VuexPage'
import RouterPage from 'Pages/RouterPage'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/webpack'
        },
        {
            path:'/webpack',
            component:WebpackPage
        },
        {
            path:'/vuex',
            component:VuexPage
        },
        {
            path:'/router',
            component:RouterPage
        }
    ]
})