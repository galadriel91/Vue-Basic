<template>
    <form @submit.prevent="onSubmitForm"> 
        <input type="text" placeholder="Search Item" v-model="value" @input="onChangeValue" ref="answer">
        <button type="submit" class="xi-search"></button>
    </form>
</template>

<script>
export default {
    data(){
        return{
            value:''
        }
    },
    methods:{
        onSubmitForm(){
            this.$router.push(`/search/${this.value}`)
            this.$store.dispatch('SEARCH_ITEM')
            this.value = ''
            this.$refs.answer.focus()
        },
        onChangeValue(){
            this.$store.commit('SET_SEARCH' , this.value)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/SearchInput';
</style>