<template>
  <div class="container">
    <h1>상품 페이지</h1>
    <ProductsItem :products="items"/>
  </div>
</template>

<script>
import { fetchProductsItem } from '~/api';
import ProductsItem from '~/components/ProductsItem.vue'
export default {
  async asyncData(){
        const {data} = await fetchProductsItem();
        const items = data.map((item)=>({
            ...item,
            imageUrl:`${item.imageUrl}?random=${Math.random()}`
        }))
        return {items}
  },
  components: { ProductsItem },

}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/pages/MainPage';
</style>