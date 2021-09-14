import { fetchAskData, fetchJobsData, fetchNewsData } from '../api'

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
    }
}