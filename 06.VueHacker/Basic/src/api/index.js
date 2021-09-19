import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.hnpwa.com/v0/"
})

const fetchListsData = (name) => {
    return instance.get(`${name}/1.json`)
}

const fetchUserData = (user) => {
    return instance.get(`user/${user}.json`)
}

const fetchItemData = (item) => {
    return instance.get(`item/${item}.json`)
}

export{
    fetchListsData,
    fetchUserData,
    fetchItemData
}