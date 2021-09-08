<template>
    <ul class="itemWrap">
        <li v-for="item in products" :key="item.id" @click="onClickDetailItem(item.id)">
            <em><img :src="item.imageUrl" :alt="item.name"></em>
            <div>
                <p>{{item.name}}</p>
                <span>{{item.price}}$</span>
            </div>
        </li>
    </ul>
</template>

<script>
import { fetchProductsItem } from '@/api'
export default {
    data(){
        return{
            products : ''
        }
    },


    async fetch(){
        const {data} = await fetchProductsItem();
        const items = data.map((item)=>({
            ...item,
            imageUrl:`${item.imageUrl}?random=${Math.random()}`
        }))
        this.products = items
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/ProductsItem';
</style>