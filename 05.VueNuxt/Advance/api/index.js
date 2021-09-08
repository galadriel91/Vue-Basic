import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000'
})

const fetchProductsItem = () => {
    return instance.get('/products')
}

export{ 
    fetchProductsItem
}