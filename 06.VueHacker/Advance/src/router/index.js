import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsPage from '@/pages/NewsPage'
import AskPage from '@/pages/AskPage'
import JobsPage from '@/pages/JobsPage'
import UserPage from '@/pages/UserPage'
import ItemPage from '@/pages/ItemPage'

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
            component:NewsPage
        },
        {
            path:'/ask',
            name:'ask',
            component:AskPage
        },
        {
            path:'/jobs',
            name:'jobs',
            component:JobsPage
        },
        {
            path:'/user/:id',
            component:UserPage
        },
        {
            path:'/item/:id',
            component:ItemPage
        }
    ]
})