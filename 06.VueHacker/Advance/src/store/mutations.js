export default{
    SET_LISTS(state , payload){
        state.lists = payload
    },
    SET_USER(state , payload){
        state.users = payload
    },
    SET_ITEM(state , payload){
        state.item = payload
    },
    START_LOADING(state){
        state.loading = true
    },
    END_LOADING(state){
        state.loading = false
    }
}