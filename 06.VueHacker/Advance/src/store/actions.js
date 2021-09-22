import { fetchAskItem, fetchInfoItem, fetchJobsItem, fetchNewsItem, fetchUserItem } from '../api'

export default{
    async GET_NEWS({commit}){
        const { data } = await fetchNewsItem()
        commit('SET_NEWS' , data)
        return data
    },
    async GET_ASK({commit}){
        const { data } = await fetchAskItem()
        commit('SET_ASK' , data)
        return data
    },
    async GET_JOBS({commit}){
        const { data } = await fetchJobsItem()
        commit('SET_JOBS' , data)
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
    SPIN_LOADING({commit}){
        commit('SET_LOADING')
    }

}