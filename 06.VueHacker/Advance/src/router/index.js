import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsPage from '@/pages/NewsPage'
import AskPage from '@/pages/AskPage'
import JobsPage from '@/pages/JobsPage'

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
        }
    ]
})