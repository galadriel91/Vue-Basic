import { fetchCartItem } from "~/api"

export const state = () => ({
    cartItem : []
})

export const mutations = {
    ADD_CART_ITEM(state , payload){
        state.cartItem  = payload
    }
}

export const actions = {
    async ADD_CART({commit}){
        const response = await fetchCartItem()
        const cartItem = response.data.map((item)=>({
            ...item,
            imageUrl:`${item.imageUrl}?random=${Math.random()}`
        }))
        console.log(cartItem)
        commit('ADD_CART_ITEM' , cartItem)
    }
}