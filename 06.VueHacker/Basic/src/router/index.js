import Vue from 'vue'
import VueRouter from 'vue-router'
import createListView from '@/pages/createListView'
import ItemPage from '@/pages/ItemPage'
import UserPage from '@/pages/UserPage'
import { store } from '@/store/index'

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
            component:createListView('NewsPage'),
            beforeEnter: (to , from , next) => {
                store.dispatch('GET_LISTS' , to.name)
                next()
            }
        },
        {
            path:'/ask',
            name:'ask',
            component:createListView('AskPage'),
            beforeEnter: (to , from , next) => {
                store.dispatch('GET_LISTS' , to.name)
                next()
            }
        },
        {
            path:'/jobs',
            name:'jobs',
            component:createListView('JobsPage'),
            beforeEnter: (to , from , next) => {
                store.dispatch('GET_LISTS' , to.name)
                next()
            }
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