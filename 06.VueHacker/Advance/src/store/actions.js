import { fetchInfoItem, fetchListItem, fetchUserItem } from '../api'

export default{
    async GET_LISTS({commit} , payload){
        const { data } = await fetchListItem(payload)
        commit('SET_LISTS' , data)
        return data
    },
    async GET_USER({commit} , payload){
        const { data } = await fetchUserItem(payload)
        commit('SET_USER' , data)
        return data
    },
    async GET_ITEM({commit} , payload){
        const { data } = await fetchInfoItem(payload)
        commit('SET_ITEM' , data)
        return data
    },
    
    START_LOADING({commit}){
        commit('START_LOADING')
    },
    
    END_LOADING({commit}){
        commit('END_LOADING')
    }

}