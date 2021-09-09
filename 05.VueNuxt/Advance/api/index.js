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

const fetchSearchItem = (keyword) => {
    return instance.get('/products' , {
        params:{
            name_like:keyword
        }
    })
}

const addCartItem = (item) => {
    return instance.post('/carts' , item)
}

const fetchCartItem = () => {
    return instance.get('/carts')
}

export{ 
    fetchProductsItem,
    fetchDetailItem,
    fetchSearchItem,
    addCartItem,
    fetchCartItem
}