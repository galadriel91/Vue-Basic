<template>
    <div>
        <ul>
            <li v-for="item in CARTITEM" :key="item.id">
                <img :src="item.imageUrl" :alt="item.name">
                <div>
                    <h4>{{item.name}}</h4>
                    <p>{{item.price}}$</p>
                    <span>1개</span>
                    <button class="xi-cart-remove" @click="onClickRemoveCart(item.id)"></button>
                </div>
            </li>
        </ul>
        <p class="totalPrice">Total Price  $</p>
    </div>
</template>

<script>
import { fetchCartItem } from '~/api'
export default {
    async fetch(){
        const { data } = await fetchCartItem()
        const cartItem = data.map((item)=>({
            ...item,
            imageUrl:`${item.imageUrl}?random=${Math.random()}`
        }))
        this.$store.commit('SET_CART' , cartItem)
    },

    computed:{
        CARTITEM(){
            return this.$store.state.cartItem
        }
    },

    methods:{
        onClickRemoveCart(id){
            this.$store.dispatch('REMOVE_CART' , id)
        }
    }
    
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/CartItem';
</style>