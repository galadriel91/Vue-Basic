import { fetchListsData, fetchUserData , fetchItemData } from '../api'

export default{
    async GET_LISTS({commit} , pageName){
        const { data } = await fetchListsData(pageName)
        commit('SET_LISTS' , data)
        return data
    },
    async GET_USER({commit} , payload){
        const { data } = await fetchUserData(payload)
        commit('SET_USER' , data)
        return data
    },
    async GET_ITEM({commit} , payload){
        const { data } = await fetchItemData(payload)
        commit('SET_ITEM' , data)
        return data
    }
}