<template>
    <form @submit.prevent="onSubmitForm">
        <input type="text" placeholder="오늘 할 일을 입력해 주세요" v-model="value">
        <button class="xi-arrow-right" type="submit"></button>
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
            this.$store.commit('ADD_TODO' , {
                id:Date.now(),
                title:this.value,
                isCheck:false,
            })
            this.value = ''
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/TodoInput';
</style>