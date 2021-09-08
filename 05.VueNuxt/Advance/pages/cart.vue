<template>
    <div class="container">
        <h1>장바구니</h1>
        <CartItem/>
    </div>
</template>

<script>
import CartItem from '~/components/CartItem.vue'
export default {
  components: { CartItem },

}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/CartPage';
</style>