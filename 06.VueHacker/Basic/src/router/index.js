import Vue from 'vue'
import VueRouter from 'vue-router'
import createListView from '@/pages/createListView'
import ItemPage from '@/pages/ItemPage'
import UserPage from '@/pages/UserPage'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/news'
        },
        {
            path:'/news',
            name:'news',
            component:createListView('NewsPage')
        },
        {
            path:'/ask',
            name:'ask',
            component:createListView('AskPage')
        },
        {
            path:'/jobs',
            name:'jobs',
            component:createListView('JobsPage')
        },
        {
            path:'/item/:id',
            component:ItemPage
        },
        {
            path:'/user/:id',
            component:UserPage
        }
    ]
})