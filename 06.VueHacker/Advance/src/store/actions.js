import { fetchAskItem, fetchJobsItem, fetchNewsItem } from '../api'

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
}