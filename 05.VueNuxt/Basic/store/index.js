export const state = () => ({
    cartItem : []
})

export const mutations = {
    ADD_CART_ITEM(state , payload){
        state.cartItem  = payload
    }
}

export const actions = {
    
}