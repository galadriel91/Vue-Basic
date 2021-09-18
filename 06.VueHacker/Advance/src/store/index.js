import Vue from 'vue'
import Vuex from 'vuex'
import { fetchAskItem, fetchJobsItem, fetchNewsItem } from '../api'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        news:[],
        ask:[],
        jobs:[]
    },
    mutations:{
        SET_NEWS(state , payload){
            state.news = payload
        },
        SET_ASK(state , payload){
            state.ask = payload
        },
        SET_JOBS(state , payload){
            state.jobs = payload
        }
    },
    actions:{
        async GET_NEWS({commit}){
            const { data } = await fetchNewsItem()
            commit('SET_NEWS' , data)
        },
        async GET_ASK({commit}){
            const { data } = await fetchAskItem()
            commit('SET_ASK' , data)
        },
        async GET_JOBS({commit}){
            const { data } = await fetchJobsItem()
            commit('SET_JOBS' , data)
        },
    }
})