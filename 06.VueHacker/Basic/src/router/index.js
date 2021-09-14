import Vue from 'vue'
import VueRouter from 'vue-router'
import AskPage from '@/pages/AskPage'
import JobsPage from '@/pages/JobsPage'
import NewsPage from '@/pages/NewsPage'
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
            path:'/item/:id',
            component:ItemPage
        },
        {
            path:'/user/:id',
            component:UserPage
        }
    ]
})