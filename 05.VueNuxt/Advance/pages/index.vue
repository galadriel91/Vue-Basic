<template>
  <div class="container">
    <h1>상품 페이지</h1>
    <ProductsItem/>
  </div>
</template>

<script>
import ProductsItem from '~/components/ProductsItem.vue'
export default {
  components: { ProductsItem },

}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/pages/MainPage';
</style>