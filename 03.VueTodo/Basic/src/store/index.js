import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        test:'Vuex',
        todoList:[]
    },
    mutations:{
        ADD_TODO(state , payload){
            state.todoList.push(payload)
        }
    },
    actions:{

    }
})