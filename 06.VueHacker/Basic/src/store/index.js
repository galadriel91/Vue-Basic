import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutaions'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        news : [],
        ask: [],
        jobs: []
    },
    mutations:mutations,
    actions:actions
})