import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.hnpwa.com/v0/"
})

const fetchNewsData = () => {
    return instance.get('news/1.json')
}

const fetchAskData = () => {
    return instance.get('ask/1.json')
}

const fetchJobsData = () => {
    return instance.get('jobs/1.json')
}

export{
    fetchNewsData,
    fetchAskData,
    fetchJobsData
}