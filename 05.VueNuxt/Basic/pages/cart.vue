<template>
    <div class="container">
        <h1>장바구니</h1>
        <ul>
            <li v-for="item in CARTITEM" :key="item.id">
                <img :src="item.imageUrl" :alt="item.name">
                <div>
                    <p>{{item.name}}</p>
                    <span>{{item.price}}$</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed:{
        CARTITEM(){
            return this.$store.state.cartItem
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/CartPage';
</style>