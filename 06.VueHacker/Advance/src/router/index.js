import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsPage from '@/pages/NewsPage'
import AskPage from '@/pages/AskPage'
import JobsPage from '@/pages/JobsPage'
import UserPage from '@/pages/UserPage'
import ItemPage from '@/pages/ItemPage'
import { store } from '@/store/index'
Vue.use(VueRouter)

export const router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/news',
        },
        {
            path:'/news',
            name:'news',
            component:NewsPage,
            beforeEnter : (to , from , next) => {
                store.dispatch('START_LOADING');
                store.dispatch('GET_LISTS' , to.name)
                next()
            }
        },
        {
            path:'/ask',
            name:'ask',
            component:AskPage,
            beforeEnter : (to , from , next) => {
                store.dispatch('START_LOADING')
                store.dispatch('GET_LISTS' , to.name)
                next()
            }
        },
        {
            path:'/jobs',
            name:'jobs',
            component:JobsPage,
            beforeEnter : (to , from , next) => {
                store.dispatch('START_LOADING')
                store.dispatch('GET_LISTS' , to.name)
                next()
            }
        },
        {
            path:'/user/:id',
            component:UserPage,
            beforeEnter : (to , from , next) => {
                store.dispatch('START_LOADING')
                store.dispatch('GET_USER' , to.params.id)
                next()
            }
        },
        {
            path:'/item/:id',
            component:ItemPage,
            beforeEnter : (to , from , next) => {
                store.dispatch('START_LOADING')
                store.dispatch('GET_ITEM' , to.params.id)
                next()
            }
        }
    ]
})