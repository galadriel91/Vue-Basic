<template>
    <div class="container">
        <h1>상세 페이지</h1>
        <div class="itemWrap">
            <em>
                <img :src="detailItem.imageUrl" :alt="detailItem.name">
            </em>
            <div>
                <p>{{detailItem.name}}</p>
                <span>{{detailItem.price}}$</span>
                <button class="xi-cart"></button>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchDetailItem } from '~/api'
export default {
    async asyncData({params}){
        const response = await fetchDetailItem(params.id)
        const detailItem = response.data
        return { detailItem }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/DetailPage';
</style>