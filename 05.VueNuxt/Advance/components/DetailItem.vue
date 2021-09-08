<template>
    <div class="itemWrap">
        <em>
            <img :src="detailItem.imageUrl" :alt="detailItem.name">
        </em>
        <div>
            <p>{{detailItem.name}}</p>
            <span>{{detailItem.price}}$</span>
            <button class="xi-cart" @click="onAddCart"></button>
        </div>
    </div>
</template>

<script>
import { addCartItem, fetchDetailItem } from '~/api'
export default {
    async fetch(){
        const id = this.$route.params.id
        const { data } = await fetchDetailItem(id);
        const item = data
        this.detailItem = item
    },
    data(){
        return{
            detailItem : ''
        }
    },
    methods:{
        onAddCart(){
            this.$router.push('/cart')
            addCartItem(this.detailItem)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/DetailItem';
</style>