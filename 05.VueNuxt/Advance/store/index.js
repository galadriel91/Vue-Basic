import { fetchSearchItem } from "~/api"

export const state = () => ({
    cartItem : [],
    searchItem:[],
    searchValue: ''
})

export const mutations = {
    SET_CART(state, payload){
        state.cartItem = payload
    },
    SET_SEARCH(state , payload){
        state.searchValue = payload
    },
    SET_SEARCH_ITEM(state , payload){
        if(state.searchValue === ''){
            state.searchItem = []
        }else{
            state.searchItem = payload
        }
    }
}

export const actions = {
    async SEARCH_ITEM({state, commit}){
        const { data } = await fetchSearchItem(state.searchValue)
        const item = data.map((item)=>({
            ...item,
            imageUrl:`${item.imageUrl}?random=?${Math.random()}`
        }))
        commit('SET_SEARCH_ITEM' , item)
    },
}