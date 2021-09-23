import { fetchInfoItem, fetchListItem, fetchUserItem } from '../api'

export default{
    async GET_LISTS({commit} , payload){
        const { data } = await fetchListItem(payload)
        console.log(2)
        commit('SET_LISTS' , data)
        return data
    },
    async GET_USER({commit} , payload){
        const { data } = await fetchUserItem(payload)
        console.log(2)
        commit('SET_USER' , data)
        return data
    },
    async GET_ITEM({commit} , payload){
        const { data } = await fetchInfoItem(payload)
        commit('SET_ITEM' , data)
        return data
    },
    
    START_LOADING({commit}){
        console.log(1)
        commit('START_LOADING')
    },
    
    END_LOADING({commit}){
        console.log(3)
        commit('END_LOADING')
    }

}