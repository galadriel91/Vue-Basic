import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000'
})

const fetchProductsItem = () => {
    return instance.get('/products')
}

const fetchDetailItem = (id) => {
    return instance.get(`/products/${id}`)
}


export{ 
    fetchProductsItem,
    fetchDetailItem
}