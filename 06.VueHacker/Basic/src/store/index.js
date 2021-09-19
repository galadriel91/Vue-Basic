import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutaions'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        lists:[],
        user:{},
        item:{}
    },
    mutations:mutations,
    actions:actions
})