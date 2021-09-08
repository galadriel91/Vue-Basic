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
    async fetch(){
        const {data} = await fetchProductsItem();
        const items = data.map((item)=>({
            ...item,
            imageUrl:`${item.imageUrl}?random=${Math.random()}`
        }))
        this.products = items
    },
    data(){
        return{
            products : ''
        }
    },
    methods:{
        onClickDetailItem(id){
            this.$router.push(`/detail/${id}`)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/ProductsItem';
</style>