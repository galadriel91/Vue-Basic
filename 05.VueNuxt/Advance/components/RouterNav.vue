<template>
    <header>
        <div class="headerWrap">
            <h1><NuxtLink to="/">Nuxt Advance</NuxtLink></h1>
            <div>
                <div>
                    <SearchInput/>
                </div>
                <button class="xi-cart" @click="onClickCart"></button>
            </div>
        </div>
    </header>
</template>

<script>
import SearchInput from './SearchInput.vue'
export default {
  components: { SearchInput },
    methods:{
        onClickCart(){
            this.$router.push('/cart')
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/RouterNav';
</style>