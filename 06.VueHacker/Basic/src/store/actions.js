import { fetchAskData, fetchJobsData, fetchNewsData, fetchUserData , fetchItemData } from '../api'

export default{
    async GET_NEWS({commit}){
        const { data } = await fetchNewsData()
        commit('SET_NEWS' , data)
    },
    async GET_ASK({commit}){
        const { data } = await fetchAskData()
        commit('SET_ASK' , data)
    },
    async GET_JOBS({commit}){
        const { data } = await fetchJobsData()
        commit('SET_JOBS' , data)
    },
    async GET_USER({commit} , payload){
        const { data } = await fetchUserData(payload)
        commit('SET_USER' , data)
    },
    async GET_ITEM({commit} , payload){
        const { data } = await fetchItemData(payload)
        commit('SET_ITEM' , data)
    }

}