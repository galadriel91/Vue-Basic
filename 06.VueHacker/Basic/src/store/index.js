import Vue from 'vue'
import Vuex from 'vuex'
import { fetchNewsData } from '../api'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        news : []
    },
    mutations:{
        SET_NEWS(state , payload){
            state.news = payload
        }        
    },
    actions:{
        async GET_NEWS({commit}){
            const { data } = await fetchNewsData()
            commit('SET_NEWS' , data)
        }
    }
})