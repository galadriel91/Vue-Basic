<template>
    <div class="lds-facebook" v-if="LOADING">
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
    </div>
</template>
<script>
export default {
    computed:{
        LOADING(){
            return this.$store.state.loading
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/components/LoadingSpin';
</style>