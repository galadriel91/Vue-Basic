<template>
    <ul>
        <li v-for="item in CARTITEM" :key="item.id">
            <img :src="item.imageUrl" :alt="item.name">
            <div>
                <p>{{item.name}}</p>
                <span>{{item.price}}$</span>
            </div>
        </li>
    </ul>
</template>

<script>
import { fetchCartItem } from '~/api'
export default {
    
    async fetch(){
        const response = await fetchCartItem()
        const cartItem = response.data.map((item)=>({
            ...item,
            imageUrl:`${item.imageUrl}?random=${Math.random()}`
        }))
        this.$store.commit('ADD_CART_ITEM' , cartItem)
    },


    computed:{
        CARTITEM(){
            return this.$store.state.cartItem
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/partials/CartItem';
</style>