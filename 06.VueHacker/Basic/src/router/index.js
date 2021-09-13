import Vue from 'vue'
import VueRouter from 'vue-router'
import AskPage from '@/pages/AskPage'
import JobsPage from '@/pages/JobsPage'
import NewsPage from '@/pages/NewsPage'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/news'
        },
        {
            path:'/news',
            component:NewsPage
        },
        {
            path:'/ask',
            component:AskPage
        },
        {
            path:'/jobs',
            component:JobsPage
        }
    ]
})