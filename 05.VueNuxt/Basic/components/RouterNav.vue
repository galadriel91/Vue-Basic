<template>
    <header>
        <div class="headerWrap">
            <h1><NuxtLink to="/">Nuxt Basic</NuxtLink></h1>
            <button class="xi-cart" @click="onClickCartPage"></button>
        </div>
    </header>
</template>

<script>
export default {
    methods:{
        onClickCartPage(){
            this.$router.push('/cart')
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/partials/RouterNav';
</style>