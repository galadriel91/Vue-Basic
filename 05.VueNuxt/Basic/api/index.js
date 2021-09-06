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

const fetchSearchItem = (value) => {
    return instance.get('/products' , {
        params:{
            name_like:value
        }
    })
}

const fetchCartItem = () => {
    return instance.get('/carts')
}

export{
    fetchProductsItem,
    fetchDetailItem,
    fetchSearchItem,
    fetchCartItem
}