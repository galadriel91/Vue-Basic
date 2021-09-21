import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.hnpwa.com/v0/"
})

const fetchNewsItem = () => {
    return instance.get('news/1.json')
}

const fetchAskItem = () => {
    return instance.get('ask/1.json')
}

const fetchJobsItem = () => {
    return instance.get('jobs/1.json')
}

const fetchUserItem = (user) => {
    return instance.get(`user/${user}.json`)
}

const fetchInfoItem = (itemId) => {
    return instance.get(`item/${itemId}.json`)
}

export{
    fetchNewsItem,
    fetchAskItem,
    fetchJobsItem,
    fetchUserItem,
    fetchInfoItem
}