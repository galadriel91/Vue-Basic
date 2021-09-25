import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        gameTable:[['','',''],['','',''],['','','']],
        turn:'O',
        result:''
    },
    mutations:{
        CHANGE_TURN(state){
            state.turn = state.turn === 'O' ? 'X' : 'O'
        },
        SET_TD(state , {row , cell}){
            Vue.set(state.gameTable[row] , cell , state.turn)
            state.result = ''
        },
        SET_WINNER(state){
            state.gameTable = [['','',''],['','',''],['','','']]
            state.result = `${state.turn} 님의 승리입니다!`
            state.turn = 'O'
        },
        SET_DRAW(state){
            state.gameTable = [['','',''],['','',''],['','','']]
            state.result = `무승부 입니다!`
            state.turn = 'O'
        }
    }
})