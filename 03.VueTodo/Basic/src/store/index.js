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
            localStorage.setItem('list' , JSON.stringify(state.todoList))
        },
        GET_TODO(state){
            if(localStorage.list){
                state.todoList = JSON.parse(localStorage.list)
            }
        },
        REMOVE_TODO(state , payload){
            const index = state.todoList.findIndex(v=>v.id === payload)
            state.todoList.splice(index , 1)
            localStorage.setItem('list' , JSON.stringify(state.todoList))
        },
        CHECK_TODO(state , payload){
            const index = state.todoList.findIndex(v=>v.id === payload)
            state.todoList[index].isCheck = !state.todoList[index].isCheck
            localStorage.setItem('list' , JSON.stringify(state.todoList))
        },
        UPDATE_TODO(state , payload){
            const index = state.todoList.findIndex(v=>v.id === payload.id)
            state.todoList[index].title = payload.title
            localStorage.setItem('list' , JSON.stringify(state.todoList))
        }
    },
})