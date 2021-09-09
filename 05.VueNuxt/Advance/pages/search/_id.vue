<template>
    <div class="container">
        <h1>검색 결과</h1>
        <p><strong>{{this.$route.params.id}}</strong> (으)로 통합검색(을)를 검색한 결과 총 {{SEARCHITEM.length}} 건의 상품이 검색되었습니다.</p>
        <ProductsItem :products="SEARCHITEM" v-if="SEARCHITEM.length"/>
    </div>
</template>

<script>
import ProductsItem from '~/components/ProductsItem.vue'
export default {
    components: { ProductsItem },
    computed:{
        SEARCHITEM(){
            return this.$store.state.searchItem
        },
    }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/pages/SearchPage';
</style>